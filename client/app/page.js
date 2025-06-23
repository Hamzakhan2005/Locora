"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import { Button } from "@/components/ui/button";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  const { user } = useAuth();
  const router = useRouter();

  const handleHelpClick = () => {
    if (!user) {
      router.push("/login");
    } else {
      router.push("/community");
    }
  };
  const handleServicesClick = () => {
    router.push("/services");
  };
  return (
    <main
      className="home-main flex text-[#ecf39e] w-[100%]  flex-col   overflow-x-hidden"
      id="home"
    >
      <Navbar />
      <div className="px-40 mb-[2rem] flex flex-col justify-center py-5 justify-center items-center">
        <div
          className="w-[80vw] h-[45vh] bottom-20 left-20 flex h-[65vh] flex-col pb-8 gap-6 bg-cover bg-center bg-no-repeat rounded-[1rem]  "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/dde656bb-5ce8-4e22-8098-e9a0bbb8de68.png"`,
          }}
        >
          <div
            className="flex flex-col gap-2 !text-white  text-center items-center"
            style={{ color: "#ecf39e" }}
          >
            <h1 className="font-display !text-white font-bold text-[3rem]">
              Welcome to Neighborly
            </h1>
            <h2 className="!text-white text-[1rem] font-normal ">
              A place for you to connect with your neighbors, share local
              resources, and help each other out.
            </h2>
            <Button
              variant="contained"
              color="success"
              onClick={handleHelpClick}
              className="no-underline text-[#ecf39e]"
            >
              Help Someone !!
            </Button>
          </div>
        </div>
        <div className="home-about  w-[80vw] mb-[2rem]" id="about">
          <h1 className="font-display ">How Locora Works</h1>
          <p className="">
            Create Help Page: Provide a form for users to submit requests for
            help or assistance. Would you like to proceed with designing these
            screens? Create Help Page: Provide a form for users to submit
            requests for help or assistance. Would you like to proceed with
            designing these screens? Create Help Page: Provide a form for users
            to submit requests for help or assistance. Would you like to proceed
            with designing these screens?
          </p>
        </div>
        <div className="w-[80vw] flex items-start flex-col" id="services">
          <Button
            variant="contained"
            color="success"
            onClick={handleServicesClick}
            className="bg-[#fff] border-none p-[0.5rem] m-[1rem]"
          >
            Explore Services
          </Button>
          <div className="flex w-full gap-[1rem] mt-[1rem]">
            <Card className="bg-[#90a955] w-[20%] p-[1rem]">
              <CardHeader>
                <h3>Post your need</h3>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className="bg-[#90a955] w-[20%] p-[1rem]">
              <CardHeader>
                <h3>Connect with Helpers</h3>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className="bg-[#90a955] w-[20%] p-[1rem]">
              <CardHeader>
                <h3>Get Assistance</h3>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="w-[80vw] flex flex-col">
          <div>
            <h1 className="font-display">Common Needs we can help with</h1>
            <p>
              Its for a desktop keep in mind it's for an Indian use so very easy
              and user friendly
            </p>
          </div>
          <div className="flex flex-row gap-[1rem]">
            <Card className="bg-[#90a955] w-[20%] p-[1rem]">
              <CardHeader>
                <h3 className="font-display">Post your need</h3>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className="bg-[#90a955] w-[20%] p-[1rem]">
              <CardHeader>
                <h3 className="font-display">Connect with Helpers</h3>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className="bg-[#90a955] w-[20%] p-[1rem]">
              <CardHeader>
                <h3 className="font-display">Get Assistance</h3>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className="bg-[#90a955] w-[20%] p-[1rem]">
              <CardHeader>
                <h3 className="font-display">Get Assistance</h3>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
