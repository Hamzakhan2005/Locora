import User from "../models/User.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update user's location (manual text and/or geo coords)
export const updateLocation = async (req, res) => {
  try {
    const { location, lat, lng } = req.body;
    const update = {};
    if (location !== undefined) update.location = location;
    if (typeof lat === "number") update.lat = lat;
    if (typeof lng === "number") update.lng = lng;

    const user = await User.findByIdAndUpdate(req.user.id, update, {
      new: true,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to update location" });
  }
};
