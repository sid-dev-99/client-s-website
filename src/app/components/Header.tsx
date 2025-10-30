"use client";
import type { FC } from "react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Header: FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastY = useRef(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null); // Ref for the mobile menu drawer itself

  // Effect for hiding/showing header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (Math.abs(currentScroll - lastY.current) < 5) return;

      if (currentScroll > lastY.current && currentScroll > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect for handling clicks outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Ensure the click is outside the menu AND the menu button itself
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isMobileMenuOpen &&
        !(event.target as HTMLElement).closest('button[aria-label="Open menu"]') // Exclude clicks on the open menu button
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent body scrolling
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset"; // Restore body scrolling
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Main Header */}
      <header
        className={`bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white shadow-md sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* Logo and Title - Main Header */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white/90 p-2 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl text-[#FF9500]">ॐ</span>
            </div>
            <h1 className="text-lg font-bold tracking-wide">
              Pandit Gopal Krishna Sharma
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-6 font-medium"
            aria-label="Main Navigation"
          >
            {[
              ["Home", "/"],
              ["About-panditji", "/about-panditji"],
              ["Services","/services"],
              ["Blogs", "/blogs"],
              ["Gallery", "/gallery"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="relative group transition-colors duration-200 hover:text-[#FFF7E0]"
              >
                {label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Desktop Quick Links Dropdown */}
            <div className="relative group">
              <button className="relative group transition-colors duration-200 hover:text-[#FFF7E0] flex items-center gap-1 focus:outline-none">
                Quick Links
                <svg
                  className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white text-[#FF9500] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100">
                <div className="py-1">
                  {/* <Link
                    href="/free-kundali"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Free Kundali
                  </Link> */}
                  <Link
                    href="/lucky-wednesday-kundali"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Lucky Wednesday Kundali
                  </Link>
                  <Link
                    href="/panditji-consultation"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Panditji Consultation
                  </Link>
                  <Link
                    href="/virtual-pooja"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Virtual Pooja
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Always show hamburger here, 'X' is inside the drawer */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (Side Drawer) */}
      <div
        ref={mobileMenuRef} // Attach ref here
        className={`fixed top-0 left-0 h-full w-64 bg-[#FF9500] text-white shadow-lg z-[100] transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 pt-6">
          {/* Header for the Mobile Drawer */}
          <div className="flex items-center justify-between mb-6">
            {/* Logo and Title - INSIDE Drawer */}
            <Link href="/" className="flex items-center gap-2 group" onClick={toggleMobileMenu}>
              <div className="bg-white/90 p-1.5 rounded-xl shadow-sm">
                <span className="text-xl text-[#FF9500]">ॐ</span>
              </div>
              <h2 className="text-base font-bold tracking-wide">
                Pandit Gopal Krishna Sharma
              </h2>
            </Link>
            {/* Close Button for Drawer */}
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-7 h-7" // Slightly smaller 'X'
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <nav className="flex flex-col items-start font-medium text-white">
            {[
              ["Home", "/"],
              ["About-panditji", "/about-panditji"],
              ["Services","/services"],
              ["Blogs", "/blogs"],
              ["Gallery", "/gallery"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={toggleMobileMenu}
                className="block w-full py-2 px-3 hover:bg-[#FF6347] rounded-md transition-colors duration-200"
              >
                {label}
              </Link>
            ))}

            <div className="w-full mt-4 border-t border-white/30 pt-4">
              <h3 className="text-lg font-semibold mb-2 px-3">Quick Links</h3>
              {/* <Link
                href="/free-kundali"
                onClick={toggleMobileMenu}
                className="block w-full py-2 px-3 hover:bg-[#FF6347] rounded-md transition-colors duration-200 text-sm"
              >
                Free Kundali
              </Link> */}
              <Link
                href="/lucky-wednesday-kundali"
                onClick={toggleMobileMenu}
                className="block w-full py-2 px-3 hover:bg-[#FF6347] rounded-md transition-colors duration-200 text-sm"
              >
                Lucky Wednesday Kundali
              </Link>
              <Link
                href="/panditji-consultation"
                onClick={toggleMobileMenu}
                className="block w-full py-2 px-3 hover:bg-[#FF6347] rounded-md transition-colors duration-200 text-sm"
              >
                Panditji Consultation
              </Link>
              <Link
                href="/virtual-pooja"
                onClick={toggleMobileMenu}
                className="block w-full py-2 px-3 hover:bg-[#FF6347] rounded-md transition-colors duration-200 text-sm"
              >
                Virtual Pooja
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay for Side Drawer */}
      <div
        onClick={toggleMobileMenu} // Click to close overlay
        className={`fixed inset-0 bg-black bg-opacity-50 z-[99] md:hidden transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </>
  );
};