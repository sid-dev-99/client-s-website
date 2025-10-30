// src/components/LuckyWednesdaySticker.tsx
'use client';

import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const LuckyWednesdaySticker: FC = () => {
  return (
    <div className='flex justify-center mt-2 mb-5'>
    <Link
      href="/lucky-wednesday-kundali"
      passHref
      className="block w-40 h-auto rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-orange-300 group"
      aria-label="Click to learn about Lucky Wednesday Free Kundali Session"
    >
      <div className="relative w-full h-24 bg-gradient-to-br from-[#FFDAB9] to-[#FF9500] flex items-center justify-center">
        <Image
          src="/lucky.png" // <--- **YOU WILL NEED TO PROVIDE THIS IMAGE**
          alt="Lucky Wednesday: Win a Free Kundali Session"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-75 transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 200px"
          priority
        />
      </div>
    </Link>
    </div>
  );
};