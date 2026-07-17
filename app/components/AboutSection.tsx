import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#faf7f2] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center">

          

          {/* Right Side */}

          <div className="relative">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <p className="text-[#D4AF37] font-bold tracking-[4px] md:tracking-[6px] uppercase text-xs">
                About Shubh Bhoj
              </p>
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5A001A] mb-8 leading-tight">
              Crafting Memorable
              <br />
              Dining Experiences
            </h2>

            <p className="text-[#7A716E] text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
              At Shubh Bhoj, we believe that great food brings people
              together. From intimate family gatherings to grand
              celebrations, our team is dedicated to delivering
              exceptional catering services with authentic flavors,
              elegant presentation, and warm hospitality.
            </p>

            {/* Premium Stats Grid */}
            <div className="relative bg-white/60 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E1D7C6]/60 mb-12 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#E1D7C6]/80">
                <div className="text-center sm:px-6 py-4 sm:py-0">
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#5A001A] mb-2">
                    850+
                  </h3>
                  <p className="text-[#C5A880] text-sm font-bold tracking-widest uppercase">
                    Events Managed
                  </p>
                </div>

                <div className="text-center sm:px-6 py-4 sm:py-0">
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#5A001A] mb-2">
                    40+
                  </h3>
                  <p className="text-[#C5A880] text-sm font-bold tracking-widest uppercase">
                    Custom Menus
                  </p>
                </div>

                <div className="text-center sm:px-6 py-4 sm:py-0">
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#5A001A] mb-2">
                    1000+
                  </h3>
                  <p className="text-[#C5A880] text-sm font-bold tracking-widest uppercase">
                    Happy Guests
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/estimator"
              className="group relative inline-flex items-center justify-center overflow-hidden bg-[#5A001A] text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(90,0,26,0.4)] hover:-translate-y-1"
            >
              <span className="relative z-10">Get Royal Quote</span>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}