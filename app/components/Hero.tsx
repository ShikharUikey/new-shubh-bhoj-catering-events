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

  {/* Dark Maroon Overlay */}
  <div className="absolute inset-0 bg-[#5A001A]/40" />

  {/* Extra Luxury Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#2b000c]/40 via-transparent to-[#87002b]/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[90vh] flex items-center">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}

          <div>

            <div className="flex items-center gap-4 mb-8">

              <Image
                src="/Logo.png"
                alt="Shubh Bhoj Logo"
                width={70}
                height={70}
                className="rounded-full"
              />

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Shubh Bhoj
                </h2>

                <p className="text-yellow-300 text-sm tracking-widest uppercase">
                  Catering & Events
                </p>
              </div>

            </div>

            {/* Hindi Keywords */}

            <div
  className="mb-8 text-yellow-300 text-lg"
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

<div className="mb-6">
  <div className="text-[#D4AF37] tracking-[10px] uppercase text-sm">
    शुद्ध स्वाद • उत्तम सेवा • अविस्मरणीय अनुभव
  </div>

  <div className="w-28 h-[2px] bg-[#D4AF37] mt-5" />
</div>

            {/* Main Heading */}

            <h1 className="text-white text-4xl lg:text-7xl font-serif leading-[1.05] mb-8">
  A Perfect Blend of
  <br />
  <span className="text-[#F6E7C1]">
    Taste • Tradition • Togetherness
  </span>
</h1>

            {/* Sub Heading */}

            <h2 className="text-xl lg:text-2xl text-yellow-300 mb-6">
              Premium Catering & Event Management Services
            </h2>

            {/* Description */}

            <p className="text-gray-200 text-xl leading-relaxed max-w-3xl mb-10">
  From intimate family functions and Vedic sangeets to grand
  corporate galas and destination weddings, we craft premium
  catering experiences that blend authentic flavors, elegant
  presentation, and exceptional hospitality.
</p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">

  <Link
    href="/contact"
    className="bg-[#D4AF37] text-[#5A001A] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
  >
    Get Royal Quote
  </Link>

  <Link
    href="/services"
    className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#5A001A] transition"
  >
    View Services
  </Link>

</div>
</div>
          {/* RIGHT CONTENT */}

          <div className="flex justify-center">

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-center max-w-sm">

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
  Founder & Managing Director
</p>

            </div>

          </div>

        </div>

      </div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
  <p className="text-white/70 text-xs tracking-[4px] mb-2">
    SCROLL TO DISCOVER
  </p>

  <div className="w-6 h-10 border border-[#D4AF37] rounded-full mx-auto flex justify-center">
    <div className="w-1 h-2 bg-[#D4AF37] rounded-full mt-2 animate-bounce" />
  </div>
</div>
    </section>
  );
}