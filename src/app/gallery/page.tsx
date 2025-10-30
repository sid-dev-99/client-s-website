// src/app/gallery/page.tsx
'use client'; // This component uses client-side interactivity

import type { FC } from 'react';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import Head from 'next/head'; // For SEO metadata
import { FaWhatsapp, FaSearch, FaTimes } from 'react-icons/fa'; // Added FaSearch, FaTimes for clear button


// --- Dummy Gallery Data ---
// In a real application, this data would likely come from an API, CMS, or a dedicated data file.
// For demonstration, we'll keep it here.
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  description?: string;
  keywords?: string[];
}

const galleryImagesData: GalleryImage[] = [
  {
    id: '1',
    src: '/gallery/vedic.jpg',
    alt: 'Vedic Puja Ceremony with offerings and sacred fire',
    category: 'Pujas & Rituals',
    description: 'A traditional Vedic puja being performed with offerings and sacred fire, symbolizing devotion and purification.',
    keywords: ['puja', 'ritual', 'havan', 'ceremony', 'devotion', 'fire', 'offerings'],
  },
  {
    id: '2',
    src: '/gallery/astroconsult.png',
    alt: 'Pandit Ji providing an astrology consultation',
    category: 'Astrology',
    description: 'Pandit Ji providing an in-depth astrology consultation, offering guidance based on ancient Vedic principles.',
    keywords: ['astrology', 'kundali', 'horoscope', 'consultation', 'future', 'prediction'],
  },
  {
    id: '3',
    src: '/gallery/vastushanti.jpg',
    alt: 'Vastu Shanti Puja for new home',
    category: 'Vastu & Home',
    description: 'A Vastu Shanti puja being performed for harmony, positive energy, and well-being in a new home.',
    keywords: ['vastu', 'home', 'shanti', 'griha pravesh', 'house blessing', 'harmony'],
  },
  {
    id: '4',
    src: '/gallery/closefire.jpg',
    alt: 'Close-up of sacred Havan fire',
    category: 'Pujas & Rituals',
    description: 'A captivating close-up of the sacred fire of a havan, central to many purification and offering rituals.',
    keywords: ['havan', 'agni', 'fire', 'ritual', 'offerings', 'sacred'],
  },
  {
    id: '5',
    src: '/gallery/event.jpg',
    alt: 'Devotee making offerings during prayer',
    category: 'Pujas & Rituals',
    description: 'A devotee making sincere offerings during a prayer ceremony, a gesture of reverence and gratitude.',
    keywords: ['devotion', 'offering', 'prayer', 'bhakti', 'flowers'],
  },
  {
    id: '6',
    src: '/gallery/havan.jpg',
    alt: 'Family participating in a puja ceremony',
    category: 'Pujas & Rituals',
    description: 'A family unit participating in a sacred puja ceremony together, seeking blessings and spiritual bonding.',
    keywords: ['family', 'puja', 'togetherness', 'blessings', 'community'],
  },
  {
    id: '7',
    src: '/gallery/mandal.jpg',
    alt: 'Elaborate Mandal setup',
    category: 'Pujas & Rituals',
    description: 'An elaborate and meticulously arranged setup for a grand puja or havan, signifying major spiritual undertakings.',
    keywords: ['yagya', 'havan', 'ritual', 'grand ceremony', 'setup'],
  },
  // {
  //   id: '11',
  //   src: '/gallery/sanskrit-texts.jpg',
  //   alt: 'Ancient Sanskrit Scriptures and Texts',
  //   category: 'Knowledge & Learning',
  //   description: 'A glimpse of ancient Sanskrit scriptures and religious texts, repositories of timeless Vedic knowledge.',
  //   keywords: ['sanskrit', 'vedas', 'knowledge', 'scriptures', 'ancient wisdom', 'texts'],
  // },
  {
    id: '8',
    src: '/gallery/ritual.jpg',
    alt: 'Pandit Ji explaining significance of rituals',
    category: 'Consultations',
    description: 'Pandit Ji attentively explaining the deeper significance of rituals and spiritual concepts to devotees.',
    keywords: ['guidance', 'explanation', 'consultation', 'spiritual advice', 'teaching', 'knowledge sharing'],
  },
  {
    id: '9',
    src: '/gallery/vedicfestival.png',
    alt: 'Vedic Festival Celebration',
    category: 'Festivals',
    description: 'A vibrant celebration of a Vedic festival, full of joy, color, and spiritual fervor.',
    keywords: ['festival', 'celebration', 'vedic', 'joy', 'culture'],
  },
  {
    id: '10',
    src: '/gallery/kalash.png',
    alt: 'Kalash Sthapana ritual',
    category: 'Pujas & Rituals',
    description: 'The sacred Kalash Sthapana ritual, invoking divine energies and blessings.',
    keywords: ['kalash', 'sthapana', 'ritual', 'divine', 'blessings'],
  },
];
// --- End Dummy Gallery Data ---

const GalleryPage: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const whatsappNumber = '9926029451'; // Your WhatsApp number

  // Dynamically get unique categories and sort them
  const categories = useMemo(() => {
    const uniqueCategories = new Set(galleryImagesData.map(image => image.category));
    return ['All', ...Array.from(uniqueCategories)].sort();
  }, []);

  // Filter and memoize images based on search term and selected category
  const filteredImages = useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return galleryImagesData.filter(image =>
      (selectedCategory === 'All' || image.category === selectedCategory) &&
      (image.alt.toLowerCase().includes(lowerCaseSearchTerm) ||
       (image.description && image.description.toLowerCase().includes(lowerCaseSearchTerm)) ||
       (image.keywords && image.keywords.some(keyword => keyword.toLowerCase().includes(lowerCaseSearchTerm))) ||
       image.category.toLowerCase().includes(lowerCaseSearchTerm))
    );
  }, [searchTerm, selectedCategory]);

  const handleWhatsAppInquiry = (imageAlt: string) => {
    const message = `Hello Pandit Ji, I saw the image "${imageAlt}" in your gallery and would like to inquire more about related services or rituals.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <Head>
        <title>Gallery | Pandit Ji - Glimpses of Vedic Rituals & Services</title>
        <meta name="description" content="Explore a visual gallery showcasing various Hindu Pujas, Vedic rituals, ceremonies, and spiritual moments led by Pandit Ji. See authentic traditions come to life." />
        <meta name="keywords" content="Vedic gallery, Hindu puja images, ritual photos, astrology pictures, sanskar photos, Pandit Ji photos, spiritual moments, Indian culture, religious ceremonies, festivals, havan, yagya" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Gallery | Pandit Ji - Glimpses of Vedic Rituals & Services" />
        <meta property="og:description" content="Explore a visual gallery showcasing various Hindu Pujas, Vedic rituals, ceremonies, and spiritual moments led by Pandit Ji." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="YOUR_WEBSITE_URL/gallery" /> {/* Replace with your actual URL */}
        <meta property="og:image" content="YOUR_WEBSITE_URL/og-gallery-image.jpg" /> {/* Replace with a suitable gallery overview image */}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | Pandit Ji - Glimpses of Vedic Rituals & Services" />
        <meta name="twitter:description" content="Explore a visual gallery showcasing various Hindu Pujas, Vedic rituals, ceremonies, and spiritual moments led by Pandit Ji." />
        <meta name="twitter:image" content="YOUR_WEBSITE_URL/twitter-gallery-image.jpg" /> {/* Replace with a suitable gallery overview image */}
      </Head>

      <div className="min-h-screen bg-[#FFFDFB] flex flex-col">
        {/* Assuming Header is a client component or wrapped correctly */}
        {/* <Header /> */} {/* Uncomment if you have a Header component */}

        <main className="flex-grow container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
          {/* Section Heading */}
          <div className="text-center mb-10 md:mb-14 lg:mb-16">
            <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#FF9500] to-[#FF6347] w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-3 shadow-lg">
              <span className="text-3xl sm:text-4xl text-white">ॐ</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A2E2A] mb-3" style={{ fontFamily: "'Lora', serif" }}>
              Our Sacred Gallery
            </h1>
            <p className="text-base sm:text-lg text-[#4A2E2A]/80 max-w-3xl mx-auto px-2">
              A visual journey through authentic Vedic rituals, ceremonies, and spiritual moments.
            </p>
          </div>

          {/* Search & Category Filters */}
          <div className="max-w-4xl mx-auto mb-10 md:mb-14">
            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search images (e.g., puja, wedding, astrology)..."
                className="w-full p-3 pl-12 pr-10 border-2 border-orange-200 rounded-full focus:outline-none focus:border-orange-500 transition-colors duration-200 text-[#4A2E2A] shadow-sm text-sm sm:text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300
                    ${selectedCategory === category
                      ? 'bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white shadow-md'
                      : 'bg-[#FFF7E0] text-[#4A2E2A]/80 hover:bg-orange-100 hover:text-[#4A2E2A] border border-orange-100'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          {filteredImages.length === 0 ? (
            <p className="text-center text-xl text-[#4A2E2A]/70 mt-10">No images found matching your criteria.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="bg-gradient-to-br from-[#FF9500]/30 to-[#FFF7E0]/30 p-0.5 rounded-2xl shadow-md group hover:shadow-lg hover:shadow-orange-900/10 transition-all duration-300 ease-in-out flex flex-col h-full"
                >
                  <div className="bg-white rounded-[1.1rem] overflow-hidden h-full flex flex-col hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                    <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-56 xl:h-64"> {/* Responsive image height */}
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 300px" // Optimized responsive image sizing
                        priority={false} // Only give priority to LCP images on the actual landing page
                      />
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col flex-grow">
                      <h3 className="text-lg sm:text-xl font-bold text-[#4A2E2A] mb-2 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
                        {image.alt}
                      </h3>
                      {image.description && (
                        <p className="text-[#4A2E2A]/80 text-sm mb-3 flex-grow line-clamp-3"> {/* line-clamp for consistent card height */}
                          {image.description}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                        <span className="bg-[#FFF7E0] text-[#4A2E2A]/70 text-xs font-semibold px-2 py-0.5 rounded-full border border-orange-100">
                            {image.category}
                        </span>
                        {image.keywords && image.keywords.slice(0, 2).map((keyword, i) => ( // Show up to 2 keywords
                          <span key={i} className="bg-[#FFF7E0] text-[#4A2E2A]/70 text-xs font-semibold px-2 py-0.5 rounded-full border border-orange-100">
                            {keyword}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto">
                        <button
                          onClick={() => handleWhatsAppInquiry(image.alt)}
                          className="w-full bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                          <FaWhatsapp className="text-lg" /> Inquire
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* General contact CTA for other inquiries - now WhatsApp */}
          <div className="text-center mt-16 md:mt-20">
              <p className="text-lg text-[#4A2E2A]/90 mb-6 max-w-2xl mx-auto px-4">
                Have a specific image or ritual in mind that you don't see here?
                Feel free to connect directly for custom requests.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => handleWhatsAppInquiry("general inquiry from gallery page")}
                  className="bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-lg"
                >
                  <FaWhatsapp className="text-xl" /> Chat on WhatsApp
                </button>
              </div>
          </div>
        </main>

        {/* <Footer /> */} {/* Uncomment if you have a Footer component */}
      </div>
    </>
  );
};

export default GalleryPage;