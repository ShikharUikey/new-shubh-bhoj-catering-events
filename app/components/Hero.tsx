import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen">

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
      <div className="absolute inset-0 bg-[#5A001A]/40" />

      {/* Luxury Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b000c]/40 via-transparent to-[#87002b]/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[90vh] flex items-center">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}

          <div className="relative">

          

            {/* Golden Glow */}
            <div className="absolute -top-10 -left-10 w-44 h-44 bg-[#D4AF37]/20 blur-3xl rounded-full" />

            {/* Corner Decorations */}
            <div className="absolute top 22 left 12 w-12 h-12 border-l-2 border-t-2 border-[#D4AF37]/70 rounded-tl-2xl" />

            <div className="absolute bottom-6 right 12 w-12 h-12 border-r-2 border-b-2 border-[#D4AF37]/70 rounded-br-2xl" />

            <div className="relative z-10 space-y-6">

              {/* Premium Badge */}

              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-[#D4AF37]/30 rounded-full px-5 py-2 shadow-xl">

                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />

                <span className="text-[#F6E7C1] uppercase tracking-[5px] text-xs font-semibold">
                  Premium Catering services
                </span>

              </div>

              {/* Hindi Text */}

               <div
className="inline-flex bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 text-yellow-300 text-lg shadow-xl"
style={{ fontFamily: "AMS Barakhadi 1" }}
>
                <p className="flex flex-wrap gap-3 items-center">
                  <span>शुद्ध स्वाद</span>
                  <span>•</span>
                  <span>परंपरा</span>
                  <span>•</span>
                  <span>आतिथ्य</span>
                </p>
              </div>

              {/* Heading */}

              <div className="relative bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-8 shadow-2xl">

                <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-full" />

                <h1
  className="
    relative
    text-2xl
    lg:text-5xl
    font-serif
    leading-[1.05]
    font-bold
    bg-gradient-to-b
    from-[#FFFDF5]
    via-[#F4E2B0]
    to-[#C89A32]
    bg-clip-text
    text-transparent
    drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]
  "
  style={{
  textShadow:
    "0 2px 10px rgba(255,255,255,0.12), 0 8px 30px rgba(212,175,55,0.15)"
}}
>

                  A Perfect Blend of

                  <br />

                  <span
  className="
    bg-gradient-to-b
    from-[#FFF8E8]
    via-[#F5E6B3]
    to-[#CFA74A]
    bg-clip-text
    text-transparent
    drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]
  "
>
  Taste • Tradition • Togetherness
</span>

                </h1>

              </div>

              {/* Subtitle */}

              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">

<h2 className="text-xl lg:text-2xl text-yellow-300 mb-5">
Premium Catering & Event Management Services
</h2>

<p className="text-gray-200 text-lg leading-8">
From intimate family functions and Vedic sangeets to grand
corporate galas and destination weddings, we craft premium
catering experiences that blend authentic flavors,
elegant presentation and exceptional hospitality.
</p>

</div>

              {/* Buttons */}

              <div className="inline-flex gap-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full p-3 shadow-2xl">

                <Link
                  href="/estimator"
                  className="bg-[#D4AF37] text-[#5A001A] px-8 py-4 rounded-full font-semibold transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
                >
                  Get Royal Quote
                </Link>

                <Link
                  href="/services"
                  className="border border-white text-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:bg-white hover:text-[#5A001A] hover:-translate-y-1"
                >
                  View Services
                </Link>

              </div>

            </div>

          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="flex justify-center">

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-center max-w-sm shadow-2xl">

              <Image
                src="/Founder.jpg"
                alt="Founder"
                width={350}
                height={420}
                className="rounded-2xl object-cover"
              />

              <h3 className="text-2xl font-bold text-white mt-6">

                Sarvesh Kumar

              </h3>

              <p className="text-yellow-300 uppercase tracking-[4px] mt-2 text-sm">

                Founder & Managed By

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">

        <p className="text-white/70 text-xs tracking-[4px] mb-2">

          SCROLL TO DISCOVER

        </p>

        <div className="w-6 h-10 border border-[#D4AF37] rounded-full mx-auto flex justify-center">

          <div className="w-1 h-2 bg-[#D4AF37] rounded-full mt-2 animate-bounce" />

        </div>

      </div>

      {/* Floating Luxury Particles */}

      <div className="absolute top-32 left-28 w-3 h-3 bg-[#D4AF37]/70 rounded-full animate-pulse" />

      <div className="absolute top-64 left-[40%] w-2 h-2 bg-[#D4AF37]/60 rounded-full animate-ping" />

      <div className="absolute top-40 right-44 w-3 h-3 bg-[#D4AF37]/60 rounded-full animate-pulse" />

      <div className="absolute bottom-44 right-20 w-2 h-2 bg-[#D4AF37]/70 rounded-full animate-ping" />

    </section>
  );
}