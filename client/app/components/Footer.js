"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.8), rgba(240,230,255,0.7))",
        backdropFilter: "blur(20px)",
        borderTop: "1.5px solid rgba(124,111,224,0.2)",
        padding: "3rem 2rem 2rem",
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "2rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "0.75rem",
                  background: "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                  boxShadow: "0 4px 12px rgba(124,111,224,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                }}
              >
                🏘️
              </div>
              <span
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Locora
              </span>
            </div>
            <p
              style={{
                color: "#6b5fa8",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              Connecting communities, one helping hand at a time. Building
              stronger neighborhoods together. 🌸
            </p>
            <div
              style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}
            >
              {["🐦", "📸", "💼", "📘"].map((icon, i) => (
                <div
                  key={i}
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "0.75rem",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.7))",
                    boxShadow:
                      "0 3px 10px rgba(124,111,224,0.2), inset 0 1px 0 rgba(255,255,255,0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0) scale(1)")
                  }
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Platform",
              links: ["Community", "Services", "Create Post", "About Us"],
            },
            {
              title: "Support",
              links: ["Help Center", "Contact", "Privacy", "Terms"],
            },
            { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
          ].map((col, i) => (
            <div key={i}>
              <h4
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#7c6fe0",
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {col.title}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      style={{
                        color: "#6b5fa8",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        transition: "all 0.2s ease",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#7c6fe0";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#6b5fa8";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1.5px solid rgba(124,111,224,0.15)",
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "#8b80c8", fontSize: "0.85rem", fontWeight: 600 }}>
            © 2025 Locora · Made with 💜 for communities
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: "2rem",
              background:
                "linear-gradient(135deg, rgba(124,111,224,0.1), rgba(255,126,179,0.1))",
              border: "1px solid rgba(124,111,224,0.2)",
            }}
          >
            <span style={{ fontSize: "0.75rem" }}>🌍</span>
            <span
              style={{ color: "#7c6fe0", fontSize: "0.8rem", fontWeight: 700 }}
            >
              India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
