"use client"
import type { FC } from 'react';
import Link from 'next/link';
import {useEffect,useState} from 'react'

export const Header: FC = () => {
    const [isVisible,setIsVisible] = useState(true);
    const [lastY,setLastY] = useState(0)

    useEffect(() =>{
        const handleScroll = () =>{
            const currentScroll = window.scrollY

            if(currentScroll > lastY && currentScroll > 100 ) {
                setIsVisible(false)
            }else {
                setIsVisible(true)
            }
            setLastY(currentScroll)
        };

        window.addEventListener('scroll',handleScroll,{passive:true})

        return () => {
            window.addEventListener('scroll',handleScroll)
        }
    },[lastY])

  return (
    <header className={` bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white shadow-md sticky top-0 z-50 transition-transform duration-200 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} `} >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="bg-white/90 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl text-[#FF4500]">ॐ</span>
          </div>
          <div>
            <h1 className="text-lg font-bold">Pandit G.K. Sharma</h1>
            {/* <p className="text-xs opacity-90">Vedic Scholar & Priest</p> */}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-yellow-300 transition-colors">About</Link>
          <Link href="/services" className="hover:text-yellow-300 transition-colors">Services</Link>
          <Link href="/gallery" className="hover:text-yellow-300 transition-colors">Gallery</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
            <button className="text-white focus:outline-none" aria-label="Open menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
      </div>
    </header>
  );
};