import type { FC } from 'react';
import Image from 'next/image'; // We will use Next.js Image for performance

// --- Service Data ---
// This is where you'll add your 15+ services. Just follow this structure.
// For images, place them in your `public/services/` folder.
const servicesData = [
  {
    imageSrc: '/services/puja-havan.jpg', // Replace with your actual image path
    title: 'Puja & Havan',
    description: 'Traditional puja ceremonies and sacred fire rituals performed for auspicious beginnings and spiritual well-being.',
    features: ['Ganesh Puja', 'Lakshmi Puja', 'Durga Puja', 'Havan Ceremonies'],
  },
  {
    imageSrc: '/services/wedding.jpg',
    title: 'Wedding Ceremonies',
    description: 'Complete Vedic wedding rituals including Vivah Sanskar and Saptapadi, blessing the sacred union of two souls.',
    features: ['Pre-wedding Rituals', 'Main Wedding Rituals', 'Post-wedding Blessings'],
  },
  {
    imageSrc: '/services/life-ceremonies.jpg',
    title: 'Life Ceremonies',
    description: 'Sacred ceremonies marking life\'s important transitions and milestones, from birth to sacred thread ceremonies.',
    features: ['Namkaran (Naming)', 'Mundan (First Haircut)', 'Griha Pravesh'],
  },
  {
    imageSrc: '/services/spiritual-consult.jpg',
    title: 'Spiritual Consultation',
    description: 'Personal guidance on dharma, karma, and spiritual growth, offering clarity and direction on your life\'s path.',
    features: ['Vedic Astrology', 'Spiritual Counseling', 'Dharmic Guidance'],
  },
  {
    imageSrc: '/services/festival.jpg',
    title: 'Festival Celebrations',
    description: 'Conducting traditional celebrations of major Hindu festivals with proper rituals, bringing divinity to your home.',
    features: ['Diwali Celebrations', 'Holi Ceremonies', 'Navratri Puja'],
  },
  {
    imageSrc: '/services/memorial.jpg',
    title: 'Memorial Services',
    description: 'Respectful ceremonies honoring departed souls with Vedic traditions to provide peace and a spiritual passage.',
    features: ['Shradh Ceremonies', 'Pitra Paksha Rituals', 'Annual Memorials'],
  },
];

export const Services: FC = () => {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#FF6347] to-[#FFA500] w-14 h-14 rounded-full mb-4 shadow-lg">
            <span className="text-3xl text-white">ॐ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Lora', serif" }}>
            Our Sacred Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Traditional Hindu ceremonies performed with authentic Vedic rituals and deep devotion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              {/* Image Container */}
              <div className="relative w-full h-56">
                {/* Your beautiful image will go here */}
                <Image
                  src={service.imageSrc}
                  alt={`Image for ${service.title}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                 {/* Fallback in case image is missing */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center -z-10">
                    <span className="text-gray-400">Image</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 mb-2" style={{ fontFamily: "'Lora', serif" }}>
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                
                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span key={i} className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-auto">
                  <button className="w-full bg-white text-[#FF4500] font-bold py-2 px-6 rounded-full border-2 border-[#FF4500] hover:bg-[#FFF1E6] transition-colors duration-300">
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};