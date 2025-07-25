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

  if (loading) return <p className="text-center mt-10">Loading posts...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className=" w-[100%] text-[#000]  overflow-x-hidden">
      <Navbar />
      <div className="w-[98vw] my-[2vh] mx-[1vh] py-[1vh] px-[1vw] flex flex-col justify-center  items-center">
        <h2 className="">Community Posts</h2>
        {posts.length === 0 ? (
          <p className="text-gray-600">No posts yet.</p>
        ) : (
          posts.map((post) => (
            <div key={post._id} className=" w-[50vw] ">
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  overflow: { xs: "auto", sm: "initial" },
                }}
              >
                <Card
                  orientation="horizontal"
                  sx={{
                    width: "100%",
                    flexWrap: "wrap",
                    backgroundColor: "#000",
                    height: "15vh",
                    width: "50vw",
                    margin: "1vh",
                    [`& > *`]: {
                      "--stack-point": "500px",
                      minWidth:
                        "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
                    },
                    // make the card resizable for demo
                    // overflow: "auto",
                    // resize: "horizontal",
                  }}
                >
                  <CardContent className="flex flex-col justify-between">
                    <Typography sx={{ fontSize: "xl", fontWeight: "lg" }}>
                      {post.title}
                    </Typography>
                    <Typography
                      level="body-sm"
                      textColor="text.tertiary"
                      sx={{ fontWeight: "lg" }}
                    >
                      {post.description}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        "& > button": { flex: 1 },
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="neutral"
                        onClick={() => handleOpenChat(post)}
                      >
                        Chat
                      </Button>

                      <Button
                        variant="solid"
                        color="primary"
                        onClick={() => handleHelp(post)}
                      >
                        Help
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </div>
          ))
        )}
        <div></div>
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
