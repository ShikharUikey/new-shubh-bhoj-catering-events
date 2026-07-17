"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Wedding Ceremony",
    location: "Delhi",
    image: "/client-1.jpg",
    rating: 5,
    text:
      "The food quality, hospitality and presentation exceeded our expectations. Every guest appreciated the delicious menu and professional service. Shubh Bhoj made our wedding truly unforgettable.",
  },
  {
    id: 2,
    name: "Priya Vaishnav",
    role: "Corporate Event",
    location: "Indore",
    image: "/client-2.jpg",
    rating: 5,
    text:
      "Professional staff, timely execution and beautifully curated food stations. The entire experience felt premium and stress-free. Highly recommended for corporate gatherings.",
  },
  {
    id: 3,
    name: "Sateesh Gupta",
    role: "Family Celebration",
    location: "Jabalpur",
    image: "/client-3.jpg",
    rating: 5,
    text:
      "From planning to execution, everything was seamless. The catering quality, live counters and hospitality impressed every member of our family. Definitely our first choice for future events.",
  },
];

export default function Testimonials() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const active = testimonials[current];

  return (
    <section className="relative py-28 overflow-hidden bg-[#F8F5F0]">

      {/* Decorative Blur */}

      <div className="absolute -top-32 left-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5A001A]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-[#C8A64D] font-semibold">

            Client Testimonials

          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#5A001A]">

            What Our Clients Say

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-900 text-lg leading-8">

            Every celebration we cater becomes a cherished memory.
            Here's what our clients say about their experience with
            Shubh Bhoj Catering & Events.

          </p>

        </div>

        {/* Testimonial Card Starts */}

        <div className="relative">

                    <div className="relative overflow-hidden rounded-[40px] bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_80px_rgba(0,0,0,0.12)]">

            {/* Gold Accent */}

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-[#F4E3A3] to-[#D4AF37]" />

            {/* Quote Icon */}

            <div className="absolute right-10 top-10 text-8xl text-[#D4AF37]/20 font-serif select-none">

              “

            </div>

            <div className="grid lg:grid-cols-[320px,1fr]">

              {/* ================= Left ================= */}

              <div className="relative bg-gradient-to-br from-[#5A001A] to-[#7B0024] p-10 flex flex-col justify-center items-center text-center">

                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-2xl">

                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-cover"
                  />

                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">

                  {active.name}

                </h3>

                <p className="mt-2 text-[#F4E3A3] uppercase tracking-[3px] text-sm">

                  {active.role}

                </p>

                <p className="text-white/70 mt-2">

                  📍 {active.location}

                </p>

                <div className="flex gap-1 mt-6">

                  {Array.from({ length: active.rating }).map((_, i) => (

                    <span
                      key={i}
                      className="text-2xl text-[#FFD54A]"
                    >
                      ★
                    </span>

                  ))}

                </div>

              </div>

              {/* ================= Right ================= */}

              <div className="p-12 lg:p-16 flex flex-col justify-center">

                <div className="inline-flex items-center gap-3 mb-8">

                  <div className="w-10 h-[2px] bg-[#D4AF37]" />

                  <span className="uppercase tracking-[4px] text-[#C8A64D] text-sm">

                    Verified Client Review

                  </span>

                </div>

                <p className="text-2xl leading-[2.2] text-gray-700 font-light">

                  "{active.text}"

                </p>

                <div className="mt-10 flex items-center justify-between">

                  <div>

                    <p className="font-bold text-[#5A001A] text-xl">

                      {active.name}

                    </p>

                    <p className="text-gray-500">

                      {active.role}

                    </p>

                  </div>

                  {/* Navigation */}

                  <div className="flex gap-4">

                    <button
                      onClick={prevSlide}
                      aria-label="Previous Testimonial"
                      className="w-14 h-14 rounded-full border border-[#D4AF37] text-[#5A001A] hover:bg-[#D4AF37] hover:text-white transition"
                    >
                      ←
                    </button>

                    <button
                      onClick={nextSlide}
                      aria-label="Next Testimonial"
                      className="w-14 h-14 rounded-full border border-[#D4AF37] text-[#5A001A] hover:bg-[#D4AF37] hover:text-white transition"
                    >
                      →
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Dots */}

          <div className="flex justify-center gap-3 mt-10">
                      {testimonials.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-12 h-3 bg-[#D4AF37]"
                  : "w-3 h-3 bg-[#D4AF37]/40 hover:bg-[#D4AF37]/70"
              }`}
            />

          ))}

          </div>

          {/* Bottom CTA */}

          <div className="mt-20 rounded-[36px] overflow-hidden bg-gradient-to-r from-[#5A001A] via-[#6D001F] to-[#5A001A] px-10 py-14 text-center shadow-[0_20px_60px_rgba(90,0,26,0.35)]">

            <p className="uppercase tracking-[5px] text-[#F3D47A] text-sm font-semibold">

              Join Hundreds of Happy Families

            </p>

            <h3 className="mt-5 text-4xl lg:text-5xl font-bold text-white">

              Ready To Create
              <br />
              Unforgettable Memories?

            </h3>

            <p className="mt-6 max-w-3xl mx-auto text-white/80 leading-8 text-lg">

              Whether it's a wedding, corporate gathering,
              birthday celebration or family function,
              our team is ready to deliver a premium catering
              experience with authentic flavours and exceptional
              hospitality.

            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">

              <a
                href="/estimator"
                className="px-8 py-4 rounded-full bg-[#D4AF37] text-[#5A001A] font-semibold transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get Royal Quote
              </a>

              <a
                href="/contact"
                className="px-8 py-4 rounded-full border border-white text-white font-semibold transition duration-300 hover:bg-white hover:text-[#5A001A]"
              >
                Contact Us
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}