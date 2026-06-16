"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SwipeableChatDrawer from "@/components/swpipableChatDrawer";
import {
  getIncomingRequests,
  getOutgoingRequests,
  respondToHelpRequest,
  getMyChatRooms,
} from "../utils/api";
import {
  Handshake,
  CheckCircle,
  XCircle,
  Clock,
  MessageCircle,
} from "lucide-react";

const statusConfig = (status) => {
  switch (status) {
    case "accepted":
      return {
        bg: "rgba(110,231,183,0.15)",
        border: "rgba(110,231,183,0.35)",
        text: "#059669",
        Icon: CheckCircle,
      };
    case "rejected":
      return {
        bg: "rgba(255,100,100,0.12)",
        border: "rgba(255,100,100,0.3)",
        text: "#dc2626",
        Icon: XCircle,
      };
    default:
      return {
        bg: "rgba(255,179,71,0.12)",
        border: "rgba(255,179,71,0.3)",
        text: "#d97706",
        Icon: Clock,
      };
  }
};

const Pill = ({ status }) => {
  const s = statusConfig(status);
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        padding: "0.25rem 0.8rem",
        borderRadius: "2rem",
        background: s.bg,
        border: `1px solid ${s.border}`,
        fontSize: "0.78rem",
        fontWeight: 700,
        color: s.text,
        textTransform: "uppercase",
        letterSpacing: "0.02em",
      }}
    >
      <s.Icon size={12} strokeWidth={2.5} /> {status}
    </div>
  );
};

const SectionCard = ({ children }) => (
  <div
    style={{
      background:
        "linear-gradient(145deg, rgba(255,255,255,0.93), rgba(240,230,255,0.7))",
      borderRadius: "2rem",
      padding: "1.5rem 2rem",
      boxShadow:
        "0 8px 28px rgba(124,111,224,0.14), inset 0 1px 0 rgba(255,255,255,0.8)",
      border: "1.5px solid rgba(255,255,255,0.8)",
    }}
  >
    {children}
  </div>
);

export default function RequestsPage() {
  const [incoming, setIncoming] = useState([]);
  const [outgoing, setOutgoing] = useState([]);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const loadAll = async () => {
    try {
      const [inc, out, rooms] = await Promise.all([
        getIncomingRequests(),
        getOutgoingRequests(),
        getMyChatRooms(),
      ]);
      setIncoming(inc);
      setOutgoing(out);
      setChats(rooms);
    } catch (err) {
      setError(err.message || "Failed to load your active helps");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAll();
  }, []);

  const handleRespond = async (requestId, action) => {
    try {
      await respondToHelpRequest(requestId, action);
      await loadAll();
    } catch (err) {
      alert(err.message || "Failed to respond");
    }
  };

  const openChat = (room) => {
    setSelectedPost(room.helpPost);
    setIsChatOpen(true);
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f0e6ff, #ffe4f0, #e4f0ff)",
        }}
      >
        <Navbar />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              width: "4rem",
              height: "4rem",
              border: "4px solid rgba(124,111,224,0.2)",
              borderTopColor: "#7c6fe0",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
            }}
          />
          <p
            style={{
              color: "#7c6fe0",
              fontWeight: 700,
              fontSize: "1.1rem",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Loading your active helps...
          </p>
        </div>
        <Footer />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f0e6ff 0%, #ffe4f0 50%, #e4f0ff 100%)",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <Navbar />

      <div
        style={{ maxWidth: "880px", margin: "0 auto", padding: "3rem 2rem" }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1.25rem",
              borderRadius: "2rem",
              background:
                "linear-gradient(135deg, rgba(124,111,224,0.12), rgba(255,126,179,0.08))",
              border: "1.5px solid rgba(124,111,224,0.22)",
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "#7c6fe0",
              marginBottom: "1.25rem",
            }}
          >
            <Handshake size={14} /> Active Helps
          </div>

          <h1
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
              fontWeight: 800,
              color: "#2d1b69",
              marginBottom: "0.75rem",
              lineHeight: 1.15,
            }}
          >
            Your Requests{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              & Chats
            </span>
          </h1>

          <p style={{ fontSize: "1.1rem", color: "#5a4d9e", fontWeight: 500 }}>
            Manage help offers and continue your conversations
          </p>
        </div>

        {error && (
          <p
            style={{
              textAlign: "center",
              color: "#dc2626",
              fontWeight: 600,
              marginBottom: "2rem",
            }}
          >
            {error}
          </p>
        )}

        {/* Incoming Requests */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#2d1b69",
              marginBottom: "1rem",
            }}
          >
            Requests on Your Posts
          </h2>
          {incoming.length === 0 ? (
            <p style={{ color: "#8b80c8" }}>No one has offered to help yet.</p>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {incoming.map((req) => (
                <SectionCard key={req._id}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: "#2d1b69",
                          marginBottom: "0.4rem",
                        }}
                      >
                        {req.requester?.name || "Someone"} wants to help with{" "}
                        <span style={{ color: "#7c6fe0" }}>
                          "{req.post?.title}"
                        </span>
                      </p>
                      <Pill status={req.status} />
                    </div>
                    {req.status === "pending" && (
                      <div style={{ display: "flex", gap: "0.75rem" }}>
                        <button
                          onClick={() => handleRespond(req._id, "accept")}
                          style={{
                            padding: "0.6rem 1.5rem",
                            borderRadius: "1.1rem",
                            border: "none",
                            background:
                              "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                            color: "white",
                            fontWeight: 800,
                            fontSize: "0.9rem",
                            cursor: "pointer",
                            boxShadow: "0 6px 18px rgba(124,111,224,0.4)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                          }}
                        >
                          <CheckCircle size={15} /> Accept
                        </button>
                        <button
                          onClick={() => handleRespond(req._id, "reject")}
                          style={{
                            padding: "0.6rem 1.5rem",
                            borderRadius: "1.1rem",
                            border: "2px solid rgba(124,111,224,0.3)",
                            background:
                              "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.6))",
                            color: "#7c6fe0",
                            fontWeight: 800,
                            fontSize: "0.9rem",
                            cursor: "pointer",
                            boxShadow: "0 4px 14px rgba(124,111,224,0.14)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                          }}
                        >
                          <XCircle size={15} /> Decline
                        </button>
                      </div>
                    )}
                  </div>
                </SectionCard>
              ))}
            </div>
          )}
        </section>

        {/* Outgoing Requests */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#2d1b69",
              marginBottom: "1rem",
            }}
          >
            Your Help Offers
          </h2>
          {outgoing.length === 0 ? (
            <p style={{ color: "#8b80c8" }}>
              You haven't offered to help with anything yet.
            </p>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {outgoing.map((req) => (
                <SectionCard key={req._id}>
                  <p
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#2d1b69",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Offer to help with{" "}
                    <span style={{ color: "#7c6fe0" }}>
                      "{req.post?.title}"
                    </span>{" "}
                    by {req.poster?.name || "the poster"}
                  </p>
                  <Pill status={req.status} />
                </SectionCard>
              ))}
            </div>
          )}
        </section>

        {/* Active Chats */}
        <section>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#2d1b69",
              marginBottom: "1rem",
            }}
          >
            Ongoing Chats
          </h2>
          {chats.length === 0 ? (
            <p style={{ color: "#8b80c8" }}>
              No active chats yet. Once a help offer is accepted, your chat will
              appear here.
            </p>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {chats.map((room) => (
                <SectionCard key={room._id}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#2d1b69",
                      }}
                    >
                      {room.helpPost?.title || "Help Post"}
                    </p>
                    <button
                      onClick={() => openChat(room)}
                      style={{
                        padding: "0.6rem 1.5rem",
                        borderRadius: "1.1rem",
                        border: "none",
                        background: "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                        color: "white",
                        fontWeight: 800,
                        fontSize: "0.9rem",
                        cursor: "pointer",
                        boxShadow: "0 6px 18px rgba(124,111,224,0.4)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <MessageCircle size={16} /> Open Chat
                    </button>
                  </div>
                </SectionCard>
              ))}
            </div>
          )}
        </section>
      </div>

      <Footer />
      <SwipeableChatDrawer
        open={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpen={() => {}}
        post={selectedPost}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
