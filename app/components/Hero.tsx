import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-20">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/gallery-5.jpg"
          alt="Luxury Banquet Hall"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Luxury Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5A001A]/40 via-transparent to-[#2b000c]/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Premium Badge */}
            <div>
              <div className="inline-block border border-[#D4AF37]/50 bg-[#5A001A]/30 backdrop-blur-sm rounded-full px-5 py-2 shadow-md">
                <span className="text-[#F6E7C1] uppercase tracking-[4px] text-xs font-semibold">
                  Premium Catering Services
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] drop-shadow-md">
              A Perfect Blend of <br />
              <span className="bg-gradient-to-r from-[#FFF8E8] via-[#F5E6B3] to-[#CFA74A] bg-clip-text text-transparent">
                Taste • Tradition • Togetherness
              </span>
            </h1>

            {/* Decorative Ornament */}
            <div className="flex items-center gap-3">
              <svg className="w-8 h-6 text-[#D4AF37]" viewBox="0 0 100 20" fill="currentColor">
                <path d="M50 2 C48 7, 44 9, 40 10 C44 11, 48 13, 50 18 C52 13, 56 11, 60 10 C56 9, 52 7, 50 2 Z" />
                <path d="M50 7 C49 9, 47 10, 45 10 C47 10, 49 11, 50 13 C51 11, 53 10, 55 10 C53 10, 51 9, 50 7 Z" opacity="0.7" />
              </svg>
              <div className="h-[1px] w-36 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
            </div>

            {/* Description */}
            <p className="text-gray-100 text-lg leading-relaxed max-w-2xl font-light">
              From intimate family functions and Vedic sangeets to grand
              corporate galas and destination weddings, we craft premium
              catering experiences that blend authentic flavors,
              elegant presentation and exceptional hospitality.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/estimator"
                className="bg-[#D4AF37] text-[#5A001A] px-8 py-4 rounded-full font-semibold transition duration-300 hover:bg-[#cfa74a] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                Get Royal Quote
              </Link>
              <Link
                href="/gallery"
                className="border border-white text-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:bg-white hover:text-[#5A001A] hover:-translate-y-1"
              >
                Explore Gallery
              </Link>
            </div>

            {/* Hindi Badge */}
            <div className="pt-2">
              <div className="inline-block bg-[#5A001A]/30 border border-[#D4AF37]/45 rounded-full px-6 py-2.5 shadow-lg backdrop-blur-sm">
                <p className="flex items-center gap-4 text-[#F5E6B3] text-base lg:text-lg tracking-wide font-medium">
                  <span>शुद्ध स्वाद</span>
                  <span className="text-[#D4AF37] opacity-60">•</span>
                  <span>परंपरा</span>
                  <span className="text-[#D4AF37] opacity-60">•</span>
                  <span>अतिथ्य</span>
                </p>
              </div>
            </div>

          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="border-2 border-white rounded-[2.5rem] p-4 text-center max-w-sm bg-black/10 shadow-2xl backdrop-blur-xs">
              <div className="relative overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/Founder.jpg"
                  alt="Founder"
                  width={350}
                  height={420}
                  className="w-full object-cover rounded-[1.8rem]"
                  priority
                />
              </div>

              {/* Maroon Founder Name Card */}
              <div className="bg-[#5A001A] border-t border-white/20 rounded-[1.5rem] p-6 mt-4 shadow-xl">
                <h3 className="text-2xl font-bold text-white font-serif tracking-wide">
                  Sarvesh Kumar
                </h3>
                <p className="text-[#D4AF37] uppercase tracking-[3px] mt-1 text-xs font-bold">
                  Founder & Managed By
                </p>
                <div className="flex justify-center mt-3">
                  <svg className="w-8 h-4 text-[#D4AF37]" viewBox="0 0 50 20" fill="currentColor">
                    <path d="M25 2 C24 6, 22 8, 20 9 C22 10, 24 12, 25 16 C26 12, 28 10, 30 9 C28 8, 26 6, 25 2 Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center hidden md:block">
        <p className="text-white/60 text-[10px] tracking-[4px] mb-2 uppercase">
          Scroll to discover
        </p>
        <div className="w-6 h-10 border border-[#D4AF37]/50 rounded-full mx-auto flex justify-center">
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      {/* Subtle Floating Particles for Premium Feel */}
      <div className="absolute top-32 left-28 w-2 h-2 bg-[#D4AF37]/40 rounded-full animate-pulse" />
      <div className="absolute top-64 left-[40%] w-1.5 h-1.5 bg-[#D4AF37]/35 rounded-full animate-ping" />
      <div className="absolute top-40 right-44 w-2.5 h-2.5 bg-[#D4AF37]/35 rounded-full animate-pulse" />
      <div className="absolute bottom-44 right-20 w-1.5 h-1.5 bg-[#D4AF37]/45 rounded-full animate-ping" />

    </section>
  );
}