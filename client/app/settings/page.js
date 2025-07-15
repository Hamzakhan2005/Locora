"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@mui/material/Button";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  const { logout } = useAuth();
  const handleLogout = () => {
    logout(); // clear user + token
    router.push("/"); // redirect to login
  };
  return (
    <div className="overflow-x-hidden text-[#000]">
      <Navbar />
      <div className="w-[98vw] my-[2vh] mx-[1vh] py-[1vh] px-[1vw] flex flex-col justify-center  items-center">
        <h1>Settings</h1>
        <div className="w-[20vw] p-[1rem] flex flex-col justify-center items-center ">
          <h2>Account</h2>
          <div className="w-[68vw] ">
            <Button variant="contained" color="error" onClick={handleLogout}>
              LogOut
            </Button>
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
