"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfilePage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="w-[100%] h-[90vh] flex flex-col  items-center">
        <div className="w-[20vw] h-[50vh] p-[1rem] flex flex-col items-center rounded-full">
          <img src="" className="w-[5rem] h-[5rem] bg-[#2c7f41] rounded-full" />
          <h3 className="m-0">Priya Sharma</h3>
          <p className="m-0">Software Engineer</p>
          <p className="m-0">Joined 2025</p>
        </div>
        <div className="w-[100%] h-[70vh] py-[2rem] ">
          <Tabs defaultValue="About" className="w-full ">
            <TabsList className="w-full bg-[transparent] flex py-[2rem] justify-center items-center">
              <TabsTrigger value="About" className="bg-[transparent] ">
                About
              </TabsTrigger>
              <TabsTrigger value="Posts" className="bg-[transparent]">
                Posts
              </TabsTrigger>
              <TabsTrigger value="Activity" className="bg-[transparent]">
                Activity
              </TabsTrigger>
            </TabsList>
            <TabsContent value="About">
              <div></div>
            </TabsContent>
            <TabsContent value="Posts"></TabsContent>
            <TabsContent value="Activity"></TabsContent>
          </Tabs>
        </div>
        <div className="w-[100%] h-[20vh]">
          <h2>Contributions</h2>
          <div></div>
        </div>
        <div></div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
