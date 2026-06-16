"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createHelpRequest, getCurrentLocation } from "@/utils/api";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  AlignLeft,
  Tag,
  MapPin,
  Handshake,
  Rocket,
  Lightbulb,
  AlertCircle,
} from "lucide-react";

const CATEGORIES = [
  "Emergency",
  "Education",
  "Errands",
  "Technical",
  "Moving",
  "Medical",
  "Other",
];
const TYPES = [
  { value: "need", label: "Need Help", Icon: AlertCircle },
  { value: "offer", label: "Offer Help", Icon: Handshake },
];

function labelStyle(active) {
  return {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    fontWeight: 700,
    fontSize: "0.9rem",
    color: active ? "#7c6fe0" : "#3d2c8d",
    marginBottom: "0.5rem",
    transition: "color 0.2s ease",
  };
}

function inputStyle(focused) {
  return {
    width: "100%",
    boxSizing: "border-box",
    padding: "0.9rem 1.25rem",
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

export default function CreateHelpPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();
  const router = useRouter();
  const [focused, setFocused] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const onSubmit = async (data) => {
    const { title, description, location, category } = data;
    if (!title || !description || !location || !category) {
      alert("All fields are required");
      return;
    }
    try {
      const { lat, lng } = await getCurrentLocation();
      data.lat = lat;
      data.lng = lng;
    } catch {}
    try {
      await createHelpRequest(data);
      router.push("/");
    } catch (err) {
      alert(err.message || "Error creating help post");
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
              "radial-gradient(circle, rgba(168,156,247,0.28) 0%, transparent 70%)",
            top: "-120px",
            right: "-80px",
            animation: "blobA 15s ease-in-out infinite",
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
            left: "-80px",
            animation: "blobB 19s ease-in-out infinite",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "3rem 1.5rem 4rem",
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "2.75rem",
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
              <FileText size={14} /> New Post
            </div>
            <h1
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#2d1b69",
                lineHeight: 1.15,
                marginBottom: "0.75rem",
              }}
            >
              Create a{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Help Post
              </span>
            </h1>
            <p
              style={{ fontSize: "1.05rem", color: "#5a4d9e", fontWeight: 500 }}
            >
              Share your request with the community
            </p>
          </div>

          {/* Form Card */}
          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.93), rgba(240,230,255,0.72))",
              borderRadius: "2rem",
              padding: "2.75rem",
              boxShadow:
                "0 16px 50px rgba(124,111,224,0.2), inset 0 1px 0 rgba(255,255,255,0.9)",
              border: "1.5px solid rgba(255,255,255,0.85)",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
              }}
            >
              {/* Title */}
              <div>
                <label style={labelStyle(focused === "title")}>
                  <FileText size={15} /> Title{" "}
                  <span style={{ color: "#ff7eb3" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Need help moving furniture"
                  {...register("title", { required: true })}
                  onFocus={() => setFocused("title")}
                  onBlur={() => setFocused("")}
                  style={inputStyle(focused === "title")}
                />
              </div>

              {/* Description */}
              <div>
                <label style={labelStyle(focused === "description")}>
                  <AlignLeft size={15} /> Description{" "}
                  <span style={{ color: "#ff7eb3" }}>*</span>
                </label>
                <textarea
                  placeholder="Describe what you need help with in detail..."
                  {...register("description", { required: true })}
                  rows={4}
                  onFocus={() => setFocused("description")}
                  onBlur={() => setFocused("")}
                  style={{
                    ...inputStyle(focused === "description"),
                    resize: "vertical",
                  }}
                />
              </div>

              {/* Category */}
              <div>
                <label style={labelStyle(false)}>
                  <Tag size={15} /> Category{" "}
                  <span style={{ color: "#ff7eb3" }}>*</span>
                </label>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.6rem",
                    marginTop: "0.5rem",
                  }}
                >
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setValue("category", cat);
                      }}
                      style={{
                        padding: "0.45rem 1.1rem",
                        borderRadius: "2rem",
                        border:
                          selectedCategory === cat
                            ? "2px solid rgba(124,111,224,0.6)"
                            : "1.5px solid rgba(124,111,224,0.2)",
                        background:
                          selectedCategory === cat
                            ? "linear-gradient(145deg, #a89cf7, #7c6fe0)"
                            : "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(240,230,255,0.5))",
                        color: selectedCategory === cat ? "white" : "#5a4d9e",
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        cursor: "pointer",
                        fontFamily: "'Nunito', sans-serif",
                        boxShadow:
                          selectedCategory === cat
                            ? "0 4px 12px rgba(124,111,224,0.35)"
                            : "0 2px 6px rgba(124,111,224,0.1)",
                        transition:
                          "all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        transform:
                          selectedCategory === cat ? "scale(1.06)" : "scale(1)",
                      }}
                      onMouseEnter={(e) => {
                        if (selectedCategory !== cat)
                          e.currentTarget.style.transform = "scale(1.04)";
                      }}
                      onMouseLeave={(e) => {
                        if (selectedCategory !== cat)
                          e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <input
                  type="hidden"
                  {...register("category", { required: true })}
                />
              </div>

              {/* Location */}
              <div>
                <label style={labelStyle(focused === "location")}>
                  <MapPin size={15} /> Location{" "}
                  <span style={{ color: "#ff7eb3" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Lucknow, Uttar Pradesh"
                  {...register("location", { required: true })}
                  onFocus={() => setFocused("location")}
                  onBlur={() => setFocused("")}
                  style={inputStyle(focused === "location")}
                />
              </div>

              {/* Type */}
              <div>
                <label style={labelStyle(false)}>
                  <Handshake size={15} /> Type of Help{" "}
                  <span style={{ color: "#ff7eb3" }}>*</span>
                </label>
                <div
                  style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}
                >
                  {TYPES.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => {
                        setSelectedType(t.value);
                        setValue("type", t.value);
                      }}
                      style={{
                        flex: 1,
                        padding: "0.875rem",
                        borderRadius: "1.25rem",
                        border:
                          selectedType === t.value
                            ? "2px solid rgba(124,111,224,0.55)"
                            : "1.5px solid rgba(124,111,224,0.2)",
                        background:
                          selectedType === t.value
                            ? "linear-gradient(145deg, #a89cf7, #7c6fe0)"
                            : "linear-gradient(145deg, rgba(255,255,255,0.88), rgba(240,230,255,0.55))",
                        color: selectedType === t.value ? "white" : "#5a4d9e",
                        fontWeight: 800,
                        fontSize: "1rem",
                        cursor: "pointer",
                        fontFamily: "'Nunito', sans-serif",
                        boxShadow:
                          selectedType === t.value
                            ? "0 6px 18px rgba(124,111,224,0.38), inset 0 1px 0 rgba(255,255,255,0.3)"
                            : "0 3px 10px rgba(124,111,224,0.1)",
                        transition:
                          "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        transform:
                          selectedType === t.value ? "scale(1.03)" : "scale(1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                      }}
                      onMouseEnter={(e) => {
                        if (selectedType !== t.value)
                          e.currentTarget.style.transform = "scale(1.02)";
                      }}
                      onMouseLeave={(e) => {
                        if (selectedType !== t.value)
                          e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      <t.Icon size={17} /> {t.label}
                    </button>
                  ))}
                </div>
                <input
                  type="hidden"
                  {...register("type", { required: true })}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  padding: "1.05rem",
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  marginTop: "0.25rem",
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
                  e.currentTarget.style.boxShadow = isSubmitting
                    ? "none"
                    : "0 8px 24px rgba(124,111,224,0.45), inset 0 1px 0 rgba(255,255,255,0.3)";
                }}
              >
                {isSubmitting ? (
                  <>
                    <div
                      style={{
                        width: "1.15rem",
                        height: "1.15rem",
                        border: "2px solid rgba(255,255,255,0.4)",
                        borderTopColor: "white",
                        borderRadius: "50%",
                        animation: "spin 0.8s linear infinite",
                      }}
                    />{" "}
                    Creating Post...
                  </>
                ) : (
                  <>
                    <Rocket size={18} /> Create Post
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Tips */}
          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.82), rgba(240,230,255,0.6))",
              borderRadius: "1.75rem",
              padding: "1.75rem 2rem",
              border: "1.5px solid rgba(124,111,224,0.18)",
              boxShadow:
                "0 8px 24px rgba(124,111,224,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
              display: "flex",
              gap: "1.25rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                animation: "iconFloat 4s ease-in-out infinite",
                marginTop: "0.2rem",
              }}
            >
              <div
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "0.875rem",
                  background:
                    "linear-gradient(145deg, rgba(255,179,71,0.2), rgba(255,179,71,0.08))",
                  border: "1.5px solid rgba(255,179,71,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Lightbulb size={20} color="#d97706" strokeWidth={2} />
              </div>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#2d1b69",
                  marginBottom: "0.875rem",
                }}
              >
                Tips for a great post
              </h3>
              {[
                "Be specific about what you need",
                "Include relevant details like time and location",
                "Be respectful and appreciative",
              ].map((tip, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    marginBottom: "0.45rem",
                  }}
                >
                  <div
                    style={{
                      width: "0.45rem",
                      height: "0.45rem",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      color: "#5a4d9e",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}
                  >
                    {tip}
                  </span>
                </div>
              ))}
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
            transform: translate(-40px, 50px) scale(1.1);
          }
        }
        @keyframes blobB {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, -30px) scale(1.08);
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
            transform: translateY(-6px) rotate(5deg);
          }
        }
        input::placeholder,
        textarea::placeholder {
          color: #a09bc8;
        }
      `}</style>
    </div>
  );
}
