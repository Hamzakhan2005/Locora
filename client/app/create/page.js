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
    <div className="w-[100%] h-[100%] overflow-x-hidden text-[#ecf39e]">
      <Navbar />
      <div className="w-[97vw] px-[2vw] py-[2vh] mx-[1vw] my-[1vh] flex flex-col  justify-center items-center">
        <h2 className="">Create Help Post</h2>
        <form
          className="w-[60vw] h-[50vh] flex flex-col items-center justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            name="title"
            placeholder="Title"
            className="bg-transparent text-[#fff] w-[30vw]"
            {...register("title", { required: true })}
            required
          />
          <Textarea
            name="description"
            placeholder="Description"
            className="bg-transparent text-[#fff] w-[30vw]"
            {...register("description", { required: true })}
            required
          />
          <Input
            name="category"
            placeholder="Category"
            className="bg-transparent text-[#fff] w-[30vw]"
            {...register("category", { required: true })}
            required
          />
          <Input
            name="location"
            placeholder="Location"
            className="bg-transparent text-[#fff] w-[30vw]"
            {...register("location", { required: true })}
          />
          <Select
            name="type"
            className="bg-transparent text-[#fff] w-[30vw]"
            placeholder="State type of Help"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 240,
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
            {...register("type", { required: true })}
          >
            <Option value="need">Need Help</Option>
            <Option value="offer">Offer Help</Option>
          </Select>
          <Input
            type="submit"
            className="bg-[#14bd28] text-[#fff] w-[30vw]"
            disabled={isSubmitting}
            color="success"
            variant="solid"
            value={isSubmitting ? "Creating..." : "Create Post"}
          />
        </form>
      </div>

      <Footer />
    </div>
  );
}
