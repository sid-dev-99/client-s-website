"use client";

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast'; // 1. Import the toast function

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const servicesOptions = [
  'Astrology & Kundali',
  'Vastu & Griha Pravesh',
  'Wedding Ceremonies',
  'Life Milestone Ceremonies',
  'Pujas for Well-being',
  'Havan & Yagya',
  'Other Inquiry'
];

export const BookingModal: FC<BookingModalProps> = ({ isOpen, onClose }) => {
  // 2. Add state to manage form submission
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // This effect resets the form when the modal is closed
  useEffect(() => {
    if (!isOpen) {
      // Add a small delay to allow the closing animation to finish before resetting
      setTimeout(() => {
        setSubmissionStatus('idle');
      }, 300);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // The form submission handler
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus('submitting');

    // --- Simulate sending data to a server ---
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    // In a real app, you would replace this with your `fetch` call.

    // 3. Set status to success and show the toast!
    setSubmissionStatus('success');
    toast.success('Your inquiry has been submitted successfully!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div
        className="relative bg-white w-full max-w-lg m-4 p-8 rounded-2xl shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors" aria-label="Close">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* 4. Conditionally render content based on submission status */}
        {submissionStatus === 'success' ? (
          // --- SUCCESS MESSAGE ---
          <div className="text-center py-8">
            <div className="mx-auto w-20 h-20 flex items-center justify-center bg-green-100 rounded-full">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-[#4A2E2A]" style={{ fontFamily: "'Lora', serif" }}>
              Thank You!
            </h2>
            <p className="text-[#4A2E2A]/80 mt-2">
              Your consultation request has been received. We will contact you shortly.
            </p>
            <button onClick={onClose} className="mt-8 bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-2 px-8 rounded-full">
              Close
            </button>
          </div>
        ) : (
          // --- THE FORM ---
          <>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-[#4A2E2A]" style={{ fontFamily: "'Lora', serif" }}>
                Book a Consultation
              </h2>
              <p className="text-[#4A2E2A]/80 mt-2">
                Please fill out the form below and we will contact you shortly to schedule your consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Inputs are unchanged... */}
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-[#4A2E2A]">Full Name</label>
                  <input type="text" name="full-name" id="full-name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9500]/50 focus:border-[#FF9500]" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#4A2E2A]">Phone Number</label>
                    <input type="tel" name="phone" id="phone" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9500]/50 focus:border-[#FF9500]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4A2E2A]">Email Address</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9500]/50 focus:border-[#FF9500]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#4A2E2A]">Service of Interest</label>
                  <select id="service" name="service" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9500]/50 focus:border-[#FF9500]">
                    {servicesOptions.map(option => <option key={option}>{option}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4A2E2A]">Message (Optional)</label>
                  <textarea name="message" id="message" rows={3} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9500]/50 focus:border-[#FF9500]" />
                </div>
              </div>
              <div className="mt-8">
                <button 
                  type="submit" 
                  disabled={submissionStatus === 'submitting'}
                  className="w-full bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submissionStatus === 'submitting' ? 'Submitting...' : 'Send Inquiry'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};