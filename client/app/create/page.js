"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { createHelpRequest } from "@/utils/api";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

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
    <div className="min-h-screen w-[100%] overflow-x-hidden bg-[#070f2b]">
      <Navbar />

      <div className="max-w-[900px] mx-auto px-[2rem] py-[3rem]">
        {/* Header */}
        <div className="text-center mb-[3rem]">
          <div className="inline-block px-[1.5rem] py-[0.5rem] rounded-full text-[0.875rem] font-bold mb-[1rem] bg-[rgba(146,144,195,0.15)] text-[#9290c3]">
            New Post
          </div>
          <h2 className="text-[3rem] font-bold text-[#9290c3] mb-[0.5rem]">
            Create Help Post
          </h2>
          <p className="text-[1.125rem] text-[#d1d5db]">
            Share your request with the community
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[rgba(146,144,195,0.08)] rounded-[1.5rem] p-[3rem] border-[2px] border-[#9290c3] shadow-2xl">
          <div className="flex flex-col gap-[2rem]">
            {/* Title Input */}
            <div>
              <label className="block text-[1rem] font-semibold text-[#9290c3] mb-[0.75rem]">
                Title <span className="text-[#ef4444]">*</span>
              </label>
              <Input
                name="title"
                placeholder="e.g., Need help moving furniture"
                {...register("title", { required: true })}
                required
                sx={{
                  width: "100%",
                  backgroundColor: "#070f2b",
                  border: "2px solid #9290c3",
                  borderRadius: "0.75rem",
                  padding: "0.75rem 1rem",
                  fontSize: "1rem",
                  color: "#d1d5db",
                  "&:hover": {
                    borderColor: "#9290c3",
                  },
                  "&:focus-within": {
                    borderColor: "#9290c3",
                  },
                }}
              />
            </div>

            {/* Description Textarea */}
            <div>
              <label className="block text-[1rem] font-semibold text-[#9290c3] mb-[0.75rem]">
                Description <span className="text-[#ef4444]">*</span>
              </label>
              <Textarea
                name="description"
                placeholder="Describe what you need help with in detail..."
                {...register("description", { required: true })}
                required
                minRows={4}
                sx={{
                  width: "100%",
                  backgroundColor: "#070f2b",
                  border: "2px solid #9290c3",
                  borderRadius: "0.75rem",
                  padding: "0.75rem 1rem",
                  fontSize: "1rem",
                  color: "#d1d5db",
                  "&:hover": {
                    borderColor: "#9290c3",
                  },
                  "&:focus-within": {
                    borderColor: "#9290c3",
                  },
                }}
              />
            </div>

            {/* Category Input */}
            <div>
              <label className="block text-[1rem] font-semibold text-[#9290c3] mb-[0.75rem]">
                Category <span className="text-[#ef4444]">*</span>
              </label>
              <Input
                name="category"
                placeholder="e.g., Moving, Education, Emergency"
                {...register("category", { required: true })}
                required
                sx={{
                  width: "100%",
                  backgroundColor: "#070f2b",
                  border: "2px solid #9290c3",
                  borderRadius: "0.75rem",
                  padding: "0.75rem 1rem",
                  fontSize: "1rem",
                  color: "#d1d5db",
                  "&:hover": {
                    borderColor: "#9290c3",
                  },
                  "&:focus-within": {
                    borderColor: "#9290c3",
                  },
                }}
              />
            </div>

            {/* Location Input */}
            <div>
              <label className="block text-[1rem] font-semibold text-[#9290c3] mb-[0.75rem]">
                Location <span className="text-[#ef4444]">*</span>
              </label>
              <Input
                name="location"
                placeholder="Your location"
                {...register("location", { required: true })}
                required
                sx={{
                  width: "100%",
                  backgroundColor: "#070f2b",
                  border: "2px solid #9290c3",
                  borderRadius: "0.75rem",
                  padding: "0.75rem 1rem",
                  fontSize: "1rem",
                  color: "#d1d5db",
                  "&:hover": {
                    borderColor: "#9290c3",
                  },
                  "&:focus-within": {
                    borderColor: "#9290c3",
                  },
                }}
              />
            </div>

            {/* Type Select */}
            <div>
              <label className="block text-[1rem] font-semibold text-[#9290c3] mb-[0.75rem]">
                Type of Help <span className="text-[#ef4444]">*</span>
              </label>
              <Select
                name="type"
                placeholder="State type of Help"
                indicator={<KeyboardArrowDown />}
                {...register("type", { required: true })}
                sx={{
                  width: "100%",
                  backgroundColor: "#070f2b",
                  border: "2px solid #9290c3",
                  borderRadius: "0.75rem",
                  padding: "0.5rem 1rem",
                  fontSize: "1rem",
                  color: "#d1d5db",
                  "&:hover": {
                    borderColor: "#9290c3",
                  },
                  [`& .${selectClasses.indicator}`]: {
                    transition: "0.2s",
                    color: "#9290c3",
                    [`&.${selectClasses.expanded}`]: {
                      transform: "rotate(-180deg)",
                    },
                  },
                }}
              >
                <Option value="need">🆘 Need Help</Option>
                <Option value="offer">🤝 Offer Help</Option>
              </Select>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="w-[100%] bg-[#9290c3] hover:bg-[#7b79a8] text-[#ffffff] font-semibold py-[1rem] px-[2rem] rounded-[0.75rem] text-[1.125rem] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg mt-[1rem]"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-[0.5rem]">
                  <svg
                    className="animate-spin h-[1.25rem] w-[1.25rem]"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Creating Post...
                </span>
              ) : (
                "Create Post"
              )}
            </button>
          </div>
        </div>

        {/* Help Tips */}
        <div className="mt-[2rem] bg-[rgba(146,144,195,0.1)] border-[1px] border-[#9290c3] rounded-[1rem] p-[1.5rem]">
          <div className="flex gap-[1rem]">
            <span className="text-[2rem]">💡</span>
            <div>
              <h3 className="font-semibold text-[1.125rem] text-[#9290c3] mb-[0.75rem]">
                Tips for a great post:
              </h3>
              <ul className="text-[0.875rem] text-[#d1d5db] space-y-[0.5rem]">
                <li className="flex items-start gap-[0.5rem]">
                  <span className="text-[#9290c3] font-bold">•</span>
                  <span>Be specific about what you need</span>
                </li>
                <li className="flex items-start gap-[0.5rem]">
                  <span className="text-[#9290c3] font-bold">•</span>
                  <span>Include relevant details like time and location</span>
                </li>
                <li className="flex items-start gap-[0.5rem]">
                  <span className="text-[#9290c3] font-bold">•</span>
                  <span>Be respectful and appreciative</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
