"use client";

import type { FC } from "react";
import Image from "next/image";
import { memo, useCallback } from "react";

// For consistent and optimized URLs
const WEBSITE_URL = "https://gopalguruji.com";

interface HeroProps {
  onBookConsultationClick: () => void;
}

export const Hero: FC<HeroProps> = memo(({ onBookConsultationClick }) => {
  const handleViewServicesClick = useCallback(() => {
    // Ensure 'services' ID exists on the target section in your layout component
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Define key SEO phrases for clarity and consistency
  const panditName = "Pandit Gopal Krishna Sharma";
  const primaryService = "Vedic Pandit for Puja, Astrology & Vastu Consultations";
  const locationIndore = "Indore";
  const locationUjjain = "Ujjain";
  const websiteDomain = "gopalguruji.com"; // For structured data or meta descriptions if used here

  return (
    <>
      <section className="bg-[#FFF8F1] py-12 lg:py-12" aria-labelledby="hero-title">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-1 lg:order-1 flex flex-col text-center lg:text-left">
              {/* Decorative Om Icon - no SEO impact, keep it simple */}
              <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#FF9500] to-[#FF6347] w-16 h-16 rounded-full mb-5 shadow-lg mx-auto lg:mx-0" aria-hidden="true">
                <span className="text-4xl text-white">ॐ</span>
              </div>

              {/* H1 - Most important heading for SEO, includes primary keywords */}
              <h1 id="hero-title" className="text-4xl font-bold text-[#4A2E2A] mb-2" style={{ fontFamily: "'Lora', serif" }}>
                {panditName}
              </h1>

              {/* H2 - Reinforces services and location. Use strong tags for emphasis. */}
              <h2 className="text-2xl font-semibold text-[#FF9500] mb-8">
                Your Trusted <strong className="font-bold">{primaryService}</strong> in <strong className="font-bold">{locationIndore}</strong> & <strong className="font-bold">{locationUjjain}</strong>
              </h2>

              {/* Mobile Image - Optimized alt text */}
              <div className="my-8 lg:hidden">
                <div className="relative w-full max-w-sm mx-auto h-96 rounded-3xl shadow-2xl overflow-hidden">
                  <Image
                    src="/pandit-ji-image2.jpeg"
                    alt={`Authentic ${primaryService} by ${panditName} serving devotees in ${locationIndore} and ${locationUjjain}.`}
                    title={`${panditName} - Expert for Puja, Astrology, Vastu`} // Add title for better UX/SEO hint
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>

              {/* Description - Rich with keywords, natural language, and clear value proposition */}
              <div className="text-[#4A2E2A]/90 text-lg text-left leading-relaxed space-y-6 mb-8 max-w-xl mx-auto lg:mx-0">
                <p>
                  Hailing from the sacred city of <strong className="font-semibold">{locationUjjain}</strong> and now serving devotees in <strong className="font-semibold">{locationIndore}</strong>, {panditName} brings over 25 years of profound experience in authentic <strong className="font-semibold">Vedic traditions</strong>. Having guided more than 10,000 families, his wisdom is rooted in deep spiritual practice and a commitment to providing genuine solutions.
                </p>
                <p>
                  Specializing in a wide array of <strong className="font-semibold">Vedic rituals</strong>, Pandit Ji performs all types of <strong className="font-semibold">pujas</strong>, including powerful dosh nivaran ceremonies, <strong className="font-semibold">Vastu Shanti</strong> for homes and offices, and determining auspicious muhurats. Renowned for his highly accurate <strong className="font-semibold">astrological predictions</strong>, he offers expert guidance for life&apos;s most important questions, available for both in-person ceremonies and <strong className="font-semibold">online consultations</strong>. Visit {websiteDomain} for more.
                </p>
              </div>

              {/* Sanskrit Quote - Good content, but not directly for keyword stuffing */}
              <div className="bg-[#FFF7E0] border-l-4 border-[#FF9500] p-4 text-left rounded-r-lg max-w-xl mx-auto lg:mx-0 mb-10 shadow-sm">
                <p className="font-semibold italic text-[#4A2E2A] text-center">
                  ।। ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।।
                </p>
                <p className="text-center text-[#4A2E2A]/80 mt-1 italic">
                  &quot;May all beings be happy, may all beings be healthy&quot;
                </p>
              </div>

              {/* Action Buttons - Clear call to actions */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <button
                  onClick={onBookConsultationClick}
                  className="bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                  aria-label={`Book an Astrology or Puja Consultation with ${panditName}`} // Enhanced accessibility for CTA
                >
                  <span className="text-xl" aria-hidden="true">
                    ॐ
                  </span>{" "}
                  Book Consultation
                </button>
                <button
                  onClick={handleViewServicesClick}
                  className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full border-2 border-orange-500 hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2"
                  aria-label={`View all Vedic Puja and Astrology Services offered by ${panditName}`} // Enhanced accessibility for CTA
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                  View Services
                </button>
              </div>
            </div>

            {/* Desktop Image - Optimized alt text and title */}
            <div className="order-2 lg:order-2 hidden lg:flex justify-center items-center">
              <div className="w-full max-w-md h-[36rem] p-1 rounded-3xl bg-gradient-to-br from-[#FF9500] to-[#FFEFD6] shadow-xl">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                  <Image
                    src="/pandit-ji-image.jpeg"
                    alt={`${panditName}, an expert Vedic Pandit and astrologer in ${locationUjjain} and ${locationIndore}, performing a traditional puja ceremony.`}
                    title={`${panditName} - Your Guide for Vedic Pujas, Astrology, and Vastu`}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <LuckyWednesdaySticker/> */}
    </>
  );
});

Hero.displayName = "Hero";