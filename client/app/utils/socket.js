import { io } from "socket.io-client";

let socket;

export const connectSocket = (token) => {
  if (!socket) {
    socket = io("http://localhost:5000", {
      auth: { token },
    });
  }
  return socket;
};

export const getSocket = () => socket;
