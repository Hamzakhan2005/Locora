"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { connectSocket } from "../utils/socket";
import toast from "react-hot-toast";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const s = connectSocket(token);
    setSocket(s);

    s.on("notification", (data) => {
      setNotifications((prev) => [...prev, data]);
      toast(data.message); // optional: pop toast
    });

    return () => s.disconnect();
  }, []);

  return (
    <NotificationContext.Provider value={{ socket, notifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
