"use client";

import React, { useRef, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Testimonial = {
  name: string;
  location: string;
  text: string;
  avatar?: string;
  rating?: number;
};

const testimonials: Testimonial[] = [
  {
    name: "The Sharma Family",
    location: "Indore, MP",
    text:
      "Pandit ji conducted our Griha Pravesh with devotion and precision. We felt a divine calm in our new home.",
    avatar: "/avatars/family.png",
    rating: 5,
  },
  {
    name: "Anjali & Rohan Mehta",
    location: "Ujjain, MP",
    text:
      "Our wedding rituals were performed beautifully. The mantras created a spiritual atmosphere we’ll never forget.",
    avatar: "/avatars/couple.png",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    location: "Pune, MH",
    text:
      "Kundali guidance was spot on and the remedies brought clarity and peace to my life.",
    avatar: "/avatars/man.png",
    rating: 5,
  },
  {
    name: "Priya & Sameer Gupta",
    location: "Mumbai, MH",
    text:
      "Vastu Shanti for our office was flawless. We noticed a positive shift in the work environment.",
    avatar: "/avatars/business.png",
    rating: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1 text-amber-400 py-0">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          aria-hidden
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < count ? "fill-current" : "fill-transparent stroke-amber-400"}`}
        >
          <path d="M10 1.6l2.4 4.86 5.36.78-3.88 3.78.92 5.35L10 13.94 5.2 16.37l.92-5.35L2.24 7.24l5.36-.78L10 1.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  // Keep a single, stable autoplay instance
  const autoplay = useRef(
    Autoplay({
      delay: 1600, // faster switching
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  // speed: lower = snappier transitions
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", speed: 5, containScroll: "trimSnaps" },
    [autoplay.current]
  );

  // Dots (optional)
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSnapCount(emblaApi.scrollSnapList().length);
      onSelect();
    });
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-15 bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg">
            <span className="text-2xl text-white">ॐ</span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-orange-700"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Words of Devotion
          </h2>
          <p className="mt-2 text-orange-900/70">
            Blessings and experiences shared by our devotees.
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef} aria-roledescription="carousel">
          <div className="flex">
            {testimonials.map((t, i) => (
              <div
                key={i}
                // IMPORTANT: use flex-basis to define slide widths
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-4"
                role="group"
                aria-label={`Slide ${i + 1} of ${testimonials.length}`}
              >
                <div className="h-full rounded-2xl border border-orange-100 bg-white p-6 shadow-[0_10px_30px_-10px_rgba(234,88,12,0.25)]">
                  <div className="flex items-center gap-4">
                    {/* <img
                      src={t.avatar ?? "/avatars/default.png"}
                      alt=""
                      className="h-12 w-12 rounded-full ring-2 ring-orange-100 object-cover"
                    /> */}
                    <div>
                      <p className="font-semibold text-orange-800">{t.name}</p>
                      <p className="text-sm text-orange-900/60">{t.location}</p>
                    </div>
                  </div>

                  <div className="my-4">
                    <Stars count={t.rating ?? 5} />
                  </div>

                  <blockquote className="relative text-[1.05rem] leading-relaxed text-orange-950/80">
                    <span className="absolute -left-2 -top-2 text-amber-300">“</span>
                    {t.text}
                    <span className="text-amber-300">”</span>
                  </blockquote>

                  <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: snapCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === selected ? "w-6 bg-orange-600" : "bg-orange-300 hover:bg-orange-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
