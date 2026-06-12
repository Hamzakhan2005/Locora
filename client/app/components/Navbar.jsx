"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getUserProfile } from "../utils/api";
import { useNotification } from "../context/NotificationContext";

const pages = [
  { name: "Home", path: "/" },
  { name: "Community", path: "/community" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/aboutus" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [notifHover, setNotifHover] = useState(false);
  const { notifications } = useNotification();
  const profileRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        if (data != null) setIsLoggedIn(true);
      } catch {
        setIsLoggedIn(false);
      }
    };
    fetchProfile();
  }, []);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const profileItems = isLoggedIn
    ? [
        { icon: "👤", label: "Profile", href: "/profile" },
        { icon: "⚙️", label: "Settings", href: "/settings" },
      ]
    : [
        { icon: "🔑", label: "Sign In", href: "/signin" },
        { icon: "✨", label: "Sign Up", href: "/signup" },
      ];

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          padding: "0.65rem 2rem",
          transition: "all 0.4s ease",
          background: scrolled
            ? "linear-gradient(135deg, rgba(255,255,255,0.97), rgba(240,230,255,0.93))"
            : "linear-gradient(135deg, rgba(255,255,255,0.78), rgba(240,230,255,0.62))",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: scrolled
            ? "1.5px solid rgba(124,111,224,0.22)"
            : "1.5px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(124,111,224,0.15)" : "none",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <div
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  borderRadius: "0.8rem",
                  background: "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                  boxShadow:
                    "0 4px 14px rgba(124,111,224,0.4), inset 0 1px 0 rgba(255,255,255,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  animation: "logoFloat 4s ease-in-out infinite",
                }}
              >
                🏘️
              </div>
              <span
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.45rem",
                  background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Locora
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.15rem",
              flex: 1,
              justifyContent: "center",
            }}
          >
            {pages.map((page) => {
              const active = pathname === page.path;
              return (
                <Link
                  key={page.name}
                  href={page.path}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      padding: "0.45rem 0.95rem",
                      borderRadius: "0.8rem",
                      fontWeight: 700,
                      fontSize: "0.93rem",
                      color: active ? "#7c6fe0" : "#5a4d9e",
                      background: active
                        ? "linear-gradient(145deg, rgba(124,111,224,0.15), rgba(168,156,247,0.1))"
                        : "transparent",
                      boxShadow: active
                        ? "0 2px 8px rgba(124,111,224,0.2), inset 0 1px 0 rgba(255,255,255,0.6)"
                        : "none",
                      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.background =
                          "rgba(124,111,224,0.08)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.transform = "translateY(0)";
                      }
                    }}
                  >
                    {page.name}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              flexShrink: 0,
            }}
          >
            {/* Search */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.8), rgba(240,230,255,0.5))",
                border: "1.5px solid rgba(124,111,224,0.2)",
                borderRadius: "0.875rem",
                padding: "0.4rem 0.85rem",
                boxShadow: "inset 0 2px 6px rgba(124,111,224,0.08)",
              }}
            >
              <span style={{ fontSize: "0.9rem", opacity: 0.65 }}>🔍</span>
              <input
                type="text"
                placeholder="Search…"
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  color: "#3d2c8d",
                  width: "120px",
                }}
              />
            </div>

            {/* Notifications — hover to reveal */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setNotifHover(true)}
              onMouseLeave={() => setNotifHover(false)}
            >
              <button
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  borderRadius: "0.8rem",
                  border: notifHover
                    ? "1.5px solid rgba(124,111,224,0.45)"
                    : "1.5px solid rgba(124,111,224,0.2)",
                  background: notifHover
                    ? "linear-gradient(145deg, rgba(168,156,247,0.25), rgba(240,230,255,0.85))"
                    : "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(240,230,255,0.6))",
                  boxShadow: notifHover
                    ? "0 6px 18px rgba(124,111,224,0.25)"
                    : "0 3px 10px rgba(124,111,224,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  position: "relative",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: notifHover ? "scale(1.1)" : "scale(1)",
                }}
              >
                🔔
                {notifications.length > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-4px",
                      right: "-4px",
                      width: "1.1rem",
                      height: "1.1rem",
                      borderRadius: "50%",
                      background: "linear-gradient(145deg, #ff7eb3, #e8195a)",
                      color: "white",
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid rgba(240,230,255,0.95)",
                      boxShadow: "0 2px 6px rgba(232,25,90,0.4)",
                    }}
                  >
                    {notifications.length > 9 ? "9+" : notifications.length}
                  </div>
                )}
              </button>

              {/* Notification dropdown on hover */}
              {notifHover && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 0.6rem)",
                    right: 0,
                    minWidth: "310px",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.99), rgba(240,230,255,0.96))",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    borderRadius: "1.5rem",
                    border: "1.5px solid rgba(124,111,224,0.22)",
                    boxShadow:
                      "0 20px 60px rgba(124,111,224,0.28), inset 0 1px 0 rgba(255,255,255,0.9)",
                    overflow: "hidden",
                    animation:
                      "dropIn 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                    zIndex: 200,
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      padding: "1rem 1.25rem 0.75rem",
                      borderBottom: "1px solid rgba(124,111,224,0.12)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ fontSize: "1rem" }}>🔔</span>
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        color: "#2d1b69",
                        fontFamily: "'Sora', sans-serif",
                      }}
                    >
                      Notifications
                    </span>
                    {notifications.length > 0 && (
                      <span
                        style={{
                          marginLeft: "auto",
                          padding: "0.15rem 0.65rem",
                          borderRadius: "2rem",
                          background: "rgba(255,126,179,0.15)",
                          border: "1px solid rgba(255,126,179,0.3)",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "#e8195a",
                        }}
                      >
                        {notifications.length} new
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  {notifications.length === 0 ? (
                    <div
                      style={{ padding: "2rem 1.5rem", textAlign: "center" }}
                    >
                      <div
                        style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}
                      >
                        📭
                      </div>
                      <p
                        style={{
                          color: "#8b80c8",
                          fontSize: "0.9rem",
                          fontWeight: 700,
                        }}
                      >
                        No notifications yet
                      </p>
                      <p
                        style={{
                          color: "#a09bc8",
                          fontSize: "0.8rem",
                          fontWeight: 500,
                          marginTop: "0.25rem",
                        }}
                      >
                        We'll let you know when something happens!
                      </p>
                    </div>
                  ) : (
                    <div style={{ maxHeight: "280px", overflowY: "auto" }}>
                      {notifications.map((notif, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            if (notif.postId)
                              window.location.href = `/post/${notif.postId}`;
                          }}
                          style={{
                            padding: "0.875rem 1.25rem",
                            borderBottom:
                              i < notifications.length - 1
                                ? "1px solid rgba(124,111,224,0.07)"
                                : "none",
                            cursor: notif.postId ? "pointer" : "default",
                            fontSize: "0.88rem",
                            fontWeight: 600,
                            color: "#3d2c8d",
                            transition: "background 0.18s ease",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.7rem",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background =
                              "rgba(124,111,224,0.07)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          <span
                            style={{
                              width: "1.75rem",
                              height: "1.75rem",
                              borderRadius: "50%",
                              background:
                                "linear-gradient(145deg, rgba(168,156,247,0.2), rgba(124,111,224,0.1))",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.85rem",
                              flexShrink: 0,
                              marginTop: "0.05rem",
                            }}
                          >
                            📣
                          </span>
                          <span style={{ lineHeight: 1.5 }}>
                            {notif.message}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Profile button — click to open */}
            <div ref={profileRef} style={{ position: "relative" }}>
              <button
                onClick={() => setProfileMenuOpen((v) => !v)}
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  borderRadius: "0.8rem",
                  border: profileMenuOpen
                    ? "1.5px solid rgba(124,111,224,0.55)"
                    : "1.5px solid rgba(124,111,224,0.22)",
                  background: isLoggedIn
                    ? "linear-gradient(145deg, #a89cf7, #7c6fe0)"
                    : "linear-gradient(145deg, rgba(255,255,255,0.88), rgba(240,230,255,0.7))",
                  boxShadow: profileMenuOpen
                    ? "0 6px 20px rgba(124,111,224,0.38)"
                    : "0 3px 12px rgba(124,111,224,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.15rem",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: profileMenuOpen ? "scale(1.08)" : "scale(1)",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  if (!profileMenuOpen)
                    e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  if (!profileMenuOpen)
                    e.currentTarget.style.transform = profileMenuOpen
                      ? "scale(1.08)"
                      : "scale(1)";
                }}
              >
                {isLoggedIn ? "👤" : "👋"}
              </button>

              {profileMenuOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 0.6rem)",
                    right: 0,
                    minWidth: "195px",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.99), rgba(240,230,255,0.96))",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    borderRadius: "1.5rem",
                    border: "1.5px solid rgba(124,111,224,0.22)",
                    boxShadow:
                      "0 20px 60px rgba(124,111,224,0.28), inset 0 1px 0 rgba(255,255,255,0.9)",
                    overflow: "hidden",
                    animation:
                      "dropIn 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                    zIndex: 200,
                    padding: "0.5rem",
                  }}
                >
                  {/* Section label */}
                  <div
                    style={{
                      padding: "0.4rem 1rem 0.6rem",
                      borderBottom: "1px solid rgba(124,111,224,0.1)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.73rem",
                        fontWeight: 800,
                        color: "#8b80c8",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        margin: 0,
                      }}
                    >
                      {isLoggedIn ? "My Account" : "Get Started"}
                    </p>
                  </div>

                  {profileItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{ textDecoration: "none" }}
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      <div
                        style={{
                          padding: "0.65rem 1rem",
                          borderRadius: "1rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.65rem",
                          cursor: "pointer",
                          fontWeight: 700,
                          fontSize: "0.92rem",
                          color: "#3d2c8d",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(124,111,224,0.1)";
                          e.currentTarget.style.paddingLeft = "1.3rem";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.paddingLeft = "1rem";
                        }}
                      >
                        <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                        <span style={{ flex: 1 }}>{item.label}</span>
                        <span style={{ fontSize: "0.75rem", opacity: 0.35 }}>
                          →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Sora:wght@400;600;700;800&display=swap");
        @keyframes logoFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(5deg);
          }
        }
        @keyframes dropIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
