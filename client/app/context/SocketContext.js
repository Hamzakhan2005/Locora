"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { connectSocket } from "../utils/socket";
import toast from "react-hot-toast";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const newSocket = connectSocket(token);
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("🔌 Connected to socket.io");
    });

    newSocket.on("notification", (data) => {
      setNotifications((prev) => [data, ...prev]);
      toast(data.message);
    });

    return () => {
      newSocket.off("connect");
      newSocket.off("notification");
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, notifications, setNotifications }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);

export { useSocket as useNotification } from "./SocketContext";
