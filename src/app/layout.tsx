// app/layout.tsx
import type { Metadata } from "next";
// Assuming you want to keep Geist and add Lora/Inter for your specific content styles
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Lora } from 'next/font/google'; // Your previously used fonts

import "./globals.css"; // Your global styles
import { Toaster } from "react-hot-toast"; // For global toasts
import { Header } from "./components/Header"; // Import your Header component
import { Footer } from "./components/Footer"; // Import your Footer component
import AnalyticsClient from "./components/AnalyticsClient";
import CallWhatsappSticker from './components/CallWhatsappSticker'; // Import the new sticker component
// add near the top of app/layout.tsx
export const metadataBase = new URL('https://gopalguruji.com');


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

// Highly SEO-optimized metadata
export const metadata: Metadata = {
  // Primary SEO: Title & Description
  title: {
    default: "Pandit Gopal Krishna Sharma | Authentic Vedic Pujas, Astrology & Vastu Services", // Default title for pages without a specific title
    template: "%s | Pandit Gopal Krishna Sharma - Vedic Services", // Template for page-specific titles
  },
  description: "Experienced Pandit Gopal Krishna Sharma offers authentic Vedic Pujas, personalized Astrological consultations, Vastu Shastra remedies, and profound spiritual guidance online and in Indore, Ujjain. Achieve harmony and prosperity.",
  
  // Keywords (while less critical, still good practice)
  keywords: [
    "Pandit Gopal Krishna Sharma",
    "Vedic Pandit",
    "Online Puja",
    "Astrology Consultation",
    "Vastu Shastra",
    "Hindu Rituals",
    "Horoscope Reading",
    "Spiritual Guidance",
    "Vedic Services",
    "Puja Services Indore",
    "Astrologer Ujjain",
    "Gopal Krishna Sharma",
    "Jyotish",
    "Muhurat",
    "Karma Correction",
    "Religious Ceremonies",
    "Indian Priest",
    "Best Pandit",
    "Vedic Knowledge",
    "Dharma",
    "Spirituality",
    "Personalized Puja",
    "Graha Shanti",
    "Dosha Nivaran",
    "Indore Priest",
    "Ujjain Pandit",
    "pandits in indore",
    "pandit in indore",
    "pandit for kal-sarp-pooja",
    "pandit for mangla-shanti-pooja",
    "pandit for pitra-dosh-pooja"
  ],

 
  // Open Graph (for social media sharing)
  openGraph: {
    title: "Pandit Gopal Krishna Sharma | Authentic Vedic Pujas, Astrology & Vastu",
    description: "Experienced Pandit Gopal Krishna Sharma offers authentic Vedic Pujas, personalized Astrological consultations, Vastu Shastra remedies, and profound spiritual guidance online and in Indore, Ujjain. Achieve harmony and prosperity.",
    url: "https://www.gopalguruji.com/", // Updated to your domain
    siteName: "Pandit Gopal Krishna Sharma - Online Vedic Pandit for Puja, Astrology & Vastu",
    locale: "en_IN", // Specify locale if primarily targeting India
    type: "website", // Or 'article' if it's a blog post, but 'website' for default
  },

  // Apple Web App Meta (for iOS devices saving to home screen)
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Pandit Gopal Krishna Sharma",
    // startUpImage: [], // If you have specific startup images
  },

  // Verification (for proving ownership to search engines)
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Get from Google Search Console for gopalguruji.com
    // yandex: "YOUR_YANDEX_VERIFICATION_CODE", // If you use Yandex
    // yahoo: "YOUR_YAHOO_VERIFICATION_CODE", // If you use Yahoo
    // other: {
    //   me: ["your-email@example.com"],
    // },
  },
  
  // Application name (can appear in some search results or browser tabs)
  applicationName: "Pandit Gopal Krishna Sharma - Vedic Sadhana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Combine font variables for all fonts you intend to use globally
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${lora.variable}`}>
      <head>
        <meta name="msvalidate.01" content="F845A5DF2133381CD414620B0EE3C0E1" />
      </head>
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
          <CallWhatsappSticker />
          <AnalyticsClient/> 
        </div>
      </body>
    </html>
  );
};