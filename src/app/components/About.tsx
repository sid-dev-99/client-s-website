import type { FC } from 'react';
// Uncomment the line below when you are ready to use a real image
// import Image from 'next/image';

export const About: FC = () => {
  return (
    <section id="about" className="bg-[#FFF8F1] py-16 md:py-24">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#FF6347] to-[#FFA500] w-14 h-14 rounded-full mb-4 shadow-lg">
            <span className="text-3xl text-white">ॐ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Lora', serif" }}>
            About Pandit Gopal Sharma
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dedicated to preserving and sharing the sacred traditions of Hindu dharma.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Column */}
          <div className="order-1 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-sm h-96 rounded-3xl shadow-2xl bg-gray-300 flex items-center justify-center overflow-hidden group">
              {/* Placeholder */}
              <span className="text-gray-600 text-lg">Personal photo of Pandit Ji</span>

              {/* 
                ** HOW TO ADD YOUR IMAGE **
                1. Place your personal photo in `public/pandit-personal-photo.jpg`.
                2. Uncomment the `import Image from 'next/image';` line at the top.
                3. Replace the placeholder span above with the Image component below.
              */}
              {/*
              <Image
                src="/pandit-personal-photo.jpg"
                alt="A warm and personal photo of Pandit Gopal Krishna Sharma"
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              */}
            </div>
          </div>

          {/* Text Content Column */}
          <div className="order-2 lg:order-2">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              25+ Years of Sacred Service
            </h3>
            <div className="text-slate-700 text-lg leading-relaxed space-y-4">
              <p>
                Born into a family of learned Brahmins in Varanasi, I have dedicated my life to the study and practice of Vedic traditions. My journey began at the age of 12 under the guidance of my grandfather, a renowned Sanskrit scholar.
              </p>
              <p>
                I hold a Master's degree in Sanskrit and Vedic Studies from Banaras Hindu University and have been blessed to serve thousands of families across the region in their most sacred moments.
              </p>
            </div>

            {/* Quote Block */}
            <blockquote className="mt-8 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg shadow-sm">
              <p className="text-xl italic text-slate-800">
                "धर्मो रक्षति रक्षितः - Dharma protects those who protect dharma"
              </p>
              <cite className="block text-right text-slate-500 mt-2 not-italic">
                - Ancient Vedic Wisdom
              </cite>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
};