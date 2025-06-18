"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "../utils/api";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !password || (!email && !phone) || !location) {
      setError("Please fill all required fields");
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      const userData = { name, password, location };
      if (email) userData.email = email;
      if (phone) userData.phone = phone;

      const data = await register(userData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/"); // Redirect to home page after signup
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4">
      {/* Header */}
      <div className="w-full h-[8vh] max-w-2xl flex justify-between items-center p-8">
        <div className="text-xl font-semibold">⭐ LocalHelp</div>
        <button
          onClick={() => router.push("/signin")}
          className="bg-gray-100 h-[3rem] w-[4.5rem] p-8 border-none rounded-full text-[1rem] font-extrabold flex items-center justify-center"
        >
          Sign in
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-sm mt-12">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Create an Account
        </h1>

        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">
              Email (Optional if phone provided)
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">
              Phone (Optional if email provided)
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">Location</label>
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-full hover:bg-blue-600 transition disabled:bg-blue-300"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Sign up"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
