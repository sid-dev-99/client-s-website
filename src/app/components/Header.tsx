"use client";
import type { FC } from "react";
import Link from "next/link";
import { useEffect, useRef, useState, memo, useCallback } from "react"; // Added memo and useCallback

// Define key SEO terms for consistency
const PANDIT_NAME = "Pandit Gopal Krishna Sharma";
const PANDIT_TITLE_SHORT = "Vedic Astrologer & Puja Expert"; // A concise SEO-friendly title
const WEBSITE_URL = "https://gopalguruji.com"; // For potential structured data if not elsewhere

export const Header: FC = memo(() => { // Memoize the Header component
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastY = useRef(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null); // Ref for the mobile menu drawer itself

  // Effect for hiding/showing header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (Math.abs(currentScroll - lastY.current) < 5) return;

      // Only hide if scrolling down significantly and past a certain threshold
      if (currentScroll > lastY.current && currentScroll > 150) { // Increased threshold slightly
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastY.current = currentScroll;
    };

    // Use passive event listener for performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect for handling clicks outside the mobile menu and body scroll lock
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if click is outside the menu AND not on the hamburger button
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        !target.closest('button[aria-label="Open navigation menu"]') // Specific aria-label for exclusion
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent body scrolling when menu is open
      document.body.ariaHidden = "true"; // Inform screen readers content behind is hidden
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset"; // Restore body scrolling
      document.body.ariaHidden = "false"; // Restore screen reader access
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
      document.body.ariaHidden = "false";
    };
  }, [isMobileMenuOpen]);

  // Memoize toggle function
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Define navigation items with more descriptive labels for SEO
  const mainNavItems = [
    { label: "Home", href: "/", seoTitle: `${PANDIT_NAME} - Official Website` },
    { label: "About Panditji", href: "/about-panditji", seoTitle: `About ${PANDIT_NAME} - Vedic Astrologer` },
    { label: "Services", href: "/services", seoTitle: `Vedic Puja, Astrology & Vastu Services by ${PANDIT_NAME}` },
    { label: "Blogs", href: "/blogs", seoTitle: `Vedic Wisdom & Astrology Blogs by ${PANDIT_NAME}` },
    { label: "Gallery", href: "/gallery", seoTitle: `Photo Gallery of ${PANDIT_NAME}'s Pujas & Events` },
  ];

  const quickLinkItems = [
    // { label: "Free Kundali", href: "/free-kundali", seoTitle: "Get Your Free Kundali Online" }, // Uncomment if needed
    { label: "Lucky Wednesday Kundali", href: "/lucky-wednesday-kundali", seoTitle: `Lucky Wednesday Kundali by ${PANDIT_NAME}` },
    { label: "Panditji Consultation", href: "/panditji-consultation", seoTitle: `Book Online Consultation with ${PANDIT_NAME}` },
    { label: "Virtual Pooja", href: "/virtual-pooja", seoTitle: `Perform Virtual Pooja with ${PANDIT_NAME}` },
  ];

  return (
    <>
      {/* Main Header */}
      <header
        className={`bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white shadow-md sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        role="banner" // Semantic role for header
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* Logo and Title - Main Header */}
          {/* Using <strong> within Link for keyword emphasis, but visually still part of H1 for SEO */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label={`${PANDIT_NAME}'s Official Website - Home`} // More descriptive label
            title={`${PANDIT_NAME}, ${PANDIT_TITLE_SHORT} - ${WEBSITE_URL}`} // SEO-friendly title attribute
          >
            <div className="bg-white/90 p-2 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
              <span className="text-2xl text-[#FF9500]">ॐ</span>
            </div>
            {/* H1 for main page title/brand. If this header is on ALL pages, the H1 should ideally be unique per page.
                However, for a brand name in a header, this is acceptable. Consider if the page itself has a more specific H1.
                If this is the *only* H1, ensure it's sufficiently descriptive.
             */}
            <h1 className="text-lg font-bold tracking-wide sr-only"> {/* sr-only hides H1 visually but keeps it for SEO and accessibility */}
              {PANDIT_NAME} - {PANDIT_TITLE_SHORT}
            </h1>
            <span className="text-lg font-bold tracking-wide"> {/* Visually displayed text */}
              {PANDIT_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-6 font-medium"
            aria-label="Main Navigation for Pandit Gopal Krishna Sharma's Website" // Descriptive aria-label
            role="navigation" // Explicit role for navigation
          >
            <ul className="flex space-x-6"> {/* Use ul for list of links */}
              {mainNavItems.map(({ label, href, seoTitle }) => (
                <li key={href}> {/* li for each navigation item */}
                  <Link
                    href={href}
                    className="relative group transition-colors duration-200 hover:text-[#FFF7E0]"
                    aria-label={seoTitle} // Enhance accessibility with seoTitle
                    title={seoTitle} // Add title for SEO and UX
                  >
                    {label}
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Quick Links Dropdown */}
            <div className="relative group">
              <button
                className="relative group transition-colors duration-200 hover:text-[#FFF7E0] flex items-center gap-1 focus:outline-none"
                aria-haspopup="menu" // Indicates a submenu
                aria-expanded={isMobileMenuOpen} // Will need state if you want to reflect actual dropdown open state
                aria-label="Quick Links Menu for Vedic Services" // Descriptive aria-label
                title="Explore quick links to special Vedic services and consultations" // SEO/UX title
              >
                Quick Links
                <svg
                  className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true" // Decorative
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" aria-hidden="true" />
              </button>
              <div
                className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white text-[#FF9500] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100"
                role="menu" // Semantic role for menu
              >
                <ul className="py-1"> {/* Use ul for list of dropdown items */}
                  {quickLinkItems.map(({ label, href, seoTitle }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                        role="menuitem" // Semantic role for menu item
                        aria-label={seoTitle}
                        title={seoTitle}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Open navigation menu for Pandit Gopal Krishna Sharma's website" // Very descriptive
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-drawer" // Links button to drawer content
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true" // Decorative
              >
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
        ref={mobileMenuRef}
        id="mobile-menu-drawer" // Add ID to link with aria-controls
        className={`fixed top-0 left-0 h-full w-64 bg-[#FF9500] text-white shadow-lg z-[100] transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog" // Semantic role for dialog/drawer
        aria-modal="true" // Indicates it's a modal dialog
        aria-label="Mobile navigation menu" // Descriptive label for the drawer itself
      >
        <div className="p-4 pt-6">
          {/* Header for the Mobile Drawer */}
          <div className="flex items-center justify-between mb-6">
            {/* Logo and Title - INSIDE Drawer */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              onClick={toggleMobileMenu}
              aria-label={`${PANDIT_NAME} Home`}
              title={`${PANDIT_NAME}'s Website`}
            >
              <div className="bg-white/90 p-1.5 rounded-xl shadow-sm" aria-hidden="true">
                <span className="text-xl text-[#FF9500]">ॐ</span>
              </div>
              <h2 className="text-base font-bold tracking-wide sr-only"> {/* Visually hide H2, keep for SEO */}
                {PANDIT_NAME} - Mobile Navigation
              </h2>
              <span className="text-base font-bold tracking-wide"> {/* Visually displayed text */}
                {PANDIT_NAME}
              </span>
            </Link>
            {/* Close Button for Drawer */}
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Close navigation menu" // Descriptive
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
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

          <nav className="flex flex-col items-start font-medium text-white" aria-label="Mobile Navigation">
            <ul className="w-full">
              {mainNavItems.map(({ label, href, seoTitle }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={toggleMobileMenu}
                    className="block w-full py-2 px-3 hover:bg-[#FF6347] rounded-md transition-colors duration-200"
                    aria-label={seoTitle}
                    title={seoTitle}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="w-full mt-4 border-t border-white/30 pt-4">
              <h3 className="text-lg font-semibold mb-2 px-3">Quick Links</h3>
              <ul className="w-full">
                {quickLinkItems.map(({ label, href, seoTitle }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={toggleMobileMenu}
                      className="block w-full py-2 px-3 hover:bg-[#FF6347] rounded-md transition-colors duration-200 text-sm"
                      aria-label={seoTitle}
                      title={seoTitle}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay for Side Drawer */}
      <div
        onClick={toggleMobileMenu}
        className={`fixed inset-0 bg-black bg-opacity-50 z-[99] md:hidden transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden="true" // Overlay is purely visual
      ></div>
    </>
  );
});

Header.displayName = "Header";