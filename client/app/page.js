"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
      router.push("/signin");
    } else {
      router.push("/community");
    }
  };
  const handleNeedClick = () => {
    if (!user) {
      router.push("/signin");
    } else {
      router.push("/create");
    }
  };
  const handleServicesClick = () => {
    router.push("/services");
  };
  
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden bg-[#070f2b]">
      <Navbar />
      
      <div className="px-[10rem] mb-[3rem] flex flex-col justify-center py-[2rem] items-center">
        {/* Hero Section */}
        <div
          className="w-[80vw] h-[65vh] flex flex-col justify-center items-center pb-[2rem] gap-[1.5rem] bg-cover bg-center bg-no-repeat rounded-[1.5rem] shadow-2xl mb-[4rem]"
          style={{
            backgroundImage: `linear-gradient(rgba(7, 15, 43, 0.7) 0%, rgba(146, 144, 195, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/dde656bb-5ce8-4e22-8098-e9a0bbb8de68.png")`,
          }}
        >
          <div className="flex flex-col gap-[1.5rem] text-center items-center px-[2rem]">
            <h1 className="font-display font-bold text-[4.5rem] text-[#9290c3] leading-tight">
              Welcome to Locora
            </h1>
            <h2 className="text-[1.5rem] font-normal text-[#ffffff] max-w-[700px] leading-relaxed">
              A place for you to connect with your neighbors, share local resources, and help each other out.
            </h2>
            <div className="flex gap-[1.5rem] mt-[2rem]">
              <Button
                variant="contained"
                onClick={handleHelpClick}
                className="px-[3rem] py-[1rem] text-[1.125rem] font-semibold rounded-[0.75rem] bg-[#9290c3] text-[#ffffff] hover:bg-[#7b79a8] transition-all duration-300"
                style={{ backgroundColor: '#9290c3', color: '#ffffff' }}
              >
                Help Someone !!
              </Button>
              <Button
                variant="contained"
                onClick={handleNeedClick}
                className="px-[3rem] py-[1rem] text-[1.125rem] font-semibold rounded-[0.75rem] bg-[#ffffff] text-[#070f2b] hover:bg-[#e5e5e5] transition-all duration-300"
                style={{ backgroundColor: '#ffffff', color: '#070f2b' }}
              >
                Need Help !!
              </Button>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="w-[80vw] mb-[4rem] bg-[rgba(146,144,195,0.1)] rounded-[1.5rem] p-[3rem] border-[2px] border-[#9290c3]">
          <h1 className="font-display text-[3rem] font-bold text-[#9290c3] mb-[1.5rem]">
            How Locora Works
          </h1>
          <p className="text-[1.25rem] leading-relaxed text-[#d1d5db]">
            Create Help Page: Provide a form for users to submit requests for help or assistance. Would you like to proceed with designing these screens? Create Help Page: Provide a form for users to submit requests for help or assistance. Would you like to proceed with designing these screens? Create Help Page: Provide a form for users to submit requests for help or assistance. Would you like to proceed with designing these screens?
          </p>
        </div>

        {/* Services Section */}
        <div className="w-[80vw] flex items-start flex-col mb-[4rem]">
          <Button
            variant="contained"
            onClick={handleServicesClick}
            className="px-[2rem] py-[0.75rem] m-[1rem] mb-[2rem] rounded-[0.75rem] font-semibold text-[1rem] bg-[#9290c3] text-[#ffffff]"
            style={{ backgroundColor: '#9290c3', color: '#ffffff' }}
          >
            Explore Services
          </Button>
          <div className="flex w-[100%] gap-[1.5rem] mt-[1rem]">
            <Card className="bg-[rgba(146,144,195,0.15)] w-[30%] p-[1.5rem] rounded-[1rem] border-[2px] border-[#9290c3] hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <h3 className="text-[1.5rem] font-bold text-[#9290c3]">Post your need</h3>
              </CardHeader>
              <CardContent>
                <p className="text-[1rem] text-[#d1d5db]">Share what you need help with and connect with your community</p>
              </CardContent>
              <CardFooter>
                <p className="text-[0.875rem] text-[#9290c3] font-semibold">Get Started →</p>
              </CardFooter>
            </Card>
            <Card className="bg-[rgba(146,144,195,0.15)] w-[30%] p-[1.5rem] rounded-[1rem] border-[2px] border-[#9290c3] hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <h3 className="text-[1.5rem] font-bold text-[#9290c3]">Connect with Helpers</h3>
              </CardHeader>
              <CardContent>
                <p className="text-[1rem] text-[#d1d5db]">Find people nearby ready to lend a helping hand</p>
              </CardContent>
              <CardFooter>
                <p className="text-[0.875rem] text-[#9290c3] font-semibold">Learn More →</p>
              </CardFooter>
            </Card>
            <Card className="bg-[rgba(146,144,195,0.15)] w-[30%] p-[1.5rem] rounded-[1rem] border-[2px] border-[#9290c3] hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <h3 className="text-[1.5rem] font-bold text-[#9290c3]">Get Assistance</h3>
              </CardHeader>
              <CardContent>
                <p className="text-[1rem] text-[#d1d5db]">Receive help from verified community members</p>
              </CardContent>
              <CardFooter>
                <p className="text-[0.875rem] text-[#9290c3] font-semibold">Explore →</p>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Common Needs Section */}
        <div className="w-[80vw] flex flex-col">
          <div className="mb-[3rem]">
            <h1 className="font-display text-[3rem] font-bold text-[#9290c3] mb-[1rem]">
              Common Needs we can help with
            </h1>
            <p className="text-[1.25rem] text-[#d1d5db]">
              It's for a desktop keep in mind it's for an Indian use so very easy and user friendly
            </p>
          </div>
          <div className="flex flex-row gap-[1.5rem] flex-wrap">
            <Card className="bg-[rgba(146,144,195,0.15)] w-[22%] p-[1.5rem] rounded-[1rem] border-[2px] border-[#9290c3] hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <h3 className="font-display text-[1.25rem] font-bold text-[#9290c3]">Emergency Help</h3>
              </CardHeader>
              <CardContent>
                <p className="text-[0.875rem] text-[#d1d5db]">Quick assistance for urgent situations</p>
              </CardContent>
              <CardFooter>
                <p className="text-[0.75rem] text-[#9290c3]">Available 24/7</p>
              </CardFooter>
            </Card>
            <Card className="bg-[rgba(146,144,195,0.15)] w-[22%] p-[1.5rem] rounded-[1rem] border-[2px] border-[#9290c3] hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <h3 className="font-display text-[1.25rem] font-bold text-[#9290c3]">Education Support</h3>
              </CardHeader>
              <CardContent>
                <p className="text-[0.875rem] text-[#d1d5db]">Tutoring and learning assistance</p>
              </CardContent>
              <CardFooter>
                <p className="text-[0.75rem] text-[#9290c3]">All subjects</p>
              </CardFooter>
            </Card>
            <Card className="bg-[rgba(146,144,195,0.15)] w-[22%] p-[1.5rem] rounded-[1rem] border-[2px] border-[#9290c3] hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <h3 className="font-display text-[1.25rem] font-bold text-[#9290c3]">Daily Errands</h3>
              </CardHeader>
              <CardContent>
                <p className="text-[0.875rem] text-[#d1d5db]">Help with shopping and tasks</p>
              </CardContent>
              <CardFooter>
                <p className="text-[0.75rem] text-[#9290c3]">Local area</p>
              </CardFooter>
            </Card>
            <Card className="bg-[rgba(146,144,195,0.15)] w-[22%] p-[1.5rem] rounded-[1rem] border-[2px] border-[#9290c3] hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <h3 className="font-display text-[1.25rem] font-bold text-[#9290c3]">Technical Support</h3>
              </CardHeader>
              <CardContent>
                <p className="text-[0.875rem] text-[#d1d5db]">Tech problems solved quickly</p>
              </CardContent>
              <CardFooter>
                <p className="text-[0.75rem] text-[#9290c3]">Expert help</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}