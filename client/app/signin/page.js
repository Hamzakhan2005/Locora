"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    } finally {
      setIsLoading(false);
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
    } finally {
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="">
        <h1 className="">Welcome to LocalHelp</h1>

        {error && <div className="">{error}</div>}

        <form onSubmit={handleEmailSubmit(handleEmailLogin)} className="mb-6">
          <label className="">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className=""
            {...registerEmail("email", { required: true })}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className=""
            {...registerEmail("password", { required: true })}
          />
          <input
            type="submit"
            className=""
            disabled={emailSubmitting}
            value={emailSubmitting ? "Submitting" : "Submit"}
          />
        </form>

        <div className="">Or</div>

        <form onSubmit={handlePhoneSubmit(handlePhoneLogin)} className="mb-6">
          <label className="">Phone number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className=""
            {...registerPhone("phone", { required: true })}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className=""
            {...registerPhone("password", { required: true })}
          />
          <input
            type="submit"
            className=""
            disabled={phoneSubmitting}
            value={phoneSubmitting ? "Submitting" : "Submit"}
          />
        </form>

        <div className="">Or</div>

        <div className="">
          <a href="/signup" className="">
            Create an account
          </a>
          <a href="/forgot-password" className="">
            Forgot password?
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
