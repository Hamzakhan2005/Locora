"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      icon: "📢",
      title: "Post a Help Request",
      description:
        "If you need help — whether it's something urgent or a small task — you can create a Help Post describing your situation. Your request will be shared with people nearby who can step in.",
    },
    {
      icon: "📍",
      title: "Location-Based Notifications",
      description:
        "The moment you post, users in your local area get notified. No need to wait days — help can come from someone just a few streets away.",
    },
    {
      icon: "💬",
      title: "Real-Time Chat",
      description:
        "Once someone sees your post, they can start a conversation directly through our built-in chat. This allows for quick coordination, clarity, and a more personal connection.",
    },
    {
      icon: "🤝",
      title: "Accept to Help",
      description:
        "Users who are ready to take action can formally accept a help post. This helps the requester know who's committed and builds a sense of accountability.",
    },
  ];

  const liveUpdates = [
    "Instant notifications for new posts near you",
    "Live message updates when someone reaches out",
    "Real-time status on who accepted to help",
  ];

  const upcomingFeatures = [
    "Verified helper badges",
    "Community reputation and trust scores",
    "Categories for types of help (education, errands, tech, etc.)",
    "Group-based support (neighborhoods, campuses, clubs)",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070f2b]">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-[2rem] py-[3rem]">
        {/* Header */}
        <div className="text-center mb-[4rem]">
          <div className="inline-block px-[1.5rem] py-[0.5rem] rounded-full text-[0.875rem] font-bold mb-[1rem] bg-[rgba(146,144,195,0.15)] text-[#9290c3]">
            Our Services
          </div>
          <h1 className="text-[4rem] font-bold text-[#9290c3] mb-[1rem]">
            🛠️ What We Offer
          </h1>
          <p className="text-[1.25rem] text-[#d1d5db] max-w-[900px] mx-auto leading-relaxed">
            At Locora, we're building tools to help communities connect and
            support one another, starting with real-time local help. Here's what
            you can do on the platform right now:
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-[2rem] mb-[4rem]">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[rgba(146,144,195,0.08)] rounded-[1.5rem] p-[2.5rem] border-[2px] border-[#9290c3] hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              <div className="text-[4rem] mb-[1.5rem]">{service.icon}</div>
              <h2 className="text-[2rem] font-bold text-[#9290c3] mb-[1rem]">
                {service.title}
              </h2>
              <p className="text-[1.125rem] text-[#d1d5db] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Live Updates Section */}
        <div className="bg-gradient-to-br from-[#9290c3] to-[#535C91] rounded-[1.5rem] p-[3rem] mb-[4rem] text-[#ffffff] shadow-2xl">
          <div className="flex items-center gap-[1rem] mb-[2rem]">
            <div className="text-[4rem]">🔔</div>
            <h2 className="text-[2.5rem] font-bold">
              Live Updates & Interactions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-[1.5rem]">
            {liveUpdates.map((update, index) => (
              <div
                key={index}
                className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[1rem] p-[1.5rem] flex items-start gap-[0.75rem]"
              >
                <span className="text-[1.5rem] text-[#a8ff78]">✓</span>
                <span className="text-[1rem] leading-relaxed">{update}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What's Next Section */}
        <div className="bg-[rgba(146,144,195,0.08)] rounded-[1.5rem] p-[3rem] mb-[4rem] border-[2px] border-[#9290c3] shadow-2xl">
          <div className="flex items-center gap-[1rem] mb-[2rem]">
            <div className="text-[4rem]">🌱</div>
            <h2 className="text-[2.5rem] font-bold text-[#9290c3]">
              What's Next?
            </h2>
          </div>
          <p className="text-[1.125rem] text-[#d1d5db] mb-[2rem] leading-relaxed">
            This is just the beginning. We're actively working on features like:
          </p>
          <div className="grid md:grid-cols-2 gap-[1.5rem]">
            {upcomingFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-[1rem] bg-[rgba(146,144,195,0.1)] rounded-[1rem] p-[1.5rem] border-[1px] border-[#9290c3]"
              >
                <span className="text-[1.5rem] text-[#9290c3]">→</span>
                <span className="text-[1rem] text-[#d1d5db]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Matters Section */}
        <div className="bg-gradient-to-br from-[#535C91] to-[#9290c3] rounded-[1.5rem] p-[3rem] text-[#ffffff] text-center shadow-2xl">
          <div className="text-[5rem] mb-[1.5rem]">💡</div>
          <h2 className="text-[2.5rem] font-bold mb-[1.5rem]">
            Why This Matters
          </h2>
          <p className="text-[1.25rem] leading-relaxed max-w-[900px] mx-auto">
            Locora isn't just a tool — it's a growing movement toward locally
            driven compassion. When we make it easier to ask and easier to
            offer, communities become stronger, safer, and more connected.
          </p>
          <button className="mt-[2rem] bg-[#ffffff] text-[#9290c3] font-bold px-[2.5rem] py-[1rem] rounded-[0.75rem] text-[1.125rem] hover:bg-[#f0f0f0] transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
