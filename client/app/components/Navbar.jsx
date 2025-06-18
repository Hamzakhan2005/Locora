import { FaWallet } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <div className="nav-main mb-[1rem] flex flex-row items-center border-b-1 border-b-indigo-500">
      <h2 className="w-1/5">Locora</h2>
      <div className="nav-links w-2/5 flex gap-[1rem] justify-center ">
        <Button variant="ghost" className="border-none bg-transparent">
          Home
        </Button>
        <Button variant="ghost" className="border-none bg-transparent">
          Services
        </Button>
        <Button variant="ghost" className="border-none bg-transparent">
          About Us
        </Button>
        <Button variant="ghost" className="border-none bg-transparent">
          Contact
        </Button>
      </div>
      <div className="nav-buttons w-2/5 flex flex-row gap-[1rem] justify-end">
        <Input
          type="email"
          placeholder="Email"
          className="border-none bg-[#2C7F41]"
        />
        <Button variant="secondary" className="bg-[#14bd28] border-none">
          Post a Need
        </Button>
        <Button variant="outline" className="bg-[#14bd28] border-none">
          Login
        </Button>
      </div>
    </div>
  );
}
