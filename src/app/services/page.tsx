'use client'; // This component uses client-side interactivity

import type { FC } from 'react';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import Head from 'next/head'; // For SEO metadata if not using root layout's generateMetadata

// Import servicesData from the shared library
import { servicesData } from '../libs/servicesData'; // Adjust the import path if your libs folder is elsewhere
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

// Helper function to group services by category
const groupServicesByCategory = (services: typeof servicesData) => {
  const categories: { [key: string]: typeof servicesData } = {};
  services.forEach(service => {
    const category = service.category || 'Other Services';
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(service);
  });
  return categories;
};

const ServicesPage: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // WhatsApp number
  const whatsappNumber = '9926029451';

  // Memoize filtered and grouped services to avoid unnecessary re-calculations
  const filteredAndGroupedServices = useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredServices = servicesData.filter(service =>
      service.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      (service.shortDescription && service.shortDescription.toLowerCase().includes(lowerCaseSearchTerm)) ||
      (service.description && service.description.toLowerCase().includes(lowerCaseSearchTerm)) ||
      (service.keywords && service.keywords.some(keyword => keyword.toLowerCase().includes(lowerCaseSearchTerm)))
    );
    return groupServicesByCategory(filteredServices);
  }, [searchTerm]);

  const handleInquireNowClick = (serviceTitle: string) => {
    const message = `Hello Pandit Ji, I'm interested in the "${serviceTitle}" service. Could you please provide more details or schedule a consultation?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleGeneralInquiryClick = () => {
    const message = "Hello Pandit Ji, I'm interested in discussing a puja or service not listed on your website, or for a custom consultation.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* SEO Metadata using Head (if not using generateMetadata in root layout) */}
      <Head>
        <title>Vedic Services | Pandit Ji - Astrology, Pujas, Ceremonies</title>
        <meta name="description" content="Explore a comprehensive range of traditional Hindu Pujas, Vedic rituals, astrology consultations, and life milestone ceremonies offered by Pandit Ji. Find services for Vastu, marriages, well-being, and custom requests." />
        <meta name="keywords" content="Vedic services, Hindu pujas, astrology, kundali, Vastu Shanti, Griha Pravesh, wedding ceremonies, Vivah Sanskar, Pind Daan, Navgraha Shanti, Mrityunjaya Havan, Satyanarayan Katha, Rudrabhishek, Pandit Ji, spiritual services, religious rituals, custom pujas, Indian priest" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Vedic Services | Pandit Ji - Astrology, Pujas, Ceremonies" />
        <meta property="og:description" content="Explore a comprehensive range of traditional Hindu Pujas, Vedic rituals, astrology consultations, and life milestone ceremonies offered by Pandit Ji." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="YOUR_WEBSITE_URL/services" /> {/* Replace with your actual URL */}
        <meta property="og:image" content="YOUR_WEBSITE_URL/og-image.jpg" /> {/* Replace with a suitable image */}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vedic Services | Pandit Ji - Astrology, Pujas, Ceremonies" />
        <meta name="twitter:description" content="Explore a comprehensive range of traditional Hindu Pujas, Vedic rituals, astrology consultations, and life milestone ceremonies offered by Pandit Ji." />
        <meta name="twitter:image" content="YOUR_WEBSITE_URL/twitter-image.jpg" /> {/* Replace with a suitable image */}
      </Head>

      <div className="min-h-screen bg-[#FFFDFB]">
        <main className="container mx-auto px-6 py-16 lg:py-24">
          {/* Section Heading */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#FF9500] to-[#FF6347] w-16 h-16 rounded-full mb-4 shadow-lg">
              <span className="text-4xl text-white">ॐ</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A2E2A] mb-3" style={{ fontFamily: "'Lora', serif" }}>
              All Our Vedic Services
            </h1>
            <p className="text-lg text-[#4A2E2A]/80 max-w-3xl mx-auto">
              Explore the complete range of traditional Hindu Pujas, rituals, and consultations offered by Pandit Ji.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for a puja or service..."
              className="w-full p-3 border-2 border-orange-200 rounded-full focus:outline-none focus:border-orange-500 transition-colors duration-200 text-[#4A2E2A] shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Categorized Services List */}
          {Object.keys(filteredAndGroupedServices).length === 0 ? (
            <p className="text-center text-xl text-[#4A2E2A]/70">No services found matching your search.</p>
          ) : (
            Object.entries(filteredAndGroupedServices).map(([category, services]) => (
              <div key={category} className="mb-14">
                <h2 className="text-3xl font-bold text-[#4A2E2A] mb-8 text-center lg:text-left relative after:block after:w-24 after:h-1 after:bg-gradient-to-r after:from-[#FF9500] after:to-[#FF6347] after:mx-auto lg:after:ml-0 after:mt-3" style={{ fontFamily: "'Lora', serif" }}>
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="bg-gradient-to-br from-[#FF9500]/30 to-[#FFF7E0]/30 p-0.5 rounded-2xl shadow-md group hover:shadow-lg hover:shadow-orange-900/10 transition-all duration-300 ease-in-out"
                    >
                      <div className="bg-white rounded-[1.1rem] overflow-hidden h-full flex flex-col hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                        {service.imageSrc && (
                          <div className="relative w-full h-40 sm:h-48 md:h-56">
                            <Image
                              src={service.imageSrc}
                              alt={`Image for ${service.title}`}
                              fill
                              style={{ objectFit: 'cover' }}
                              className="group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        {!service.imageSrc && (
                          <div className="relative w-full h-40 sm:h-48 md:h-56 bg-[#FFF7E0] flex items-center justify-center text-[#FF9500] text-6xl font-bold rounded-t-[1.1rem]">
                            <span className="opacity-70">ॐ</span>
                          </div>
                        )}

                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl md:text-2xl font-bold text-[#4A2E2A] mb-2" style={{ fontFamily: "'Lora', serif" }}>
                            {service.title}
                          </h3>
                          <p className="text-[#4A2E2A]/80 leading-relaxed mb-4 flex-grow text-sm md:text-base">
                            {service.shortDescription || service.description}
                          </p>
                          {service.keywords && service.keywords.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                              {service.keywords.map((keyword, i) => (
                                <span key={i} className="bg-[#FFF7E0] text-[#4A2E2A]/70 text-xs font-semibold px-2.5 py-1 rounded-full border border-orange-100">
                                  {keyword}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="mt-auto">
                            <button
                              onClick={() => handleInquireNowClick(service.title)}
                              className="w-full bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-base"
                            >
                              Inquire Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}

          {/* General contact CTA for other inquiries - now WhatsApp */}
          <div className="text-center mt-16">
              <p className="text-lg text-[#4A2E2A]/90 mb-4 max-w-2xl mx-auto">
                Can't find what you're looking for, remember a specific puja, or need a personalized consultation? Connect with Pandit Ji directly.
              </p>
              {/* Centering the button */}
              <div className="flex justify-center"> {/* Added flex justify-center */}
                <button
                  onClick={handleGeneralInquiryClick} // New handler for general inquiry
                  className="bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-xl" /> Chat on WhatsApp
                </button>
              </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ServicesPage;