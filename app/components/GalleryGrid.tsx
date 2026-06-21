"use client";

import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
  "https://images.unsplash.com/photo-1555244162-803834f70033",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
  "https://images.unsplash.com/photo-1511578314322-379afb476865",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-[#F8F5F0] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[4px] text-[#D4AF37] text-sm font-semibold">
            Our Gallery
          </p>

          <h2 className="text-5xl font-bold text-[#5A001A] mt-3">
            Moments We Catered
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our premium catering setups, weddings, corporate events,
            and unforgettable celebrations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto max-h-[280px] object-contain rounded-2xl transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Full Screen Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-8 text-white text-5xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[95vw] max-h-[90vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}