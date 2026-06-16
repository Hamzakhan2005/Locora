"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  User,
  Lock,
  Mail,
  Shield,
  Smartphone,
  Monitor,
  Globe,
  Palette,
  MapPin,
  HelpCircle,
  MessageSquare,
  AlertTriangle,
  Info,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

const settingsSections = [
  {
    icon: <User size={20} />,
    title: "Account Settings",
    items: [
      {
        name: "Profile Information",
        description: "Update your personal details and avatar",
        icon: <User size={16} />,
      },
      {
        name: "Change Password",
        description: "Manage your password and security",
        icon: <Lock size={16} />,
      },
      {
        name: "Email Preferences",
        description: "Control email notifications",
        icon: <Mail size={16} />,
      },
    ],
  },
  {
    icon: <Shield size={20} />,
    title: "Privacy & Security",
    items: [
      {
        name: "Privacy Settings",
        description: "Control who can see your information",
        icon: <Shield size={16} />,
      },
      {
        name: "Two-Factor Authentication",
        description: "Add an extra layer of security",
        icon: <Lock size={16} />,
      },
      {
        name: "Connected Devices",
        description: "Manage your logged-in devices",
        icon: <Monitor size={16} />,
      },
    ],
  },
  {
    icon: <MessageSquare size={20} />,
    title: "Notifications",
    items: [
      {
        name: "Push Notifications",
        description: "Manage mobile and desktop alerts",
        icon: <Smartphone size={16} />,
      },
      {
        name: "Email Notifications",
        description: "Choose what emails you receive",
        icon: <Mail size={16} />,
      },
      {
        name: "SMS Notifications",
        description: "Control text message alerts",
        icon: <MessageSquare size={16} />,
      },
    ],
  },
  {
    icon: <Palette size={20} />,
    title: "Preferences",
    items: [
      {
        name: "Language",
        description: "Choose your preferred language",
        icon: <Globe size={16} />,
      },
      {
        name: "Theme",
        description: "Customize your interface appearance",
        icon: <Palette size={16} />,
      },
      {
        name: "Location",
        description: "Update your location settings",
        icon: <MapPin size={16} />,
      },
    ],
  },
  {
    icon: <HelpCircle size={20} />,
    title: "Help & Support",
    items: [
      {
        name: "Help Center",
        description: "Find answers to common questions",
        icon: <HelpCircle size={16} />,
      },
      {
        name: "Contact Support",
        description: "Get help from our team",
        icon: <MessageSquare size={16} />,
      },
      {
        name: "Report a Problem",
        description: "Let us know about any issues",
        icon: <AlertTriangle size={16} />,
      },
    ],
  },
  {
    icon: <Info size={20} />,
    title: "About",
    items: [
      {
        name: "Terms of Service",
        description: "Read our terms and conditions",
        icon: <FileText size={16} />,
      },
      {
        name: "Privacy Policy",
        description: "Learn how we protect your data",
        icon: <Shield size={16} />,
      },
      {
        name: "App Version",
        description: "Version 1.0.0",
        icon: <Info size={16} />,
      },
    ],
  },
];

export default function SettingsPage() {
  const router = useRouter();
  const { logout } = useAuth();
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleLogout = () => {
    logout();
    router.push("/");
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
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(168,156,247,0.25) 0%, transparent 70%)",
            top: "-100px",
            right: "-80px",
            animation: "blobA 16s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "450px",
            height: "450px",
            background:
              "radial-gradient(circle, rgba(255,126,179,0.18) 0%, transparent 70%)",
            bottom: "5%",
            left: "-80px",
            animation: "blobB 20s ease-in-out infinite",
          }}
        />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "3rem 2rem 4rem",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "3rem",
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
              <Settings size={14} /> Settings
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
              Account{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Settings
              </span>
            </h1>
            <p
              style={{ fontSize: "1.05rem", color: "#5a4d9e", fontWeight: 500 }}
            >
              Manage your account and preferences
            </p>
          </div>

          {/* Logout */}
          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(255,100,100,0.1), rgba(255,100,100,0.05))",
              borderRadius: "2rem",
              padding: "2rem 2.5rem",
              marginBottom: "2.5rem",
              border: "2px solid rgba(239,68,68,0.3)",
              boxShadow: "0 8px 28px rgba(239,68,68,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "1rem",
                  background: "rgba(239,68,68,0.12)",
                  border: "1.5px solid rgba(239,68,68,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LogOut size={20} color="#dc2626" />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#dc2626",
                    marginBottom: "0.2rem",
                  }}
                >
                  Sign Out
                </h3>
                <p
                  style={{
                    color: "#5a4d9e",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  Sign out of your account on this device
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              style={{
                padding: "0.8rem 2rem",
                borderRadius: "1rem",
                border: "none",
                background: "linear-gradient(145deg, #ff6b6b, #dc2626)",
                color: "white",
                fontWeight: 800,
                fontSize: "1rem",
                cursor: "pointer",
                fontFamily: "'Nunito', sans-serif",
                boxShadow: "0 6px 18px rgba(220,38,38,0.35)",
                transition: "all 0.3s",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-3px) scale(1.04)";
                e.currentTarget.style.boxShadow =
                  "0 12px 28px rgba(220,38,38,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 18px rgba(220,38,38,0.35)";
              }}
            >
              <LogOut size={16} /> Log Out
            </button>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {settingsSections.map((section, si) => (
              <div
                key={si}
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.65))",
                  borderRadius: "2rem",
                  padding: "2.25rem",
                  border: "1.5px solid rgba(255,255,255,0.85)",
                  boxShadow: "0 10px 32px rgba(124,111,224,0.14)",
                  animation: `slideUp 0.6s cubic-bezier(0.34,1.56,0.64,1) ${
                    si * 0.07
                  }s both`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "2.75rem",
                      height: "2.75rem",
                      borderRadius: "0.875rem",
                      background:
                        "linear-gradient(145deg, rgba(168,156,247,0.2), rgba(124,111,224,0.1))",
                      border: "1.5px solid rgba(124,111,224,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#7c6fe0",
                    }}
                  >
                    {section.icon}
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.35rem",
                      color: "#2d1b69",
                    }}
                  >
                    {section.title}
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                  }}
                >
                  {section.items.map((item, ii) => {
                    const key = `${si}-${ii}`;
                    return (
                      <div
                        key={ii}
                        onMouseEnter={() => setHoveredItem(key)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{
                          background:
                            hoveredItem === key
                              ? "linear-gradient(145deg, rgba(168,156,247,0.14), rgba(255,255,255,0.6))"
                              : "linear-gradient(145deg, rgba(168,156,247,0.05), rgba(255,255,255,0.4))",
                          borderRadius: "1.25rem",
                          padding: "1.1rem 1.4rem",
                          border:
                            hoveredItem === key
                              ? "1.5px solid rgba(124,111,224,0.25)"
                              : "1px solid rgba(124,111,224,0.12)",
                          cursor: "pointer",
                          transition:
                            "all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)",
                          transform:
                            hoveredItem === key
                              ? "translateX(5px)"
                              : "translateX(0)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                          }}
                        >
                          <div style={{ color: "#7c6fe0" }}>{item.icon}</div>
                          <div>
                            <h3
                              style={{
                                fontWeight: 700,
                                fontSize: "0.97rem",
                                color: "#2d1b69",
                                marginBottom: "0.2rem",
                              }}
                            >
                              {item.name}
                            </h3>
                            <p
                              style={{
                                fontSize: "0.82rem",
                                color: "#6b5fa8",
                                fontWeight: 500,
                              }}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "1.75rem",
                            height: "1.75rem",
                            borderRadius: "50%",
                            background:
                              hoveredItem === key
                                ? "linear-gradient(145deg, #a89cf7, #7c6fe0)"
                                : "rgba(124,111,224,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.25s",
                            color: hoveredItem === key ? "white" : "#7c6fe0",
                            flexShrink: 0,
                          }}
                        >
                          <ChevronRight size={12} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Danger Zone */}
          <div
            style={{
              marginTop: "2.5rem",
              background:
                "linear-gradient(145deg, rgba(255,100,100,0.07), rgba(255,100,100,0.03))",
              borderRadius: "2rem",
              padding: "2.25rem",
              border: "2px solid rgba(239,68,68,0.25)",
              boxShadow: "0 8px 24px rgba(239,68,68,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "0.875rem",
                  background: "rgba(239,68,68,0.1)",
                  border: "1.5px solid rgba(239,68,68,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AlertCircle size={20} color="#dc2626" />
              </div>
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.35rem",
                  color: "#dc2626",
                }}
              >
                Danger Zone
              </h2>
            </div>
            {[
              {
                name: "Deactivate Account",
                desc: "Temporarily disable your account",
              },
              {
                name: "Delete Account",
                desc: "Permanently delete your account and all data",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,100,100,0.05)",
                  borderRadius: "1.25rem",
                  padding: "1.1rem 1.4rem",
                  border: "1px solid rgba(239,68,68,0.18)",
                  cursor: "pointer",
                  transition: "all 0.28s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: i === 0 ? "0.6rem" : 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,100,100,0.1)";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,100,100,0.05)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "0.97rem",
                      color: "#dc2626",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "#6b5fa8",
                      fontWeight: 500,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
                <div
                  style={{
                    width: "1.75rem",
                    height: "1.75rem",
                    borderRadius: "50%",
                    background: "rgba(239,68,68,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#dc2626",
                  }}
                >
                  <ChevronRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Sora:wght@400;600;700;800&display=swap");
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(25px);
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
      `}</style>
    </div>
  );
}
