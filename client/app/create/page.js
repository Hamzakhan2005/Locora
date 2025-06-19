"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { createHelpRequest } from "@/utils/api";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";

export default function CreateHelpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const { title, description, location, category } = data;

    if (!title || !description || !location || !category) {
      alert("All fields are required");
      return;
    }

    try {
      await createHelpRequest(data);
      router.push("/");
    } catch (err) {
      alert(err.message || "Error creating help post");
    }
  };

  return (
    <div className="">
      <Navbar />
      <h2 className="">Create Help Post</h2>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="title"
          placeholder="Title"
          className=""
          {...register("title", { required: true })}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className=""
          {...register("description", { required: true })}
          required
        />
        <input
          name="category"
          placeholder="Category"
          className=""
          {...register("category", { required: true })}
          required
        />
        <input
          name="location"
          placeholder="Location"
          className=""
          {...register("location", { required: true })}
        />
        <select
          name="type"
          className=""
          {...register("type", { required: true })}
        >
          <option value="need">Need Help</option>
          <option value="offer">Offer Help</option>
        </select>
        <input
          type="submit"
          className=""
          disabled={isSubmitting}
          value={isSubmitting ? "Creating..." : "Create Post"}
        />
      </form>
      <Footer />
    </div>
  );
}
