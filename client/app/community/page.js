"use client";

import { useEffect, useState } from "react";
import { getHelps } from "../utils/api";

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
      <h2 className="text-2xl font-bold mb-4">Community Posts</h2>
      {posts.length === 0 ? (
        <p className="text-gray-600">No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="border p-4 rounded mb-4 shadow">
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="mt-1">{post.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Category: {post.category} | Type: {post.type}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
