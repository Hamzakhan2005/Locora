"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-[100vh] bg-[linear-gradient(135deg,#faf5ff,#fdf2f8)]">
      <Navbar />

      <div className="max-w-[64rem] mx-auto px-[1.5rem] py-[4rem]">
        {/* Header */}
        <div className="text-center mb-[4rem]">
          <div className="inline-block bg-[#ede9fe] text-[#6b21a8] px-[1rem] py-[0.5rem] rounded-[9999px] text-[0.875rem] font-[600] mb-[1rem]">
            Get in Touch
          </div>

          <h1 className="text-[3rem] font-[700] text-[#111827] mb-[1.5rem]">
            📫 Let&apos;s Connect
          </h1>

          <p className="text-[1.25rem] text-[#4b5563] leading-[1.75] max-w-[42rem] mx-auto">
            Have questions, feedback, or want to collaborate? We&apos;d love to
            hear from you. Your voice shapes Locora.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-[repeat(1,minmax(0,1fr))] md:grid-cols-[repeat(3,minmax(0,1fr))] gap-[1.5rem] mb-[4rem]">
          {/* Email */}
          <div className="bg-[#ffffff] rounded-[1.5rem] p-[2rem] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] border border-[#f3f4f6] transition-all duration-[300ms] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] hover:-translate-y-[0.25rem]">
            <div className="bg-[linear-gradient(90deg,#3b82f6,#06b6d4)] text-[#ffffff] rounded-[1rem] p-[1rem] w-[4rem] h-[4rem] flex items-center justify-center mb-[1.5rem]">
              <svg
                className="w-[2rem] h-[2rem]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h3 className="text-[1.25rem] font-[700] text-[#111827] mb-[0.5rem]">
              Email Us
            </h3>

            <p className="text-[#4b5563] mb-[1rem]">
              For general inquiries and support
            </p>

            <a
              href="mailto:hello@locora.com"
              className="text-[#2563eb] font-[600] hover:text-[#1d4ed8]"
            >
              hello@locora.com
            </a>
          </div>

          {/* Community */}
          <div className="bg-[#ffffff] rounded-[1.5rem] p-[2rem] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] border border-[#f3f4f6] transition-all duration-[300ms] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] hover:-translate-y-[0.25rem]">
            <div className="bg-[linear-gradient(90deg,#10b981,#14b8a6)] text-[#ffffff] rounded-[1rem] p-[1rem] w-[4rem] h-[4rem] flex items-center justify-center mb-[1.5rem]">
              <svg
                className="w-[2rem] h-[2rem]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586M11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>

            <h3 className="text-[1.25rem] font-[700] text-[#111827] mb-[0.5rem]">
              Join Community
            </h3>

            <p className="text-[#4b5563] mb-[1rem]">Connect with other users</p>

            <a
              href="#"
              className="text-[#059669] font-[600] hover:text-[#047857]"
            >
              Join Discussion
            </a>
          </div>

          {/* Social */}
          <div className="bg-[#ffffff] rounded-[1.5rem] p-[2rem] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] border border-[#f3f4f6] transition-all duration-[300ms] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] hover:-translate-y-[0.25rem]">
            <div className="bg-[linear-gradient(90deg,#8b5cf6,#ec4899)] text-[#ffffff] rounded-[1rem] p-[1rem] w-[4rem] h-[4rem] flex items-center justify-center mb-[1.5rem]">
              <svg
                className="w-[2rem] h-[2rem]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>

            <h3 className="text-[1.25rem] font-[700] text-[#111827] mb-[0.5rem]">
              Social Media
            </h3>

            <p className="text-[#4b5563] mb-[1rem]">Follow us for updates</p>

            <a
              href="#"
              className="text-[#7c3aed] font-[600] hover:text-[#6d28d9]"
            >
              @Locora
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[linear-gradient(90deg,#6366f1,#7c3aed)] rounded-[1.5rem] p-[2.5rem] text-[#ffffff] text-center shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <h2 className="text-[1.875rem] font-[700] mb-[1rem]">
            Still Have Questions?
          </h2>

          <p className="text-[1.125rem] text-[#e0e7ff] mb-[2rem] max-w-[42rem] mx-auto">
            We&apos;re here to help! Don&apos;t hesitate to reach out, and
            we&apos;ll get back to you as soon as possible.
          </p>

          <button className="bg-[#ffffff] text-[#4f46e5] font-[600] px-[2rem] py-[1rem] rounded-[9999px] transition-all duration-[200ms] hover:bg-[#f3f4f6] hover:scale-[1.05] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
            Send Us a Message
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
