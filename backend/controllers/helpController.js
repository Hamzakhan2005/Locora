import Help from "../models/Help.js";
import User from "../models/User.js";
import HelpRequest from "../models/HelpRequest.js";
import ChatRoom from "../models/ChatRoom.js";
import { connectedUsers } from "../server.js";

// Haversine distance in km
const distanceKm = (lat1, lng1, lat2, lng2) => {
  if (lat1 == null || lng1 == null || lat2 == null || lng2 == null) return null;
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

// CREATE A HELP POST
export const createHelp = async (req, res) => {
  try {
    const { title, description, category, location, type, lat, lng } = req.body;

    if (!title || !description || !category || !type) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPost = new Help({
      user: req.user.id,
      title,
      description,
      category,
      location,
      type,
      lat: typeof lat === "number" ? lat : null,
      lng: typeof lng === "number" ? lng : null,
    });

    await newPost.save();

    // 🔔 Notify nearby users
    const users = await User.find({});
    users.forEach((user) => {
      if (user._id.toString() === req.user.id) return;
      let isNearby = false;
      if (newPost.lat != null && newPost.lng != null && user.lat != null && user.lng != null) {
        const dist = distanceKm(newPost.lat, newPost.lng, user.lat, user.lng);
        isNearby = dist !== null && dist <= 20;
      } else if (location && user.location) {
        isNearby = user.location.toLowerCase() === location.toLowerCase();
      }
      if (isNearby) {
        const socket = connectedUsers.get(user._id.toString());
        if (socket) {
          socket.emit("notification", {
            type: "nearby",
            message: `New ${type} request posted near you.`,
            postId: newPost._id,
          });
        }
      }
    });

    res.status(201).json({ message: "Post created", post: newPost });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// GET ALL HELP POSTS (with optional geo filter)
export const getHelp = async (req, res) => {
  try {
    const { lat, lng, radius, location, category, type } = req.query;
    const query = { isSpam: false };
    if (category) query.category = category;
    if (type) query.type = type;

    let helps = await Help.find(query)
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    if (lat && lng) {
      const userLat = parseFloat(lat);
      const userLng = parseFloat(lng);
      const maxDist = radius ? parseFloat(radius) : 20;

      helps = helps
        .map((h) => {
          const dist = distanceKm(userLat, userLng, h.lat, h.lng);
          return { ...h.toObject(), distanceKm: dist };
        })
        .filter((h) => h.distanceKm === null || h.distanceKm <= maxDist)
        .sort((a, b) => (a.distanceKm ?? 999) - (b.distanceKm ?? 999));
    } else if (location) {
      helps = helps.filter(
        (h) => h.location && h.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    res.status(200).json({ helps });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch helps" });
  }
};

// GET MY HELP POSTS
export const geMyHelp = async (req, res) => {
  try {
    const posts = await Help.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user posts", error });
  }
};

// DELETE POST
export const deletePost = async (req, res) => {
  const help = await Help.findById(req.params.id);
  if (!help) return res.status(404).json({ message: "Post not found" });

  if (req.user.role === "admin" || help.user.toString() === req.user.id) {
    await help.deleteOne();
    return res.json({ message: "Post deleted" });
  }

  res.status(403).json({ message: "You can only delete your own posts" });
};

// MARK POST AS SPAM
export const spamPost = async (req, res) => {
  try {
    const post = await Help.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    post.isSpam = true;
    await post.save();
    res.json({ message: "Post marked as spam" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// 🤝 REQUEST TO HELP — sends a pending HelpRequest and notifies poster
export const acceptHelp = async (req, res) => {
  const helpId = req.params.id;
  const requesterId = req.user.id;

  try {
    const helpPost = await Help.findById(helpId).populate("user");
    if (!helpPost) return res.status(404).json({ message: "Help post not found" });

    const posterId = helpPost.user._id.toString();

    if (posterId === requesterId) {
      return res.status(400).json({ message: "You cannot request help on your own post" });
    }

    // Avoid duplicate requests
    let request = await HelpRequest.findOne({ post: helpId, requester: requesterId });

    if (request && request.status === "pending") {
      return res.status(400).json({ message: "Request already sent" });
    }

    if (!request) {
      request = await HelpRequest.create({
        post: helpId,
        requester: requesterId,
        poster: posterId,
        status: "pending",
      });
    } else {
      // Re-send if previously rejected
      request.status = "pending";
      request.chatRoom = null;
      await request.save();
    }

    // 🔔 Notify the poster
    const posterSocket = connectedUsers.get(posterId);
    if (posterSocket) {
      posterSocket.emit("notification", {
        type: "help-request",
        requestId: request._id,
        postId: helpId,
        message: `${req.user.name} offered to help on your post "${helpPost.title}"`,
      });
    }

    res.status(200).json({ message: "Help request sent", request });
  } catch (err) {
    res.status(500).json({ message: "Failed to send help request", error: err.message });
  }
};

// ✅/❌ POSTER RESPONDS TO A HELP REQUEST
export const respondToRequest = async (req, res) => {
  const { requestId } = req.params;
  const { action } = req.body; // "accept" | "reject"
  const userId = req.user.id;

  try {
    const request = await HelpRequest.findById(requestId)
      .populate("post")
      .populate("requester", "name")
      .populate("poster", "name");

    if (!request) return res.status(404).json({ message: "Request not found" });

    if (request.poster._id.toString() !== userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    if (action === "accept") {
      request.status = "accepted";

      // Find or create ONE canonical room for this post + these two users
      let room = await ChatRoom.findOne({
        helpPost: request.post._id,
        participants: {
          $all: [request.poster._id, request.requester._id],
          $size: 2,
        },
      });

      if (!room) {
        room = await ChatRoom.create({
          helpPost: request.post._id,
          participants: [request.poster._id, request.requester._id],
        });
      }

      request.chatRoom = room._id;
      await request.save();

      // 🔔 Notify the requester (helper) they were accepted
      const helperSocket = connectedUsers.get(request.requester._id.toString());
      if (helperSocket) {
        helperSocket.emit("notification", {
          type: "request-accepted",
          requestId: request._id,
          postId: request.post._id,
          roomId: room._id,
          message: `${request.poster.name} accepted your help offer on "${request.post.title}"`,
        });
      }

      return res.status(200).json({ message: "Request accepted", request });
    }

    if (action === "reject") {
      request.status = "rejected";
      await request.save();

      const helperSocket = connectedUsers.get(request.requester._id.toString());
      if (helperSocket) {
        helperSocket.emit("notification", {
          type: "request-rejected",
          requestId: request._id,
          postId: request.post._id,
          message: `${request.poster.name} declined your help offer on "${request.post.title}"`,
        });
      }

      return res.status(200).json({ message: "Request rejected", request });
    }

    return res.status(400).json({ message: "Invalid action. Use 'accept' or 'reject'" });
  } catch (err) {
    res.status(500).json({ message: "Failed to respond to request", error: err.message });
  }
};

// 📥 Incoming requests on my posts
export const getIncomingRequests = async (req, res) => {
  try {
    const requests = await HelpRequest.find({ poster: req.user.id })
      .populate("post", "title type")
      .populate("requester", "name email")
      .sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch requests" });
  }
};

// 📤 Requests I've sent
export const getOutgoingRequests = async (req, res) => {
  try {
    const requests = await HelpRequest.find({ requester: req.user.id })
      .populate("post", "title type")
      .populate("poster", "name email")
      .sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch requests" });
  }
};