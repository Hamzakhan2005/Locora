"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { connectSocket } from "../utils/socket";
import toast from "react-hot-toast";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const newSocket = connectSocket(token);
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("🔌 Connected to socket.io");
    });

    newSocket.on("notification", (data) => {
      toast(data.message); // display toast
      console.log("🔔 Notification:", data);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
