"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getUserProfile } from "../utils/api";

const tabs = ["About", "Posts", "Activity"];

const cards = [
  { id: 1, icon: "🚛", title: "Helped with Moving", description: "Assisted neighbor with furniture relocation", color: "rgba(168,156,247,0.2)" },
  { id: 2, icon: "💻", title: "Tech Support", description: "Fixed computer issues for elderly resident", color: "rgba(96,196,248,0.2)" },
  { id: 3, icon: "📐", title: "Tutoring Session", description: "Taught JavaScript basics to student", color: "rgba(110,231,183,0.2)" },
];

const timeline = [
  { time: "09:30 am", event: "Helped with moving furniture", icon: "🚛" },
  { time: "10:00 am", event: "Posted new help request", icon: "📝" },
  { time: "12:00 pm", event: "Received thank you message", icon: "💌" },
  { time: "02:00 pm", event: "Completed tutoring session", icon: "✅" },
];

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("About");
  const [selectedCard, setSelectedCard] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserProfile();
        setUser(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      }
    };
    fetchUser();
  }, []);

  if (error) return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f0e6ff, #ffe4f0, #e4f0ff)" }}>
      <Navbar />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60vh" }}>
        <div style={{
          background: "rgba(255,100,100,0.1)",
          border: "2px solid rgba(239,68,68,0.3)",
          borderRadius: "1.5rem",
          padding: "2rem 3rem",
          textAlign: "center",
        }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>😢</div>
          <p style={{ color: "#dc2626", fontWeight: 700, fontSize: "1.1rem" }}>{error}</p>
        </div>
      </div>
      <Footer />
    </div>
  );

  if (!user) return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f0e6ff, #ffe4f0, #e4f0ff)" }}>
      <Navbar />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60vh", flexDirection: "column", gap: "1rem" }}>
        <div style={{
          width: "4rem", height: "4rem",
          border: "4px solid rgba(124,111,224,0.2)",
          borderTopColor: "#7c6fe0",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }} />
        <p style={{ color: "#7c6fe0", fontWeight: 700, fontSize: "1rem" }}>Loading your profile...</p>
      </div>
      <Footer />
    </div>
  );

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f0e6ff 0%, #ffe4f0 50%, #e4f0ff 100%)",
      position: "relative",
    }}>
      {/* Decorative blobs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(168,156,247,0.25) 0%, transparent 70%)", top: "-100px", right: "-80px", animation: "driftA 16s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255,126,179,0.18) 0%, transparent 70%)", bottom: "100px", left: "-80px", animation: "driftB 20s ease-in-out infinite" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>

          {/* ===== PROFILE HEADER ===== */}
          <div style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.93), rgba(240,230,255,0.75))",
            borderRadius: "2.5rem",
            padding: "3rem",
            marginBottom: "2.5rem",
            boxShadow: "0 16px 50px rgba(124,111,224,0.2), inset 0 1px 0 rgba(255,255,255,0.9)",
            border: "1.5px solid rgba(255,255,255,0.85)",
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
            animation: "slideUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
          }}>
            {/* Avatar */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div style={{
                width: "7rem",
                height: "7rem",
                borderRadius: "2rem",
                background: "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3.5rem",
                boxShadow: "0 12px 32px rgba(124,111,224,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
                animation: "float 5s ease-in-out infinite",
              }}>👤</div>
              <div style={{
                position: "absolute",
                bottom: "-6px",
                right: "-6px",
                width: "1.75rem",
                height: "1.75rem",
                borderRadius: "50%",
                background: "linear-gradient(145deg, #6ee7b7, #059669)",
                border: "3px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.7rem",
                boxShadow: "0 3px 8px rgba(5,150,105,0.4)",
              }}>✓</div>
            </div>

            {/* Info */}
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <h1 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  color: "#2d1b69",
                }}>{user.name}</h1>
                <div style={{
                  padding: "0.2rem 0.75rem",
                  borderRadius: "2rem",
                  background: "rgba(110,231,183,0.2)",
                  border: "1px solid rgba(110,231,183,0.4)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#059669",
                }}>🟢 Active</div>
              </div>
              <p style={{ color: "#5a4d9e", fontWeight: 600, fontSize: "1rem", marginBottom: "0.35rem" }}>{user.role || "Community Helper"}</p>
              <p style={{ color: "#8b80c8", fontSize: "0.88rem", fontWeight: 500 }}>📅 Joined {new Date(user.createdAt).getFullYear()}</p>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "1rem" }}>
              {[
                { value: "24", label: "Helped", icon: "🤝" },
                { value: "12", label: "Received", icon: "💜" },
                { value: "4.9", label: "Rating", icon: "⭐" },
              ].map((s, i) => (
                <div key={i} style={{
                  textAlign: "center",
                  background: "linear-gradient(145deg, rgba(168,156,247,0.12), rgba(255,255,255,0.6))",
                  borderRadius: "1.25rem",
                  padding: "1.25rem 1.5rem",
                  border: "1.5px solid rgba(124,111,224,0.2)",
                  minWidth: "80px",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px) scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0) scale(1)"}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{s.icon}</div>
                  <div style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>{s.value}</div>
                  <div style={{ fontSize: "0.75rem", color: "#6b5fa8", fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== TABS ===== */}
          <div style={{ marginBottom: "2.5rem" }}>
            {/* Tab Bar */}
            <div style={{
              display: "flex",
              gap: "0.5rem",
              background: "linear-gradient(145deg, rgba(255,255,255,0.8), rgba(240,230,255,0.6))",
              borderRadius: "1.5rem",
              padding: "0.5rem",
              border: "1.5px solid rgba(124,111,224,0.18)",
              boxShadow: "0 6px 20px rgba(124,111,224,0.12)",
              marginBottom: "2rem",
              width: "fit-content",
            }}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "0.65rem 1.75rem",
                    borderRadius: "1rem",
                    border: "none",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.97rem",
                    cursor: "pointer",
                    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    background: activeTab === tab
                      ? "linear-gradient(145deg, #a89cf7, #7c6fe0)"
                      : "transparent",
                    color: activeTab === tab ? "white" : "#5a4d9e",
                    boxShadow: activeTab === tab
                      ? "0 4px 14px rgba(124,111,224,0.4), inset 0 1px 0 rgba(255,255,255,0.3)"
                      : "none",
                    transform: activeTab === tab ? "scale(1.04)" : "scale(1)",
                  }}>
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.65))",
              borderRadius: "2rem",
              padding: "2.5rem",
              boxShadow: "0 10px 32px rgba(124,111,224,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
              border: "1.5px solid rgba(255,255,255,0.8)",
              animation: "fadeIn 0.3s ease forwards",
            }}>
              {activeTab === "About" && (
                <div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.6rem", color: "#2d1b69", marginBottom: "1.75rem" }}>
                    About Me 👋
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {[
                      { label: "📍 Location", value: user.location || "Lucknow, UP" },
                      { label: "📧 Email", value: user.email || "Not provided" },
                      { label: "📱 Phone", value: user.phone || "Not provided" },
                      { label: "🎯 Interests", value: "Community Engagement" },
                      { label: "💡 Skills", value: "Python, JavaScript" },
                    ].map((row, i) => (
                      <div key={i} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5rem",
                        padding: "1rem 1.25rem",
                        borderRadius: "1rem",
                        background: "rgba(168,156,247,0.06)",
                        border: "1px solid rgba(124,111,224,0.12)",
                        transition: "all 0.25s ease",
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = "rgba(168,156,247,0.12)"}
                      onMouseLeave={e => e.currentTarget.style.background = "rgba(168,156,247,0.06)"}>
                        <span style={{ fontWeight: 700, color: "#7c6fe0", minWidth: "140px", fontSize: "0.95rem" }}>{row.label}</span>
                        <span style={{ color: "#3d2c8d", fontWeight: 600, fontSize: "0.97rem" }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "Posts" && (
                <div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.6rem", color: "#2d1b69", marginBottom: "1.5rem" }}>My Posts 📝</h3>
                  <div style={{
                    textAlign: "center",
                    padding: "3rem",
                    background: "rgba(168,156,247,0.06)",
                    borderRadius: "1.5rem",
                    border: "2px dashed rgba(124,111,224,0.2)",
                  }}>
                    <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>📭</div>
                    <p style={{ color: "#5a4d9e", fontWeight: 600, fontSize: "1.05rem", marginBottom: "1rem" }}>No posts yet</p>
                    <button style={{
                      padding: "0.7rem 1.75rem",
                      borderRadius: "0.875rem",
                      border: "none",
                      background: "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                      color: "white",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontFamily: "'Nunito', sans-serif",
                      boxShadow: "0 6px 18px rgba(124,111,224,0.35)",
                    }}>Create Your First Post ✨</button>
                  </div>
                </div>
              )}

              {activeTab === "Activity" && (
                <div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.6rem", color: "#2d1b69", marginBottom: "1.5rem" }}>Recent Activity ⚡</h3>
                  <p style={{ color: "#5a4d9e", fontSize: "1rem", fontWeight: 500 }}>Your recent activity will appear here.</p>
                </div>
              )}
            </div>
          </div>

          {/* ===== CONTRIBUTIONS ===== */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#2d1b69", marginBottom: "1.5rem" }}>
              Contributions 🌟
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
              {cards.map((card, i) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedCard(i)}
                  style={{
                    background: `linear-gradient(145deg, rgba(255,255,255,0.92), ${card.color})`,
                    borderRadius: "1.75rem",
                    padding: "2rem",
                    border: `2px solid ${selectedCard === i ? "rgba(124,111,224,0.4)" : "rgba(255,255,255,0.7)"}`,
                    boxShadow: selectedCard === i
                      ? "0 14px 40px rgba(124,111,224,0.28), inset 0 1px 0 rgba(255,255,255,0.9)"
                      : "0 8px 24px rgba(124,111,224,0.14), inset 0 1px 0 rgba(255,255,255,0.8)",
                    cursor: "pointer",
                    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transform: selectedCard === i ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
                  }}
                  onMouseEnter={e => { if (selectedCard !== i) { e.currentTarget.style.transform = "translateY(-4px)"; }}}
                  onMouseLeave={e => { if (selectedCard !== i) { e.currentTarget.style.transform = "translateY(0)"; }}}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{card.icon}</div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#2d1b69", marginBottom: "0.5rem" }}>{card.title}</h3>
                  <p style={{ color: "#5a4d9e", fontSize: "0.9rem", fontWeight: 500, lineHeight: 1.6 }}>{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ===== REPUTATION ===== */}
          <div style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.65))",
            borderRadius: "2rem",
            padding: "2.5rem",
            marginBottom: "2.5rem",
            border: "1.5px solid rgba(124,111,224,0.18)",
            boxShadow: "0 10px 32px rgba(124,111,224,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#2d1b69", marginBottom: "2rem" }}>
              Community Reputation 🏆
            </h2>
            <div style={{ maxWidth: "550px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{
                    padding: "0.4rem 1rem",
                    borderRadius: "2rem",
                    background: "linear-gradient(135deg, rgba(168,156,247,0.25), rgba(124,111,224,0.15))",
                    border: "1.5px solid rgba(124,111,224,0.3)",
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    color: "#7c6fe0",
                  }}>⭐ Level 3</div>
                </div>
                <span style={{ color: "#6b5fa8", fontSize: "0.88rem", fontWeight: 600 }}>50% to Level 4</span>
              </div>
              {/* Progress bar */}
              <div style={{
                height: "0.75rem",
                borderRadius: "2rem",
                background: "rgba(124,111,224,0.12)",
                overflow: "hidden",
                boxShadow: "inset 0 2px 6px rgba(124,111,224,0.15)",
              }}>
                <div style={{
                  width: "50%",
                  height: "100%",
                  borderRadius: "2rem",
                  background: "linear-gradient(90deg, #a89cf7, #7c6fe0, #ff7eb3)",
                  backgroundSize: "200% 100%",
                  animation: "progressShimmer 2s ease infinite",
                  boxShadow: "0 2px 8px rgba(124,111,224,0.4)",
                }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                <span style={{ fontSize: "0.8rem", color: "#8b80c8", fontWeight: 600 }}>0</span>
                <span style={{ fontSize: "0.8rem", color: "#7c6fe0", fontWeight: 700 }}>250 / 500 XP</span>
                <span style={{ fontSize: "0.8rem", color: "#8b80c8", fontWeight: 600 }}>500</span>
              </div>
            </div>
          </div>

          {/* ===== TIMELINE ===== */}
          <div style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.65))",
            borderRadius: "2rem",
            padding: "2.5rem",
            border: "1.5px solid rgba(124,111,224,0.18)",
            boxShadow: "0 10px 32px rgba(124,111,224,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#2d1b69", marginBottom: "2rem" }}>
              Today's Activity ⚡
            </h2>
            <div style={{ position: "relative", paddingLeft: "2.5rem" }}>
              {/* Vertical line */}
              <div style={{
                position: "absolute",
                left: "0.875rem",
                top: 0,
                bottom: 0,
                width: "2px",
                background: "linear-gradient(180deg, #a89cf7, #7c6fe0, #ff7eb3)",
                borderRadius: "2px",
              }} />
              {timeline.map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                  marginBottom: i < timeline.length - 1 ? "1.75rem" : 0,
                  position: "relative",
                }}>
                  {/* Dot */}
                  <div style={{
                    position: "absolute",
                    left: "-2rem",
                    width: "1.75rem",
                    height: "1.75rem",
                    borderRadius: "50%",
                    background: "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                    border: "3px solid rgba(240,230,255,0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    boxShadow: "0 3px 10px rgba(124,111,224,0.4)",
                  }}>{item.icon}</div>

                  <div style={{
                    background: "linear-gradient(145deg, rgba(168,156,247,0.08), rgba(255,255,255,0.5))",
                    borderRadius: "1.25rem",
                    padding: "1rem 1.5rem",
                    border: "1px solid rgba(124,111,224,0.12)",
                    flex: 1,
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(168,156,247,0.14)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "linear-gradient(145deg, rgba(168,156,247,0.08), rgba(255,255,255,0.5))"; e.currentTarget.style.transform = "translateX(0)"; }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: 700, color: "#2d1b69", fontSize: "0.97rem" }}>{item.event}</span>
                      <span style={{ color: "#8b80c8", fontSize: "0.8rem", fontWeight: 600, whiteSpace: "nowrap", marginLeft: "1rem" }}>{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        <Footer />
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Sora:wght@400;600;700;800&display=swap");
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes driftA {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(40px,50px) scale(1.1); }
        }
        @keyframes driftB {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-30px,-40px) scale(1.08); }
        }
        @keyframes progressShimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}