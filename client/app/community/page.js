"use client";
import { useEffect, useState } from "react";
import {
  getHelps,
  sendHelpRequest,
  getCurrentLocation,
  getAiSuggestions,
} from "../utils/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Sparkles,
  RefreshCw,
  Handshake,
  CheckCircle,
  Tag,
  Navigation,
} from "lucide-react";

export default function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [helpingPost, setHelpingPost] = useState(null);
  const [requestedIds, setRequestedIds] = useState(new Set());
  const [nearMe, setNearMe] = useState(false);
  const [locating, setLocating] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsLoading, setSuggestionsLoading] = useState(false);
  const [suggestionsError, setSuggestionsError] = useState("");

  const fetchPosts = async (params = {}) => {
    try {
      const data = await getHelps(params);
      setPosts(data || []);
      setError("");
    } catch (err) {
      setError(err.message || "Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  const handleNearMe = async () => {
    if (nearMe) {
      setNearMe(false);
      setLoading(true);
      fetchPosts();
      return;
    }
    setLocating(true);
    try {
      const { lat, lng } = await getCurrentLocation();
      setNearMe(true);
      setLoading(true);
      fetchPosts({ lat, lng, radius: 20 });
    } catch {
      alert("Couldn't get your location.");
    } finally {
      setLocating(false);
    }
  };

  const handleHelp = async (post) => {
    setHelpingPost(post._id);
    try {
      await sendHelpRequest(post._id);
      setRequestedIds((prev) => new Set(prev).add(post._id));
      alert("Help offer sent!");
    } catch (err) {
      alert(err.message || "Failed to offer help");
    } finally {
      setHelpingPost(null);
    }
  };

  const loadSuggestions = async () => {
    setSuggestionsLoading(true);
    setSuggestionsError("");
    try {
      const data = await getAiSuggestions();
      setSuggestions(data.suggestions || []);
    } catch (err) {
      setSuggestionsError(err.message || "Couldn't load AI suggestions");
    } finally {
      setSuggestionsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading)
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
        <style>{`@keyframes spin{to{transform:rotate(360deg);}}`}</style>
      </div>
    );

  if (error)
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
            }}
          >
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
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <div
          style={{ maxWidth: "880px", margin: "0 auto", padding: "3rem 2rem" }}
        >
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
              <Navigation size={14} /> Community Hub
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
              </span>
            </h1>
            <p
              style={{ fontSize: "1.1rem", color: "#5a4d9e", fontWeight: 500 }}
            >
              Browse help requests from your community and lend a hand
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <button
              onClick={handleNearMe}
              disabled={locating}
              style={{
                padding: "0.6rem 1.5rem",
                borderRadius: "2rem",
                border: "1.5px solid rgba(124,111,224,0.3)",
                background: nearMe
                  ? "linear-gradient(145deg, #a89cf7, #7c6fe0)"
                  : "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.6))",
                color: nearMe ? "white" : "#7c6fe0",
                fontWeight: 800,
                fontSize: "0.92rem",
                cursor: locating ? "wait" : "pointer",
                fontFamily: "'Nunito', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: nearMe
                  ? "0 6px 18px rgba(124,111,224,0.35)"
                  : "0 4px 14px rgba(124,111,224,0.14)",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <MapPin size={15} />{" "}
              {locating
                ? "Locating..."
                : nearMe
                ? "Showing posts near you"
                : "Show posts near me"}
            </button>
          </div>

          {/* AI Suggestions */}
          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(240,230,255,0.6))",
              borderRadius: "2rem",
              padding: "1.5rem 2rem",
              marginBottom: "2.5rem",
              boxShadow: "0 10px 32px rgba(124,111,224,0.15)",
              border: "1.5px solid rgba(124,111,224,0.18)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                marginBottom:
                  suggestions.length || suggestionsError ? "0.75rem" : 0,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "#2d1b69",
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Sparkles size={18} color="#7c6fe0" /> AI: Posts you might want
                to help with
              </h3>
              <button
                onClick={loadSuggestions}
                disabled={suggestionsLoading}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "1.1rem",
                  border: "2px solid rgba(124,111,224,0.3)",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.6))",
                  color: "#7c6fe0",
                  fontWeight: 800,
                  fontSize: "0.88rem",
                  cursor: suggestionsLoading ? "wait" : "pointer",
                  fontFamily: "'Nunito', sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <RefreshCw size={13} />{" "}
                {suggestionsLoading
                  ? "Thinking..."
                  : suggestions.length
                  ? "Refresh"
                  : "Get suggestions"}
              </button>
            </div>
            {suggestionsError && (
              <p style={{ color: "#dc2626", fontSize: "0.9rem", margin: 0 }}>
                {suggestionsError}
              </p>
            )}
            {!suggestionsError &&
              suggestions.length === 0 &&
              !suggestionsLoading && (
                <p style={{ color: "#8b80c8", fontSize: "0.9rem", margin: 0 }}>
                  Based on your past posts, AI can suggest open requests that
                  match your interests and skills.
                </p>
              )}
            {suggestions.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {suggestions.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      borderRadius: "1.1rem",
                      padding: "0.75rem 1rem",
                      background: "rgba(168,156,247,0.1)",
                      border: "1px solid rgba(124,111,224,0.15)",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 700,
                        color: "#2d1b69",
                        fontSize: "0.95rem",
                      }}
                    >
                      {s.post.title}{" "}
                      <span
                        style={{
                          color: "#7c6fe0",
                          fontWeight: 600,
                          fontSize: "0.8rem",
                        }}
                      >
                        [{s.post.category}]
                      </span>
                    </p>
                    <p
                      style={{
                        margin: 0,
                        color: "#8b80c8",
                        fontSize: "0.85rem",
                      }}
                    >
                      {s.reason}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {posts.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "5rem 2rem",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(240,230,255,0.6))",
                borderRadius: "2rem",
                boxShadow: "0 10px 32px rgba(124,111,224,0.15)",
                border: "2px dashed rgba(124,111,224,0.25)",
              }}
            >
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
                  onHelp={() => handleHelp(post)}
                  isHelping={helpingPost === post._id}
                  isRequested={requestedIds.has(post._id)}
                />
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
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

function PostCard({ post, idx, onHelp, isHelping, isRequested }) {
  const [hovered, setHovered] = useState(false);
  const categoryColors = {
    Emergency: {
      bg: "rgba(255,100,100,0.12)",
      border: "rgba(255,100,100,0.3)",
      text: "#dc2626",
    },
    Education: {
      bg: "rgba(96,196,248,0.12)",
      border: "rgba(96,196,248,0.3)",
      text: "#0ea5e9",
    },
    Errands: {
      bg: "rgba(110,231,183,0.12)",
      border: "rgba(110,231,183,0.3)",
      text: "#059669",
    },
    Technical: {
      bg: "rgba(255,179,71,0.12)",
      border: "rgba(255,179,71,0.3)",
      text: "#d97706",
    },
  };
  const cat = categoryColors[post.category] || {
    bg: "rgba(168,156,247,0.12)",
    border: "rgba(124,111,224,0.3)",
    text: "#7c6fe0",
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
          ? "0 20px 55px rgba(124,111,224,0.25)"
          : "0 8px 28px rgba(124,111,224,0.14)",
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
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <CheckCircle size={10} /> Open
        </div>
      </div>
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
            <Tag size={11} />
            {post.category}
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
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <MapPin size={11} />
            {post.location}
          </div>
        )}
        {typeof post.distanceKm === "number" && (
          <div
            style={{
              padding: "0.25rem 0.8rem",
              borderRadius: "2rem",
              background: "rgba(168,156,247,0.1)",
              border: "1px solid rgba(124,111,224,0.2)",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "#7c6fe0",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <Navigation size={11} />
            {post.distanceKm.toFixed(1)} km away
          </div>
        )}
      </div>
      <button
        onClick={onHelp}
        disabled={isHelping || isRequested}
        style={{
          width: "100%",
          padding: "0.8rem",
          borderRadius: "1.1rem",
          border: "none",
          background: isRequested
            ? "linear-gradient(145deg, #c4f0d4, #96d4ae)"
            : isHelping
            ? "linear-gradient(145deg, #c4bcf0, #9e96d4)"
            : "linear-gradient(145deg, #a89cf7, #7c6fe0)",
          color: "white",
          fontWeight: 800,
          fontSize: "0.97rem",
          cursor: isHelping || isRequested ? "default" : "pointer",
          fontFamily: "'Nunito', sans-serif",
          boxShadow:
            isHelping || isRequested
              ? "none"
              : "0 6px 18px rgba(124,111,224,0.4)",
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.4rem",
        }}
        onMouseEnter={(e) => {
          if (!isHelping && !isRequested) {
            e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
            e.currentTarget.style.boxShadow =
              "0 12px 28px rgba(124,111,224,0.5)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow =
            isHelping || isRequested
              ? "none"
              : "0 6px 18px rgba(124,111,224,0.4)";
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
        ) : isRequested ? (
          <>
            <CheckCircle size={16} />
            Request Sent
          </>
        ) : (
          <>
            <Handshake size={16} />
            Help
          </>
        )}
      </button>
    </div>
  );
}
