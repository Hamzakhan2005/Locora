"use client";

import { useEffect, useState } from "react";
import { getHelps } from "../utils/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SwipeableChatDrawer from "@/components/swpipableChatDrawer";

export default function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [helpingPost, setHelpingPost] = useState(null);

  const handleOpenChat = (post) => {
    setSelectedPost(post);
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setSelectedPost(null);
  };

  const handleHelp = async (post) => {
    setHelpingPost(post._id);
    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:5000/api/help/${post._id}/accept`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Help offer sent!");
    } catch (err) {
      console.error("Help accept error:", err);
      alert("Failed to offer help");
    } finally {
      setHelpingPost(null);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getHelps();
        setPosts(data || []);
      } catch (err) {
        setError(err.message || "Failed to load posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

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
            Loading community posts...
          </p>
        </div>
        <Footer />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (error) {
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
          }}
        >
          <div
            style={{
              background: "rgba(255,100,100,0.1)",
              border: "2px solid rgba(239,68,68,0.3)",
              borderRadius: "1.5rem",
              padding: "2rem 3rem",
              textAlign: "center",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>😢</div>
            <p
              style={{ color: "#dc2626", fontWeight: 700, fontSize: "1.1rem" }}
            >
              {error}
            </p>
          </div>
        </div>
        <Footer />
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "550px",
            height: "550px",
            background:
              "radial-gradient(circle, rgba(168,156,247,0.28) 0%, transparent 70%)",
            top: "-150px",
            left: "-80px",
            animation: "blobA 16s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "450px",
            height: "450px",
            background:
              "radial-gradient(circle, rgba(255,126,179,0.2) 0%, transparent 70%)",
            bottom: "5%",
            right: "-80px",
            animation: "blobB 20s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "350px",
            height: "350px",
            background:
              "radial-gradient(circle, rgba(96,196,248,0.18) 0%, transparent 70%)",
            top: "40%",
            right: "30%",
            animation: "blobC 14s ease-in-out infinite",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        <div
          style={{ maxWidth: "880px", margin: "0 auto", padding: "3rem 2rem" }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "3.5rem",
              animation: "slideUp 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards",
            }}
          >
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
              🏘️ Community Hub
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
              Community{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Posts
              </span>{" "}
              🌸
            </h1>

            <p
              style={{ fontSize: "1.1rem", color: "#5a4d9e", fontWeight: 500 }}
            >
              Browse help requests from your community and lend a hand 🤝
            </p>
          </div>

          {/* Empty state */}
          {posts.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "5rem 2rem",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(240,230,255,0.6))",
                borderRadius: "2rem",
                boxShadow:
                  "0 10px 32px rgba(124,111,224,0.15), inset 0 1px 0 rgba(255,255,255,0.9)",
                border: "2px dashed rgba(124,111,224,0.25)",
              }}
            >
              <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📭</div>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#5a4d9e",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                No posts yet
              </p>
              <p style={{ color: "#8b80c8", fontSize: "0.97rem" }}>
                Be the first to create a help request!
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {posts.map((post, idx) => (
                <PostCard
                  key={post._id}
                  post={post}
                  idx={idx}
                  onChat={() => handleOpenChat(post)}
                  onHelp={() => handleHelp(post)}
                  isHelping={helpingPost === post._id}
                />
              ))}
            </div>
          )}
        </div>

        <Footer />
      </div>

      <SwipeableChatDrawer
        open={isChatOpen}
        onClose={handleCloseChat}
        onOpen={() => {}}
        post={selectedPost}
      />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Sora:wght@400;600;700;800&display=swap");
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blobA {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(50px, 60px) scale(1.1);
          }
        }
        @keyframes blobB {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, -30px) scale(1.08);
          }
        }
        @keyframes blobC {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -40px) scale(0.95);
          }
        }
        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

/* ─── Individual Post Card ─── */
function PostCard({ post, idx, onChat, onHelp, isHelping }) {
  const [hovered, setHovered] = useState(false);

  const categoryColors = {
    Emergency: {
      bg: "rgba(255,100,100,0.12)",
      border: "rgba(255,100,100,0.3)",
      text: "#dc2626",
      icon: "🚨",
    },
    Education: {
      bg: "rgba(96,196,248,0.12)",
      border: "rgba(96,196,248,0.3)",
      text: "#0ea5e9",
      icon: "📚",
    },
    Errands: {
      bg: "rgba(110,231,183,0.12)",
      border: "rgba(110,231,183,0.3)",
      text: "#059669",
      icon: "🛒",
    },
    Technical: {
      bg: "rgba(255,179,71,0.12)",
      border: "rgba(255,179,71,0.3)",
      text: "#d97706",
      icon: "💻",
    },
  };
  const cat = categoryColors[post.category] || {
    bg: "rgba(168,156,247,0.12)",
    border: "rgba(124,111,224,0.3)",
    text: "#7c6fe0",
    icon: "📌",
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.93), rgba(240,230,255,0.7))",
        borderRadius: "2rem",
        padding: "2rem 2.25rem",
        boxShadow: hovered
          ? "0 20px 55px rgba(124,111,224,0.25), inset 0 1px 0 rgba(255,255,255,0.9)"
          : "0 8px 28px rgba(124,111,224,0.14), inset 0 1px 0 rgba(255,255,255,0.8)",
        border: hovered
          ? "1.5px solid rgba(124,111,224,0.3)"
          : "1.5px solid rgba(255,255,255,0.8)",
        transform: hovered
          ? "translateY(-6px) scale(1.008)"
          : "translateY(0) scale(1)",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        animation: `cardIn 0.6s cubic-bezier(0.34,1.56,0.64,1) ${
          idx * 0.08
        }s both`,
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "1.35rem",
              fontWeight: 700,
              color: "#2d1b69",
              marginBottom: "0.6rem",
              lineHeight: 1.3,
            }}
          >
            {post.title}
          </h2>
          <p
            style={{
              color: "#5a4d9e",
              fontSize: "0.97rem",
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            {post.description}
          </p>
        </div>
        {/* Status pill */}
        <div
          style={{
            padding: "0.3rem 0.85rem",
            borderRadius: "2rem",
            background: "rgba(110,231,183,0.15)",
            border: "1px solid rgba(110,231,183,0.35)",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "#059669",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          🟢 Open
        </div>
      </div>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "1.5rem",
        }}
      >
        {post.category && (
          <div
            style={{
              padding: "0.25rem 0.8rem",
              borderRadius: "2rem",
              background: cat.bg,
              border: `1px solid ${cat.border}`,
              fontSize: "0.78rem",
              fontWeight: 700,
              color: cat.text,
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            {cat.icon} {post.category}
          </div>
        )}
        {post.location && (
          <div
            style={{
              padding: "0.25rem 0.8rem",
              borderRadius: "2rem",
              background: "rgba(168,156,247,0.1)",
              border: "1px solid rgba(124,111,224,0.2)",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "#7c6fe0",
            }}
          >
            📍 {post.location}
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", gap: "0.875rem" }}>
        <button
          onClick={onChat}
          style={{
            flex: 1,
            padding: "0.8rem",
            borderRadius: "1.1rem",
            border: "2px solid rgba(124,111,224,0.3)",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.6))",
            color: "#7c6fe0",
            fontWeight: 800,
            fontSize: "0.97rem",
            cursor: "pointer",
            fontFamily: "'Nunito', sans-serif",
            boxShadow: "0 4px 14px rgba(124,111,224,0.14)",
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
            e.currentTarget.style.boxShadow =
              "0 8px 22px rgba(124,111,224,0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 14px rgba(124,111,224,0.14)";
          }}
        >
          💬 Chat
        </button>

        <button
          onClick={onHelp}
          disabled={isHelping}
          style={{
            flex: 1,
            padding: "0.8rem",
            borderRadius: "1.1rem",
            border: "none",
            background: isHelping
              ? "linear-gradient(145deg, #c4bcf0, #9e96d4)"
              : "linear-gradient(145deg, #a89cf7, #7c6fe0)",
            color: "white",
            fontWeight: 800,
            fontSize: "0.97rem",
            cursor: isHelping ? "not-allowed" : "pointer",
            fontFamily: "'Nunito', sans-serif",
            boxShadow: isHelping
              ? "none"
              : "0 6px 18px rgba(124,111,224,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
          }}
          onMouseEnter={(e) => {
            if (!isHelping) {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 12px 28px rgba(124,111,224,0.5), inset 0 1px 0 rgba(255,255,255,0.3)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow =
              "0 6px 18px rgba(124,111,224,0.4), inset 0 1px 0 rgba(255,255,255,0.3)";
          }}
        >
          {isHelping ? (
            <>
              <div
                style={{
                  width: "1rem",
                  height: "1rem",
                  border: "2px solid rgba(255,255,255,0.4)",
                  borderTopColor: "white",
                  borderRadius: "50%",
                  animation: "spin 0.8s linear infinite",
                }}
              />
              Sending...
            </>
          ) : (
            "🤝 Help"
          )}
        </button>
      </div>
    </div>
  );
}
