//Footer.tsx
"use client";

import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaWhatsapp,
  FaStar,
} from "react-icons/fa";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "9926029451";
  const whatsappMessage = "Hello Pandit Ji, I would like to inquire about your services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.0926418237817!2d75.84711736723311!3d22.71446394557481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fda42f18f49d%3A0x6565bad8e0e50104!2s36%2F2%2C%2036%2F2%2C%20Gali%20No.%202%2C%20Malganj%2C%20Lodhipura%2C%20Indore%2C%20Madhya%20Pradesh%20452002!5e0!3m2!1sen!2sin!4v1761313728369!5m2!1sen!2sin";

  return (
    <footer className="bg-gradient-to-br from-[#FF9500] to-[#FF6347] text-white py-8 md:py-12 lg:py-16"> {/* Reduced mobile padding-y */}
      <div className="container mx-auto px-4 md:px-6"> {/* Reduced mobile px */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-16"> {/* Adjusted mobile gap */}

          {/* Column 1: Logo & Brief Intro */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-6 md:mb-0"> {/* Reduced mobile mb */}
            <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 mb-3"> {/* Reduced mobile gap and mb */}
              <div className="inline-flex items-center justify-center bg-white w-10 h-10 rounded-full shadow-lg"> {/* Slightly smaller icon */}
                <span className="text-2xl text-[#FF9500]">ॐ</span> {/* Slightly smaller text */}
              </div>
              <span className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}> {/* Adjusted mobile text size */}
                Pandit Gopal Krishna Sharma
              </span>
            </Link>
            <p className="text-white/90 text-sm leading-relaxed max-w-xs mb-4"> {/* Reduced mobile mb */}
              Your trusted Vedic Pandit for authentic online and in-person Puja, Astrology, and Vastu consultations.
            </p>
            <div className="flex space-x-3"> {/* Reduced mobile space-x */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="text-white/80 hover:text-white transition-colors duration-200 p-1.5 rounded-full bg-white/10 hover:bg-white/20"> {/* Slightly smaller padding */}
                <FaFacebookF className="w-4 h-4" /> {/* Slightly smaller icon */}
              </a>
              <a href="https://jsdl.in/DT-99JZYN9T" target="_blank" rel="noopener noreferrer" aria-label="JustDial"
                className="text-white/80 hover:text-white transition-colors duration-200 p-1.5 rounded-full bg-white/10 hover:bg-white/20">
                <FaStar className="w-4 h-4" />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="text-white/80 hover:text-white transition-colors duration-200 p-1.5 rounded-full bg-white/10 hover:bg-white/20">
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center lg:text-left mb-6 md:mb-0"> {/* Reduced mobile mb */}
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>Quick Links</h3> {/* Adjusted mobile text size and mb */}
            <ul className="space-y-2"> {/* Reduced mobile space-y */}
              <li><Link href="/" className="text-white/90 hover:text-white font-medium transition-colors duration-200 text-sm md:text-base">Home</Link></li> {/* Adjusted mobile text size */}
              <li><Link href="/services" className="text-white/90 hover:text-white font-medium transition-colors duration-200 text-sm md:text-base">Services</Link></li>
              <li><Link href="/about" className="text-white/90 hover:text-white font-medium transition-colors duration-200 text-sm md:text-base">About Pandit Ji</Link></li>
              <li><Link href="/blogs" className="text-white/90 hover:text-white font-medium transition-colors duration-200 text-sm md:text-base">Blogs</Link></li>
             
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="text-center lg:text-left mb-6 md:mb-0"> {/* Reduced mobile mb */}
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>Reach Out</h3> {/* Adjusted mobile text size and mb */}
            <ul className="space-y-3"> {/* Reduced mobile space-y */}
              <li className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-2"> {/* Reduced mobile gap */}
                <div className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-white"> {/* Slightly smaller icon holder */}
                  <FaPhoneAlt className="w-3.5 h-3.5" /> {/* Slightly smaller icon */}
                </div>
                <a href={`tel:+91${whatsappNumber}`} className="text-white/90 hover:text-white font-medium transition-colors duration-200 text-sm md:text-base mt-1 sm:mt-0"> {/* Adjusted mobile text size */}
                  +91 {whatsappNumber}
                </a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-2">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-white">
                  <FaEnvelope className="w-3.5 h-3.5" />
                </div>
                <a href="mailto:pgopalguruji@gmail.com" className="text-white/90 hover:text-white font-medium transition-colors duration-200 text-sm md:text-base mt-1 sm:mt-0">
                  pgopalguruji@gmail.com
                </a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-2">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-white">
                  <FaMapMarkerAlt className="w-3.5 h-3.5" />
                </div>
                <span className="text-white/90 font-medium text-sm md:text-base mt-1 sm:mt-0">
                  Indore, Ujjain & Worldwide Online
                </span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-2">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-white">
                  <FaClock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-white/90 font-medium text-sm md:text-base mt-1 sm:mt-0">Daily: 6:00 AM - 8:00 PM</p>
                  <p className="text-xs text-white/70 italic"> {/* Smaller italic text */}
                    *Emergency services 24/7
                  </p>
                </div>
              </li>
            </ul>
          </div>

           {/* Column 4: Location Map */}
           <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>Our Location</h3> {/* Adjusted mobile text size and mb */}
            <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg border-2 border-white/30">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location on Google Maps"
              ></iframe>
            </div>
            <p className="text-white/70 text-xs mt-2"> {/* Smaller text and reduced mt */}
              (In-person services available in Indore & Ujjain by appointment)
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-white/30 mt-8 pt-4 text-center text-white/70 text-xs md:text-sm"> {/* Reduced mobile mt and pt, smaller text */}
          <p>&copy; {currentYear} Pandit Gopal Krishna Sharma. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-1.5"> {/* Reduced mobile gap and mt */}
           
          </div>
        </div>
      </div>
    </footer>
  );
};