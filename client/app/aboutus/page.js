"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#070f2b]">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-[2rem] py-[4rem]">
        {/* Hero Section */}
        <div className="text-center mb-[5rem]">
          <div className="inline-block px-[1.5rem] py-[0.5rem] rounded-full text-[0.875rem] font-bold mb-[1.5rem] bg-[rgba(146,144,195,0.15)] text-[#9290c3]">
            About Locora
          </div>
          <h1 className="text-[4rem] font-extrabold mb-[1.5rem] text-[#9290c3]">
            🧩 Building Communities
          </h1>
          <h2 className="text-[3rem] font-bold mb-[2rem] text-[#ffffff]">
            Through Kindness
          </h2>
          <p className="text-[1.25rem] leading-relaxed max-w-[1200px] mx-auto text-[#d1d5db]">
            Locora is a community-powered help platform built to bring people
            closer through kindness, connection, and collaboration. Whether you
            need a helping hand or want to offer one, Locora makes it easy to
            reach out, respond, and make a difference — right in your
            neighborhood.
          </p>
        </div>

        {/* Mission Section */}
        <div className="rounded-[1.5rem] shadow-2xl p-[2.5rem] mb-[3rem] border-[2px] border-[#9290c3] bg-[rgba(146,144,195,0.08)] hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center gap-[1rem] mb-[1.5rem]">
            <div className="w-[4rem] h-[4rem] rounded-[1rem] flex items-center justify-center text-[2.5rem] bg-[#9290c3]">
              🌍
            </div>
            <h2 className="text-[2.5rem] font-bold text-[#9290c3]">
              Our Mission
            </h2>
          </div>
          <p className="text-[1.125rem] leading-relaxed text-[#d1d5db]">
            We created Locora with a simple mission: To make help accessible and
            human again — one post, one person, one act of kindness at a time.
            We believe in the power of local communities to uplift one another,
            and in using technology as a bridge — not a barrier — to empathy and
            action.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="rounded-[1.5rem] shadow-2xl p-[2.5rem] mb-[3rem] text-[#ffffff] bg-gradient-to-br from-[#9290c3] to-[#535C91]">
          <div className="flex items-center gap-[1rem] mb-[2.5rem]">
            <div className="w-[4rem] h-[4rem] rounded-[1rem] flex items-center justify-center text-[2.5rem] bg-[rgba(255,255,255,0.2)]">
              🔧
            </div>
            <h2 className="text-[2.5rem] font-bold">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-[2rem]">
            <div className="backdrop-blur-sm rounded-[1rem] p-[2rem] bg-[rgba(255,255,255,0.1)]">
              <h3 className="font-semibold text-[1.25rem] mb-[1rem]">
                📢 Post Requests
              </h3>
              <p className="text-[#f3f4f6] leading-relaxed">
                If you need assistance — whether it's borrowing a tool, finding
                a tutor, or needing urgent help — you can post your request.
              </p>
            </div>
            <div className="backdrop-blur-sm rounded-[1rem] p-[2rem] bg-[rgba(255,255,255,0.1)]">
              <h3 className="font-semibold text-[1.25rem] mb-[1rem]">
                🤝 Offer Help
              </h3>
              <p className="text-[#f3f4f6] leading-relaxed">
                Browse requests around you and choose how you can contribute —
                no effort is too small.
              </p>
            </div>
            <div className="backdrop-blur-sm rounded-[1rem] p-[2rem] bg-[rgba(255,255,255,0.1)]">
              <h3 className="font-semibold text-[1.25rem] mb-[1rem]">
                💬 Real-time Chat
              </h3>
              <p className="text-[#f3f4f6] leading-relaxed">
                Communicate instantly, stay updated, and respond quickly using
                our built-in chat and alerts.
              </p>
            </div>
            <div className="backdrop-blur-sm rounded-[1rem] p-[2rem] bg-[rgba(255,255,255,0.1)]">
              <h3 className="font-semibold text-[1.25rem] mb-[1rem]">
                ✅ Verified Community
              </h3>
              <p className="text-[#f3f4f6] leading-relaxed">
                Every user is part of a trusted space built on accountability,
                empathy, and mutual respect.
              </p>
            </div>
          </div>
        </div>

        {/* Why Locora Section */}
        <div className="rounded-[1.5rem] shadow-2xl p-[2.5rem] mb-[3rem] border-[2px] border-[#9290c3] bg-[rgba(146,144,195,0.08)]">
          <div className="flex items-center gap-[1rem] mb-[2rem]">
            <div className="w-[4rem] h-[4rem] rounded-[1rem] flex items-center justify-center text-[2.5rem] bg-[#9290c3]">
              🙌
            </div>
            <h2 className="text-[2.5rem] font-bold text-[#9290c3]">
              Why Locora?
            </h2>
          </div>
          <p className="text-[1.125rem] leading-relaxed mb-[2rem] text-[#d1d5db]">
            In a world full of noise, Locora helps you cut through the distance
            and find real, human support. Whether you're:
          </p>
          <ul className="space-y-[1rem]">
            <li className="flex items-start gap-[1rem]">
              <span className="font-bold text-[1.5rem] text-[#9290c3]">•</span>
              <span className="text-[#d1d5db] text-[1.125rem]">
                A student stuck with a flat tire
              </span>
            </li>
            <li className="flex items-start gap-[1rem]">
              <span className="font-bold text-[1.5rem] text-[#9290c3]">•</span>
              <span className="text-[#d1d5db] text-[1.125rem]">
                A parent looking for a babysitter recommendation
              </span>
            </li>
            <li className="flex items-start gap-[1rem]">
              <span className="font-bold text-[1.5rem] text-[#9290c3]">•</span>
              <span className="text-[#d1d5db] text-[1.125rem]">
                Or someone who just needs to be heard...
              </span>
            </li>
          </ul>
          <p className="text-[1.125rem] leading-relaxed mt-[2rem] font-semibold text-[#9290c3]">
            Locora is here to remind you that you're not alone.
          </p>
        </div>

        {/* Community Built Section */}
        <div className="rounded-[1.5rem] shadow-2xl p-[2.5rem] mb-[3rem] text-[#ffffff] bg-gradient-to-br from-[#535C91] to-[#9290c3]">
          <div className="flex items-center gap-[1rem] mb-[2rem]">
            <div className="w-[4rem] h-[4rem] rounded-[1rem] flex items-center justify-center text-[2.5rem] bg-[rgba(255,255,255,0.2)]">
              🚀
            </div>
            <h2 className="text-[2.5rem] font-bold">
              Built By the Community, For the Community
            </h2>
          </div>
          <p className="text-[1.125rem] leading-relaxed text-[#f3f4f6]">
            Locora isn't backed by corporations — it's built by people who
            believe in grassroots impact and real-world connection. We're
            constantly evolving, listening to feedback, and improving — because
            this isn't just our platform — it's yours.
          </p>
        </div>

        {/* Contact Section */}
        <div className="rounded-[1.5rem] shadow-2xl p-[3rem] text-center border-[2px] border-[#9290c3] bg-[rgba(146,144,195,0.08)]">
          <span className="text-[4rem] mb-[1.5rem] block">📫</span>
          <h2 className="text-[2.5rem] font-bold mb-[1.5rem] text-[#9290c3]">
            Let's Connect
          </h2>
          <p className="text-[1.125rem] leading-relaxed text-[#d1d5db] mb-[2rem]">
            Have suggestions, feedback, or want to collaborate? Reach out to us
            anytime — your voice shapes Locora.
          </p>
          <button className="px-[2.5rem] py-[1rem] rounded-full font-semibold transition-all duration-200 hover:scale-105 text-[#ffffff] shadow-lg bg-[#9290c3]">
            Get in Touch
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
