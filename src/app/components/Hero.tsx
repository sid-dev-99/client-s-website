"use client";

import type { FC } from "react";
import Image from "next/image";
// import Link from "next/link"; // We no longer need Link here for "View Services"
import {LuckyWednesdaySticker} from './LuckyWednesdaySticker'

interface HeroProps {
  onBookConsultationClick: () => void;
}

export const Hero: FC<HeroProps> = ({ onBookConsultationClick }) => {
  const handleViewServicesClick = () => {
    // Scroll to the services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
    <section className="bg-[#FFF8F1] py-12 lg:py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="order-1 lg:order-1 flex flex-col text-center lg:text-left">
            <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#FF9500] to-[#FF6347] w-16 h-16 rounded-full mb-5 shadow-lg mx-auto lg:mx-0">
              <span className="text-4xl text-white">ॐ</span>
            </div>
            
            <h1 className="text-4xl font-bold text-[#4A2E2A] mb-2" style={{ fontFamily: "'Lora', serif" }}>
              Pandit Gopal Krishna Sharma
            </h1>

            <h2 className="text-2xl font-semibold text-[#FF9500] mb-8">
              Your Trusted Vedic Pandit for Puja, Astrology & Vastu Consultations
            </h2>

            <div className="my-8 lg:hidden">
              <div className="relative w-full max-w-sm mx-auto h-96 rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/pandit-ji-image2.jpeg"
                  alt="Vedic Pandit in Indore and Ujjain - Gopal Krishna Sharma"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>

            <div className="text-[#4A2E2A]/90 text-lg text-left leading-relaxed space-y-6 mb-8 max-w-xl mx-auto lg:mx-0">
              <p>
                Hailing from the sacred city of Ujjain and now serving devotees in Indore, Pandit Gopal Krishna Sharma brings over 25 years of profound experience in authentic Vedic traditions. Having guided more than 10,000 families, his wisdom is rooted in deep spiritual practice and a commitment to providing genuine solutions.
              </p>
              <p>
                Specializing in a wide array of Vedic rituals, Pandit Ji performs all types of pujas, including powerful dosh nivaran ceremonies, Vastu Shanti for homes and offices, and determining auspicious muhurats. Renowned for his highly accurate astrological predictions, he offers expert guidance for life's most important questions, available for both in-person ceremonies and online consultations.
              </p>
            </div>

            <div className="bg-[#FFF7E0] border-l-4 border-[#FF9500] p-4 text-left rounded-r-lg max-w-xl mx-auto lg:mx-0 mb-10 shadow-sm">
              <p className="font-semibold italic text-[#4A2E2A] text-center">
                ।। ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।।
              </p>
              <p className="text-center text-[#4A2E2A]/80 mt-1 italic">
                "May all beings be happy, may all beings be healthy"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button 
                onClick={onBookConsultationClick}
                className="bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="text-xl">ॐ</span> Book Consultation
              </button>
              {/* "View Services" button in Hero section now scrolls */}
              <button 
                onClick={handleViewServicesClick}
                className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full border-2 border-orange-500 hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
                View Services
              </button>
            </div>
          </div>

          <div className="order-2 lg:order-2 hidden lg:flex justify-center items-center">
            <div className="w-full max-w-md h-[36rem] p-1 rounded-3xl bg-gradient-to-br from-[#FF9500] to-[#FFEFD6] shadow-xl">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                <Image
                  src="/pandit-ji-image.jpeg"
                  alt="Pandit Gopal Krishna Sharma, a trusted Vedic Astrologer in Ujjain and Indore, performing a puja."
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
    </div>
  );
};