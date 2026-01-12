"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "../utils/api";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "@mui/joy/Link";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (data) => {
    const { name, password, email, phone, location } = data;
    if (!name || !password || (!email && !phone) || !location) {
      setError("Please fill all required fields");
      return;
    }

    try {
      setError("");
      const userData = { name, password, location };
      if (email) userData.email = email;
      if (phone) userData.phone = phone;

      const data = await registerUser(userData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/");
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen w-[100%] overflow-x-hidden bg-[#070f2b]">
      <Navbar />

      <div className="max-w-[800px] mx-auto px-[2rem] py-[3rem]">
        {/* Header */}
        <div className="text-center mb-[3rem]">
          <div className="inline-block px-[1.5rem] py-[0.5rem] rounded-full text-[0.875rem] font-bold mb-[1rem] bg-[rgba(146,144,195,0.15)] text-[#9290c3]">
            Join Us
          </div>
          <h1 className="text-[3.5rem] font-bold text-[#9290c3] mb-[0.5rem]">
            Welcome To Locora
          </h1>
          <p className="text-[1.125rem] text-[#d1d5db] mb-[1rem]">
            Create your account and start helping your community
          </p>

          <div className="mt-[1.5rem]">
            <span className="text-[1rem] text-[#d1d5db]">
              Already a helper?{" "}
            </span>
            <Link
              href="/signin"
              sx={{
                color: "#9290c3",
                fontSize: "1rem",
                fontWeight: "600",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Sign in
            </Link>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-[2rem] bg-[rgba(239,68,68,0.1)] border-[2px] border-[#ef4444] rounded-[0.75rem] p-[1rem] text-center">
            <p className="text-[1rem] text-[#ef4444] font-semibold">{error}</p>
          </div>
        )}

        {/* Signup Form */}
        <div className="bg-[rgba(146,144,195,0.08)] rounded-[1.5rem] p-[3rem] border-[2px] border-[#9290c3] shadow-2xl">
          <div className="flex flex-col gap-[1.75rem]">
            {/* Name Input */}
            <div>
              <FormLabel className="text-[1rem] font-semibold text-[#9290c3] mb-[0.75rem] block">
                Name <span className="text-[#ef4444]">*</span>
              </FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: true })}
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

            {/* Email Input */}
            <div>
              <FormLabel className="text-[1rem] font-semibold text-[#9290c3] mb-[0.75rem] block">
                Email{" "}
                <span className="text-[0.875rem] text-[#9ca3af]">
                  (Optional if phone provided)
                </span>
              </FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
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

            {/* Phone Input */}
            <div>
              <FormLabel className="text-[1rem] font-semibold text-[#9290c3] mb-[0.75rem] block">
                Phone{" "}
                <span className="text-[0.875rem] text-[#9ca3af]">
                  (Optional if email provided)
                </span>
              </FormLabel>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                {...register("phone")}
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

            {/* Password Input */}
            <div>
              <FormLabel className="text-[1rem] font-semibold text-[#9290c3] mb-[0.75rem] block">
                Password <span className="text-[#ef4444]">*</span>
              </FormLabel>
              <Input
                type="password"
                placeholder="Create a password"
                {...register("password", { required: true })}
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
              <FormLabel className="text-[1rem] font-semibold text-[#9290c3] mb-[0.75rem] block">
                Location <span className="text-[#ef4444]">*</span>
              </FormLabel>
              <Input
                type="text"
                placeholder="Enter your location"
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

            {/* Submit Button */}
            <button
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="w-[100%] bg-[#9290c3] hover:bg-[#7b79a8] text-[#ffffff] font-semibold py-[1rem] px-[2rem] rounded-[0.75rem] text-[1.125rem] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg mt-[1rem]"
            >
              {isSubmitting ? "Creating account..." : "Sign up"}
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-[2rem] bg-[rgba(146,144,195,0.1)] border-[1px] border-[#9290c3] rounded-[1rem] p-[1.5rem]">
          <div className="flex gap-[1rem]">
            <span className="text-[1.5rem]">🔒</span>
            <div>
              <p className="text-[0.875rem] text-[#d1d5db]">
                Your information is secure and will only be used to connect you
                with your local community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
