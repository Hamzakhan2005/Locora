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
    <div className="text-[#000] w-[100%] h-[100%] overflow-x-hidden">
      <Navbar />
      <div className="w-[97vw] h-[90vh] px-[2vw] py-[2vh] mx-[1vw] my-[1vh] flex flex-col  items-center">
        <div className="h-[20vh]">
          <h1>Welcome To Locora</h1>

          <p>Already a helper?</p>
          <Link href="/signin" variant="plain">
            Sign in
          </Link>
        </div>

        {error && <div className="">{error}</div>}
        <div className=" flex flex-row justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-[60vw] h-[20vh] flex flex-col items-center justify-between"
          >
            <FormLabel className="text-[#fff]">Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              className="bg-transparent text-[#fff] w-[30vw] m-[0.5rem]"
              {...register("name", { required: true })}
              required
            />

            <FormLabel className="text-[#fff]">
              Email (Optional if phone provided)
            </FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-[#fff] w-[30vw] m-[0.5rem]"
              {...register("email")}
            />

            <FormLabel className="text-[#fff]">
              Phone (Optional if email provided)
            </FormLabel>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              className="bg-transparent text-[#fff] w-[30vw] m-[0.5rem]"
              {...register("phone")}
            />

            <FormLabel className="text-[#fff]">Password</FormLabel>
            <Input
              type="password"
              placeholder="Create a password"
              className="bg-transparent text-[#fff] w-[30vw] m-[0.5rem]"
              {...register("password", { required: true })}
              required
            />

            <FormLabel className="text-[#fff]">Location</FormLabel>
            <Input
              type="text"
              placeholder="Enter your location"
              className="bg-transparent text-[#fff] w-[30vw] m-[0.5rem]"
              {...register("location", { required: true })}
              required
            />

            <Input
              type="submit"
              className="bg-[#14bd28] text-[#fff] w-[30vw]"
              disabled={isSubmitting}
              value={isSubmitting ? "Creating account..." : "Sign up"}
            />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
