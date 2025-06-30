"use client";

import { useEffect, useRef, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useSocket } from "@/context/SocketContext";

export default function SwipeableChatDrawer({ open, onClose, onOpen, post }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const { socket } = useSocket();
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    if (!socket || !post?._id) return;

    const fetchRoomAndJoin = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("📦 Token being used:", token);
        const res = await axios.get(
          `https://locora-production-9b3e.up.railway.app/api/chat/room/${post._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const roomId = res.data._id;

        // Join the actual room
        socket.emit("joinRoom", roomId);

        // Get message history for that room
        socket.emit("getMessages", roomId);

        // Store roomId locally (use useState)
        setRoomId(roomId);
        console.log("✅ Joined room:", roomId);
        // Listen for incoming messages
        socket.on("message", (msg) => {
          setMessages((prev) => [...prev, msg]);
          scrollToBottom();
        });

        socket.on("messageHistory", (msgs) => {
          setMessages(msgs);
          scrollToBottom();
        });
      } catch (err) {
        console.error("Failed to fetch or join room:", err);
      }
    };

    fetchRoomAndJoin();

    return () => {
      if (roomId) socket.emit("leaveRoom", roomId);
      socket.off("message");
      socket.off("messageHistory");
    };
  }, [socket, post?._id]);

  // Scroll to bottom on new messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = () => {
    console.log("📨 Sending message:", input);
    console.log("🆔 Room ID:", roomId);
    console.log("🔌 Socket available:", !!socket);

    if (input.trim() === "" || !roomId || !socket) {
      console.log("❌ Cannot send — missing input or room or socket");
      return;
    }

    socket.emit("sendMessage", {
      roomId,
      postId: post._id,
      text: input,
    });

    setInput("");
  };

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      PaperProps={{
        sx: { width: "400px", backgroundColor: "#1a1a1a", color: "#ecf39e" },
      }}
    >
      <Box p={2} height="100%" display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Chat - {post?.title}</Typography>
          <IconButton onClick={onClose} sx={{ color: "#ecf39e" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          flexGrow={1}
          overflow="auto"
          my={2}
          p={1}
          sx={{ border: "1px solid #3a3a3a", borderRadius: "5px" }}
        >
          {messages.map((msg, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={msg.fromSelf ? "flex-end" : "flex-start"}
              my={1}
            >
              <Box
                px={2}
                py={1}
                borderRadius={4}
                maxWidth="70%"
                bgcolor={msg.fromSelf ? "#4f772d" : "#31572c"}
              >
                <Typography>{msg.text}</Typography>
              </Box>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <TextField
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            variant="outlined"
            size="small"
            sx={{
              input: { color: "#ecf39e" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#5a5a5a",
                },
              },
            }}
          />
          <IconButton onClick={handleSend} sx={{ color: "#ecf39e" }}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
}
