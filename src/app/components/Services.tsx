import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// The data remains the same from your last edit.
const servicesData = [
  {
    imageSrc: '/Services/astrology2.png',
    title: 'Astrology & Kundali',
    description: "In-depth horoscope analysis and remedies for life's challenges, covering career, marriage, health, and dosh nivaran.",
    features: ['Kundali Analysis', 'Dosh Nivaran', 'Gemstone Solutions'],
  },
  {
    imageSrc: '/Services/vastu.png',
    title: 'Vastu & Griha Pravesh',
    description: 'Harmonize your new home or office with Vastu Shanti pujas and Griha Pravesh ceremonies for prosperity and positivity.',
    features: ['Vastu Dosh Nivaran', 'Griha Pravesh', 'Bhoomi Pujan'],
  },
  {
    imageSrc: '/Services/wedding.png',
    title: 'Wedding Ceremonies',
    description: 'Conducting beautiful and authentic Vivah Sanskar, blessing the sacred union of two souls with traditional Vedic rituals.',
    features: ['Pre-wedding Rituals', 'Vivah Sanskar', 'Saptapadi'],
  },
  {
    imageSrc: '/Services/lifePoojas.png',
    title: 'Life Milestone Ceremonies',
    description: "Honoring life's most important transitions with sacred Sanskaras, from a child's naming ceremony to the sacred thread.",
    features: ['Naamkaran', 'Mundan', 'Janeu Sanskar'],
  },
  {
    imageSrc: '/Services/wellbeing.png',
    title: 'Pujas for Well-being',
    description: 'Specialized pujas like Mahamrityunjay Jaap and Grah Shanti to remove obstacles and attract health, wealth, and success.',
    features: ['Grah Shanti', 'Mahamrityunjay Jaap', 'Lakshmi Puja'],
  },
  {
    imageSrc: '/Services/havan.png',
    title: 'Havan & Yagya',
    description: 'Performing powerful Havans and Yagyas, such as Navchandi Yagya, to create a divine atmosphere and invoke blessings.',
    features: ['Navchandi Yagya', 'Havan Rituals', 'Spiritual Energy'],
  },
];

export const Services: FC = () => {
  return (
    <section id="services" className="bg-white ">
      <div className="container mx-auto px-6">
        {/* Section Heading with new luminous colors */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#FF9500] to-[#FF6347] w-14 h-14 rounded-full mb-4 shadow-lg">
            <span className="text-3xl text-white">ॐ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A2E2A] mb-3" style={{ fontFamily: "'Lora', serif" }}>
            Our Sacred Services
          </h2>
          <p className="text-lg text-[#4A2E2A]/80 max-w-2xl mx-auto">
            Highlighting our most requested ceremonies for life's significant moments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {servicesData.map((service, index) => (
            // --- BORDER LOGIC START ---
            // 1. Parent div with the gradient background and padding to create the "border" effect.
            <div 
              key={index} 
              className="bg-gradient-to-br from-[#FF9500]/50 to-[#FFF7E0]/50 p-0.5 rounded-2xl shadow-lg shadow-orange-900/5 group hover:shadow-2xl hover:shadow-[#FF9500]/20 transition-all duration-300 ease-in-out"
            >
              {/* 2. Inner container with a white background that sits on top of the gradient. */}
              <div className="bg-white rounded-[22px] overflow-hidden h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                {/* Image Container */}
                <div className="relative w-full h-56">
                  <Image
                    src={service.imageSrc}
                    alt={`Image for ${service.title}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Container */}
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
                    <button className="w-full bg-white text-[#FF9500] font-bold py-2 px-6 rounded-full border-2 border-[#FF9500] hover:bg-[#FFF7E0] transition-colors duration-300">
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            // --- BORDER LOGIC END ---
          ))}
        </div>

        {/* "View All Services" Call to Action */}
        <div className="text-center mt-16">
            <p className="text-lg text-[#4A2E2A]/90 mb-4 max-w-2xl mx-auto">
              Pandit Ji performs over 50 traditional Vedic rituals. For a complete list, please visit our services page.
            </p>
            <Link href="/services" passHref>
              <button className="bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                View All Services
              </button>
            </Link>
        </div>
      </div>
    </section>
  );
};