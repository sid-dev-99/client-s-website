import type { FC } from 'react';
// Uncomment the line below when you are ready to use a real image
import Image from 'next/image';

export const Hero: FC = () => {
  return (
    <section className="relative bg-[#FFF8F1] py-8 lg:py-6 md:py-24">
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* === TEXT CONTENT COLUMN === */}
          <div className="flex flex-col text-center lg:text-left">
            
            {/* --- Block 1: Intro Headings --- */}
            <div>
              <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#FF6347] to-[#FFA500] w-16 h-16 rounded-full mb-5 shadow-lg">
                <span className="text-4xl text-white">ॐ</span>
              </div>
              <h1 className="text-4xl md:text-3xl font-bold text-slate-600 mb-3" style={{ fontFamily: "'Lora', serif" }}>
                Pandit Gopal Krishna Sharma
              </h1>
              <h2 className="text-2xl font-semibold text-[#FF4500]">
                Priest | Astrologer | Vastu
              </h2>
            </div>

            {/* --- Block 2: Image (Mobile Only) --- */}
            <div className="my-8 lg:hidden">
              <div className="relative w-full max-w-sm mx-auto h-96 rounded-3xl shadow-2xl bg-gray-200 flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 text-lg">Image of Pandit Ji</span>
                {/* Your mobile image component goes here */}
                 <Image
                src="/pandit-ji-image.jpeg"
                alt="Pandit Gopal Krishna Sharma performing a sacred Hindu ritual"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              </div>
            </div>

            {/* --- Block 3: Body Content & CTAs --- */}
            <div className="mt-6 lg:mt-8">
              {/* --- UPDATED TEXT --- */}
              <p className="max-w-xl mx-auto lg:mx-0 text-lg text-slate-700 leading-relaxed mb-8">
                Guiding you through life's sacred moments with authentic Vedic traditions. I bring spiritual clarity and profound devotion to every ceremony, ensuring your most important occasions are honored with true purpose and sanctity.
              </p>

              <div className=" bg-orange-50 border-l-4 border-orange-500 p-4 text-left rounded-r-lg max-w-xl mx-auto lg:mx-0 mb-10 shadow-sm">
                <p className="flex justify-center font-semibold italic text-slate-800">।। ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।।</p>
                <p className="flex justify-center text-center text-slate-600 mt-1">"May all beings be happy, may all beings be healthy"</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Book Consultation
                </button>
                <button className="bg-white text-[#FF4500] font-bold py-3 px-8 rounded-full border-2 border-[#FF4500] hover:bg-orange-50 transition-colors duration-300">
                  View Services
                </button>
              </div>
            </div>
          </div>

          {/* === IMAGE COLUMN (Desktop Only) === */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md h-[32rem] rounded-3xl shadow-2xl bg-gray-200 flex items-center justify-center overflow-hidden">
              <span className="text-gray-500 text-lg">Image of Pandit Ji</span>
              
              <Image
                src="/pandit-ji-image.jpeg"
                alt="Pandit Gopal Krishna Sharma performing a sacred Hindu ritual"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};