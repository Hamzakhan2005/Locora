"use client";

// NotificationContext has been merged into SocketContext to avoid
// double socket connections. Re-exported here for backwards compatibility.
export { useSocket as useNotification } from "./SocketContext";
