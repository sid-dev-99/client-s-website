// src/app/lucky-wednesday-kundali/page.tsx
'use client';

import type { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaWhatsapp, FaCalendarCheck, FaGift, FaUserGraduate, FaHourglassHalf, FaArrowRight } from 'react-icons/fa6'; // Specific icons from fa6
import { FaStar, FaHandHoldingHeart } from 'react-icons/fa'; // More icons from fa
import { FaHome } from 'react-icons/fa'; // Icon for home link

const LuckyWednesdayKundaliPage: FC = () => {
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeuxX7oZw5o1ZMXbNRbSxOqkO2BB7QElgXtNwEXnbId7BCJEA/viewform?usp=publish-editor";
  const whatsappNumber = '9926029451'; // Your WhatsApp number
  const whatsappMessage = encodeURIComponent("Hello Pandit Ji, I have a question about the Lucky Wednesday Free Kundali Session.");

  return (
    <>
      <Head>
        <title>Free Kundali & Astrology Consultation | Lucky Wednesday with Pandit Ji</title>
        <meta name="description" content="Win a Free 30-minute Kundali & Astrology Consultation with Pandit Gopal Krishna Sharma every Wednesday. Submit your details for a chance to receive personalized guidance for your life's journey. Limited slots, serious inquiries only, for people across the world." />
        <meta name="keywords" content="free kundali, free astrology consultation, free horoscope, Pandit Gopal Krishna Sharma, Vedic astrology, online astrology, free guidance, life journey, weekly giveaway, Wednesday astrology, spiritual guidance, free psychic reading, online pandit, personalized consultation, spiritual solutions, worldwide service" />
        <meta property="og:title" content="Free Kundali & Astrology Consultation | Lucky Wednesday with Pandit Ji" />
        <meta property="og:description" content="Enter for a chance to win a Free 30-minute Kundali & Astrology Consultation with Pandit Ji every Wednesday. Get personalized guidance for people across the world." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gopalguruji.com/lucky-wednesday-kundali" />
        <meta property="og:image" content="YOUR_WEBSITE_URL/lucky-wednesday-og.jpg" /> {/* Create a suitable image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Kundali & Astrology Consultation | Lucky Wednesday with Pandit Ji" />
        <meta name="twitter:description" content="Enter for a chance to win a Free 30-minute Kundali & Astrology Consultation with Pandit Ji every Wednesday. Get personalized guidance for people across the world." />
        <meta name="twitter:image" content="YOUR_WEBSITE_URL/lucky-wednesday-twitter.jpg" /> {/* Create a suitable image */}
        <link rel="canonical" href="https://gopalguruji.com/lucky-wednesday-kundali" />
      </Head>

      <div className="min-h-screen bg-[#FFFDFB] flex flex-col">
        {/* You might want to include your global Header component here */}
        {/* <Header /> */}

        <main className="flex-grow container mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16">
          {/* Section Heading */}
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#FF9500] to-[#FF6347] w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-3 shadow-lg">
              <span className="text-2xl sm:text-3xl text-white"><FaGift /></span> {/* Gift icon */}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A2E2A] mb-2" style={{ fontFamily: "'Lora', serif" }}>
              Win a Free Kundali & Astrology Session with Pandit Ji!
            </h1>
            <p className="text-sm sm:text-base text-[#4A2E2A]/80 max-w-3xl mx-auto px-2">
              Every Wednesday, Pandit Gopal Krishna Sharma offers a <strong>free 30-minute personalized Kundali and Astrology consultation</strong> to one lucky individual. Submit your details for a chance to gain profound insights into your life's path, available for people across the world.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start max-w-7xl mx-auto">

            {/* Left Column: Why Participate & How it Works */}
            <div className="space-y-6 text-[#4A2E2A]/90 text-sm sm:text-base leading-relaxed flex flex-col">
                <p className="text-base">
                    Pandit Gopal Krishna Sharma Ji believes in making Vedic wisdom accessible. This special weekly session is his way of giving back, offering genuine guidance to those seeking clarity and direction in their lives, absolutely free of charge. This is a complimentary service extended globally to serious seekers.
                </p>

                <div className="bg-[#FFF7E0] p-5 rounded-2xl shadow-md border border-orange-100">
                    <h2 className="text-xl font-bold text-[#4A2E2A] mb-3" style={{ fontFamily: "'Lora', serif" }}>
                        Why Participate?
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <FaStar className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-base text-[#4A2E2A]">Personalized Guidance</h3>
                                <p className="text-sm">Receive insights tailored to your unique birth chart and life's journey.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <FaUserGraduate className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-base text-[#4A2E2A]">Expert Vedic Astrologer</h3>
                                <p className="text-sm">Benefit from Pandit Ji's 25+ years of profound experience in authentic Vedic astrology.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <FaHandHoldingHeart className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-base text-[#4A2E2A]">Absolutely Free Service</h3>
                                <p className="text-sm">A genuine offering to help you navigate life's challenges, available worldwide.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-md border border-orange-100 flex-grow">
                    <h3 className="text-xl font-bold text-[#4A2E2A] mb-3 text-center" style={{ fontFamily: "'Lora', serif" }}>
                        How It Works:
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start">
                            <FaArrowRight className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-base text-[#4A2E2A]">Submit Your Details</h4>
                                <p className="text-sm">Fill out the Google Form carefully with your astrological information and serious intent.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaCalendarCheck className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-base text-[#4A2E2A]">Selection Process</h4>
                                <p className="text-sm">Each week, one serious applicant will be chosen for the free session on Wednesday.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaWhatsapp className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-base text-[#4A2E2A]">WhatsApp Notification</h4>
                                <p className="text-sm">If selected, you will be notified via WhatsApp with your session timing and details.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaHourglassHalf className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-base text-[#4A2E2A]">30-Minute Session</h4>
                                <p className="text-sm">Engage in a focused 30-minute consultation with Pandit Ji to discuss your Kundali.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-[#FFF7E0] to-orange-50 border-l-4 border-[#FF9500] p-4 rounded-r-lg shadow-sm">
                  <p className="text-sm sm:text-base text-[#4A2E2A]">
                    <strong>Important:</strong> This is a special service offered by Pandit Ji. Please ensure your submission is accurate and reflects a genuine interest in Vedic guidance. Session timings will be coordinated personally.
                  </p>
                </div>

            </div>

            {/* Right Column: Google Form and Contact Info */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-orange-100 w-full lg:max-w-none flex flex-col">
              <h2 className="text-xl sm:text-2xl font-bold text-[#4A2E2A] mb-5 text-center" style={{ fontFamily: "'Lora', serif" }}>
                Apply for Your Free Wednesday Session
              </h2>

              <p className="text-sm sm:text-base text-center text-[#4A2E2A]/80 mb-4 px-2">
                Fill out the form below to submit your details and enter for a chance to be selected for a free Kundali and Astrology consultation.
              </p>

              {/* Google Form Embed */}
              <div className="relative w-full overflow-hidden rounded-lg shadow-md mb-6 flex-grow" style={{ paddingTop: '100%' }}> {/* Responsive aspect ratio */}
                <iframe
                  src={googleFormLink}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="Free Kundali Consultation Request Form"
                  sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-top-navigation-by-user-activation"
                ></iframe>
              </div>

              <div className="mt-auto text-center pt-4">
                <p className="text-base sm:text-lg font-medium text-[#4A2E2A] mb-3">
                  Questions about the Free Session?
                </p>
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg gap-2"
                >
                  <FaWhatsapp className="text-xl" /> Chat on WhatsApp
                </Link>
                <div className="mt-6">
                    <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-800 transition-colors duration-200">
                        <FaHome className="mr-2" /> Back to Home
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* You might want to include your global Footer component here */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default LuckyWednesdayKundaliPage;