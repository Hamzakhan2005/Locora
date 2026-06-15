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
  const [roomId, setRoomId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);
  const { socket } = useSocket();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!open || !socket || !post?._id) return;

    let activeRoomId = null;
    setError("");
    setLoading(true);
    setMessages([]);

    const fetchRoomAndJoin = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `http://localhost:5000/api/chat/room/${post._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        activeRoomId = res.data._id;
        setRoomId(activeRoomId);

        socket.emit("joinRoom", activeRoomId);
        socket.emit("getMessages", activeRoomId);
      } catch (err) {
        if (err.response?.status === 403) {
          setError(
            "This chat isn't available yet. The help request must be accepted first."
          );
        } else {
          setError("Failed to load chat. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    const onMessage = (msg) => {
      setMessages((prev) => [...prev, msg]);
      scrollToBottom();
    };

    const onHistory = (msgs) => {
      setMessages(msgs);
      scrollToBottom();
    };

    socket.on("message", onMessage);
    socket.on("messageHistory", onHistory);

    fetchRoomAndJoin();

    return () => {
      if (activeRoomId) socket.emit("leaveRoom", activeRoomId);
      socket.off("message", onMessage);
      socket.off("messageHistory", onHistory);
      setRoomId(null);
    };
  }, [socket, post?._id, open]);

  const handleSend = () => {
    if (input.trim() === "" || !roomId || !socket) return;

    socket.emit("sendMessage", {
      roomId,
      postId: post._id,
      text: input.trim(),
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
        sx: {
          width: { xs: "100%", sm: "400px" },
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.97), rgba(240,230,255,0.92))",
          backdropFilter: "blur(24px)",
          color: "#3d2c8d",
          fontFamily: "'Nunito', sans-serif",
        },
      }}
    >
      <Box p={2} height="100%" display="flex" flexDirection="column">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography
            sx={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: "1.15rem",
              color: "#2d1b69",
            }}
          >
            {post?.title || "Chat"}
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "#7c6fe0" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          flexGrow={1}
          overflow="auto"
          my={2}
          p={2}
          sx={{
            borderRadius: "1.5rem",
            background: "rgba(168,156,247,0.08)",
            border: "1.5px solid rgba(124,111,224,0.15)",
            boxShadow: "inset 0 2px 8px rgba(124,111,224,0.06)",
          }}
        >
          {loading && (
            <Typography
              sx={{
                color: "#8b80c8",
                textAlign: "center",
                mt: 4,
                fontWeight: 600,
              }}
            >
              Loading chat...
            </Typography>
          )}

          {!loading && error && (
            <Typography
              sx={{
                color: "#dc2626",
                textAlign: "center",
                mt: 4,
                fontWeight: 600,
                fontSize: "0.92rem",
              }}
            >
              {error}
            </Typography>
          )}

          {!loading && !error && messages.length === 0 && (
            <Typography
              sx={{
                color: "#8b80c8",
                textAlign: "center",
                mt: 4,
                fontWeight: 600,
              }}
            >
              No messages yet. Say hello! 👋
            </Typography>
          )}

          {!loading &&
            !error &&
            messages.map((msg, index) => (
              <Box
                key={msg._id || index}
                display="flex"
                justifyContent={msg.fromSelf ? "flex-end" : "flex-start"}
                my={1}
              >
                <Box
                  px={2}
                  py={1}
                  borderRadius={3}
                  maxWidth="75%"
                  sx={{
                    background: msg.fromSelf
                      ? "linear-gradient(145deg, #a89cf7, #7c6fe0)"
                      : "rgba(255,255,255,0.85)",
                    color: msg.fromSelf ? "#ffffff" : "#3d2c8d",
                    boxShadow: msg.fromSelf
                      ? "0 4px 14px rgba(124,111,224,0.3)"
                      : "0 2px 8px rgba(124,111,224,0.1)",
                  }}
                >
                  <Typography sx={{ wordBreak: "break-word", fontWeight: 500 }}>
                    {msg.text}
                  </Typography>
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
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={error ? "Chat unavailable" : "Type your message..."}
            variant="outlined"
            size="small"
            disabled={!!error || loading}
            sx={{
              input: { color: "#3d2c8d", fontWeight: 500 },
              "& .MuiOutlinedInput-root": {
                borderRadius: "1.1rem",
                background: "rgba(255,255,255,0.85)",
                "& fieldset": { borderColor: "rgba(124,111,224,0.25)" },
                "&:hover fieldset": { borderColor: "#7c6fe0" },
              },
            }}
          />
          <IconButton
            onClick={handleSend}
            disabled={!!error || loading}
            sx={{
              color: "#ffffff",
              background: "linear-gradient(145deg, #a89cf7, #7c6fe0)",
              boxShadow: "0 4px 14px rgba(124,111,224,0.35)",
              "&:hover": {
                background: "linear-gradient(145deg, #9c8ff5, #6f5fdb)",
              },
              "&.Mui-disabled": {
                background: "rgba(168,156,247,0.3)",
                color: "#fff",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
}
