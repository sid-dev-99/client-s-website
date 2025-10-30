// app/page.tsx
"use client";

import React from "react"; // Removed useState as it's no longer used
import { Hero } from "./components/Hero";
import { Services } from "./components/Services"; // Assuming Services doesn't need onInquireNowClick prop anymore or has its own call handler
import Testimonials from "./components/Testimonials";
// import { BookingModal } from "./components/BookingModal"; // Keep this commented out if not used
// import LuckyWednesdayKundaliPage from "./lucky-wednesday-kundali/page"; // This import seems unused
import { LuckyWednesdaySticker } from "./components/LuckyWednesdaySticker";
// import Whatsapp from "./components/Whatsapp";
// REMOVE Header, Footer, Toaster imports - they are now in layout.tsx

export default function HomePage() {
  // This function will be called when "Book Consultation" or other call-to-action buttons are clicked
  const handlePhoneCall = () => {
    window.location.href = "tel:+919926029451";
  };

  return (
    <> {/* Use a React Fragment as layout.tsx provides the main tag */}
      {/* Pass the phone call handler to the Hero component */}
      <Hero onBookConsultationClick={handlePhoneCall} />

      {/* If Services also needs to make a call, you could pass it here like:
          <Services onInquireNowClick={handlePhoneCall} />
          Otherwise, if it has no interactive props now, keep it as <Services /> */}
      <Services/> {/* Assuming Services' "Inquire Now" should also call */}

      <Testimonials />
      <LuckyWednesdaySticker/>

      {/* BookingModal is completely removed/commented out from this logic flow */}
    </>
  );
}


{/* BookingModal should still be here as it's specific to homepage interactions */}
      {/* <BookingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        initialServiceSelection={selectedServiceForBooking}
      /> */}
 // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedServiceForBooking(undefined);
  // };

  // const handleInquireNowClick = (serviceTitle: string) => {
  //   setSelectedServiceForBooking(serviceTitle);
  //   openModal();
  // };