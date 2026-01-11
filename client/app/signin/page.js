"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Input from "@mui/joy/Input";
import FormLabel from "@mui/joy/FormLabel";
import Link from "@mui/joy/Link";

export default function LoginPage() {
  const {
    register: registerEmail,
    handleSubmit: handleEmailSubmit,
    formState: { errors: emailErrors, isSubmitting: emailSubmitting },
  } = useForm();
  const {
    register: registerPhone,
    handleSubmit: handlePhoneSubmit,
    formState: { errors: phoneErrors, isSubmitting: phoneSubmitting },
  } = useForm();

  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleEmailLogin = async (data) => {
    const { email, password } = data;
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      setError("");
      await login(email, password, false);
      router.push("/");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  const handlePhoneLogin = async (data) => {
    const { phone, password } = data;
    if (!phone || !password) {
      setError("Please enter both phone number and password");
      return;
    }

    try {
      setError("");
      await login(phone, password, true);
      router.push("/");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen w-[100%] overflow-x-hidden bg-[#070f2b]">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-[2rem] py-[3rem]">
        {/* Header */}
        <div className="text-center mb-[3rem]">
          <div className="inline-block px-[1.5rem] py-[0.5rem] rounded-full text-[0.875rem] font-bold mb-[1rem] bg-[rgba(146,144,195,0.15)] text-[#9290c3]">
            Welcome Back
          </div>
          <h1 className="text-[3.5rem] font-bold text-[#9290c3] mb-[0.5rem]">
            Sign In to Locora
          </h1>
          <p className="text-[1.125rem] text-[#d1d5db]">
            Choose your preferred login method
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-[600px] mx-auto mb-[2rem] bg-[rgba(239,68,68,0.1)] border-[2px] border-[#ef4444] rounded-[0.75rem] p-[1rem] text-center">
            <p className="text-[1rem] text-[#ef4444] font-semibold">{error}</p>
          </div>
        )}

        {/* Login Forms Container */}
        <div className="flex flex-col lg:flex-row gap-[2rem] justify-center items-start max-w-[1000px] mx-auto">
          {/* Email Login Form */}
          <div className="flex-1 bg-[rgba(146,144,195,0.08)] rounded-[1.5rem] p-[2.5rem] border-[2px] border-[#9290c3] shadow-2xl">
            <div className="mb-[2rem] text-center">
              <div className="w-[3rem] h-[3rem] bg-[#9290c3] rounded-full flex items-center justify-center mx-auto mb-[1rem]">
                <span className="text-[1.5rem]">📧</span>
              </div>
              <h3 className="text-[1.5rem] font-bold text-[#9290c3]">
                Email Login
              </h3>
            </div>

            <div className="flex flex-col gap-[1.5rem]">
              <div>
                <FormLabel className="text-[1rem] font-semibold text-[#9290c3] mb-[0.5rem] block">
                  Email
                </FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...registerEmail("email", { required: true })}
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

              <div>
                <FormLabel className="text-[1rem] font-semibold text-[#9290c3] mb-[0.5rem] block">
                  Password
                </FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...registerEmail("password", { required: true })}
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

              <button
                onClick={handleEmailSubmit(handleEmailLogin)}
                disabled={emailSubmitting}
                className="w-[100%] bg-[#9290c3] hover:bg-[#7b79a8] text-[#ffffff] font-semibold py-[0.875rem] px-[1.5rem] rounded-[0.75rem] text-[1rem] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-[0.5rem]"
              >
                {emailSubmitting ? "Signing In..." : "Sign In with Email"}
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center lg:self-center">
            <div className="w-[3rem] h-[3rem] bg-[rgba(146,144,195,0.15)] rounded-full flex items-center justify-center border-[2px] border-[#9290c3]">
              <span className="text-[1.25rem] font-bold text-[#9290c3]">
                OR
              </span>
            </div>
          </div>

          {/* Phone Login Form */}
          <div className="flex-1 bg-[rgba(146,144,195,0.08)] rounded-[1.5rem] p-[2.5rem] border-[2px] border-[#9290c3] shadow-2xl">
            <div className="mb-[2rem] text-center">
              <div className="w-[3rem] h-[3rem] bg-[#9290c3] rounded-full flex items-center justify-center mx-auto mb-[1rem]">
                <span className="text-[1.5rem]">📱</span>
              </div>
              <h3 className="text-[1.5rem] font-bold text-[#9290c3]">
                Phone Login
              </h3>
            </div>

            <div className="flex flex-col gap-[1.5rem]">
              <div>
                <FormLabel className="text-[1rem] font-semibold text-[#9290c3] mb-[0.5rem] block">
                  Phone Number
                </FormLabel>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  {...registerPhone("phone", { required: true })}
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

              <div>
                <FormLabel className="text-[1rem] font-semibold text-[#9290c3] mb-[0.5rem] block">
                  Password
                </FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...registerPhone("password", { required: true })}
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

              <button
                onClick={handlePhoneSubmit(handlePhoneLogin)}
                disabled={phoneSubmitting}
                className="w-[100%] bg-[#9290c3] hover:bg-[#7b79a8] text-[#ffffff] font-semibold py-[0.875rem] px-[1.5rem] rounded-[0.75rem] text-[1rem] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-[0.5rem]"
              >
                {phoneSubmitting ? "Signing In..." : "Sign In with Phone"}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="text-center mt-[3rem] flex flex-col gap-[1rem] items-center">
          <div className="flex gap-[2rem]">
            <Link
              href="/signup"
              sx={{
                color: "#9290c3",
                fontSize: "1rem",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Create an account
            </Link>
            <Link
              href="/forgot-password"
              sx={{
                color: "#9290c3",
                fontSize: "1rem",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
