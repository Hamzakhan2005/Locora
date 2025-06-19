"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "../utils/api";
import { useForm } from "react-hook-form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      // setIsLoading(true);
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
    <div className="">
      <Navbar />
      <div className="">
        <div className="">⭐ LocalHelp</div>
        <button onClick={() => router.push("/signin")} className="">
          Sign in
        </button>
      </div>

      <div className="">
        <h1 className="">Create an Account</h1>

        {error && <div className="">{error}</div>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className=""
              {...register("name", { required: true })}
              required
            />
          </div>

          <div className="">
            <label className="">Email (Optional if phone provided)</label>
            <input
              type="email"
              placeholder="Enter your email"
              className=""
              {...register("email")}
            />
          </div>

          <div className="">
            <label className="">Phone (Optional if email provided)</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className=""
              {...register("phone")}
            />
          </div>

          <div className="mb-4">
            <label className="">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className=""
              {...register("password", { required: true })}
              required
            />
          </div>

          <div className="">
            <label className="">Location</label>
            <input
              type="text"
              placeholder="Enter your location"
              className=""
              {...register("location", { required: true })}
              required
            />
          </div>

          <input
            type="submit"
            className=""
            disabled={isSubmitting}
            value={isSubmitting ? "Creating account..." : "Sign up"}
          />
        </form>

        <div className="">
          <p className="">
            Already have an account?{" "}
            <a href="/signin" className="">
              Sign in
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
