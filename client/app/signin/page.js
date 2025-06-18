"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useForm, SubmitHandler } from "react-hook-form";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      await login(email, password, false);
      router.push("/"); // Redirect to home page after login
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneLogin = async (e) => {
    e.preventDefault();
    if (!phone || !password) {
      setError("Please enter both phone number and password");
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      await login(phone, password, true);
      router.push("/"); // Redirect to home page after login
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      {/* Main Card */}
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-sm mt-12">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Welcome to LocalHelp
        </h1>

        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        {/* Email Form */}
        <form onSubmit={handleEmailLogin} className="mb-6">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-gray-100 rounded-md mb-2 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 bg-gray-100 rounded-md mb-2 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-full hover:bg-blue-600 transition disabled:bg-blue-300"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Continue with email"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-400 mb-6">Or</div>

        {/* Phone Form */}
        <form onSubmit={handlePhoneLogin} className="mb-6">
          <label className="block mb-1 text-sm font-medium">Phone number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 bg-gray-100 rounded-md mb-2 outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={isLoading}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 bg-gray-100 rounded-md mb-2 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-full hover:bg-blue-600 transition disabled:bg-blue-300"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Continue with phone"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-400 mb-4">Or</div>

        <div className="flex flex-col items-center gap-2 text-sm">
          <a href="/signup" className="text-blue-500 hover:underline">
            Create an account
          </a>
          <a href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}
