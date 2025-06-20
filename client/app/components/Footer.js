import { FaDiscord, FaGithub, FaXTwitter, FaPaperPlane } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-[100%] flex flex-col justify-between items-center">
      <div className="w-[70%] flex flex-row justify-between items-center">
        <h3>About</h3>
        <h3>Contact</h3>
        <h3>Privacy Policy</h3>
      </div>
    </footer>
  );
}
