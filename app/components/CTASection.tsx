export default function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="rounded-[32px] bg-gradient-to-r from-[#5a001a] via-[#7a0025] to-[#5a001a] p-14 md:p-20 text-center shadow-2xl">

          <p className="uppercase tracking-[6px] text-[#d4af37] text-sm font-semibold">
            Ready To Plan Your Event?
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-bold text-white">
            Let's Plan Your Perfect Event
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-white/80 text-lg leading-relaxed">
            Whether it's a wedding celebration, corporate gathering,
            family function, or special occasion, our team is ready
            to create an unforgettable catering experience tailored
            to your needs.
          </p>

          <div className="mt-6 text-[#d4af37] font-medium">
            ✨ Weddings • Corporate Events • Social Gatherings • Catering
          </div>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-5">

            <button className="bg-[#d4af37] text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition">
              Get Royal Quote
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#5a001a] transition">
              Call Us Today
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}