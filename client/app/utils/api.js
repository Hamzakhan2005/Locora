import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token in requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const loginWithEmail = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const loginWithPhone = async (phone, password) => {
  try {
    const response = await api.post("/auth/login", { phone, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const createHelpRequest = async (helpData) => {
  try {
    const response = await api.post("/help", helpData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to create help post" };
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};

export const getUserProfile = async () => {
  try {
    const response = await api.get("/user/me");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch profile" };
  }
};

export const getHelps = async (params = {}) => {
  try {
    const response = await api.get("/help", { params });
    return response.data.helps; // assuming backend returns { helps: [...] }
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

// 🤝 Send a help request (offer to help on a post)
export const sendHelpRequest = async (postId) => {
  try {
    const response = await api.post(`/help/${postId}/accept`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to send help request" };
  }
};

// 📥 Incoming requests on my posts
export const getIncomingRequests = async () => {
  try {
    const response = await api.get("/help/requests/incoming");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch requests" };
  }
};

// 📤 Outgoing requests I sent
export const getOutgoingRequests = async () => {
  try {
    const response = await api.get("/help/requests/outgoing");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch requests" };
  }
};

// ✅/❌ Respond to a help request (poster only)
export const respondToHelpRequest = async (requestId, action) => {
  try {
    const response = await api.post(`/help/requests/${requestId}/respond`, {
      action,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to respond" };
  }
};

// 💬 Get my active chat rooms (accepted requests only)
export const getMyChatRooms = async () => {
  try {
    const response = await api.get("/chat/rooms");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch chats" };
  }
};

// 📍 Update my location (manual text and/or geo coords)
export const updateMyLocation = async (locationData) => {
  try {
    const response = await api.patch("/user/location", locationData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to update location" };
  }
};

// 🤖 AI: get suggested posts to help with
export const getAiSuggestions = async () => {
  try {
    const response = await api.get("/ai/suggestions");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to get AI suggestions" };
  }
};

// 🌍 Get browser geolocation as a promise { lat, lng }
export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => reject(err),
      { enableHighAccuracy: false, timeout: 8000 }
    );
  });
};

// 🛠️ ADMIN API HELPERS
export const adminGetStats = async () => {
  try {
    const response = await api.get("/admin/stats");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch stats" };
  }
};

export const adminGetUsers = async () => {
  try {
    const response = await api.get("/admin/users");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch users" };
  }
};

export const adminSetUserBan = async (userId, isBanned) => {
  try {
    const response = await api.patch(`/admin/users/${userId}/ban`, {
      isBanned,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to update user" };
  }
};

export const adminDeleteUser = async (userId) => {
  try {
    const response = await api.delete(`/admin/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to delete user" };
  }
};

export const adminGetPosts = async (params = {}) => {
  try {
    const response = await api.get("/admin/posts", { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch posts" };
  }
};

export const adminDeletePost = async (postId) => {
  try {
    const response = await api.delete(`/admin/posts/${postId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to delete post" };
  }
};

export const adminSetPostSpam = async (postId, isSpam) => {
  try {
    const response = await api.patch(`/admin/posts/${postId}/spam`, {
      isSpam,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to update post" };
  }
};

export const adminGetChats = async () => {
  try {
    const response = await api.get("/admin/chats");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch chats" };
  }
};

export const adminGetChatMessages = async (roomId) => {
  try {
    const response = await api.get(`/admin/chats/${roomId}/messages`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch messages" };
  }
};

export const adminGetRequests = async () => {
  try {
    const response = await api.get("/admin/requests");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch requests" };
  }
};

export default api;
