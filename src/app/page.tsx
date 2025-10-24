"use client";

import React, { useState } from "react";
import { Services } from "./components/Services"
import { About } from "./components/About"
import Image from "next/image";
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import Testimonials from "./components/Testimonials";
import { BookingModal } from "./components/BookingModal";
import {Toaster} from 'react-hot-toast'

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#FFF8F1]">
      {/* 2. ADD THE TOASTER COMPONENT HERE. It can be placed anywhere at the top level. */}
      <Toaster position="top-center" toastOptions={{ duration: 4000 }} />

      <Header />
      <main>
        <Hero onBookConsultationClick={openModal} />
        <Services />
        <Testimonials />
      </main>
      
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}


