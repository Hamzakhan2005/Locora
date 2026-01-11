"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            📫 Let's Connect
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have questions, feedback, or want to collaborate? We'd love to hear from you. Your voice shapes Locora.
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Email Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">For general inquiries and support</p>
            <a href="mailto:hello@locora.com" className="text-blue-600 hover:text-blue-700 font-semibold">
              hello@locora.com
            </a>
          </div>

          {/* Community Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Join Community</h3>
            <p className="text-gray-600 mb-4">Connect with other users</p>
            <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold">
              Join Discussion
            </a>
          </div>

          {/* Social Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Social Media</h3>
            <p className="text-gray-600 mb-4">Follow us for updates</p>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold">
              @Locora
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How does Locora work?</h3>
              <p className="text-gray-600">Locora connects people in local communities who need help with those willing to provide it. Simply post a request or browse existing posts to offer assistance.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is Locora free to use?</h3>
              <p className="text-gray-600">Yes! Locora is completely free. We believe in making community support accessible to everyone.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I get notified of new requests?</h3>
              <p className="text-gray-600">Once you're signed up, you'll receive real-time notifications for help requests in your area. You can customize your notification preferences in settings.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I report inappropriate content?</h3>
              <p className="text-gray-600">Absolutely. We take community safety seriously. Use the report feature on any post or contact us directly if you encounter any issues.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-10 text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            We're here to help! Don't hesitate to reach out, and we'll get back to you as soon as possible.
          </p>
          <button className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
            Send Us a Message
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
