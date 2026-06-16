"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/LoadingScreen";
import {
  FileText,
  Handshake,
  Sparkles,
  AlertCircle,
  BookOpen,
  ShoppingCart,
  Monitor,
  Users,
  CheckCircle,
  Building2,
  Star,
  Eye,
  MessageCircle,
  Heart,
  Rocket,
} from "lucide-react";

export default function HomePage() {
  const { user } = useAuth();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleHelpClick = () => router.push(user ? "/community" : "/signin");
  const handleNeedClick = () => router.push(user ? "/create" : "/signin");

  const services = [
    {
      icon: <FileText size={32} />,
      title: "Post your need",
      desc: "Share what you need help with and connect with your community",
      color: "rgba(168,156,247,0.2)",
      accent: "#7c6fe0",
    },
    {
      icon: <Handshake size={32} />,
      title: "Connect with Helpers",
      desc: "Find people nearby ready to lend a helping hand",
      color: "rgba(255,126,179,0.2)",
      accent: "#ff7eb3",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Get Assistance",
      desc: "Receive help from verified community members",
      color: "rgba(96,196,248,0.2)",
      accent: "#60c4f8",
    },
  ];

  const needs = [
    {
      icon: <AlertCircle size={28} />,
      title: "Emergency Help",
      sub: "Available 24/7",
      color: "rgba(255,100,100,0.15)",
      border: "rgba(255,100,100,0.3)",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Education Support",
      sub: "All subjects",
      color: "rgba(96,196,248,0.15)",
      border: "rgba(96,196,248,0.3)",
    },
    {
      icon: <ShoppingCart size={28} />,
      title: "Daily Errands",
      sub: "Local area",
      color: "rgba(110,231,183,0.15)",
      border: "rgba(110,231,183,0.3)",
    },
    {
      icon: <Monitor size={28} />,
      title: "Technical Support",
      sub: "Expert help",
      color: "rgba(255,179,71,0.15)",
      border: "rgba(255,179,71,0.3)",
    },
  ];

  const stats = [
    { value: "12K+", label: "Community Members", icon: <Users size={28} /> },
    {
      value: "8.5K+",
      label: "Requests Fulfilled",
      icon: <CheckCircle size={28} />,
    },
    { value: "50+", label: "Cities Covered", icon: <Building2 size={28} /> },
    { value: "4.9★", label: "Average Rating", icon: <Star size={28} /> },
  ];

  return (
    <>
      {showSplash && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            transition: "opacity 0.5s ease",
          }}
        >
          <LoadingScreen
            duration={2600}
            onComplete={() => setTimeout(() => setShowSplash(false), 700)}
          />
        </div>
      )}
      <main
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #f0e6ff 0%, #ffe4f0 50%, #e4f0ff 100%)",
          overflow: "hidden",
          position: "relative",
        }}
      >
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
          <div
            style={{ maxWidth: "1400px", margin: "0 auto", padding: "2rem" }}
          >
            {/* HERO */}
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
                    marginBottom: "1.5rem",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#7c6fe0",
                  }}
                >
                  <Building2 size={14} /> Community Platform for India
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
                  Together
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
                      boxShadow: "0 8px 24px rgba(124,111,224,0.45)",
                      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-4px) scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 14px 35px rgba(124,111,224,0.55)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(124,111,224,0.45)";
                    }}
                  >
                    <Handshake size={18} /> Help Someone
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
                      boxShadow: "0 6px 20px rgba(124,111,224,0.2)",
                      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-4px) scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 30px rgba(124,111,224,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(124,111,224,0.2)";
                    }}
                  >
                    <Heart size={18} /> Need Help
                  </button>
                </div>
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
                    boxShadow: "0 3px 12px rgba(124,111,224,0.12)",
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
                          background:
                            "linear-gradient(145deg, #a89cf7, #7c6fe0)",
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

              {/* Right card stack */}
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
                    boxShadow: "0 25px 60px rgba(124,111,224,0.3)",
                    border: "1.5px solid rgba(124,111,224,0.2)",
                    animation: "cardFloat1 6s ease-in-out infinite",
                    overflow: "hidden",
                    padding: "2rem",
                  }}
                >
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
                          background:
                            "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 6px 16px rgba(124,111,224,0.35)",
                        }}
                      >
                        <Star size={20} color="white" />
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
                          2 min ago · Lucknow
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
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <BookOpen size={16} color="#7c6fe0" /> Need Math Tutor for
                      Class 10
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#5a4d9e",
                        lineHeight: 1.6,
                      }}
                    >
                      Looking for someone to help with CBSE Maths preparation.
                      Weekend sessions preferred.
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
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "0.75rem",
                    }}
                  >
                    {[
                      { icon: <Eye size={16} />, val: "24", label: "Views" },
                      {
                        icon: <MessageCircle size={16} />,
                        val: "3",
                        label: "Replies",
                      },
                      { icon: <Heart size={16} />, val: "8", label: "Willing" },
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
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            color: "#7c6fe0",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {s.icon}
                        </div>
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
              </div>
            </div>

            {/* STATS */}
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
                    boxShadow: "0 8px 28px rgba(124,111,224,0.18)",
                    border: "1.5px solid rgba(255,255,255,0.7)",
                    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-8px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 40px rgba(124,111,224,0.28)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 28px rgba(124,111,224,0.18)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#7c6fe0",
                      marginBottom: "0.5rem",
                    }}
                  >
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

            {/* HOW IT WORKS */}
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(240,230,255,0.6))",
                borderRadius: "2.5rem",
                padding: "3.5rem",
                marginBottom: "5rem",
                boxShadow: "0 12px 40px rgba(124,111,224,0.2)",
                border: "1.5px solid rgba(255,255,255,0.8)",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
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
                  <Sparkles size={14} /> Simple & Easy
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
                    icon: <FileText size={36} />,
                    title: "Post Your Need",
                    desc: "Describe what you need help with in simple words. Add your location and urgency.",
                    color: "rgba(168,156,247,0.2)",
                    border: "rgba(124,111,224,0.25)",
                  },
                  {
                    step: "02",
                    icon: <MessageCircle size={36} />,
                    title: "Get Notified",
                    desc: "Nearby helpers get instant notifications. The right person will reach out quickly.",
                    color: "rgba(255,126,179,0.15)",
                    border: "rgba(255,126,179,0.25)",
                  },
                  {
                    step: "03",
                    icon: <CheckCircle size={36} />,
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
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform =
                        "translateY(-8px) scale(1.02)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform =
                        "translateY(0) scale(1)")
                    }
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
                        color: "#7c6fe0",
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

            {/* SERVICES */}
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
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Monitor size={28} color="#7c6fe0" /> Our Services
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
                      boxShadow: "0 10px 32px rgba(124,111,224,0.18)",
                      border: "1.5px solid rgba(255,255,255,0.8)",
                      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      textAlign: "center",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-10px) scale(1.02)";
                      e.currentTarget.style.boxShadow =
                        "0 20px 50px rgba(124,111,224,0.28)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 32px rgba(124,111,224,0.18)";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: s.accent,
                        marginBottom: "1.25rem",
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

            {/* COMMON NEEDS */}
            <div style={{ marginBottom: "5rem" }}>
              <div style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "2.25rem",
                    fontWeight: 800,
                    color: "#2d1b69",
                    marginBottom: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Sparkles size={26} color="#7c6fe0" /> Common Needs We Help
                  With
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
                      boxShadow: "0 8px 24px rgba(124,111,224,0.15)",
                      border: `1.5px solid ${n.border}`,
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-8px) rotate(-1deg) scale(1.03)";
                      e.currentTarget.style.boxShadow =
                        "0 18px 40px rgba(124,111,224,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0) rotate(0) scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(124,111,224,0.15)";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "#7c6fe0",
                        marginBottom: "1rem",
                      }}
                    >
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

            {/* CTA */}
            <div
              style={{
                borderRadius: "2.5rem",
                padding: "4rem",
                background:
                  "linear-gradient(135deg, #a89cf7, #7c6fe0, #ff7eb3)",
                backgroundSize: "200% 200%",
                animation: "gradientShift 5s ease infinite",
                boxShadow: "0 20px 60px rgba(124,111,224,0.5)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                marginBottom: "2rem",
              }}
            >
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Building2 size={48} color="white" opacity={0.9} />
                </div>
                <h2
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "2.75rem",
                    fontWeight: 800,
                    color: "white",
                    marginBottom: "1rem",
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
                  Join thousands of community members across India who are
                  already helping each other every day.
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
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
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
                  <Rocket size={18} /> Join Locora Free
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>

        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Sora:wght@400;600;700;800&display=swap");
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
    </>
  );
}
