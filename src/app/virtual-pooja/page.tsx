// src/app/virtual-pooja/page.tsx
'use client';

import type { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaWhatsapp, FaStar, FaHandHoldingHeart, FaLeaf, FaHourglassHalf, FaIndianRupeeSign } from 'react-icons/fa6'; // Added specific icons
import { FaBookOpen } from 'react-icons/fa'; // Another icon for guidance
import {FaHome} from 'react-icons/fa'

const VirtualPoojaPage: FC = () => {
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeb-JeVjI-SKDqa7MHq-KJvHUC_Dyf5JJ4ls1YJrpTaDMbxWA/viewform?usp=sharing&ouid=103879829202607216932";
  const whatsappNumber = '9926029451'; // Your WhatsApp number
  const whatsappMessage = encodeURIComponent("Hello Pandit Ji, I have a question about the Virtual Pooja service.");

  return (
    <>
      <Head>
        <title>Virtual Pooja Service | Book Online Pooja with Pandit Ji</title>
        <meta name="description" content="Book a personalized Virtual Pooja with Pandit Gopal Krishna Sharma. Submit your details through our Google Form and experience divine blessings from anywhere." />
        <meta name="keywords" content="virtual pooja, online pooja, Pandit Gopal Krishna Sharma, Hindu ritual, religious ceremony, online worship, spiritual service, Vedic pooja, anushthan, blessings" />
        <meta property="og:title" content="Virtual Pooja Service | Book Online Pooja with Pandit Ji" />
        <meta property="og:description" content="Experience divine Virtual Pooja conducted by Pandit Ji. Submit details via form and receive blessings remotely." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gopalguruji.com/virtual-pooja" />
        <meta property="og:image" content="YOUR_WEBSITE_URL/virtual-pooja-og.jpg" /> {/* Create a suitable image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Virtual Pooja Service | Book Online Pooja with Pandit Ji" />
        <meta name="twitter:description" content="Experience divine Virtual Pooja conducted by Pandit Ji. Submit details via form and receive blessings remotely." />
        <meta name="twitter:image" content="YOUR_WEBSITE_URL/virtual-pooja-twitter.jpg" /> {/* Create a suitable image */}
        <link rel="canonical" href="https://gopalguruji.com/virtual-pooja" />
      </Head>

      <div className="min-h-screen bg-[#FFFDFB] flex flex-col">
        <main className="flex-grow container mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16">
          {/* Section Heading */}
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#FF9500] to-[#FF6347] w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-3 shadow-lg">
              <span className="text-2xl sm:text-3xl text-white"><FaHandHoldingHeart /></span> {/* Changed to an icon */}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A2E2A] mb-2" style={{ fontFamily: "'Lora', serif" }}>
              Book Your Personalized Virtual Pooja
            </h1>
            <p className="text-sm sm:text-base text-[#4A2E2A]/80 max-w-3xl mx-auto px-2">
              Participate in sacred Hindu rituals from the comfort of your home. Pandit Ji will perform the pooja on your behalf for peace, prosperity, and blessings.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start max-w-7xl mx-auto">

            {/* Left Column: Benefits and What to Expect */}
            <div className="space-y-6 text-[#4A2E2A]/90 text-sm sm:text-base leading-relaxed flex flex-col">
                <p className="text-base">
                    In today's fast-paced world, attending traditional poojas can be challenging. Our Virtual Pooja service ensures you receive divine blessings and spiritual fulfillment, no matter your location. Pandit Gopal Krishna Sharma Ji meticulously performs each ritual, dedicating the intentions to you and your family.
                </p>

                <div className="bg-[#FFF7E0] p-5 rounded-2xl shadow-md border border-orange-100">
                    <h2 className="text-xl font-bold text-[#4A2E2A] mb-3" style={{ fontFamily: "'Lora', serif" }}>
                        Why Choose Virtual Pooja?
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <FaStar className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-base text-[#4A2E2A]">Convenience & Accessibility</h3>
                                <p className="text-sm">Connect with divine energy from anywhere in the world.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <FaHandHoldingHeart className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-base text-[#4A2E2A]">Personalized Intentions</h3>
                                <p className="text-sm">Pooja performed with your specific Sankalpa (resolve/intention).</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <FaLeaf className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-base text-[#4A2E2A]">Authentic Vedic Rituals</h3>
                                <p className="text-sm">Experience traditional pooja as per ancient Vedic scriptures.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-md border border-orange-100 flex-grow">
                    <h3 className="text-xl font-bold text-[#4A2E2A] mb-3 text-center" style={{ fontFamily: "'Lora', serif" }}>
                        What to Expect:
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start">
                            <FaBookOpen className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-base text-[#4A2E2A]">Detail Submission</h4>
                                <p className="text-sm">Fill out the form with your details, purpose, and preferred pooja.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaHourglassHalf className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-base text-[#4A2E2A]">Confirmation & Scheduling</h4>
                                <p className="text-sm">Our team will contact you to confirm details and schedule the pooja.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaIndianRupeeSign className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-base text-[#4A2E2A]">Divine Blessings</h4>
                                <p className="text-sm">Receive spiritual benefits and blessings from the performed ritual.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-[#FFF7E0] to-orange-50 border-l-4 border-[#FF9500] p-4 rounded-r-lg shadow-sm">
                  <p className="text-sm sm:text-base text-[#4A2E2A]">
                    <strong>Note:</strong> Pooja materials, and Dakshina for Pandit Ji are included in the service. Specific dates and times will be coordinated after your submission.
                  </p>
                </div>

            </div>

            {/* Right Column: Google Form and Booking Info */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-orange-100 w-full lg:max-w-none flex flex-col"> {/* Added flex-col */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#4A2E2A] mb-5 text-center" style={{ fontFamily: "'Lora', serif" }}>
                Submit Your Pooja Request
              </h2>

              <p className="text-sm sm:text-base text-center text-[#4A2E2A]/80 mb-4 px-2">
                Please fill out the form below with your details and specific requirements for the Virtual Pooja.
              </p>

              {/* Google Form Embed */}
              <div className="relative w-full overflow-hidden rounded-lg shadow-md mb-6 flex-grow" style={{ paddingTop: '100%' }}> {/* Responsive aspect ratio */}
                <iframe
                  src={googleFormLink}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="Virtual Pooja Request Form"
                  sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-top-navigation-by-user-activation"
                ></iframe>
              </div>

              <div className="mt-auto text-center pt-4"> {/* mt-auto pushes it to the bottom */}
                <p className="text-base sm:text-lg font-medium text-[#4A2E2A] mb-3">
                  Have questions about Virtual Pooja?
                </p>
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg gap-2"
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

export default VirtualPoojaPage;