import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2b000c] via-[#5a001a] to-[#87002b]">

      <div className="max-w-7xl mx-auto px-6 min-h-[90vh] flex items-center">

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

            {/* Main Heading */}

            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
  <span className="text-white">हर आयोजन को</span>
  <br />
  <span className="text-yellow-300">बनाएं यादगार</span>
</h1>

            {/* Sub Heading */}

            <h2 className="text-xl lg:text-2xl text-yellow-300 mb-6">
              Premium Catering & Event Management Services
            </h2>

            {/* Description */}

            <p className="text-gray-200 text-lg leading-relaxed max-w-xl mb-10">
  From weddings and receptions to corporate events and family celebrations,
  Shubh Bhoj delivers memorable catering experiences with authentic flavors,
  elegant presentation, and exceptional hospitality.
</p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">

              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-semibold transition">
                Get Royal Quote
              </button>

              <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
                View Services
              </button>

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
  Founder
</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}