// src/app/about/page.tsx
'use client'; // This component uses client-side interactivity

import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'; // For SEO metadata
import { FaWhatsapp, FaHandsPraying, FaCrosshairs, FaStarOfLife } from 'react-icons/fa6'; // Added social icons for footer

const Aboutpage: FC = () => {
  const whatsappNumber = '9926029451'; // Your WhatsApp number
  const whatsappMessage = "Hello Pandit Ji, I'd like to know more about your Vedic services, astrology, or have a general inquiry.";

  return (
    <>
      <Head>
        {/* Primary Title Tag with Keywords for Ujjain, Indore, Vedic Pandit */}
        <title>About Pandit Gopal Krishna Sharma | Top Astrologer & Vedic Purohit in Ujjain & Indore, India</title>
        {/* Meta Description with rich keywords for search engines */}
        <meta name="description" content="Discover Pandit Gopal Krishna Sharma Ji, a highly respected Vedic Pandit and astrologer from Ujjain with over 25 years experience. Specializing in Vivah, Pind Daan, Navgraha Shanti, Kundali Dosh Nivaran, Vastu, and authentic pujas across Central India. Learn about his esteemed mentors and deep spiritual wisdom." />
        {/* Comprehensive Keyword List */}
        <meta name="keywords" content="Pandit in Ujjain, Astrologer in Ujjain, Purohit in Ujjain, Vedic Pandit Ujjain, Pandit in Indore, Astrologer in Indore, Purohit in Indore, Vedic Pandit India, Gopal Krishna Sharma, Vivah Sanskar, Pind Daan, Navgraha Shanti, Mrityunjaya Havan, Griha Pravesh, Satyanarayan Katha, Rudrabhishek, Vastu Shanti, Kundali Dosh Nivaran Puja Siddhwat Ujjain, Grih Lagavi Vidhi, Falit Jyotish, Gemstone Remedies, Dr. Shashikant Vyas, Saytanaryan Vyas, Vasudev Shastri Ujjain, Mahakal Mandir Purohit, 25 years experience, authentic Vedic rituals, spiritual guidance, Central India, Hindu priest" />
        {/* Open Graph / Facebook for social sharing */}
        <meta property="og:title" content="About Pandit Gopal Krishna Sharma | Top Astrologer & Vedic Purohit in Ujjain & Indore" />
        <meta property="og:description" content="Discover Pandit Gopal Krishna Sharma Ji, a highly respected Vedic Pandit and astrologer from Ujjain with over 25 years experience in authentic pujas and astrology across Central India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gopalguruji.com/about" /> {/* IMPORTANT: Replace with your actual live URL */}
        <meta property="og:image" content="YOUR_WEBSITE_URL/about.jpeg" /> {/* Replace with a high-quality image of Pandit Ji */}
        {/* Twitter Card for social sharing */}
        <meta name="facebook:title" content="About Pandit Gopal Krishna Sharma | Top Astrologer & Vedic Purohit in Ujjain & Indore" />
        <meta name="facebook:description" content="Discover Pandit Gopal Krishna Sharma Ji, a highly respected Vedic Pandit and astrologer from Ujjain with over 25 years experience in authentic pujas and astrology across Central India." />
        <meta name="twitter:image" content="YOUR_WEBSITE_URL/twitter-pandit-gopal-sharma.jpg" /> {/* Replace with a high-quality image of Pandit Ji */}
        {/* Canonical Link (Self-referencing for SEO) */}
        <link rel="canonical" href=" https://gopalguruji.com/about" /> {/* IMPORTANT: Replace with your actual live URL */}
      </Head>

      <div className="min-h-screen bg-[#FFFDFB] flex flex-col">
        {/* <Header /> */} {/* Uncomment and ensure your Header component is present */}

        <main className="flex-grow">
          {/* Section: Introduction and Personal Photo */}
          <section id="about-pandit-ji" className="bg-[#FFF8F1] py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6">

              {/* Section Heading */}
              <div className="text-center mb-10 md:mb-12">
                <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#FF9500] to-[#FF6347] w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-3 shadow-lg">
                  <span className="text-2xl sm:text-3xl text-white">ॐ</span>
                </div>
                {/* H1 for Primary Keyword Targeting */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A2E2A] mb-2" style={{ fontFamily: "'Lora', serif" }}>
                  Pandit Gopal Krishna Sharma: Your Trusted Vedic Astrologer & Purohit in Ujjain & Indore
                </h1>
                <p className="text-sm sm:text-base text-[#4A2E2A]/80 max-w-2xl mx-auto px-2">
                  With over 25 years of profound experience, Pandit Ji brings authentic Vedic wisdom and spiritual guidance to families across Central India and worldwide.
                </p>
              </div>

              {/* Main Content Grid: Image & Core Intro */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Image Column */}
                <div className="order-1 lg:order-1 flex justify-center">
                  <div className="relative w-full max-w-xs sm:max-w-sm h-72 sm:h-80 md:h-[400px] lg:h-[450px] rounded-2xl shadow-xl bg-gradient-to-br from-orange-200 to-amber-100 flex items-center justify-center overflow-hidden group border-4 border-white transform hover:scale-[1.01] transition-transform duration-500 ease-in-out">
                    {/* Image with descriptive alt text and priority for LCP */}
                    <Image
                      src="/about.jpeg" // IMPORTANT: Place Pandit Ji's photo here
                      alt="Pandit Gopal Krishna Sharma Ji, a respected Vedic astrologer and purohit from Ujjain, smiling warmly"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Text Content Column */}
                <div className="order-2 lg:order-2">
                  {/* H2 for secondary keyword targeting */}
                  <h2 className="text-xl sm:text-2xl font-bold text-[#4A2E2A] mb-3" style={{ fontFamily: "'Lora', serif" }}>
                    A Spiritual Journey Rooted in Ujjain's Sacred Traditions
                  </h2>
                  <div className="text-[#4A2E2A]/90 text-sm sm:text-base leading-relaxed space-y-3">
                    <p>
                      Born and brought up in the holy city of Ujjain, the land of Mahakal, Pandit Gopal Krishna Sharma Ji embodies a profound dedication to Vedic traditions. With over <strong>25 years of extensive experience</strong> as an authentic Vedic Pandit and trusted astrologer, he has illuminated the path for countless devotees with his insightful guidance and unwavering devotion.
                    </p>
                    <p>
                      Pandit Ji is not just a practitioner but a highly respected figure amongst <strong>Pandits in Ujjain and Indore</strong>, widely recognized for his precision in <em>falit jyotish</em> (predictive astrology) and mastery of <em>karmkand</em> (Vedic rituals). He is deeply committed to serving <em>yajmans</em> (patrons) across Central India and beyond, bringing ancient wisdom to modern lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Mentors and Lineage */}
          <section id="pandit-ji-mentors" className="bg-white py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4A2E2A] text-center mb-8 md:mb-10" style={{ fontFamily: "'Lora', serif" }}>
                Distinguished Mentors & A Legacy of Learning
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                {/* Mentor Card 1: Karmkand & Rituals */}
                <div className="bg-gradient-to-br from-[#FFF7E0] to-orange-50 p-5 sm:p-6 rounded-xl shadow-lg border border-orange-100 text-center transform hover:-translate-y-1 transition-transform duration-300 ease-in-out h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#FF9500] to-[#FF6347] text-white text-2xl mb-3 shadow-md">
                      <FaHandsPraying />
                    </div>
                    <h3 className="text-lg font-bold text-[#4A2E2A] mb-2" style={{ fontFamily: "'Lora', serif" }}>
                      Karmkand & Rituals Mastery
                    </h3>
                    <p className="text-[#4A2E2A]/80 text-xs sm:text-sm leading-relaxed mb-3 flex-grow">
                      Pandit Ji gained profound knowledge of <em>Karmkand</em> (Vedic rituals) from the highly revered <strong>Vasudev Shastri Ji of Ujjain</strong>, a scholar with over 50 years of experience. He also received invaluable training from <strong>Saytanaryan Vyas Ji</strong>, the esteemed <em>Raj Purohit</em> of the sacred Mahakal Mandir in Ujjain, ensuring authentic and precise ritual performance.
                    </p>
                  </div>
                  <p className="text-xs text-[#4A2E2A]/60 italic mt-auto">— Vasudev Shastri Ji & Saytanaryan Vyas Ji</p>
                </div>

                {/* Mentor Card 2: Astrology */}
                <div className="bg-gradient-to-br from-[#FFF7E0] to-orange-50 p-5 sm:p-6 rounded-xl shadow-lg border border-orange-100 text-center transform hover:-translate-y-1 transition-transform duration-300 ease-in-out h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#FF9500] to-[#FF6347] text-white text-2xl mb-3 shadow-md">
                      <FaCrosshairs /> {/* Icon for precision/prediction */}
                    </div>
                    <h3 className="text-lg font-bold text-[#4A2E2A] mb-2" style={{ fontFamily: "'Lora', serif" }}>
                      Astrology & Predictive Science
                    </h3>
                    <p className="text-[#4A2E2A]/80 text-xs sm:text-sm leading-relaxed mb-3 flex-grow">
                      His deep understanding of <strong>astrology</strong> and <em>falit jyotish</em> was honed under the tutelage of the renowned <strong>Dr. Shashikant Vyas Ji</strong>. This mentorship endowed Pandit Ji with exceptional accuracy in predictions and comprehensive knowledge of astrological remedies.
                    </p>
                  </div>
                  <p className="text-xs text-[#4A2E2A]/60 italic mt-auto">— Dr. Shashikant Vyas Ji</p>
                </div>

                {/* Mentor Card 3: Grih Lagavi Vidhi & Dosh Nivaran */}
                <div className="bg-gradient-to-br from-[#FFF7E0] to-orange-50 p-5 sm:p-6 rounded-xl shadow-lg border border-orange-100 text-center transform hover:-translate-y-1 transition-transform duration-300 ease-in-out h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#FF9500] to-[#FF6347] text-white text-2xl mb-3 shadow-md">
                      <FaStarOfLife /> {/* Icon for remedies/well-being */}
                    </div>
                    <h3 className="text-lg font-bold text-[#4A2E2A] mb-2" style={{ fontFamily: "'Lora', serif" }}>
                      Specialized Remedies & Vastu
                    </h3>
                    <p className="text-[#4A2E2A]/80 text-xs sm:text-sm leading-relaxed mb-3 flex-grow">
                      As a dedicated practitioner, Pandit Ji has also mastered <em>Grih Lagavi Vidhi</em> in astrology. He is highly sought after for <strong>Kundali Dosh Nivaran Pujas</strong>, especially performed at the sacred Siddhwat in Ujjain, and offers expert <strong>Vastu consultations</strong> and <strong>gemstone remedies</strong> for enhanced life harmony.
                    </p>
                  </div>
                  <p className="text-xs text-[#4A2E2A]/60 italic mt-auto">— Dedicated Practice & Specialized Study</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Comprehensive Services & Expertise */}
          <section id="pandit-ji-expertise" className="bg-[#FFF8F1] py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4A2E2A] text-center mb-8 md:mb-10" style={{ fontFamily: "'Lora', serif" }}>
                My Expertise: Authentic Vedic Pujas, Astrology & Vastu Consultations
              </h2>
              <div className="text-[#4A2E2A]/90 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto space-y-4">
                <p>
                  Pandit Ji performs a comprehensive range of <strong>Vedic rituals</strong> and <strong>pujas</strong>, ensuring each ceremony is conducted with utmost authenticity and devotion. His services include, but are not limited to:
                </p>
                <ul className="list-disc list-inside text-[#4A2E2A]/90 space-y-2 ml-4">
                  <li><strong>Vivah Sanskar</strong> (Marriage rituals)</li>
                  <li><strong>Pind Daan</strong> (Ancestral rites)</li>
                  <li><strong>Navgraha Shanti</strong> (Pacification of planetary influences)</li>
                  <li><strong>Mrityunjaya Havan</strong> (For health and longevity)</li>
                  <li><strong>Griha Pravesh</strong> (Housewarming ceremony)</li>
                  <li><strong>Satyanarayan Katha</strong> (Story of Lord Vishnu for prosperity)</li>
                  <li><strong>Rudrabhishek</strong> (Abhishekam to Lord Shiva)</li>
                  <li><strong>Vastu Shanti</strong> (For harmonious living spaces)</li>
                  <li>Specialized <strong>Kundali Dosh Nivaran Pujas in Siddhwat, Ujjain</strong></li>
                </ul>
                <p>
                  With a remarkable accuracy in <em>falit jyotish</em>, Pandit Ji provides insightful <strong>astrology consultations</strong>, offering guidance on life's challenges, future predictions, and effective <strong>gemstone remedies</strong>. His expertise extends to <strong>Vastu consultations</strong>, helping to align your home and workspace with positive cosmic energies.
                </p>
                <p className="font-semibold text-center text-lg mt-6">
                  &ldquo;A deeply spiritual soul, dedicated to guiding countless devotees with profound wisdom and devotion.&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* Quote Block - Repositioned for impact and adjusted styling */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
              <blockquote className="bg-gradient-to-r from-[#FFF7E0] to-orange-50 border-l-4 border-[#FF9500] p-4 sm:p-5 rounded-r-lg shadow-md text-center">
                <p className="text-lg sm:text-xl italic text-[#4A2E2A] relative pl-7"> {/* Adjusted padding-left here */}
                  <span className="absolute left-0 top-0 text-orange-400 text-4xl font-serif leading-none">“</span> {/* Increased size and added leading-none */}
                  Serving Yajmans across Central India and worldwide, bringing ancient wisdom to modern lives.
                </p>
                <cite className="block text-right text-[#4A2E2A]/70 text-xs sm:text-sm mt-2 not-italic">
                  — Pandit Gopal Krishna Sharma Ji
                </cite>
              </blockquote>
            </div>
          </section>


          {/* CTA Section - Adjusted for responsiveness and compactness */}
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
        </main>
      </div>
    </>
  );
};

export default Aboutpage;