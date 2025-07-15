"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden text-[#000]">
      <Navbar />
      <div className="w-[98vw] my-[2vh] mx-[1vh] py-[1vh] px-[1vw] flex flex-col justify-center  items-center">
        <h1>🧩 About Locora</h1>
        <p className="text-center">
          Locora is a community-powered help platform built to bring people
          closer through kindness, connection, and collaboration. Whether you
          need a helping hand or want to offer one, Locora makes it easy to
          reach out, respond, and make a difference — right in your
          neighborhood.
        </p>
        <h1>🌍 Our Mission</h1>
        <p className="text-center">
          We created Locora with a simple mission: To make help accessible and
          human again — one post, one person, one act of kindness at a time. We
          believe in the power of local communities to uplift one another, and
          in using technology as a bridge — not a barrier — to empathy and
          action.
        </p>
        <h1>🔧 How It Works</h1>
        <p className="text-center">
          Post Requests: If you need assistance — whether it’s borrowing a tool,
          finding a tutor, or needing urgent help — you can post your request.
          Offer Help: Browse requests around you and choose how you can
          contribute — no effort is too small. Real-time Chat & Notifications:
          Communicate instantly, stay updated, and respond quickly using our
          built-in chat and alerts. Verified Community: Every user is part of a
          trusted space built on accountability, empathy, and mutual respect.
        </p>
        <h1>🙌 Why Locora?</h1>
        <p className="text-center">
          In a world full of noise, Locora helps you cut through the distance
          and find real, human support. Whether you're: A student stuck with a
          flat tire, A parent looking for a babysitter recommendation, Or
          someone who just needs to be heard... Locora is here to remind you
          that you're not alone.
        </p>
        <h1>🚀 Built By the Community, For the Community</h1>
        <p className="text-center">
          Locora isn’t backed by corporations — it’s built by people who believe
          in grassroots impact and real-world connection. We’re constantly
          evolving, listening to feedback, and improving — because this isn’t
          just our platform — it’s yours.
        </p>
        <h1>📫 Let’s Connect</h1>
        <p className="text-center">
          Have suggestions, feedback, or want to collaborate? Reach out to us
          anytime — your voice shapes Locora.
        </p>
      </div>
      <Footer />
    </div>
  );
}
