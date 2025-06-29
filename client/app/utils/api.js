import axios from "axios";

const API_URL = "http://locora-production-9b3e.up.railway.app/api";

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

export const getHelps = async () => {
  try {
    const response = await api.get("/help");
    console.log(response.data.helps);
    return response.data.helps; // assuming backend returns { helps: [...] }
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export default api;
