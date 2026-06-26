"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ── Types ─────────────────────────────────────────────────────────────────────

interface GalleryImage {
  id: number;
  imageUrl: string;
  createdAt: string;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function GalleryGrid() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ── Fetch gallery images ──────────────────────────────────────────────────

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("/api/gallery");

        if (!res.ok) throw new Error("Failed to fetch gallery");

        const data: GalleryImage[] = await res.json();
        setImages(data);
      } catch (err) {
        console.error(err);
        setError("Could not load gallery images.");
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  // ── Close modal on Escape key ─────────────────────────────────────────────

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedImage(null);
    }

    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <section className="bg-[#F8F5F0] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Heading — unchanged ── */}
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

        {/* ── Loading state ── */}
        {loading && (
          <div className="flex items-center justify-center py-20 text-[#5A001A]">
            <svg
              className="animate-spin h-7 w-7 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
              />
            </svg>
            <span className="text-gray-500 text-sm tracking-wide">
              Loading gallery...
            </span>
          </div>
        )}

        {/* ── Error state ── */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-gray-400 text-sm">{error}</p>
          </div>
        )}

        {/* ── Empty state ── */}
        {!loading && !error && images.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-[#D4AF37] text-3xl mb-3">✦</p>
            <p className="text-gray-400 text-sm tracking-wide">
              Gallery coming soon.
            </p>
          </div>
        )}

        {/* ── Gallery Grid — layout & classes unchanged ── */}
        {!loading && !error && images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image.imageUrl)}
                className="cursor-pointer overflow-hidden rounded-2xl"
              >
                <div className="relative w-full h-[280px]">
                  <Image
                    src={image.imageUrl}
                    alt={`Gallery ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover rounded-2xl transition duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ── Full Screen Preview Modal — unchanged ── */}
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

          <div
            className="relative max-w-[95vw] max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              sizes="95vw"
              className="object-contain rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}