// app/components/CallWhatsappSticker.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'; // Using FaPhoneAlt for call icon

const CallWhatsappSticker: React.FC = () => {
  const phoneNumber = '9926029451';
  const whatsappMessage = "Jay Shree Krishna Pandit Ji, I'd like to know more about your Vedic services, astrology, or have a general inquiry.";
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 md:bottom-8 md:right-8">
      {/* WhatsApp Button */}
      <Link
        href={`https://wa.me/${phoneNumber}?text=${encodedWhatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center
                   hover:bg-green-600 transition-colors duration-300 transform hover:scale-105
                   text-base md:text-lg font-bold"
        aria-label="WhatsApp Pandit Ji"
      >
        <FaWhatsapp className="text-xl md:text-2xl" />
        <span className="ml-2 hidden sm:inline">WhatsApp</span> {/* Show text on larger screens */}
      </Link>

      {/* Call Button */}
      <Link
        href={`tel:${phoneNumber}`}
        className="bg-orange-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center
                   hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105
                   text-base md:text-lg font-bold"
        aria-label="Call Pandit Ji"
      >
        <FaPhoneAlt className="text-xl md:text-2xl" />
        <span className="ml-2 hidden sm:inline">Call Now</span> {/* Show text on larger screens */}
      </Link>
    </div>
  );
};

export default CallWhatsappSticker;