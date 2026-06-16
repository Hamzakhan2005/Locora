"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Megaphone,
  MapPin,
  MessageCircle,
  Handshake,
  Bell,
  CheckCircle,
  Zap,
  Medal,
  Star,
  Tag,
  Users,
  Lightbulb,
  Globe,
  Rocket,
} from "lucide-react";

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: <Megaphone size={36} />,
      title: "Post a Help Request",
      description:
        "If you need help — whether it's something urgent or a small task — you can create a Help Post describing your situation.",
      color: "rgba(168,156,247,0.2)",
      border: "rgba(124,111,224,0.3)",
      accent: "#7c6fe0",
      bg: "rgba(168,156,247,0.08)",
    },
    {
      icon: <MapPin size={36} />,
      title: "Location-Based Notifications",
      description:
        "The moment you post, users in your local area get notified. No need to wait days — help can come from someone just a few streets away.",
      color: "rgba(255,126,179,0.2)",
      border: "rgba(255,126,179,0.3)",
      accent: "#ff7eb3",
      bg: "rgba(255,126,179,0.08)",
    },
    {
      icon: <MessageCircle size={36} />,
      title: "Real-Time Chat",
      description:
        "Once someone sees your post, they can start a conversation directly through our built-in chat for quick coordination.",
      color: "rgba(96,196,248,0.2)",
      border: "rgba(96,196,248,0.3)",
      accent: "#0ea5e9",
      bg: "rgba(96,196,248,0.08)",
    },
    {
      icon: <Handshake size={36} />,
      title: "Accept to Help",
      description:
        "Users who are ready to take action can formally accept a help post. This helps the requester know who's committed.",
      color: "rgba(110,231,183,0.2)",
      border: "rgba(110,231,183,0.3)",
      accent: "#059669",
      bg: "rgba(110,231,183,0.08)",
    },
  ];

  const liveUpdates = [
    {
      icon: <Zap size={24} />,
      text: "Instant notifications for new posts near you",
    },
    {
      icon: <MessageCircle size={24} />,
      text: "Live message updates when someone reaches out",
    },
    {
      icon: <CheckCircle size={24} />,
      text: "Real-time status on who accepted to help",
    },
  ];

  const upcomingFeatures = [
    { icon: <Medal size={20} />, text: "Verified helper badges" },
    { icon: <Star size={20} />, text: "Community reputation and trust scores" },
    { icon: <Tag size={20} />, text: "Categories for types of help" },
    { icon: <Users size={20} />, text: "Group-based support" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f0e6ff 0%, #ffe4f0 50%, #e4f0ff 100%)",
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
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(168,156,247,0.25) 0%, transparent 70%)",
            top: "-150px",
            left: "-100px",
            animation: "blobA 16s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(255,126,179,0.2) 0%, transparent 70%)",
            bottom: "0",
            right: "-80px",
            animation: "blobB 20s ease-in-out infinite",
          }}
        />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}
        >
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
              <Handshake size={14} /> Our Services
            </div>
            <h1
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                fontWeight: 800,
                color: "#2d1b69",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              What We{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Offer
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#5a4d9e",
                maxWidth: "680px",
                margin: "0 auto",
                lineHeight: 1.75,
                fontWeight: 500,
              }}
            >
              At Locora, we're building tools to help communities connect and
              support one another — starting with real-time local help.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  background: `linear-gradient(145deg, rgba(255,255,255,0.93), ${service.color})`,
                  borderRadius: "2rem",
                  padding: "2.5rem",
                  boxShadow:
                    hoveredService === index
                      ? "0 20px 55px rgba(124,111,224,0.28)"
                      : "0 10px 32px rgba(124,111,224,0.16)",
                  border: `2px solid ${
                    hoveredService === index
                      ? service.border
                      : "rgba(255,255,255,0.7)"
                  }`,
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform:
                    hoveredService === index
                      ? "translateY(-10px) scale(1.02)"
                      : "translateY(0) scale(1)",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "4.5rem",
                    height: "4.5rem",
                    borderRadius: "1.25rem",
                    background: `linear-gradient(145deg, rgba(255,255,255,0.9), ${service.color})`,
                    border: `2px solid ${service.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: service.accent,
                    marginBottom: "1.5rem",
                    transition:
                      "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transform:
                      hoveredService === index
                        ? "scale(1.15) rotate(5deg)"
                        : "scale(1) rotate(0deg)",
                  }}
                >
                  {service.icon}
                </div>
                <h2
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#2d1b69",
                    marginBottom: "1rem",
                  }}
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    color: "#5a4d9e",
                    lineHeight: 1.75,
                    fontSize: "0.97rem",
                    fontWeight: 500,
                  }}
                >
                  {service.description}
                </p>
                <div
                  style={{
                    marginTop: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: service.accent,
                  }}
                >
                  Learn more{" "}
                  <span
                    style={{
                      transition: "transform 0.2s ease",
                      transform:
                        hoveredService === index
                          ? "translateX(4px)"
                          : "translateX(0)",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Live Updates */}
          <div
            style={{
              borderRadius: "2.5rem",
              padding: "3.5rem",
              background: "linear-gradient(135deg, #a89cf7, #7c6fe0, #ff7eb3)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 5s ease infinite",
              boxShadow: "0 20px 60px rgba(124,111,224,0.4)",
              marginBottom: "3rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "2.5rem",
                }}
              >
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Bell size={24} color="white" />
                </div>
                <h2
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "white",
                  }}
                >
                  Live Updates & Interactions
                </h2>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1.5rem",
                }}
              >
                {liveUpdates.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.18)",
                      backdropFilter: "blur(12px)",
                      borderRadius: "1.25rem",
                      padding: "1.5rem",
                      border: "1.5px solid rgba(255,255,255,0.3)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.28)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.18)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ color: "white", flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.95)",
                        fontSize: "0.97rem",
                        fontWeight: 600,
                        lineHeight: 1.6,
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming */}
          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.7))",
              borderRadius: "2.5rem",
              padding: "3.5rem",
              border: "1.5px solid rgba(124,111,224,0.2)",
              boxShadow: "0 12px 40px rgba(124,111,224,0.16)",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.25rem",
              }}
            >
              <Lightbulb size={36} color="#7c6fe0" />
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#2d1b69",
                }}
              >
                What's Coming Next?
              </h2>
            </div>
            <p
              style={{
                color: "#5a4d9e",
                fontSize: "1rem",
                fontWeight: 500,
                marginBottom: "2.5rem",
                lineHeight: 1.7,
              }}
            >
              This is just the beginning. We're actively building exciting new
              features:
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
              }}
            >
              {upcomingFeatures.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    background:
                      "linear-gradient(145deg, rgba(168,156,247,0.1), rgba(255,255,255,0.5))",
                    borderRadius: "1.25rem",
                    padding: "1.25rem 1.5rem",
                    border: "1.5px solid rgba(124,111,224,0.18)",
                    transition: "all 0.3s",
                    color: "#7c6fe0",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(6px)";
                    e.currentTarget.style.background =
                      "linear-gradient(145deg, rgba(168,156,247,0.18), rgba(255,255,255,0.7))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.background =
                      "linear-gradient(145deg, rgba(168,156,247,0.1), rgba(255,255,255,0.5))";
                  }}
                >
                  {feat.icon}
                  <span
                    style={{
                      color: "#3d2c8d",
                      fontSize: "0.97rem",
                      fontWeight: 600,
                    }}
                  >
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Section */}
          <div
            style={{
              borderRadius: "2.5rem",
              padding: "4rem",
              background: "linear-gradient(145deg, #7c6fe0, #535c91)",
              boxShadow: "0 20px 60px rgba(83,92,145,0.4)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <Lightbulb size={48} color="white" opacity={0.9} />
              </div>
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "white",
                  marginBottom: "1.5rem",
                }}
              >
                Why This Matters
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "rgba(255,255,255,0.88)",
                  lineHeight: 1.8,
                  maxWidth: "750px",
                  margin: "0 auto 2.5rem",
                  fontWeight: 500,
                }}
              >
                Locora isn't just a tool — it's a growing movement toward
                locally driven compassion. When we make it easier to ask and
                easier to offer, communities become stronger, safer, and more
                connected.
              </p>
              <button
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
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(-4px) scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0) scale(1)")
                }
              >
                <Rocket size={18} /> Get Started Today
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Sora:wght@400;600;700;800&display=swap");
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
    </div>
  );
}
