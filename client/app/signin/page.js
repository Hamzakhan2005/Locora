"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Mail,
  Phone,
  Lock,
  AlertTriangle,
  Sparkles,
  LogIn,
} from "lucide-react";

function inputStyle(focused) {
  return {
    width: "100%",
    boxSizing: "border-box",
    padding: "0.875rem 1.25rem",
    borderRadius: "1rem",
    border: `2px solid ${
      focused ? "rgba(124,111,224,0.6)" : "rgba(124,111,224,0.2)"
    }`,
    background: focused
      ? "rgba(255,255,255,0.98)"
      : "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(240,230,255,0.4))",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "1rem",
    fontWeight: 600,
    color: "#2d1b69",
    outline: "none",
    boxShadow: focused
      ? "0 0 0 4px rgba(124,111,224,0.12)"
      : "inset 0 2px 6px rgba(124,111,224,0.06)",
    transition: "all 0.3s ease",
  };
}

export default function LoginPage() {
  const {
    register: regEmail,
    handleSubmit: handleEmail,
    formState: { isSubmitting: emailSub },
  } = useForm();
  const {
    register: regPhone,
    handleSubmit: handlePhone,
    formState: { isSubmitting: phoneSub },
  } = useForm();
  const [error, setError] = useState("");
  const [focused, setFocused] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleEmailLogin = async (data) => {
    if (!data.email || !data.password) {
      setError("Please enter both email and password");
      return;
    }
    try {
      setError("");
      await login(data.email, data.password, false);
      router.push("/");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  const handlePhoneLogin = async (data) => {
    if (!data.phone || !data.password) {
      setError("Please enter both phone number and password");
      return;
    }
    try {
      setError("");
      await login(data.phone, data.password, true);
      router.push("/");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

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
              "radial-gradient(circle, rgba(168,156,247,0.3) 0%, transparent 70%)",
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
            bottom: "0",
            right: "-80px",
            animation: "blobB 19s ease-in-out infinite",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            padding: "3rem 2rem 4rem",
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              animation: "slideUp 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards",
            }}
          >
            <div
              style={{
                width: "5rem",
                height: "5rem",
                borderRadius: "1.5rem",
                background: "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                boxShadow:
                  "0 12px 32px rgba(124,111,224,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
                animation: "iconFloat 4s ease-in-out infinite",
              }}
            >
              <LogIn size={32} color="white" strokeWidth={2} />
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 1rem",
                borderRadius: "2rem",
                background:
                  "linear-gradient(135deg, rgba(124,111,224,0.12), rgba(255,126,179,0.08))",
                border: "1.5px solid rgba(124,111,224,0.2)",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#7c6fe0",
                marginBottom: "1rem",
              }}
            >
              <Sparkles size={12} /> Welcome Back
            </div>
            <h1
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2.25rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#2d1b69",
                lineHeight: 1.15,
                marginBottom: "0.75rem",
              }}
            >
              Sign In to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Locora
              </span>
            </h1>
            <p style={{ color: "#5a4d9e", fontSize: "1rem", fontWeight: 500 }}>
              Choose your preferred login method
            </p>
          </div>

          {/* Error */}
          {error && (
            <div
              style={{
                maxWidth: "640px",
                margin: "0 auto 2rem",
                background: "rgba(255,100,100,0.1)",
                border: "2px solid rgba(239,68,68,0.3)",
                borderRadius: "1rem",
                padding: "1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                animation: "shakeError 0.5s ease",
              }}
            >
              <AlertTriangle size={20} color="#dc2626" strokeWidth={2} />
              <p
                style={{
                  color: "#dc2626",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                }}
              >
                {error}
              </p>
            </div>
          )}

          {/* Forms */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: "1.5rem",
              alignItems: "start",
            }}
          >
            {/* Email Form */}
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.93), rgba(240,230,255,0.72))",
                borderRadius: "2rem",
                padding: "2.5rem",
                boxShadow:
                  "0 14px 45px rgba(124,111,224,0.2), inset 0 1px 0 rgba(255,255,255,0.9)",
                border: "1.5px solid rgba(255,255,255,0.85)",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "1.1rem",
                    background:
                      "linear-gradient(145deg, rgba(96,196,248,0.22), rgba(96,196,248,0.08))",
                    border: "1.5px solid rgba(96,196,248,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem",
                    boxShadow: "0 6px 18px rgba(96,196,248,0.18)",
                  }}
                >
                  <Mail size={24} color="#0ea5e9" strokeWidth={2} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    color: "#2d1b69",
                  }}
                >
                  Email Login
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.4rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      color: focused === "email" ? "#7c6fe0" : "#3d2c8d",
                      marginBottom: "0.5rem",
                      transition: "color 0.2s",
                    }}
                  >
                    <Mail size={14} /> Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...regEmail("email", { required: true })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    style={inputStyle(focused === "email")}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      color: focused === "epw" ? "#7c6fe0" : "#3d2c8d",
                      marginBottom: "0.5rem",
                      transition: "color 0.2s",
                    }}
                  >
                    <Lock size={14} /> Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    {...regEmail("password", { required: true })}
                    onFocus={() => setFocused("epw")}
                    onBlur={() => setFocused("")}
                    style={inputStyle(focused === "epw")}
                  />
                </div>
                <button
                  onClick={handleEmail(handleEmailLogin)}
                  disabled={emailSub}
                  style={{
                    width: "100%",
                    padding: "0.95rem",
                    borderRadius: "1.1rem",
                    border: "none",
                    background: emailSub
                      ? "linear-gradient(145deg, #c4bcf0, #9e96d4)"
                      : "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                    color: "white",
                    fontWeight: 800,
                    fontSize: "1rem",
                    cursor: emailSub ? "not-allowed" : "pointer",
                    fontFamily: "'Nunito', sans-serif",
                    boxShadow: emailSub
                      ? "none"
                      : "0 6px 20px rgba(124,111,224,0.4)",
                    transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    if (!emailSub) {
                      e.currentTarget.style.transform =
                        "translateY(-3px) scale(1.02)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 30px rgba(124,111,224,0.5)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = emailSub
                      ? "none"
                      : "0 6px 20px rgba(124,111,224,0.4)";
                  }}
                >
                  {emailSub ? (
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
                      />{" "}
                      Signing In...
                    </>
                  ) : (
                    <>
                      <Mail size={16} /> Sign In with Email
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "9rem",
              }}
            >
              <div
                style={{
                  width: "1px",
                  height: "50px",
                  background:
                    "linear-gradient(180deg, transparent, rgba(124,111,224,0.3), transparent)",
                }}
              />
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.7))",
                  border: "1.5px solid rgba(124,111,224,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  color: "#7c6fe0",
                  boxShadow: "0 4px 14px rgba(124,111,224,0.18)",
                  margin: "0.5rem 0",
                }}
              >
                OR
              </div>
              <div
                style={{
                  width: "1px",
                  height: "50px",
                  background:
                    "linear-gradient(180deg, transparent, rgba(124,111,224,0.3), transparent)",
                }}
              />
            </div>

            {/* Phone Form */}
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.93), rgba(255,228,240,0.72))",
                borderRadius: "2rem",
                padding: "2.5rem",
                boxShadow:
                  "0 14px 45px rgba(255,126,179,0.18), inset 0 1px 0 rgba(255,255,255,0.9)",
                border: "1.5px solid rgba(255,255,255,0.85)",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "1.1rem",
                    background:
                      "linear-gradient(145deg, rgba(255,126,179,0.22), rgba(255,126,179,0.08))",
                    border: "1.5px solid rgba(255,126,179,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem",
                    boxShadow: "0 6px 18px rgba(255,126,179,0.18)",
                  }}
                >
                  <Phone size={24} color="#ff7eb3" strokeWidth={2} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    color: "#2d1b69",
                  }}
                >
                  Phone Login
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.4rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      color: focused === "phone" ? "#ff7eb3" : "#3d2c8d",
                      marginBottom: "0.5rem",
                      transition: "color 0.2s",
                    }}
                  >
                    <Phone size={14} /> Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    {...regPhone("phone", { required: true })}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused("")}
                    style={{
                      ...inputStyle(focused === "phone"),
                      border: `2px solid ${
                        focused === "phone"
                          ? "rgba(255,126,179,0.6)"
                          : "rgba(255,126,179,0.25)"
                      }`,
                      boxShadow:
                        focused === "phone"
                          ? "0 0 0 4px rgba(255,126,179,0.1)"
                          : "inset 0 2px 6px rgba(255,126,179,0.05)",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      color: focused === "ppw" ? "#ff7eb3" : "#3d2c8d",
                      marginBottom: "0.5rem",
                      transition: "color 0.2s",
                    }}
                  >
                    <Lock size={14} /> Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    {...regPhone("password", { required: true })}
                    onFocus={() => setFocused("ppw")}
                    onBlur={() => setFocused("")}
                    style={{
                      ...inputStyle(focused === "ppw"),
                      border: `2px solid ${
                        focused === "ppw"
                          ? "rgba(255,126,179,0.6)"
                          : "rgba(255,126,179,0.25)"
                      }`,
                      boxShadow:
                        focused === "ppw"
                          ? "0 0 0 4px rgba(255,126,179,0.1)"
                          : "inset 0 2px 6px rgba(255,126,179,0.05)",
                    }}
                  />
                </div>
                <button
                  onClick={handlePhone(handlePhoneLogin)}
                  disabled={phoneSub}
                  style={{
                    width: "100%",
                    padding: "0.95rem",
                    borderRadius: "1.1rem",
                    border: "none",
                    background: phoneSub
                      ? "linear-gradient(145deg, #f0c0d8, #d4a0bb)"
                      : "linear-gradient(145deg, #ffb3d1, #ff7eb3)",
                    color: "white",
                    fontWeight: 800,
                    fontSize: "1rem",
                    cursor: phoneSub ? "not-allowed" : "pointer",
                    fontFamily: "'Nunito', sans-serif",
                    boxShadow: phoneSub
                      ? "none"
                      : "0 6px 20px rgba(255,126,179,0.4)",
                    transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    if (!phoneSub) {
                      e.currentTarget.style.transform =
                        "translateY(-3px) scale(1.02)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 30px rgba(255,126,179,0.5)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = phoneSub
                      ? "none"
                      : "0 6px 20px rgba(255,126,179,0.4)";
                  }}
                >
                  {phoneSub ? (
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
                      />{" "}
                      Signing In...
                    </>
                  ) : (
                    <>
                      <Phone size={16} /> Sign In with Phone
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom links */}
          <div
            style={{
              textAlign: "center",
              marginTop: "2.75rem",
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            <Link
              href="/signup"
              style={{
                color: "#7c6fe0",
                fontWeight: 700,
                fontSize: "0.97rem",
                textDecoration: "none",
                borderBottom: "2px solid rgba(124,111,224,0.3)",
                paddingBottom: "1px",
              }}
            >
              Create an account →
            </Link>
            <Link
              href="/forgot-password"
              style={{
                color: "#8b80c8",
                fontWeight: 600,
                fontSize: "0.97rem",
                textDecoration: "none",
                borderBottom: "2px solid rgba(124,111,224,0.15)",
                paddingBottom: "1px",
              }}
            >
              Forgot password?
            </Link>
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
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes iconFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        @keyframes shakeError {
          0%,
          100% {
            transform: translateX(0);
          }
          20%,
          60% {
            transform: translateX(-8px);
          }
          40%,
          80% {
            transform: translateX(8px);
          }
        }
        input::placeholder {
          color: #a09bc8;
        }
      `}</style>
    </div>
  );
}
