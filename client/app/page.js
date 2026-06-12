"use client";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

// Floating particle component
function FloatingParticle({ emoji, x, y, delay, size }) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        fontSize: size || "1.5rem",
        animation: `floatParticle ${
          4 + Math.random() * 4
        }s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        opacity: 0.6,
        pointerEvents: "none",
        zIndex: 0,
        filter: "drop-shadow(0 4px 8px rgba(124,111,224,0.3))",
      }}
    >
      {emoji}
    </div>
  );
}

export default function HomePage() {
  const { user } = useAuth();
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleHelpClick = () => router.push(user ? "/community" : "/signin");
  const handleNeedClick = () => router.push(user ? "/create" : "/signin");

  const services = [
    {
      icon: "📝",
      title: "Post your need",
      desc: "Share what you need help with and connect with your community",
      color: "rgba(168,156,247,0.2)",
      accent: "#7c6fe0",
    },
    {
      icon: "🤝",
      title: "Connect with Helpers",
      desc: "Find people nearby ready to lend a helping hand",
      color: "rgba(255,126,179,0.2)",
      accent: "#ff7eb3",
    },
    {
      icon: "✨",
      title: "Get Assistance",
      desc: "Receive help from verified community members",
      color: "rgba(96,196,248,0.2)",
      accent: "#60c4f8",
    },
  ];

  const needs = [
    {
      icon: "🚨",
      title: "Emergency Help",
      sub: "Available 24/7",
      color: "rgba(255,100,100,0.15)",
      border: "rgba(255,100,100,0.3)",
    },
    {
      icon: "📚",
      title: "Education Support",
      sub: "All subjects",
      color: "rgba(96,196,248,0.15)",
      border: "rgba(96,196,248,0.3)",
    },
    {
      icon: "🛒",
      title: "Daily Errands",
      sub: "Local area",
      color: "rgba(110,231,183,0.15)",
      border: "rgba(110,231,183,0.3)",
    },
    {
      icon: "💻",
      title: "Technical Support",
      sub: "Expert help",
      color: "rgba(255,179,71,0.15)",
      border: "rgba(255,179,71,0.3)",
    },
  ];

  const stats = [
    { value: "12K+", label: "Community Members", icon: "👥" },
    { value: "8.5K+", label: "Requests Fulfilled", icon: "✅" },
    { value: "50+", label: "Cities Covered", icon: "🏙️" },
    { value: "4.9★", label: "Average Rating", icon: "⭐" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f0e6ff 0%, #ffe4f0 50%, #e4f0ff 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(168,156,247,0.35) 0%, transparent 70%)",
            top: "-200px",
            left: "-100px",
            animation: "driftBlob1 15s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(255,126,179,0.25) 0%, transparent 70%)",
            bottom: "10%",
            right: "-100px",
            animation: "driftBlob2 18s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(96,196,248,0.2) 0%, transparent 70%)",
            top: "40%",
            left: "40%",
            animation: "driftBlob3 12s ease-in-out infinite",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "2rem" }}>
          {/* ===== HERO SECTION ===== */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
              minHeight: "85vh",
              padding: "3rem 0",
            }}
          >
            {/* Left Content */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-50px)",
                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "2rem",
                  background:
                    "linear-gradient(135deg, rgba(124,111,224,0.12), rgba(255,126,179,0.08))",
                  border: "1.5px solid rgba(124,111,224,0.25)",
                  boxShadow: "0 3px 10px rgba(124,111,224,0.15)",
                  marginBottom: "1.5rem",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#7c6fe0",
                }}
              >
                🏘️ Community Platform for India
              </div>

              <h1
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "clamp(3rem, 5vw, 4.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                  color: "#2d1b69",
                }}
              >
                Help Each Other,{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #7c6fe0, #ff7eb3, #ffb347)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    backgroundSize: "200% 200%",
                    animation: "gradientShift 3s ease infinite",
                  }}
                >
                  Build Community
                </span>
                <br />
                Together 🌸
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: 1.75,
                  color: "#5a4d9e",
                  marginBottom: "2.5rem",
                  maxWidth: "500px",
                  fontWeight: 500,
                }}
              >
                Connect with your neighbors, share local resources, and make
                your community stronger — one helping hand at a time.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button
                  onClick={handleHelpClick}
                  style={{
                    padding: "0.9rem 2.25rem",
                    borderRadius: "1rem",
                    border: "none",
                    background: "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                    color: "white",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    cursor: "pointer",
                    fontFamily: "'Nunito', sans-serif",
                    boxShadow:
                      "0 8px 24px rgba(124,111,224,0.45), inset 0 1px 0 rgba(255,255,255,0.3)",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 14px 35px rgba(124,111,224,0.55), inset 0 1px 0 rgba(255,255,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(124,111,224,0.45), inset 0 1px 0 rgba(255,255,255,0.3)";
                  }}
                >
                  🤝 Help Someone
                </button>

                <button
                  onClick={handleNeedClick}
                  style={{
                    padding: "0.9rem 2.25rem",
                    borderRadius: "1rem",
                    border: "2px solid rgba(124,111,224,0.3)",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(240,230,255,0.8))",
                    color: "#7c6fe0",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    cursor: "pointer",
                    fontFamily: "'Nunito', sans-serif",
                    boxShadow:
                      "0 6px 20px rgba(124,111,224,0.2), inset 0 1px 0 rgba(255,255,255,0.9)",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 30px rgba(124,111,224,0.3), inset 0 1px 0 rgba(255,255,255,0.9)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(124,111,224,0.2), inset 0 1px 0 rgba(255,255,255,0.9)";
                  }}
                >
                  🙏 Need Help
                </button>
              </div>

              {/* Trust indicators */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginTop: "2rem",
                  padding: "0.875rem 1.25rem",
                  borderRadius: "1rem",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.7), rgba(240,230,255,0.5))",
                  boxShadow:
                    "0 3px 12px rgba(124,111,224,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
                  border: "1px solid rgba(124,111,224,0.15)",
                  width: "fit-content",
                }}
              >
                <div style={{ display: "flex" }}>
                  {["😊", "🙂", "😄", "😃"].map((e, i) => (
                    <div
                      key={i}
                      style={{
                        width: "1.75rem",
                        height: "1.75rem",
                        borderRadius: "50%",
                        background: "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.85rem",
                        marginLeft: i > 0 ? "-0.5rem" : 0,
                        border: "2px solid rgba(255,255,255,0.8)",
                        zIndex: 4 - i,
                        position: "relative",
                      }}
                    >
                      {e}
                    </div>
                  ))}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "0.85rem",
                      color: "#2d1b69",
                    }}
                  >
                    12,000+ members
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#6b5fa8",
                      fontWeight: 600,
                    }}
                  >
                    actively helping
                  </div>
                </div>
              </div>
            </div>

            {/* Right - 3D Card Stack */}
            <div
              style={{
                position: "relative",
                height: "520px",
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateX(0) scale(1)"
                  : "translateX(50px) scale(0.95)",
                transition: "all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s",
              }}
            >
              {/* Background card */}
              <div
                style={{
                  position: "absolute",
                  top: "60px",
                  left: "10%",
                  right: "-5%",
                  height: "420px",
                  borderRadius: "2rem",
                  background:
                    "linear-gradient(145deg, rgba(255,126,179,0.35), rgba(255,179,71,0.2))",
                  boxShadow: "0 20px 60px rgba(255,126,179,0.25)",
                  border: "1.5px solid rgba(255,255,255,0.7)",
                  transform: "rotate(6deg)",
                  animation: "cardFloat2 7s ease-in-out infinite",
                }}
              />

              {/* Middle card */}
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "5%",
                  right: "2%",
                  height: "440px",
                  borderRadius: "2rem",
                  background:
                    "linear-gradient(145deg, rgba(96,196,248,0.3), rgba(110,231,183,0.2))",
                  boxShadow: "0 16px 50px rgba(96,196,248,0.2)",
                  border: "1.5px solid rgba(255,255,255,0.7)",
                  transform: "rotate(-3deg)",
                  animation: "cardFloat3 9s ease-in-out infinite",
                }}
              />

              {/* Main card */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "480px",
                  borderRadius: "2rem",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(240,230,255,0.85))",
                  boxShadow:
                    "0 25px 60px rgba(124,111,224,0.3), inset 0 1px 0 rgba(255,255,255,0.9)",
                  border: "1.5px solid rgba(124,111,224,0.2)",
                  animation: "cardFloat1 6s ease-in-out infinite",
                  overflow: "hidden",
                  padding: "2rem",
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "1rem",
                        background: "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        boxShadow: "0 6px 16px rgba(124,111,224,0.35)",
                      }}
                    >
                      🌟
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 800,
                          fontSize: "0.95rem",
                          color: "#2d1b69",
                        }}
                      >
                        Latest Request
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "#8b80c8",
                          fontWeight: 600,
                        }}
                      >
                        2 min ago • Lucknow
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "2rem",
                      background: "rgba(110,231,183,0.2)",
                      border: "1px solid rgba(110,231,183,0.4)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#059669",
                    }}
                  >
                    🟢 Open
                  </div>
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(168,156,247,0.1), rgba(240,230,255,0.5))",
                    borderRadius: "1.25rem",
                    padding: "1.5rem",
                    marginBottom: "1.25rem",
                    border: "1px solid rgba(124,111,224,0.15)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#2d1b69",
                      marginBottom: "0.5rem",
                    }}
                  >
                    📚 Need Math Tutor for Class 10
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#5a4d9e",
                      lineHeight: 1.6,
                    }}
                  >
                    Looking for someone to help with CBSE Maths preparation.
                    Weekend sessions preferred. Can pay or exchange help.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                    marginBottom: "1.25rem",
                  }}
                >
                  {["Education", "Lucknow", "Weekend"].map((tag, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "2rem",
                        background: [
                          "rgba(168,156,247,0.15)",
                          "rgba(255,126,179,0.15)",
                          "rgba(96,196,248,0.15)",
                        ][i],
                        border: `1px solid ${
                          [
                            "rgba(124,111,224,0.25)",
                            "rgba(255,126,179,0.25)",
                            "rgba(96,196,248,0.25)",
                          ][i]
                        }`,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: ["#7c6fe0", "#e879a8", "#0ea5e9"][i],
                      }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                {/* Mini stats */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "0.75rem",
                  }}
                >
                  {[
                    { icon: "👁️", val: "24", label: "Views" },
                    { icon: "💬", val: "3", label: "Replies" },
                    { icon: "❤️", val: "8", label: "Willing" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      style={{
                        textAlign: "center",
                        padding: "0.75rem",
                        borderRadius: "1rem",
                        background: "rgba(255,255,255,0.6)",
                        border: "1px solid rgba(124,111,224,0.12)",
                      }}
                    >
                      <div style={{ fontSize: "1.1rem" }}>{s.icon}</div>
                      <div
                        style={{
                          fontWeight: 800,
                          color: "#2d1b69",
                          fontSize: "1rem",
                        }}
                      >
                        {s.val}
                      </div>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: "#8b80c8",
                          fontWeight: 600,
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating emoji decorations */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "15%",
                  fontSize: "2rem",
                  animation: "floatParticle 4s ease-in-out infinite",
                }}
              >
                ✨
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "-20px",
                  fontSize: "1.75rem",
                  animation: "floatParticle 5s ease-in-out infinite 1s",
                }}
              >
                💜
              </div>
            </div>
          </div>

          {/* ===== STATS BAR ===== */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
              marginBottom: "5rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease 0.4s",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.7))",
                  borderRadius: "1.5rem",
                  padding: "1.75rem",
                  textAlign: "center",
                  boxShadow:
                    "0 8px 28px rgba(124,111,224,0.18), inset 0 1px 0 rgba(255,255,255,0.8)",
                  border: "1.5px solid rgba(255,255,255,0.7)",
                  transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  animationDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(124,111,224,0.28), inset 0 1px 0 rgba(255,255,255,0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(124,111,224,0.18), inset 0 1px 0 rgba(255,255,255,0.8)";
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 800,
                    fontSize: "2rem",
                    background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "#6b5fa8",
                    fontWeight: 600,
                    marginTop: "0.25rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* ===== HOW IT WORKS ===== */}
          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(240,230,255,0.6))",
              borderRadius: "2.5rem",
              padding: "3.5rem",
              marginBottom: "5rem",
              boxShadow:
                "0 12px 40px rgba(124,111,224,0.2), inset 0 1px 0 rgba(255,255,255,0.8)",
              border: "1.5px solid rgba(255,255,255,0.8)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "0.4rem 1rem",
                  borderRadius: "2rem",
                  background: "rgba(124,111,224,0.1)",
                  border: "1px solid rgba(124,111,224,0.2)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#7c6fe0",
                  marginBottom: "1rem",
                }}
              >
                ✨ Simple & Easy
              </div>
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "#2d1b69",
                }}
              >
                How Locora Works
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
              }}
            >
              {[
                {
                  step: "01",
                  icon: "📝",
                  title: "Post Your Need",
                  desc: "Describe what you need help with in simple words. Add your location and urgency.",
                  color: "rgba(168,156,247,0.2)",
                  border: "rgba(124,111,224,0.25)",
                },
                {
                  step: "02",
                  icon: "🔔",
                  title: "Get Notified",
                  desc: "Nearby helpers get instant notifications. The right person will reach out quickly.",
                  color: "rgba(255,126,179,0.15)",
                  border: "rgba(255,126,179,0.25)",
                },
                {
                  step: "03",
                  icon: "✅",
                  title: "Problem Solved",
                  desc: "Chat, coordinate, and get the help you need. Rate and thank your helper!",
                  color: "rgba(110,231,183,0.15)",
                  border: "rgba(110,231,183,0.3)",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  style={{
                    background: `linear-gradient(145deg, ${step.color}, rgba(255,255,255,0.3))`,
                    borderRadius: "1.75rem",
                    padding: "2.25rem",
                    border: `2px solid ${step.border}`,
                    position: "relative",
                    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-8px) scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "1.5rem",
                      background: "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                      color: "white",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      padding: "0.25rem 0.75rem",
                      borderRadius: "2rem",
                      boxShadow: "0 4px 12px rgba(124,111,224,0.4)",
                    }}
                  >
                    Step {step.step}
                  </div>
                  <div
                    style={{
                      fontSize: "3rem",
                      marginBottom: "1rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    {step.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.3rem",
                      color: "#2d1b69",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: "#5a4d9e",
                      lineHeight: 1.7,
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ===== SERVICES ===== */}
          <div style={{ marginBottom: "5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "2rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  color: "#2d1b69",
                }}
              >
                Our Services 🛠️
              </h2>
              <Link href="/services" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    padding: "0.6rem 1.5rem",
                    borderRadius: "0.875rem",
                    border: "2px solid rgba(124,111,224,0.3)",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.7))",
                    color: "#7c6fe0",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    fontFamily: "'Nunito', sans-serif",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 14px rgba(124,111,224,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(124,111,224,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 14px rgba(124,111,224,0.15)";
                  }}
                >
                  Explore All →
                </button>
              </Link>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.75rem",
              }}
            >
              {services.map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: `linear-gradient(145deg, rgba(255,255,255,0.92), ${s.color})`,
                    borderRadius: "2rem",
                    padding: "2.5rem 2rem",
                    boxShadow:
                      "0 10px 32px rgba(124,111,224,0.18), inset 0 1px 0 rgba(255,255,255,0.8)",
                    border: "1.5px solid rgba(255,255,255,0.8)",
                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-10px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 50px rgba(124,111,224,0.28), inset 0 1px 0 rgba(255,255,255,0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 32px rgba(124,111,224,0.18), inset 0 1px 0 rgba(255,255,255,0.8)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "3.5rem",
                      marginBottom: "1.25rem",
                      filter: "drop-shadow(0 6px 12px rgba(124,111,224,0.3))",
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.35rem",
                      color: "#2d1b69",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      color: "#5a4d9e",
                      lineHeight: 1.7,
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}
                  >
                    {s.desc}
                  </p>
                  <div
                    style={{
                      display: "inline-block",
                      marginTop: "1.25rem",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: s.accent,
                    }}
                  >
                    Get Started →
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== COMMON NEEDS ===== */}
          <div style={{ marginBottom: "5rem" }}>
            <div style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  color: "#2d1b69",
                  marginBottom: "0.75rem",
                }}
              >
                Common Needs We Help With 💡
              </h2>
              <p
                style={{
                  color: "#5a4d9e",
                  fontSize: "1.05rem",
                  fontWeight: 500,
                }}
              >
                From daily errands to emergency assistance — your community is
                here for you.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1.25rem",
              }}
            >
              {needs.map((n, i) => (
                <div
                  key={i}
                  style={{
                    background: `linear-gradient(145deg, rgba(255,255,255,0.92), ${n.color})`,
                    borderRadius: "1.75rem",
                    padding: "2rem 1.5rem",
                    boxShadow:
                      "0 8px 24px rgba(124,111,224,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
                    border: `1.5px solid ${n.border}`,
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-8px) rotate(-1deg) scale(1.03)";
                    e.currentTarget.style.boxShadow = `0 18px 40px rgba(124,111,224,0.25), inset 0 1px 0 rgba(255,255,255,0.8)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0) rotate(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(124,111,224,0.15), inset 0 1px 0 rgba(255,255,255,0.8)";
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                    {n.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#2d1b69",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {n.title}
                  </h3>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "0.2rem 0.75rem",
                      borderRadius: "2rem",
                      background: n.color,
                      border: `1px solid ${n.border}`,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#5a4d9e",
                      marginTop: "0.5rem",
                    }}
                  >
                    {n.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== CTA BANNER ===== */}
          <div
            style={{
              borderRadius: "2.5rem",
              padding: "4rem",
              background: "linear-gradient(135deg, #a89cf7, #7c6fe0, #ff7eb3)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 5s ease infinite",
              boxShadow: "0 20px 60px rgba(124,111,224,0.5)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "15%",
                right: "8%",
                fontSize: "4rem",
                opacity: 0.4,
                animation: "floatParticle 4s ease-in-out infinite",
              }}
            >
              🌟
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "15%",
                left: "8%",
                fontSize: "3rem",
                opacity: 0.4,
                animation: "floatParticle 6s ease-in-out infinite 1s",
              }}
            >
              💜
            </div>
            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "12%",
                fontSize: "2rem",
                opacity: 0.3,
                animation: "floatParticle 5s ease-in-out infinite 0.5s",
              }}
            >
              ✨
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🏘️</div>
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "2.75rem",
                  fontWeight: 800,
                  color: "white",
                  marginBottom: "1rem",
                  textShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                Ready to Make a Difference?
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "rgba(255,255,255,0.9)",
                  marginBottom: "2rem",
                  maxWidth: "600px",
                  margin: "0 auto 2rem",
                  fontWeight: 500,
                  lineHeight: 1.7,
                }}
              >
                Join thousands of community members across India who are already
                helping each other every day.
              </p>
              <button
                onClick={() => router.push("/signup")}
                style={{
                  padding: "1rem 2.5rem",
                  borderRadius: "1.25rem",
                  border: "none",
                  background: "rgba(255,255,255,0.95)",
                  color: "#7c6fe0",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-4px) scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.2)";
                }}
              >
                🚀 Join Locora Free
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Sora:wght@400;600;700;800&display=swap");
        @keyframes floatParticle {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-18px) rotate(8deg);
          }
          66% {
            transform: translateY(-8px) rotate(-5deg);
          }
        }
        @keyframes cardFloat1 {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(1deg);
          }
        }
        @keyframes cardFloat2 {
          0%,
          100% {
            transform: rotate(6deg) translateY(0);
          }
          50% {
            transform: rotate(8deg) translateY(-8px);
          }
        }
        @keyframes cardFloat3 {
          0%,
          100% {
            transform: rotate(-3deg) translateY(0);
          }
          50% {
            transform: rotate(-4deg) translateY(6px);
          }
        }
        @keyframes driftBlob1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(60px, 40px) scale(1.1);
          }
        }
        @keyframes driftBlob2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, -30px) scale(1.05);
          }
        }
        @keyframes driftBlob3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -50px) scale(0.95);
          }
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </main>
  );
}
