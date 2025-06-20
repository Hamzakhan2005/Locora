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
    <div className="text-[#fff] w-[100%] h-[100%] overflow-x-hidden">
      <Navbar />
      <div className="w-[97vw] px-[2vw] py-[2vh] mx-[1vw] my-[1vh] flex flex-col  justify-center items-center">
        <h1 className="">Welcome Back</h1>

        {error && <div className="">{error}</div>}
        <div className="flex flex-row justify-center items-center">
          <form
            onSubmit={handleEmailSubmit(handleEmailLogin)}
            className="w-[60vw] h-[20vh] flex flex-col items-center justify-between mb-6"
          >
            <FormLabel className="text-[#fff]">Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-[#fff] w-[30vw]"
              {...registerEmail("email", { required: true })}
              required
            />
            <Input
              type="password"
              placeholder="Enter your password"
              className="bg-transparent text-[#fff] w-[30vw]"
              required
              {...registerEmail("password", { required: true })}
            />
            <Input
              type="submit"
              className="bg-[#14bd28] text-[#fff] w-[30vw]"
              disabled={emailSubmitting}
              value={emailSubmitting ? "Submitting" : "Submit"}
            />
          </form>

          <div className="">Or</div>

          <form
            onSubmit={handlePhoneSubmit(handlePhoneLogin)}
            className="w-[60vw] h-[20vh] flex flex-col items-center justify-between mb-[2rem]"
          >
            <FormLabel className="text-[#fff]">Phone number</FormLabel>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              required
              className="bg-transparent text-[#fff] w-[30vw]"
              {...registerPhone("phone", { required: true })}
            />
            <Input
              type="password"
              required
              placeholder="Enter your password"
              className="bg-transparent text-[#fff] w-[30vw]"
              {...registerPhone("password", { required: true })}
            />
            <Input
              type="submit"
              className="bg-[#14bd28] text-[#fff] w-[30vw]"
              disabled={phoneSubmitting}
              value={phoneSubmitting ? "Submitting" : "Submit"}
            />
          </form>
        </div>
        <div className="">Or</div>

        <div className=" p-[2rem] flex flex-row gap-[2rem]">
          <Link href="/signup" variant="plain">
            Create an account
          </Link>
          <Link href="/forgot-password" variant="plain">
            Forgot password?
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
