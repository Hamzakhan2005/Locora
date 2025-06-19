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

export default function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <Navbar />
      <div>
        <h2 className="text-2xl font-bold mb-4">Community Posts</h2>
        {posts.length === 0 ? (
          <p className="text-gray-600">No posts yet.</p>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="border p-4 rounded mb-4 shadow">
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
                    [`& > *`]: {
                      "--stack-point": "500px",
                      minWidth:
                        "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
                    },
                    // make the card resizable for demo
                    overflow: "auto",
                    resize: "horizontal",
                  }}
                >
                  <CardContent>
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
                      <Button variant="outlined" color="neutral">
                        Chat
                      </Button>
                      <Button variant="solid" color="primary">
                        Follow
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
    </div>
  );
}
