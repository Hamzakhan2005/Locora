"use client";

import { useEffect, useState } from "react";
import { getHelps } from "../utils/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import SwipeableChatDrawer from "@/components/swpipableChatDrawer";

export default function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = (post) => {
    setSelectedPost(post);
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setSelectedPost(null);
  };

  const handleHelp = async (post) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(
        `https://locora-production-9b3e.up.railway.app/api/help/${post._id}/accept`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Help offer sent!");
    } catch (err) {
      console.error("Help accept error:", err);
      alert("Failed to offer help");
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getHelps();
        setPosts(data || []);
      } catch (err) {
        setError(err.message || "Failed to load posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070f2b]">
        <Navbar />
        <div className="flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <div className="w-[4rem] h-[4rem] border-[4px] border-[#9290c3] border-t-transparent rounded-full animate-spin mx-auto mb-[1rem]"></div>
            <p className="text-[1.25rem] text-[#d1d5db]">Loading posts...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#070f2b]">
        <Navbar />
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-[1.25rem] text-[#ef4444]">{error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-[100%] bg-[#070f2b] overflow-x-hidden">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-[2rem] py-[3rem]">
        {/* Header */}
        <div className="text-center mb-[3rem]">
          <div className="inline-block px-[1.5rem] py-[0.5rem] rounded-full text-[0.875rem] font-bold mb-[1rem] bg-[rgba(146,144,195,0.15)] text-[#9290c3]">
            Community Hub
          </div>
          <h2 className="text-[3rem] font-bold text-[#9290c3] mb-[0.5rem]">
            Community Posts
          </h2>
          <p className="text-[1.125rem] text-[#d1d5db]">
            Browse help requests from your community
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-[4rem]">
            <div className="w-[5rem] h-[5rem] rounded-full bg-[rgba(146,144,195,0.1)] flex items-center justify-center mx-auto mb-[1.5rem]">
              <span className="text-[2.5rem]">📭</span>
            </div>
            <p className="text-[1.25rem] text-[#9ca3af]">
              No posts yet. Be the first to create one!
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-[1.5rem]">
            {posts.map((post) => (
              <div key={post._id} className="w-[100%]">
                <Card
                  orientation="horizontal"
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(146, 144, 195, 0.08)",
                    border: "2px solid #9290c3",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(146, 144, 195, 0.3)",
                    },
                  }}
                >
                  <CardContent
                    className="flex flex-col justify-between gap-[1rem] w-[100%]"
                    sx={{ padding: 0 }}
                  >
                    <div>
                      <Typography
                        sx={{
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          color: "#9290c3",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          color: "#d1d5db",
                          lineHeight: "1.6",
                        }}
                      >
                        {post.description}
                      </Typography>

                      {/* Meta Information */}
                      <div className="flex gap-[1rem] mt-[1rem]">
                        {post.category && (
                          <span className="px-[0.75rem] py-[0.25rem] rounded-[0.5rem] bg-[rgba(146,144,195,0.15)] text-[0.875rem] text-[#9290c3] font-semibold">
                            {post.category}
                          </span>
                        )}
                        {post.location && (
                          <span className="px-[0.75rem] py-[0.25rem] rounded-[0.5rem] bg-[rgba(146,144,195,0.15)] text-[0.875rem] text-[#d1d5db]">
                            📍 {post.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "1rem",
                        marginTop: "1rem",
                      }}
                    >
                      <Button
                        variant="outlined"
                        onClick={() => handleOpenChat(post)}
                        sx={{
                          flex: 1,
                          borderColor: "#9290c3",
                          color: "#9290c3",
                          borderRadius: "0.5rem",
                          padding: "0.75rem 1.5rem",
                          fontSize: "1rem",
                          fontWeight: "600",
                          "&:hover": {
                            borderColor: "#9290c3",
                            backgroundColor: "rgba(146, 144, 195, 0.1)",
                          },
                        }}
                      >
                        💬 Chat
                      </Button>

                      <Button
                        variant="solid"
                        onClick={() => handleHelp(post)}
                        sx={{
                          flex: 1,
                          backgroundColor: "#9290c3",
                          color: "#ffffff",
                          borderRadius: "0.5rem",
                          padding: "0.75rem 1.5rem",
                          fontSize: "1rem",
                          fontWeight: "600",
                          "&:hover": {
                            backgroundColor: "#7b79a8",
                          },
                        }}
                      >
                        🤝 Help
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <SwipeableChatDrawer
        open={isChatOpen}
        onClose={handleCloseChat}
        onOpen={() => {}}
        post={selectedPost}
      />
    </div>
  );
}
