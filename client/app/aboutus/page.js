"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function AboutPage() {
  const howItWorks = [
    {
      icon: "📢",
      title: "Post Requests",
      desc: "If you need assistance — whether it's borrowing a tool, finding a tutor, or needing urgent help — you can post your request in seconds.",
    },
    {
      icon: "🤝",
      title: "Offer Help",
      desc: "Browse requests around you and choose how you can contribute — no effort is too small. Every act of kindness counts.",
    },
    {
      icon: "💬",
      title: "Real-time Chat",
      desc: "Communicate instantly, stay updated, and respond quickly using our built-in chat and real-time alerts.",
    },
    {
      icon: "✅",
      title: "Verified Community",
      desc: "Every user is part of a trusted space built on accountability, empathy, and mutual respect.",
    },
  ];

  const whyPoints = [
    "A student stuck with a flat tire",
    "A parent looking for a babysitter recommendation",
    "Or someone who just needs to be heard...",
  ];

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
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(168,156,247,0.3) 0%, transparent 70%)",
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
            bottom: "5%",
            right: "-100px",
            animation: "blobB 20s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(96,196,248,0.15) 0%, transparent 70%)",
            top: "45%",
            right: "25%",
            animation: "blobC 14s ease-in-out infinite",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        <div
          style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem" }}
        >
          {/* ── Hero ── */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "5rem",
              animation: "slideUp 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "0.4rem 1.25rem",
                borderRadius: "2rem",
                background:
                  "linear-gradient(135deg, rgba(124,111,224,0.12), rgba(255,126,179,0.08))",
                border: "1.5px solid rgba(124,111,224,0.22)",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#7c6fe0",
                marginBottom: "1.5rem",
              }}
            >
              🏘️ About Locora
            </div>

            <h1
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                color: "#2d1b69",
                lineHeight: 1.1,
                marginBottom: "0.75rem",
              }}
            >
              🧩 Building Communities
            </h1>

            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                marginBottom: "2rem",
                background:
                  "linear-gradient(135deg, #7c6fe0, #ff7eb3, #ffb347)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% 200%",
                animation: "gradientShift 4s ease infinite",
              }}
            >
              Through Kindness ✨
            </h2>

            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.8,
                color: "#5a4d9e",
                maxWidth: "780px",
                margin: "0 auto",
                fontWeight: 500,
              }}
            >
              Locora is a community-powered help platform built to bring people
              closer through kindness, connection, and collaboration. Whether
              you need a helping hand or want to offer one, Locora makes it easy
              to reach out, respond, and make a difference — right in your
              neighborhood.
            </p>
          </div>

          {/* ── Mission ── */}
          <ClaySection delay="0.1s">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "1.25rem",
                  background: "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  boxShadow: "0 8px 20px rgba(124,111,224,0.35)",
                  animation: "iconFloat 5s ease-in-out infinite",
                }}
              >
                🌍
              </div>
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  color: "#2d1b69",
                }}
              >
                Our Mission
              </h2>
            </div>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "#5a4d9e",
                fontWeight: 500,
              }}
            >
              We created Locora with a simple mission: To make help accessible
              and human again — one post, one person, one act of kindness at a
              time. We believe in the power of local communities to uplift one
              another, and in using technology as a bridge — not a barrier — to
              empathy and action.
            </p>
          </ClaySection>

          {/* ── How It Works ── */}
          <div
            style={{
              borderRadius: "2.5rem",
              padding: "3.5rem",
              background: "linear-gradient(135deg, #a89cf7, #7c6fe0, #ff7eb3)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 6s ease infinite",
              boxShadow: "0 20px 60px rgba(124,111,224,0.4)",
              marginBottom: "3rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "8%",
                right: "4%",
                fontSize: "5rem",
                opacity: 0.15,
                animation: "iconFloat 7s ease-in-out infinite",
              }}
            >
              🔧
            </div>
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
                    backdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.75rem",
                  }}
                >
                  🔧
                </div>
                <h2
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "2.25rem",
                    fontWeight: 800,
                    color: "white",
                  }}
                >
                  How It Works
                </h2>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                {howItWorks.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.18)",
                      backdropFilter: "blur(12px)",
                      borderRadius: "1.5rem",
                      padding: "2rem",
                      border: "1.5px solid rgba(255,255,255,0.3)",
                      transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.28)";
                      e.currentTarget.style.transform = "translateY(-6px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.18)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        color: "white",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {item.icon} {item.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.88)",
                        fontSize: "0.97rem",
                        lineHeight: 1.7,
                        fontWeight: 500,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Why Locora ── */}
          <ClaySection delay="0.2s">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "1.25rem",
                  background: "linear-gradient(145deg, #ff9ec4, #ff7eb3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  boxShadow: "0 8px 20px rgba(255,126,179,0.35)",
                  animation: "iconFloat 6s ease-in-out infinite 0.5s",
                }}
              >
                🙌
              </div>
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  color: "#2d1b69",
                }}
              >
                Why Locora?
              </h2>
            </div>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "#5a4d9e",
                fontWeight: 500,
                marginBottom: "1.75rem",
              }}
            >
              In a world full of noise, Locora helps you cut through the
              distance and find real, human support. Whether you're:
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
                marginBottom: "2rem",
              }}
            >
              {whyPoints.map((point, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    borderRadius: "1.25rem",
                    background:
                      "linear-gradient(145deg, rgba(168,156,247,0.1), rgba(255,255,255,0.4))",
                    border: "1px solid rgba(124,111,224,0.15)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(8px)";
                    e.currentTarget.style.background = "rgba(168,156,247,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.background =
                      "linear-gradient(145deg, rgba(168,156,247,0.1), rgba(255,255,255,0.4))";
                  }}
                >
                  <div
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      color: "#3d2c8d",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: "1.15rem",
                fontWeight: 800,
                background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Locora is here to remind you that you're not alone. 💜
            </p>
          </ClaySection>

          {/* ── Community Built ── */}
          <div
            style={{
              borderRadius: "2.5rem",
              padding: "3.5rem",
              background: "linear-gradient(145deg, #535c91, #7c6fe0)",
              boxShadow: "0 20px 55px rgba(83,92,145,0.4)",
              marginBottom: "3rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "8%",
                right: "5%",
                fontSize: "5rem",
                opacity: 0.12,
                animation: "iconFloat 8s ease-in-out infinite",
              }}
            >
              🚀
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.75rem",
                }}
              >
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.75rem",
                  }}
                >
                  🚀
                </div>
                <h2
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "white",
                  }}
                >
                  Built By the Community, For the Community
                </h2>
              </div>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 500,
                }}
              >
                Locora isn't backed by corporations — it's built by people who
                believe in grassroots impact and real-world connection. We're
                constantly evolving, listening to feedback, and improving —
                because this isn't just our platform — it's yours.
              </p>
            </div>
          </div>

          {/* ── Let's Connect CTA ── */}
          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.7))",
              borderRadius: "2.5rem",
              padding: "4rem",
              textAlign: "center",
              border: "1.5px solid rgba(124,111,224,0.2)",
              boxShadow:
                "0 14px 45px rgba(124,111,224,0.18), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <div
              style={{
                fontSize: "4rem",
                marginBottom: "1.5rem",
                animation: "iconFloat 4s ease-in-out infinite",
              }}
            >
              📫
            </div>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "2.25rem",
                fontWeight: 800,
                color: "#2d1b69",
                marginBottom: "1rem",
              }}
            >
              Let's Connect
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "#5a4d9e",
                fontWeight: 500,
                maxWidth: "600px",
                margin: "0 auto 2.5rem",
              }}
            >
              Have suggestions, feedback, or want to collaborate? Reach out to
              us anytime — your voice shapes Locora.
            </p>
            <button
              style={{
                padding: "1rem 2.75rem",
                borderRadius: "1.25rem",
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
              ✉️ Get in Touch
            </button>
          </div>
        </div>
        <Footer />
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Sora:wght@400;600;700;800&display=swap");
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
        @keyframes iconFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
}

function ClaySection({ children, delay = "0s" }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.65))",
        borderRadius: "2.5rem",
        padding: "3rem",
        marginBottom: "3rem",
        boxShadow:
          "0 12px 40px rgba(124,111,224,0.16), inset 0 1px 0 rgba(255,255,255,0.9)",
        border: "1.5px solid rgba(255,255,255,0.85)",
        animation: `slideUp 0.7s cubic-bezier(0.34,1.56,0.64,1) ${delay} both`,
        transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-4px)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {children}
    </div>
  );
}
