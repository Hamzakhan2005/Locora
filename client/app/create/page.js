"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { createHelpRequest } from "@/utils/api";

export default function CreateHelpPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    type: "need",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.location || !form.category) {
      alert("All fields are required");
      return;
    }

    try {
      await createHelpRequest(form);
      router.push("/");
    } catch (err) {
      alert(err.message || "Error creating help post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Create Help Post</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="category"
          placeholder="Category"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="location"
          placeholder="Location"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <select
          name="type"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        >
          <option value="need">Need Help</option>
          <option value="offer">Offer Help</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}
