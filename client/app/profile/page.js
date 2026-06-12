"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "../utils/api";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [error, setError] = useState("");
  const [focused, setFocused] = useState("");
  const router = useRouter();

  const onSubmit = async (data) => {
    const { name, password, email, phone, location } = data;
    if (!name || !password || (!email && !phone) || !location) {
      setError("Please fill all required fields");
      return;
    }
    try {
      setError("");
      const userData = { name, password, location };
      if (email) userData.email = email;
      if (phone) userData.phone = phone;
      const res = await registerUser(userData);
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      router.push("/");
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  const fields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Arjun Sharma",
      icon: "👤",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "arjun@example.com",
      icon: "📧",
      hint: "Optional if phone provided",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "+91 98765 43210",
      icon: "📱",
      hint: "Optional if email provided",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Create a strong password",
      icon: "🔒",
      required: true,
    },
    {
      name: "location",
      label: "Your Location",
      type: "text",
      placeholder: "Lucknow, Uttar Pradesh",
      icon: "📍",
      required: true,
    },
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
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(168,156,247,0.3) 0%, transparent 70%)",
            top: "-100px",
            right: "-100px",
            animation: "blobDrift 14s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(255,126,179,0.2) 0%, transparent 70%)",
            bottom: "0",
            left: "-80px",
            animation: "blobDrift2 18s ease-in-out infinite",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        <div
          style={{
            maxWidth: "540px",
            margin: "0 auto",
            padding: "3rem 1.5rem 4rem",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
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
                fontSize: "2.5rem",
                margin: "0 auto 1.5rem",
                animation: "floatIcon 4s ease-in-out infinite",
              }}
            >
              🏘️
            </div>

            <div
              style={{
                display: "inline-block",
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
              ✨ Join Our Community
            </div>

            <h1
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "2.75rem",
                fontWeight: 800,
                color: "#2d1b69",
                lineHeight: 1.15,
                marginBottom: "0.75rem",
              }}
            >
              Welcome to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Locora
              </span>{" "}
              🌸
            </h1>

            <p
              style={{
                color: "#5a4d9e",
                fontSize: "1rem",
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              Create your account and start building community
            </p>

            <p style={{ color: "#6b5fa8", fontSize: "0.9rem" }}>
              Already a helper?{" "}
              <Link
                href="/signin"
                style={{
                  color: "#7c6fe0",
                  fontWeight: 800,
                  textDecoration: "none",
                  borderBottom: "2px solid rgba(124,111,224,0.3)",
                }}
              >
                Sign in →
              </Link>
            </p>
          </div>

          {/* Error */}
          {error && (
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,100,100,0.12), rgba(255,100,100,0.05))",
                border: "2px solid rgba(239,68,68,0.3)",
                borderRadius: "1rem",
                padding: "1rem 1.25rem",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                animation: "shakeError 0.5s ease",
              }}
            >
              <span style={{ fontSize: "1.25rem" }}>⚠️</span>
              <p
                style={{
                  color: "#dc2626",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                {error}
              </p>
            </div>
          )}

          {/* Form Card */}
          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(240,230,255,0.75))",
              borderRadius: "2rem",
              padding: "2.5rem",
              boxShadow:
                "0 16px 50px rgba(124,111,224,0.22), inset 0 1px 0 rgba(255,255,255,0.9)",
              border: "1.5px solid rgba(255,255,255,0.85)",
            }}
          >
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
                      display: "block",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: focused === field.name ? "#7c6fe0" : "#3d2c8d",
                      marginBottom: "0.5rem",
                      transition: "color 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    {field.icon} {field.label}
                    {field.required && (
                      <span style={{ color: "#ff7eb3" }}>*</span>
                    )}
                    {field.hint && (
                      <span
                        style={{
                          color: "#8b80c8",
                          fontWeight: 500,
                          fontSize: "0.8rem",
                        }}
                      >
                        ({field.hint})
                      </span>
                    )}
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      {...register(
                        field.name,
                        field.required ? { required: true } : {}
                      )}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused("")}
                      style={{
                        width: "100%",
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
                            ? "0 0 0 4px rgba(124,111,224,0.12), inset 0 2px 6px rgba(124,111,224,0.08)"
                            : "inset 0 2px 6px rgba(124,111,224,0.08)",
                        transition: "all 0.3s ease",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Submit */}
              <button
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "1.25rem",
                  border: "none",
                  background: isSubmitting
                    ? "linear-gradient(145deg, #c4bcf0, #9e96d4)"
                    : "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                  color: "white",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  fontFamily: "'Nunito', sans-serif",
                  boxShadow: isSubmitting
                    ? "none"
                    : "0 8px 24px rgba(124,111,224,0.45), inset 0 1px 0 rgba(255,255,255,0.3)",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  marginTop: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform =
                      "translateY(-3px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 14px 35px rgba(124,111,224,0.55), inset 0 1px 0 rgba(255,255,255,0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(124,111,224,0.45), inset 0 1px 0 rgba(255,255,255,0.3)";
                }}
              >
                {isSubmitting ? (
                  <>
                    <div
                      style={{
                        width: "1.25rem",
                        height: "1.25rem",
                        border: "2px solid rgba(255,255,255,0.4)",
                        borderTopColor: "white",
                        borderRadius: "50%",
                        animation: "spin 0.8s linear infinite",
                      }}
                    />
                    Creating your account...
                  </>
                ) : (
                  "🚀 Create Account"
                )}
              </button>
            </div>
          </div>

          {/* Trust badge */}
          <div
            style={{
              marginTop: "1.5rem",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.7), rgba(240,230,255,0.5))",
              borderRadius: "1.25rem",
              padding: "1.25rem 1.5rem",
              border: "1px solid rgba(124,111,224,0.15)",
              boxShadow: "0 4px 16px rgba(124,111,224,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ fontSize: "2rem" }}>🔒</span>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#2d1b69",
                  marginBottom: "0.2rem",
                }}
              >
                Your data is safe with us
              </p>
              <p
                style={{
                  color: "#6b5fa8",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                Your information is only used to connect you with your local
                community. We never share personal data.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Sora:wght@400;600;700;800&display=swap");
        @keyframes floatIcon {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        @keyframes blobDrift {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 50px) scale(1.1);
          }
        }
        @keyframes blobDrift2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, -30px) scale(1.08);
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
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        input::placeholder {
          color: #a09bc8;
        }
      `}</style>
    </div>
  );
}
