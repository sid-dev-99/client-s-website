// src/components/BlogCard.tsx
import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';



const Whatsapp: FC = () => {

    const whatsappNumber = 9926029451;
    const whatsappMessage = "Hello Pandit Ji, I'd like to know more about your Vedic services, astrology, or have a general inquiry";


    return (
        <div>
            {/* CTA Section - Compact Card Design */}
            <section id="connect-with-panditji" className="bg-[#FFFDFB] py-8 flex justify-center items-center"> {/* Changed background to match page, centered content */}
                <div className="bg-[#4A2E2A] text-white rounded-2xl p-6 sm:p-8 shadow-xl max-w-sm w-full text-center transform hover:scale-[1.02] transition-transform duration-300 ease-in-out"> {/* Card styling */}
                    <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ fontFamily: "'Lora', serif" }}>
                        Connect for Vedic Guidance
                    </h2>
                    <p className="text-sm sm:text-base mb-5 leading-snug opacity-90">
                        Expert astrology, pujas, and Vastu consultations.
                    </p>
                    <Link
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[#FF9500] text-white font-bold py-3 px-7 rounded-full shadow-lg hover:bg-[#FF6347] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg gap-2"
                    >
                        <FaWhatsapp className="text-xl" /> WhatsApp Pandit Ji
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Whatsapp;