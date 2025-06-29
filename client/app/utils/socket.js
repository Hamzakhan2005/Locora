import { io } from "socket.io-client";

let socket;

export const connectSocket = (token) => {
  if (!socket) {
    socket = io("http://locora-production-9b3e.up.railway.app", {
      auth: { token },
    });
  }
  return socket;
};

export const getSocket = () => socket;
