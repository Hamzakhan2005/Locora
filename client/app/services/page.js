"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden text-[#000]">
      <Navbar />
      <div className="w-[98vw] my-[2vh] mx-[1vh] py-[1vh] px-[1vw] flex flex-col justify-center  items-center">
        <h1>🛠️ Our Services</h1>
        <p className="text-center">
          At Locora, we’re building tools to help communities connect and
          support one another, starting with real-time local help. Here’s what
          you can do on the platform right now:
        </p>
        <h1>📢 Post a Help Request</h1>
        <p className="text-center">
          If you need help — whether it’s something urgent or a small task — you
          can create a Help Post describing your situation. Your request will be
          shared with people nearby who can step in.
        </p>
        <h1>📍 Location-Based Notifications</h1>
        <p className="text-center">
          The moment you post, users in your local area get notified. No need to
          wait days — help can come from someone just a few streets away.
        </p>
        <h1>💬 Real-Time Chat</h1>
        <p className="text-center">
          Once someone sees your post, they can start a conversation directly
          through our built-in chat. This allows for quick coordination,
          clarity, and a more personal connection.
        </p>
        <h1>🤝 Accept to Help</h1>
        <p className="text-center">
          Users who are ready to take action can formally accept a help post.
          This helps the requester know who’s committed and builds a sense of
          accountability.
        </p>
        <h1>🔔 Live Updates & Interactions</h1>
        <p className="text-center">
          Instant notifications for new posts near you Live message updates when
          someone reaches out Real-time status on who accepted to help
        </p>
        <h1>🌱 What's Next?</h1>
        <p className="text-center">
          This is just the beginning. We're actively working on features like:
          Verified helper badges Community reputation and trust scores
          Categories for types of help (education, errands, tech, etc.)
          Group-based support (neighborhoods, campuses, clubs)
        </p>
        <h1>💡 Why This Matters</h1>
        <p className="text-center">
          Locora isn’t just a tool — it’s a growing movement toward locally
          driven compassion. When we make it easier to ask and easier to offer,
          communities become stronger, safer, and more connected.
        </p>
      </div>
      <Footer />
    </div>
  );
}
