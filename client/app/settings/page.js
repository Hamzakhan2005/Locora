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
    logout();
    router.push("/");
  };

  const settingsSections = [
    {
      title: "Account Settings",
      items: [
        { name: "Profile Information", description: "Update your personal details and avatar" },
        { name: "Change Password", description: "Manage your password and security" },
        { name: "Email Preferences", description: "Control email notifications" }
      ]
    },
    {
      title: "Privacy & Security",
      items: [
        { name: "Privacy Settings", description: "Control who can see your information" },
        { name: "Two-Factor Authentication", description: "Add an extra layer of security" },
        { name: "Connected Devices", description: "Manage your logged-in devices" }
      ]
    },
    {
      title: "Notifications",
      items: [
        { name: "Push Notifications", description: "Manage mobile and desktop alerts" },
        { name: "Email Notifications", description: "Choose what emails you receive" },
        { name: "SMS Notifications", description: "Control text message alerts" }
      ]
    },
    {
      title: "Preferences",
      items: [
        { name: "Language", description: "Choose your preferred language" },
        { name: "Theme", description: "Customize your interface appearance" },
        { name: "Location", description: "Update your location settings" }
      ]
    },
    {
      title: "Help & Support",
      items: [
        { name: "Help Center", description: "Find answers to common questions" },
        { name: "Contact Support", description: "Get help from our team" },
        { name: "Report a Problem", description: "Let us know about any issues" }
      ]
    },
    {
      title: "About",
      items: [
        { name: "Terms of Service", description: "Read our terms and conditions" },
        { name: "Privacy Policy", description: "Learn how we protect your data" },
        { name: "App Version", description: "Version 1.0.0" }
      ]
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070f2b]">
      <Navbar />
      
      <div className="max-w-[1200px] mx-auto px-[2rem] py-[3rem]">
        {/* Header */}
        <div className="text-center mb-[3rem]">
          <div className="inline-block px-[1.5rem] py-[0.5rem] rounded-full text-[0.875rem] font-bold mb-[1rem] bg-[rgba(146,144,195,0.15)] text-[#9290c3]">
            Settings
          </div>
          <h1 className="text-[3.5rem] font-bold text-[#9290c3] mb-[0.5rem]">⚙️ Account Settings</h1>
          <p className="text-[1.125rem] text-[#d1d5db]">Manage your account and preferences</p>
        </div>

        {/* Logout Button - Prominent */}
        <div className="bg-[rgba(239,68,68,0.1)] border-[2px] border-[#ef4444] rounded-[1rem] p-[2rem] mb-[3rem] flex flex-col md:flex-row justify-between items-center gap-[1.5rem]">
          <div>
            <h3 className="text-[1.5rem] font-bold text-[#ef4444] mb-[0.5rem]">Sign Out</h3>
            <p className="text-[1rem] text-[#d1d5db]">Sign out of your account on this device</p>
          </div>
          <Button 
            variant="contained" 
            onClick={handleLogout}
            sx={{
              backgroundColor: '#ef4444',
              color: '#ffffff',
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '0.75rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#dc2626',
              }
            }}
          >
            Log Out
          </Button>
        </div>

        {/* Settings Sections */}
        <div className="grid gap-[2rem]">
          {settingsSections.map((section, sectionIndex) => (
            <div 
              key={sectionIndex}
              className="bg-[rgba(146,144,195,0.08)] rounded-[1.5rem] p-[2.5rem] border-[2px] border-[#9290c3] shadow-2xl"
            >
              <h2 className="text-[2rem] font-bold text-[#9290c3] mb-[1.5rem] flex items-center gap-[0.75rem]">
                <span className="text-[1.5rem]">
                  {sectionIndex === 0 && "👤"}
                  {sectionIndex === 1 && "🔒"}
                  {sectionIndex === 2 && "🔔"}
                  {sectionIndex === 3 && "🎨"}
                  {sectionIndex === 4 && "💬"}
                  {sectionIndex === 5 && "ℹ️"}
                </span>
                {section.title}
              </h2>
              
              <div className="flex flex-col gap-[1rem]">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="bg-[rgba(146,144,195,0.05)] rounded-[0.75rem] p-[1.5rem] border-[1px] border-[rgba(146,144,195,0.3)] hover:bg-[rgba(146,144,195,0.1)] hover:border-[#9290c3] transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-[1.125rem] font-semibold text-[#9290c3] mb-[0.25rem]">
                          {item.name}
                        </h3>
                        <p className="text-[0.875rem] text-[#9ca3af]">
                          {item.description}
                        </p>
                      </div>
                      <svg className="w-[1.5rem] h-[1.5rem] text-[#9290c3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Danger Zone */}
        <div className="mt-[3rem] bg-[rgba(239,68,68,0.05)] border-[2px] border-[#ef4444] rounded-[1.5rem] p-[2.5rem]">
          <h2 className="text-[2rem] font-bold text-[#ef4444] mb-[1.5rem]">⚠️ Danger Zone</h2>
          <div className="flex flex-col gap-[1rem]">
            <div className="bg-[rgba(239,68,68,0.05)] rounded-[0.75rem] p-[1.5rem] border-[1px] border-[rgba(239,68,68,0.3)] hover:bg-[rgba(239,68,68,0.1)] hover:border-[#ef4444] transition-all duration-300 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-[1.125rem] font-semibold text-[#ef4444] mb-[0.25rem]">
                    Deactivate Account
                  </h3>
                  <p className="text-[0.875rem] text-[#d1d5db]">
                    Temporarily disable your account
                  </p>
                </div>
                <svg className="w-[1.5rem] h-[1.5rem] text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            <div className="bg-[rgba(239,68,68,0.05)] rounded-[0.75rem] p-[1.5rem] border-[1px] border-[rgba(239,68,68,0.3)] hover:bg-[rgba(239,68,68,0.1)] hover:border-[#ef4444] transition-all duration-300 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-[1.125rem] font-semibold text-[#ef4444] mb-[0.25rem]">
                    Delete Account
                  </h3>
                  <p className="text-[0.875rem] text-[#d1d5db]">
                    Permanently delete your account and all data
                  </p>
                </div>
                <svg className="w-[1.5rem] h-[1.5rem] text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}