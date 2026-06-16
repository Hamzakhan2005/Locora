"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  Mail,
  MessageCircle,
  Twitter,
  User,
  PenLine,
  Send,
  CheckCircle,
  Star,
  Heart,
} from "lucide-react";

export default function ContactPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = async () => {
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const contacts = [
    {
      Icon: Mail,
      title: "Email Us",
      desc: "For general inquiries and support",
      link: "hello@locora.com",
      href: "mailto:hello@locora.com",
      color: "rgba(96,196,248,0.18)",
      border: "rgba(96,196,248,0.3)",
      accent: "#0ea5e9",
      gradient: "linear-gradient(135deg, #60c4f8, #0ea5e9)",
    },
    {
      Icon: MessageCircle,
      title: "Join Community",
      desc: "Connect with other users",
      link: "Join Discussion",
      href: "/community",
      color: "rgba(110,231,183,0.18)",
      border: "rgba(110,231,183,0.3)",
      accent: "#059669",
      gradient: "linear-gradient(135deg, #6ee7b7, #059669)",
    },
    {
      Icon: Twitter,
      title: "Social Media",
      desc: "Follow us for updates",
      link: "@Locora",
      href: "#",
      color: "rgba(168,156,247,0.18)",
      border: "rgba(124,111,224,0.3)",
      accent: "#7c6fe0",
      gradient: "linear-gradient(135deg, #a89cf7, #7c6fe0)",
    },
  ];

  const fields = [
    {
      name: "name",
      label: "Your Name",
      type: "text",
      placeholder: "Arjun Sharma",
      Icon: User,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "arjun@example.com",
      Icon: Mail,
    },
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
              "radial-gradient(circle, rgba(168,156,247,0.28) 0%, transparent 70%)",
            top: "-150px",
            left: "-100px",
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
          style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
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
              <Mail size={15} color="#7c6fe0" />
              Get in Touch
            </div>

            <h1
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "#2d1b69",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                flexWrap: "wrap",
              }}
            >
              <Send size={38} color="#7c6fe0" strokeWidth={2} />
              Let&apos;s{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Connect
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "#5a4d9e",
                fontWeight: 500,
                maxWidth: "540px",
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              Have questions, feedback, or want to collaborate? We'd love to
              hear from you. Your voice shapes Locora.
            </p>
          </div>

          {/* Contact Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              marginBottom: "3.5rem",
            }}
          >
            {contacts.map((c, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: `linear-gradient(145deg, rgba(255,255,255,0.93), ${c.color})`,
                  borderRadius: "2rem",
                  padding: "2.25rem 1.75rem",
                  boxShadow:
                    hoveredCard === i
                      ? "0 20px 55px rgba(124,111,224,0.25), inset 0 1px 0 rgba(255,255,255,0.9)"
                      : "0 8px 28px rgba(124,111,224,0.14), inset 0 1px 0 rgba(255,255,255,0.8)",
                  border: `2px solid ${
                    hoveredCard === i ? c.border : "rgba(255,255,255,0.75)"
                  }`,
                  transform:
                    hoveredCard === i
                      ? "translateY(-10px) scale(1.02)"
                      : "translateY(0) scale(1)",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: "3.75rem",
                    height: "3.75rem",
                    borderRadius: "1.1rem",
                    background: c.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    boxShadow: `0 6px 18px ${c.color}`,
                    transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                    transform:
                      hoveredCard === i
                        ? "scale(1.15) rotate(8deg)"
                        : "scale(1) rotate(0deg)",
                  }}
                >
                  <c.Icon size={26} color="white" strokeWidth={2} />
                </div>

                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#2d1b69",
                    marginBottom: "0.5rem",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    color: "#5a4d9e",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    marginBottom: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  {c.desc}
                </p>
                <a
                  href={c.href}
                  style={{
                    color: c.accent,
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    transition: "gap 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = "0.6rem")}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = "0.35rem")}
                >
                  {c.link}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.92), rgba(240,230,255,0.7))",
              borderRadius: "2.5rem",
              padding: "3.5rem",
              border: "1.5px solid rgba(255,255,255,0.85)",
              boxShadow:
                "0 14px 45px rgba(124,111,224,0.18), inset 0 1px 0 rgba(255,255,255,0.9)",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "0.5rem",
              }}
            >
              <Send size={22} color="#7c6fe0" />
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "#2d1b69",
                  margin: 0,
                }}
              >
                Send Us a Message
              </h2>
            </div>
            <p
              style={{
                color: "#6b5fa8",
                fontSize: "0.97rem",
                fontWeight: 500,
                marginBottom: "2rem",
              }}
            >
              We'll get back to you as soon as possible.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {fields.map((field) => (
                <div key={field.name}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: focused === field.name ? "#7c6fe0" : "#3d2c8d",
                      marginBottom: "0.5rem",
                      transition: "color 0.2s ease",
                    }}
                  >
                    <field.Icon size={15} />
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={(e) =>
                      setFormData((p) => ({
                        ...p,
                        [field.name]: e.target.value,
                      }))
                    }
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused("")}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      padding: "0.9rem 1.25rem",
                      borderRadius: "1rem",
                      border: `2px solid ${
                        focused === field.name
                          ? "rgba(124,111,224,0.6)"
                          : "rgba(124,111,224,0.2)"
                      }`,
                      background:
                        focused === field.name
                          ? "rgba(255,255,255,0.98)"
                          : "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(240,230,255,0.4))",
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#2d1b69",
                      outline: "none",
                      boxShadow:
                        focused === field.name
                          ? "0 0 0 4px rgba(124,111,224,0.12)"
                          : "inset 0 2px 6px rgba(124,111,224,0.08)",
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>
              ))}

              {/* Message */}
              <div>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: focused === "message" ? "#7c6fe0" : "#3d2c8d",
                    marginBottom: "0.5rem",
                    transition: "color 0.2s ease",
                  }}
                >
                  <PenLine size={15} />
                  Your Message
                </label>
                <textarea
                  placeholder="Tell us what's on your mind..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "0.9rem 1.25rem",
                    borderRadius: "1rem",
                    border: `2px solid ${
                      focused === "message"
                        ? "rgba(124,111,224,0.6)"
                        : "rgba(124,111,224,0.2)"
                    }`,
                    background:
                      focused === "message"
                        ? "rgba(255,255,255,0.98)"
                        : "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(240,230,255,0.4))",
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#2d1b69",
                    outline: "none",
                    resize: "vertical",
                    boxShadow:
                      focused === "message"
                        ? "0 0 0 4px rgba(124,111,224,0.12)"
                        : "inset 0 2px 6px rgba(124,111,224,0.08)",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>

              {/* Submit */}
              {sent ? (
                <div
                  style={{
                    padding: "1rem",
                    borderRadius: "1.25rem",
                    background: "rgba(110,231,183,0.15)",
                    border: "2px solid rgba(110,231,183,0.4)",
                    textAlign: "center",
                    fontWeight: 700,
                    color: "#059669",
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    animation:
                      "bounceIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
                  }}
                >
                  <CheckCircle size={20} color="#059669" />
                  Message sent! We'll get back to you soon.
                </div>
              ) : (
                <button
                  onClick={handleSend}
                  disabled={sending}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: "1.25rem",
                    border: "none",
                    background: sending
                      ? "linear-gradient(145deg, #c4bcf0, #9e96d4)"
                      : "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                    color: "white",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    cursor: sending ? "not-allowed" : "pointer",
                    fontFamily: "'Nunito', sans-serif",
                    boxShadow: sending
                      ? "none"
                      : "0 8px 24px rgba(124,111,224,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    if (!sending) {
                      e.currentTarget.style.transform =
                        "translateY(-3px) scale(1.02)";
                      e.currentTarget.style.boxShadow =
                        "0 14px 35px rgba(124,111,224,0.55), inset 0 1px 0 rgba(255,255,255,0.3)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(124,111,224,0.4), inset 0 1px 0 rgba(255,255,255,0.3)";
                  }}
                >
                  {sending ? (
                    <>
                      <Loader2
                        size={18}
                        style={{ animation: "spin 0.8s linear infinite" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              borderRadius: "2.5rem",
              padding: "3.5rem",
              background: "linear-gradient(135deg, #7c6fe0, #a89cf7, #ff7eb3)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 5s ease infinite",
              boxShadow: "0 20px 55px rgba(124,111,224,0.4)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative bg icons */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "5%",
                opacity: 0.15,
                animation: "iconFloat 6s ease-in-out infinite",
              }}
            >
              <Star size={52} color="white" fill="white" />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "10%",
                left: "5%",
                opacity: 0.12,
                animation: "iconFloat 8s ease-in-out infinite 1s",
              }}
            >
              <Heart size={42} color="white" fill="white" />
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "white",
                  marginBottom: "1rem",
                }}
              >
                Still Have Questions?
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "rgba(255,255,255,0.88)",
                  fontWeight: 500,
                  maxWidth: "520px",
                  margin: "0 auto 2rem",
                  lineHeight: 1.75,
                }}
              >
                We're here to help! Don't hesitate to reach out, and we'll get
                back to you as soon as possible.
              </p>
              <button
                onClick={handleSend}
                style={{
                  padding: "0.9rem 2.5rem",
                  borderRadius: "1.25rem",
                  border: "none",
                  background: "rgba(255,255,255,0.95)",
                  color: "#7c6fe0",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-4px) scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.15)";
                }}
              >
                <Mail size={18} color="#7c6fe0" />
                Send Us a Message
              </button>
            </div>
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
            transform: translateY(-10px) rotate(6deg);
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          80% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        input::placeholder,
        textarea::placeholder {
          color: #a09bc8;
        }
        textarea {
          resize: vertical;
        }
      `}</style>
    </div>
  );
}
