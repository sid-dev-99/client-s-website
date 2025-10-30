// components/Services.tsx
"use client";
import { FC, memo, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Ensure Link is imported

// Define constants outside the component for better performance and readability
const WHATSAPP_NUMBER = '919926029451'; // India country code + your number
const PANDIT_NAME = "Pandit Gopal Krishna Sharma"; // Consistent naming for SEO

interface ServiceItem {
  imageSrc: string;
  title: string;
  description: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    imageSrc: '/Services/astrology2.png',
    title: 'Astrology & Kundali',
    description: `Expert Kundali analysis and remedies for life's challenges, covering career, marriage, health, and dosh nivaran by ${PANDIT_NAME}.`,
    features: ['Kundali Analysis', 'Dosh Nivaran', 'Gemstone Solutions'],
  },
  {
    imageSrc: '/Services/vastu.png',
    title: 'Vastu & Griha Pravesh',
    description: `Harmonize your new home or office with authentic Vastu Shanti pujas and Griha Pravesh ceremonies for prosperity and positivity through ${PANDIT_NAME}.`,
    features: ['Vastu Dosh Nivaran', 'Griha Pravesh', 'Bhoomi Pujan'],
  },
  {
    imageSrc: '/Services/wedding2.png',
    title: 'Wedding Ceremonies',
    description: `Conducting beautiful and authentic Vivah Sanskar, blessing the sacred union of two souls with traditional Vedic rituals by ${PANDIT_NAME}.`,
    features: ['Pre-wedding Rituals', 'Vivah Sanskar', 'Saptapadi'],
  },
  {
    imageSrc: '/Services/wellbeing2.png',
    title: 'Life Milestone Ceremonies',
    description: `Honoring life's most important transitions with sacred Sanskaras, from a child's naming ceremony (Naamkaran) to the sacred thread (Janeu Sanskar) with ${PANDIT_NAME}.`,
    features: ['Naamkaran', 'Mundan', 'Janeu Sanskar'],
  },
  {
    imageSrc: '/Services/wellbeing.png',
    title: 'Pujas for Well-being',
    description: `Specialized pujas like Mahamrityunjay Jaap and Grah Shanti to remove obstacles and attract health, wealth, and success under the guidance of ${PANDIT_NAME}.`,
    features: ['Grah Shanti', 'Mahamrityunjay Jaap', 'Lakshmi Puja'],
  },
  {
    imageSrc: '/Services/havan.png',
    title: 'Havan & Yagya',
    description: `Performing powerful Havans and Yagyas, such as Navchandi Yagya, to create a divine atmosphere and invoke blessings by ${PANDIT_NAME}.`,
    features: ['Navchandi Yagya', 'Havan Rituals', 'Spiritual Energy'],
  },
];

interface ServicesProps {}

export const Services: FC<ServicesProps> = memo(() => {
  const handleWhatsAppInquiry = useCallback((serviceTitle: string) => {
    const message = encodeURIComponent(`Namaskar Guru Ji, I am interested in ${serviceTitle} service. Please provide more information.`);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, []);

  const serviceCards = useMemo(() => {
    return servicesData.map((service, index) => (
      <div
        key={`${service.title.replace(/\s/g, '-')}-${index}`}
        className="bg-gradient-to-br from-[#FF9500]/50 to-[#FFF7E0]/50 p-0.5 rounded-2xl shadow-lg shadow-orange-900/5 group hover:shadow-2xl hover:shadow-[#FF9500]/20 transition-all duration-300 ease-in-out"
      >
        <div className="bg-white rounded-[22px] overflow-hidden h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <div className="relative w-full h-56">
            <Image
              src={service.imageSrc}
              alt={`${service.title} service provided by ${PANDIT_NAME}. ${service.description}`}
              title={`Learn more about ${service.title} services by ${PANDIT_NAME}`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-[#4A2E2A] mb-2" style={{ fontFamily: "'Lora', serif" }}>
              {service.title}
            </h3>
            <p className="text-[#4A2E2A]/90 leading-relaxed mb-4 flex-grow">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {service.features.map((feature, i) => (
                <span key={i} className="bg-[#FFF7E0] text-[#4A2E2A]/80 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {feature}
                </span>
              ))}
            </div>
            <div className="mt-auto">
              <button
                onClick={() => handleWhatsAppInquiry(service.title)}
                className="w-full bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-base"
                aria-label={`Inquire about ${service.title} by ${PANDIT_NAME} via WhatsApp`}
              >
                <Image src="/wapp.png" alt="WhatsApp icon" width={20} height={20} className="inline-block mr-2" />
                Inquire via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  }, [handleWhatsAppInquiry]);

  return (
    <section id="services" className="py-12 lg:py-12" aria-labelledby="services-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#FF9500] to-[#FF6347] w-16 h-16 rounded-full mb-4 shadow-lg" aria-hidden="true">
            <span className="text-4xl text-white">ॐ</span>
          </div>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-[#4A2E2A]" style={{ fontFamily: "'Lora', serif" }}>
            Our Sacred <strong className="font-extrabold">Vedic Services</strong> by {PANDIT_NAME}
          </h2>
          <p className="text-lg text-[#4A2E2A]/80 max-w-2xl mx-auto mt-2">
            Explore our comprehensive offerings, including <strong className="font-semibold">astrology consultations</strong>, <strong className="font-semibold">Vastu Shanti</strong>, <strong className="font-semibold">traditional wedding ceremonies</strong>, and various <strong className="font-semibold">pujas for well-being</strong>, all performed with authentic Vedic traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {serviceCards}
        </div>

        <div className="text-center mt-16 lg:mt-20">
            <p className="text-lg text-[#4A2E2A]/90 mb-4 max-w-2xl mx-auto">
              {PANDIT_NAME} performs over 50 traditional Vedic rituals. For a complete list and detailed information about <strong className="font-semibold">all pujas</strong>, <strong className="font-semibold">astrological consultations</strong>, and <strong className="font-semibold">Vastu services in Indore and Ujjain</strong>, please visit our dedicated services page.
            </p>
            {/* CORRECTED LINK IMPLEMENTATION for modern Next.js */}
            <Link
              href="/services"
              className="bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center" // Apply styles directly to Link
              aria-label="View all comprehensive Vedic and Astrological services offered by Pandit Gopal Krishna Sharma"
              title="Explore a full list of Puja, Astrology, and Vastu services"
            >
              View All Services
            </Link>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';