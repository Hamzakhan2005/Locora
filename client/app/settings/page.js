"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SettingsPage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="w-[98vw] my-[2vh] mx-[1vh] py-[1vh] px-[1vw] flex flex-col justify-center  items-center">
        <h1>Settings</h1>
        <div className="w-[20vw] p-[1rem] flex flex-col justify-center items-center ">
          <h2>Account</h2>
          <div className="w-[68vw] ">
            <h3>Profile</h3>
            <h3>Password</h3>
          </div>
          <h2>Account</h2>
          <div className="w-[68vw]">
            <h3>Profile</h3>
            <h3>Password</h3>
          </div>
          <h2>Account</h2>
          <div className="w-[68vw]">
            <h3>Profile</h3>
            <h3>Password</h3>
          </div>
          <h2>Account</h2>
          <div className="w-[68vw]">
            <h3>Profile</h3>
            <h3>Password</h3>
          </div>
          <h2>Account</h2>
          <div className="w-[68vw]">
            <h3>Profile</h3>
            <h3>Password</h3>
          </div>
          <h2>Account</h2>
          <div className="w-[68vw]">
            <h3>Profile</h3>
            <h3>Password</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
