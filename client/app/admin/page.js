"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { LineChartComponent, BarChartComponent } from "@/components/Charts";
import {
  adminGetStats, adminGetUsers, adminSetUserBan, adminDeleteUser,
  adminGetPosts, adminDeletePost, adminSetPostSpam,
  adminGetChats, adminGetChatMessages, adminGetRequests, getUserProfile,
} from "@/utils/api";
import { BarChart2, Users, FileText, Handshake, MessageCircle } from "lucide-react";

const tabs = [
  { name: "Overview", icon: <BarChart2 size={16} /> },
  { name: "Users", icon: <Users size={16} /> },
  { name: "Posts", icon: <FileText size={16} /> },
  { name: "Requests", icon: <Handshake size={16} /> },
  { name: "Chats", icon: <MessageCircle size={16} /> },
];

// Keep the icon as a ReactElement in the tab so Sidebar can render it
const tabsForSidebar = tabs.map((t) => ({ ...t }));

const categoryColors = {
  Emergency: { bg: "rgba(255,100,100,0.12)", border: "rgba(255,100,100,0.3)", text: "#dc2626" },
  Education: { bg: "rgba(96,196,248,0.12)", border: "rgba(96,196,248,0.3)", text: "#0ea5e9" },
  Errands: { bg: "rgba(110,231,183,0.12)", border: "rgba(110,231,183,0.3)", text: "#059669" },
  Technical: { bg: "rgba(255,179,71,0.12)", border: "rgba(255,179,71,0.3)", text: "#d97706" },
};
const defaultColor = { bg: "rgba(168,156,247,0.12)", border: "rgba(124,111,224,0.3)", text: "#7c6fe0" };

const GlassCard = ({ children, style = {} }) => (
  <div style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.93), rgba(240,230,255,0.7))", borderRadius: "2rem", padding: "1.75rem 2rem", boxShadow: "0 8px 28px rgba(124,111,224,0.14), inset 0 1px 0 rgba(255,255,255,0.8)", border: "1.5px solid rgba(255,255,255,0.8)", ...style }}>
    {children}
  </div>
);

const Pill = ({ children, colorSet = defaultColor }) => (
  <span style={{ display: "inline-flex", alignItems: "center", padding: "0.25rem 0.8rem", borderRadius: "2rem", background: colorSet.bg, border: `1px solid ${colorSet.border}`, fontSize: "0.75rem", fontWeight: 700, color: colorSet.text, textTransform: "uppercase", letterSpacing: "0.02em" }}>
    {children}
  </span>
);

const PillButton = ({ children, onClick, variant = "primary" }) => {
  const styles = {
    primary: { border: "none", background: "linear-gradient(145deg, #a89cf7, #7c6fe0)", color: "white", boxShadow: "0 6px 18px rgba(124,111,224,0.4)" },
    outline: { border: "2px solid rgba(124,111,224,0.3)", background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.6))", color: "#7c6fe0", boxShadow: "0 4px 14px rgba(124,111,224,0.14)" },
    danger: { border: "2px solid rgba(255,100,100,0.35)", background: "rgba(255,100,100,0.08)", color: "#dc2626", boxShadow: "none" },
  };
  return (
    <button onClick={onClick} style={{ padding: "0.5rem 1.25rem", borderRadius: "1.1rem", fontWeight: 800, fontSize: "0.85rem", cursor: "pointer", fontFamily: "'Nunito', sans-serif", transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)", ...styles[variant] }}>
      {children}
    </button>
  );
};

export default function AdminDashboard() {
  const router = useRouter();
  const [active, setActive] = useState("Overview");
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [requests, setRequests] = useState([]);
  const [chats, setChats] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const loadOverview = async () => setStats(await adminGetStats());
  const loadUsers = async () => setUsers(await adminGetUsers());
  const loadPosts = async () => setPosts(await adminGetPosts());
  const loadRequests = async () => setRequests(await adminGetRequests());
  const loadChats = async () => setChats(await adminGetChats());

  useEffect(() => {
    const init = async () => {
      try {
        const profile = await getUserProfile();
        if (profile?.role !== "admin") { router.replace("/"); return; }
        setAuthorized(true);
        await loadOverview();
      } catch (err) {
        setError(err.message || "Failed to load admin data. Are you an admin?");
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (!authorized) return;
    const fetchForTab = async () => {
      setError("");
      try {
        if (active === "Overview" && !stats) await loadOverview();
        if (active === "Users" && users.length === 0) await loadUsers();
        if (active === "Posts" && posts.length === 0) await loadPosts();
        if (active === "Requests" && requests.length === 0) await loadRequests();
        if (active === "Chats" && chats.length === 0) await loadChats();
      } catch (err) { setError(err.message || "Failed to load data"); }
    };
    fetchForTab();
  }, [active, authorized]);

  const handleBanToggle = async (user) => {
    try { await adminSetUserBan(user._id, !user.isBanned); await loadUsers(); }
    catch (err) { alert(err.message || "Failed to update user"); }
  };
  const handleDeleteUser = async (user) => {
    if (!confirm(`Delete user ${user.name}? This cannot be undone.`)) return;
    try { await adminDeleteUser(user._id); await loadUsers(); }
    catch (err) { alert(err.message || "Failed to delete user"); }
  };
  const handleDeletePost = async (post) => {
    if (!confirm(`Delete post "${post.title}"?`)) return;
    try { await adminDeletePost(post._id); await loadPosts(); }
    catch (err) { alert(err.message || "Failed to delete post"); }
  };
  const handleSpamToggle = async (post) => {
    try { await adminSetPostSpam(post._id, !post.isSpam); await loadPosts(); }
    catch (err) { alert(err.message || "Failed to update post"); }
  };
  const openRoom = async (room) => {
    setSelectedRoom(room);
    try { const msgs = await adminGetChatMessages(room._id); setRoomMessages(msgs); }
    catch { setRoomMessages([]); }
  };

  const pageWrap = { minHeight: "100vh", background: "linear-gradient(135deg, #f0e6ff 0%, #ffe4f0 50%, #e4f0ff 100%)", fontFamily: "'Nunito', sans-serif" };

  if (loading || !authorized) {
    return (
      <div style={pageWrap}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
          <div style={{ width: "4rem", height: "4rem", border: "4px solid rgba(124,111,224,0.2)", borderTopColor: "#7c6fe0", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ ...pageWrap, display: "flex" }}>
      <Sidebar active={active} onSelect={setActive} items={tabsForSidebar} />

      <div style={{ flex: 1, padding: "2rem 2.5rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#2d1b69", marginBottom: "0.4rem" }}>
            Admin{" "}
            <span style={{ background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Dashboard</span>
          </h1>
          <p style={{ color: "#5a4d9e", fontWeight: 500, fontSize: "1rem" }}>Monitor and manage Locora</p>
        </div>

        {/* Mobile tabs */}
        <div className="lg:hidden" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {tabs.map((t) => {
            const isActive = active === t.name;
            return (
              <button key={t.name} onClick={() => setActive(t.name)} style={{ padding: "0.5rem 1.1rem", borderRadius: "1.1rem", fontWeight: 800, fontSize: "0.85rem", border: isActive ? "none" : "2px solid rgba(124,111,224,0.3)", background: isActive ? "linear-gradient(145deg, #a89cf7, #7c6fe0)" : "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,230,255,0.6))", color: isActive ? "white" : "#7c6fe0", cursor: "pointer", fontFamily: "'Nunito', sans-serif", boxShadow: isActive ? "0 6px 18px rgba(124,111,224,0.4)" : "0 4px 14px rgba(124,111,224,0.14)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                {t.icon} {t.name}
              </button>
            );
          })}
        </div>

        {error && <p style={{ color: "#dc2626", fontWeight: 600, marginBottom: "1.5rem" }}>{error}</p>}

        {active === "Overview" && stats && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              { label: "Total Users", value: stats.totalUsers },
              { label: "Total Posts", value: stats.totalPosts, sub: `${stats.openPosts} open · ${stats.resolvedPosts} resolved · ${stats.spamPosts} spam` },
              { label: "Help Requests", value: stats.totalRequests, sub: `${stats.acceptedRequests} accepted` },
              { label: "Messages", value: stats.totalMessages, sub: `${stats.totalRooms} chat rooms` },
            ].map((s, i) => (
              <GlassCard key={i}>
                <p style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#8b80c8", marginBottom: "0.5rem" }}>{s.label}</p>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "#2d1b69" }}>{s.value}</h2>
                {s.sub && <p style={{ fontSize: "0.78rem", color: "#8b80c8", marginTop: "0.3rem" }}>{s.sub}</p>}
              </GlassCard>
            ))}
            <GlassCard style={{ gridColumn: "span 2" }}>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, color: "#2d1b69", marginBottom: "0.75rem" }}>Signups (last 14 days)</h3>
              <LineChartComponent data={stats.signupsOverTime} />
            </GlassCard>
            <GlassCard style={{ gridColumn: "span 2" }}>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, color: "#2d1b69", marginBottom: "0.75rem" }}>New Posts (last 14 days)</h3>
              <BarChartComponent data={stats.postsOverTime} />
            </GlassCard>
          </div>
        )}

        {active === "Users" && (
          <GlassCard>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                <thead>
                  <tr style={{ textAlign: "left", borderBottom: "1.5px solid rgba(124,111,224,0.15)" }}>
                    {["Name", "Contact", "Location", "Role", "Status", "Actions"].map((h) => (
                      <th key={h} style={{ padding: "0.75rem", color: "#8b80c8", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u._id} style={{ borderBottom: "1px solid rgba(124,111,224,0.08)" }}>
                      <td style={{ padding: "0.75rem", fontWeight: 700, color: "#2d1b69" }}>{u.name}</td>
                      <td style={{ padding: "0.75rem", color: "#5a4d9e" }}>{u.email || u.phone}</td>
                      <td style={{ padding: "0.75rem", color: "#5a4d9e" }}>{u.location || "—"}</td>
                      <td style={{ padding: "0.75rem" }}><Pill colorSet={u.role === "admin" ? { bg: "rgba(255,179,71,0.12)", border: "rgba(255,179,71,0.3)", text: "#d97706" } : defaultColor}>{u.role}</Pill></td>
                      <td style={{ padding: "0.75rem" }}>{u.isBanned ? <Pill colorSet={{ bg: "rgba(255,100,100,0.12)", border: "rgba(255,100,100,0.3)", text: "#dc2626" }}>Banned</Pill> : <Pill colorSet={{ bg: "rgba(110,231,183,0.12)", border: "rgba(110,231,183,0.3)", text: "#059669" }}>Active</Pill>}</td>
                      <td style={{ padding: "0.75rem", display: "flex", gap: "0.5rem" }}>
                        <PillButton variant="outline" onClick={() => handleBanToggle(u)}>{u.isBanned ? "Unban" : "Ban"}</PillButton>
                        <PillButton variant="danger" onClick={() => handleDeleteUser(u)}>Delete</PillButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {users.length === 0 && <p style={{ color: "#8b80c8", padding: "1rem 0" }}>No users found.</p>}
            </div>
          </GlassCard>
        )}

        {active === "Posts" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {posts.map((p) => {
              const cat = categoryColors[p.category] || defaultColor;
              return (
                <GlassCard key={p._id}>
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem" }}>
                    <div>
                      <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#2d1b69", marginBottom: "0.4rem" }}>{p.title}</p>
                      <p style={{ fontSize: "0.9rem", color: "#5a4d9e", marginBottom: "0.6rem" }}>{p.description}</p>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        <Pill colorSet={cat}>{p.category}</Pill>
                        <Pill colorSet={p.type === "need" ? { bg: "rgba(255,179,71,0.12)", border: "rgba(255,179,71,0.3)", text: "#d97706" } : { bg: "rgba(110,231,183,0.12)", border: "rgba(110,231,183,0.3)", text: "#059669" }}>{p.type}</Pill>
                        <Pill colorSet={p.status === "open" ? { bg: "rgba(110,231,183,0.12)", border: "rgba(110,231,183,0.3)", text: "#059669" } : defaultColor}>{p.status}</Pill>
                        {p.isSpam && <Pill colorSet={{ bg: "rgba(255,100,100,0.12)", border: "rgba(255,100,100,0.3)", text: "#dc2626" }}>Spam</Pill>}
                      </div>
                      <p style={{ fontSize: "0.78rem", color: "#a09bc8", marginTop: "0.5rem" }}>by {p.user?.name || "Unknown"}</p>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                      <PillButton variant="outline" onClick={() => handleSpamToggle(p)}>{p.isSpam ? "Unmark Spam" : "Mark Spam"}</PillButton>
                      <PillButton variant="danger" onClick={() => handleDeletePost(p)}>Delete</PillButton>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
            {posts.length === 0 && <p style={{ color: "#8b80c8" }}>No posts found.</p>}
          </div>
        )}

        {active === "Requests" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {requests.map((r) => (
              <GlassCard key={r._id}>
                <p style={{ color: "#2d1b69", fontWeight: 600, marginBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 800 }}>{r.requester?.name}</span> → offered to help{" "}
                  <span style={{ fontWeight: 800 }}>{r.poster?.name}</span> on{" "}
                  <span style={{ color: "#7c6fe0" }}>"{r.post?.title}"</span>
                </p>
                <Pill colorSet={r.status === "accepted" ? { bg: "rgba(110,231,183,0.12)", border: "rgba(110,231,183,0.3)", text: "#059669" } : r.status === "rejected" ? { bg: "rgba(255,100,100,0.12)", border: "rgba(255,100,100,0.3)", text: "#dc2626" } : { bg: "rgba(255,179,71,0.12)", border: "rgba(255,179,71,0.3)", text: "#d97706" }}>{r.status}</Pill>
              </GlassCard>
            ))}
            {requests.length === 0 && <p style={{ color: "#8b80c8" }}>No help requests yet.</p>}
          </div>
        )}

        {active === "Chats" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }} className="lg:grid-cols-3">
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }} className="lg:col-span-1">
              {chats.map((room) => (
                <div key={room._id} onClick={() => openRoom(room)} style={{ cursor: "pointer" }}>
                  <GlassCard style={selectedRoom?._id === room._id ? { border: "1.5px solid rgba(124,111,224,0.5)", boxShadow: "0 8px 28px rgba(124,111,224,0.25)" } : {}}>
                    <p style={{ fontWeight: 700, color: "#2d1b69" }}>{room.helpPost?.title || "Untitled"}</p>
                    <p style={{ fontSize: "0.8rem", color: "#8b80c8" }}>{room.participants?.map((p) => p.name).join(" & ")}</p>
                    <p style={{ fontSize: "0.75rem", color: "#a09bc8", marginTop: "0.25rem" }}>{room.messageCount} messages</p>
                  </GlassCard>
                </div>
              ))}
              {chats.length === 0 && <p style={{ color: "#8b80c8" }}>No chat rooms yet.</p>}
            </div>
            <div className="lg:col-span-2">
              <GlassCard style={{ height: "100%" }}>
                {!selectedRoom ? (
                  <p style={{ color: "#8b80c8" }}>Select a chat to view messages.</p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxHeight: "500px", overflowY: "auto" }}>
                    {roomMessages.map((m) => (
                      <div key={m._id} style={{ borderRadius: "1.1rem", padding: "0.75rem 1rem", background: "rgba(168,156,247,0.1)" }}>
                        <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#7c6fe0", marginBottom: "0.2rem" }}>{m.sender?.name || "Unknown"}</p>
                        <p style={{ fontSize: "0.9rem", color: "#3d2c8d" }}>{m.content}</p>
                      </div>
                    ))}
                    {roomMessages.length === 0 && <p style={{ color: "#8b80c8" }}>No messages in this room.</p>}
                  </div>
                )}
              </GlassCard>
            </div>
          </div>
        )}
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}