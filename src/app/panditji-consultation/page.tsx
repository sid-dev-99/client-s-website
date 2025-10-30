// src/app/consultation/page.tsx - REVISED FOR MOBILE RESPONSIVENESS AND QR CODE VISIBILITY
'use client';

import type { FC } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { FaWhatsapp, FaChartLine, FaGem, FaIndianRupeeSign, FaHourglassHalf, FaCircleQuestion, FaSun } from 'react-icons/fa6'; // Added new icons
import {FaHome} from 'react-icons/fa';

const ConsultationPage: FC = () => {
  const whatsappNumber = '9926029451';
  const initialWhatsappMessage = "Hello Pandit Ji, I'm interested in booking a consultation and have completed the payment. Please guide me on the next steps.";

  return (
    <>
      <Head>
        <title>Online Vedic Consultation | Kundali, Vastu, Gemstone by Expert Astrologer</title>
        <meta name="description" content="Book a personalized online consultation with Pandit Gopal Krishna Sharma for expert guidance on Kundali (birth chart) analysis, Vastu Shastra for harmonious living, and tailored Gemstone recommendations. Pay ₹501 for a 30-minute session via QR code and connect on WhatsApp for booking." />
        <meta name="keywords" content="online consultation, Kundali consultation, Vastu consultation, gemstone consultation, Vedic astrology, online astrologer, Pandit Gopal Krishna Sharma, astrology remedies, Vastu tips, best gemstones, 30 min consultation, pay and consult, spiritual guidance, Ujjain, Indore" />
        <meta property="og:title" content="Online Vedic Consultation | Kundali, Vastu, Gemstone by Expert Astrologer" />
        <meta property="og:description" content="Book a personalized online consultation with Pandit Gopal Krishna Sharma for Kundali, Vastu, and Gemstone guidance. Pay ₹501 for 30 mins via QR." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="YOUR_WEBSITE_URL/consultation" />
        <meta property="og:image" content="YOUR_WEBSITE_URL/consultation-og.jpg" /> {/* Create a suitable image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online Vedic Consultation | Kundali, Vastu, Gemstone by Expert Astrologer" />
        <meta name="twitter:description" content="Book a personalized online consultation with Pandit Gopal Krishna Sharma for Kundali, Vastu, and Gemstone guidance. Pay ₹501 for 30 mins via QR." />
        <meta name="twitter:image" content="YOUR_WEBSITE_URL/consultation-twitter.jpg" /> {/* Create a suitable image */}
        <link rel="canonical" href="YOUR_WEBSITE_URL/consultation" />
      </Head>

      <div className="min-h-screen bg-[#FFFDFB] flex flex-col">
        <main className="flex-grow container mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16"> {/* Adjusted padding */}
          {/* Section Heading */}
          <div className="text-center mb-8 md:mb-10"> {/* Adjusted margin-bottom */}
            <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#FF9500] to-[#FF6347] w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-3 shadow-lg"> {/* Adjusted size and mb */}
              <span className="text-2xl sm:text-3xl text-white">ॐ</span> {/* Adjusted text size */}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A2E2A] mb-2" style={{ fontFamily: "'Lora', serif" }}> {/* Adjusted text size */}
              Personalized Online Vedic Consultation
            </h1>
            <p className="text-sm sm:text-base text-[#4A2E2A]/80 max-w-3xl mx-auto px-2"> {/* Adjusted text size and added px */}
              Receive expert guidance on Kundali analysis, Vastu principles, and gemstone recommendations directly from Pandit Ji.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start max-w-7xl mx-auto"> {/* Adjusted gap */}
            {/* Left Column: Consultation Types, Benefits & Added Content */}
            <div className="space-y-6 text-[#4A2E2A]/90 text-sm sm:text-base leading-relaxed flex flex-col"> {/* Adjusted space-y */}
              <p className="text-base"> {/* Explicitly set base text size */}
                Pandit Gopal Krishna Sharma Ji offers comprehensive online consultations, bringing profound Vedic wisdom directly to you, no matter where you are. These personalized sessions are designed to address your most pressing questions and offer clear, actionable guidance.
              </p>

              <div className="bg-[#FFF7E0] p-5 rounded-2xl shadow-md border border-orange-100"> {/* Adjusted padding */}
                <h2 className="text-xl font-bold text-[#4A2E2A] mb-3" style={{ fontFamily: "'Lora', serif" }}> {/* Adjusted text size */}
                  What We Offer:
                </h2>
                <ul className="space-y-3"> {/* Adjusted space-y */}
                  <li className="flex items-start">
                    <FaChartLine className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" /> {/* Adjusted icon size */}
                    <div>
                      <h3 className="font-semibold text-base text-[#4A2E2A]">Kundali Consultation</h3> {/* Adjusted text size */}
                      <p className="text-sm">In-depth analysis of your birth chart to understand life patterns, predictions, and planetary influences.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaHome className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" /> {/* Adjusted icon size */}
                    <div>
                      <h3 className="font-semibold text-base text-[#4A2E2A]">Vastu Consultation</h3> {/* Adjusted text size */}
                      <p className="text-sm">Guidance to harmonize energies in your home or office for prosperity, health, and peace.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaGem className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" /> {/* Adjusted icon size */}
                    <div>
                      <h3 className="font-semibold text-base text-[#4A2E2A]">Gemstone Consultation</h3> {/* Adjusted text size */}
                      <p className="text-sm">Recommendations for suitable gemstones to enhance planetary strengths and mitigate weaknesses.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Added a new section to balance column height */}
              <div className="bg-white p-5 rounded-2xl shadow-md border border-orange-100 flex-grow"> {/* Adjusted padding */}
                  <h3 className="text-xl font-bold text-[#4A2E2A] mb-3 text-center" style={{ fontFamily: "'Lora', serif" }}> {/* Adjusted text size */}
                      Why Choose Pandit Ji for Consultation?
                  </h3>
                  <div className="space-y-3"> {/* Adjusted space-y */}
                      <div className="flex items-start">
                          <FaSun className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" /> {/* Adjusted icon size */}
                          <div>
                              <h4 className="font-semibold text-base text-[#4A2E2A]">25+ Years of Experience</h4> {/* Adjusted text size */}
                              <p className="text-sm">Benefit from Pandit Ji's extensive experience in Vedic astrology and traditional practices.</p>
                          </div>
                      </div>
                      <div className="flex items-start">
                          <FaCircleQuestion className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" /> {/* Adjusted icon size */}
                          <div>
                              <h4 className="font-semibold text-base text-[#4A2E2A]">Clear & Actionable Advice</h4> {/* Adjusted text size */}
                              <p className="text-sm">Get practical solutions and clear guidance for life's challenges.</p>
                          </div>
                      </div>
                  </div>
              </div>


              {/* Note about Gemstones - now positioned below the new section */}
              <div className="bg-gradient-to-r from-[#FFF7E0] to-orange-50 border-l-4 border-[#FF9500] p-4 rounded-r-lg shadow-sm">
                <p className="text-sm sm:text-base text-[#4A2E2A]"> {/* Adjusted text size */}
                  <strong>Note:</strong> We also provide authentic gemstones, carefully selected and energized by Pandit Ji to ensure maximum astrological benefit. Please discuss your gemstone needs during your consultation.
                </p>
              </div>

            </div>

            {/* Right Column: Payment & Booking Workflow */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-orange-100 w-full lg:max-w-none"> {/* Adjusted padding */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#4A2E2A] mb-5 text-center" style={{ fontFamily: "'Lora', serif" }}> {/* Adjusted text size */}
                Book Your 30-Minute Consultation
              </h2>

              <div className="flex flex-col items-center mb-6">
                <div className="flex items-center justify-center bg-orange-100 text-orange-700 py-2 px-4 rounded-full text-lg sm:text-xl font-bold mb-4"> {/* Adjusted text size */}
                  <FaIndianRupeeSign className="mr-2 text-xl sm:text-2xl" /> 501 /- {/* Adjusted icon size */}
                  <span className="mx-3 text-orange-400">|</span>
                  <FaHourglassHalf className="mr-2 text-xl sm:text-2xl" /> 30 Mins {/* Adjusted icon size */}
                </div>
                <p className="text-sm sm:text-base text-center text-[#4A2E2A]/80 mb-4 px-2"> {/* Adjusted text size and added px */}
                  Scan the QR code below to make your payment for the consultation.
                </p>
                <div className="relative w-full max-w-xs aspect-square p-3 bg-white border border-gray-200 rounded-lg shadow-md mx-auto md:w-64 md:h-64 lg:w-72 lg:h-72"> {/* IMPORTANT: Adjusted QR code container for better responsiveness */}
                  <Image
                    src="/qrreal.png" // IMPORTANT: Replace with your actual QR code image path
                    alt="Scan to Pay 501 Rupees for Consultation"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#4A2E2A] mb-4 text-center" style={{ fontFamily: "'Lora', serif" }}> {/* Adjusted text size */}
                Steps to Book Your Consultation:
              </h3>
              <ol className="space-y-3 text-[#4A2E2A]/90 list-decimal list-inside ml-2 sm:ml-4 text-base"> {/* Adjusted space-y, ml, and text size */}
                <li>
                  <strong>Scan & Pay:</strong> Use any UPI app (Google Pay, PhonePe, Paytm, etc.) to scan the QR code and pay ₹501.
                </li>
                <li>
                  <strong>WhatsApp Screenshot:</strong> Send a screenshot of your successful payment to Pandit Ji on WhatsApp.
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(initialWhatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-600 hover:text-orange-800 transition-colors duration-200 ml-1 sm:ml-2 mt-1 sm:mt-0" // Adjusted margin and added mt for mobile
                  >
                    <FaWhatsapp className="text-base sm:text-lg mr-1" /> Click to Chat
                  </Link>
                </li>
                <li>
                  <strong>"Jai Shree Mahakal":</strong> After sending the screenshot, send a message "Jai Shree Mahakal" to confirm.
                </li>
                <li>
                  <strong>Share Details:</strong> You will then receive a response. Kindly reply with:
                  <ul className="list-disc list-inside ml-5 mt-1 text-sm bg-orange-50 p-2 rounded"> {/* Adjusted ml and padding */}
                    <li><strong>Your Name</strong></li>
                    <li><strong>Consultation Type</strong> (Kundali / Vastu / Gemstone)</li>
                    <li><strong>Payment Screenshot</strong> (Re-attach if needed for clarity)</li>
                  </ul>
                </li>
                <li>
                  <strong>Confirmation & Slot:</strong> Our team will review your details and connect with you to confirm your booking and schedule your 30-minute consultation slot.
                </li>
              </ol>

              <div className="mt-7 text-center"> {/* Adjusted margin-top */}
                <p className="text-base sm:text-lg font-medium text-[#4A2E2A] mb-3"> {/* Adjusted text size */}
                  For any questions before booking, feel free to reach out:
                </p>
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Pandit Ji, I have a question about the online consultation booking process.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg gap-2" // Adjusted padding and text size
                >
                  <FaWhatsapp className="text-xl" /> Chat on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ConsultationPage;