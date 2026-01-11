import { FaDiscord, FaGithub, FaXTwitter, FaPaperPlane } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-[100%] bg-[#070f2b] border-t-[2px] border-[#9290c3] py-[3rem] px-[2rem] mt-[4rem]">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-[3rem] mb-[3rem]">
          {/* Brand Section */}
          <div className="flex flex-col gap-[1rem] w-[100%] md:w-[30%]">
            <h2 className="text-[2rem] font-bold text-[#9290c3] font-display">
              LOCORA
            </h2>
            <p className="text-[1rem] text-[#d1d5db] leading-relaxed">
              Building communities through kindness, connection, and
              collaboration. Help your neighbors, make a difference.
            </p>
            {/* Social Icons */}
            <div className="flex gap-[1rem] mt-[1rem]">
              <a
                href="#"
                className="w-[2.5rem] h-[2.5rem] rounded-[0.5rem] bg-[rgba(146,144,195,0.15)] flex items-center justify-center hover:bg-[#9290c3] transition-all duration-300"
              >
                <FaDiscord className="text-[1.25rem] text-[#9290c3] hover:text-[#ffffff]" />
              </a>
              <a
                href="#"
                className="w-[2.5rem] h-[2.5rem] rounded-[0.5rem] bg-[rgba(146,144,195,0.15)] flex items-center justify-center hover:bg-[#9290c3] transition-all duration-300"
              >
                <FaGithub className="text-[1.25rem] text-[#9290c3] hover:text-[#ffffff]" />
              </a>
              <a
                href="#"
                className="w-[2.5rem] h-[2.5rem] rounded-[0.5rem] bg-[rgba(146,144,195,0.15)] flex items-center justify-center hover:bg-[#9290c3] transition-all duration-300"
              >
                <FaXTwitter className="text-[1.25rem] text-[#9290c3] hover:text-[#ffffff]" />
              </a>
              <a
                href="#"
                className="w-[2.5rem] h-[2.5rem] rounded-[0.5rem] bg-[rgba(146,144,195,0.15)] flex items-center justify-center hover:bg-[#9290c3] transition-all duration-300"
              >
                <FaPaperPlane className="text-[1.25rem] text-[#9290c3] hover:text-[#ffffff]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-[1rem] w-[100%] md:w-[20%]">
            <h3 className="text-[1.25rem] font-bold text-[#9290c3] mb-[0.5rem]">
              Quick Links
            </h3>
            <Link
              href="/"
              className="text-[1rem] text-[#d1d5db] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-[1rem] text-[#d1d5db] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              Services
            </Link>
            <Link
              href="/aboutus"
              className="text-[1rem] text-[#d1d5db] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-[1rem] text-[#d1d5db] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              Contact
            </Link>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-[1rem] w-[100%] md:w-[20%]">
            <h3 className="text-[1.25rem] font-bold text-[#9290c3] mb-[0.5rem]">
              Support
            </h3>
            <Link
              href="#"
              className="text-[1rem] text-[#d1d5db] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              Help Center
            </Link>
            <Link
              href="#"
              className="text-[1rem] text-[#d1d5db] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              Community Guidelines
            </Link>
            <Link
              href="#"
              className="text-[1rem] text-[#d1d5db] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              Safety Tips
            </Link>
            <Link
              href="#"
              className="text-[1rem] text-[#d1d5db] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              Report Issue
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-[1rem] w-[100%] md:w-[20%]">
            <h3 className="text-[1.25rem] font-bold text-[#9290c3] mb-[0.5rem]">
              Legal
            </h3>
            <Link
              href="#"
              className="text-[1rem] text-[#d1d5db] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[1rem] text-[#d1d5db] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-[1rem] text-[#d1d5db] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              Cookie Policy
            </Link>
            <Link
              href="#"
              className="text-[1rem] text-[#d1d5db] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              Disclaimer
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-[100%] bg-[rgba(146,144,195,0.1)] rounded-[1rem] p-[2rem] mb-[3rem] border-[1px] border-[#9290c3]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-[1.5rem]">
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="text-[1.5rem] font-bold text-[#9290c3]">
                Stay Updated
              </h3>
              <p className="text-[1rem] text-[#d1d5db]">
                Get the latest community updates and news
              </p>
            </div>
            <div className="flex gap-[0.5rem] w-[100%] md:w-[auto]">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-[1rem] py-[0.75rem] rounded-[0.5rem] bg-[#070f2b] border-[1px] border-[#9290c3] text-[#d1d5db] w-[100%] md:w-[250px] focus:outline-none focus:border-[#9290c3]"
              />
              <button className="px-[1.5rem] py-[0.75rem] rounded-[0.5rem] bg-[#9290c3] text-[#ffffff] font-semibold hover:bg-[#7b79a8] transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-[1rem] pt-[2rem] border-t-[1px] border-[rgba(146,144,195,0.3)]">
          <p className="text-[0.875rem] text-[#9ca3af] text-center md:text-left">
            © 2024 Locora. All rights reserved. Built with ❤️ for communities.
          </p>
          <div className="flex gap-[2rem]">
            <Link
              href="#"
              className="text-[0.875rem] text-[#9ca3af] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              Accessibility
            </Link>
            <Link
              href="#"
              className="text-[0.875rem] text-[#9ca3af] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              Sitemap
            </Link>
            <Link
              href="#"
              className="text-[0.875rem] text-[#9ca3af] hover:text-[#9290c3] transition-colors duration-200 no-underline"
            >
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
