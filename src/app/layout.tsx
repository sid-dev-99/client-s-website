// app/layout.tsx
import type { Metadata } from "next";
// Assuming you want to keep Geist and add Lora/Inter for your specific content styles
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Lora } from 'next/font/google'; // Your previously used fonts

import "./globals.css"; // Your global styles
import { Toaster } from "react-hot-toast"; // For global toasts

import { Header } from "./components/Header"; // Import your Header component
import { Footer } from "./components/Footer"; // Import your Footer component
import CallWhatsappSticker from './components/CallWhatsappSticker'; // Import the new sticker component

// Initialize your fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = {
  title: "Vedic Sadhana - Pandit Gopal Krishna Sharma", // Update your site title
  description: "Experienced Pandit offering Vedic Pujas, Astrological consultations, Vastu Shastra, and spiritual guidance for a harmonious life.", // Update your site description
  // Add more default SEO metadata here as needed for the entire site
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Combine font variables for all fonts you intend to use globally
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${lora.variable}`}>
      <body className={`antialiased`}> {/* Removed the Geist class from body directly */}
        {/*
          This div ensures Header and Footer are sticky (at top/bottom)
          and the main content ({children}) fills the space in between.
        */}
        <div className="bg-[#FFFDFB] min-h-screen flex flex-col">
          <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
          <Header /> {/* Your global Header */}
          <main className="flex-grow"> {/* Main content area that will expand */}
            {children} {/* This is where your page content (like HomePage, BlogsPage) will be rendered */}
          </main>
          <Footer /> {/* Your global Footer */}
          <CallWhatsappSticker /> {/* <--- Add the sticker component here */}
        </div>
      </body>
    </html>
  );
};