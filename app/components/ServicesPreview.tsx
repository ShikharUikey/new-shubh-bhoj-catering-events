import Image from "next/image";

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-[#faf7f2]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-yellow-700 font-semibold">
            Our Services
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#5a001a]">
            Exceptional Catering Solutions
            <br />
            For Every Occasion
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            From intimate family gatherings to grand celebrations,
            we create unforgettable dining experiences with premium
            catering and hospitality services.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300">

            <Image
              src="/wedding-events.jpg"
              alt="Wedding Events"
              width={500}
              height={350}
              className="w-full h-64 object-cover"
            />

            <div className="p-8">

              <h3 className="text-2xl font-bold text-[#5a001a]">
                Wedding & Social Events
              </h3>

              <p className="mt-4 text-gray-600">
                Elegant catering services for weddings,
                receptions, engagements, anniversaries,
                and family celebrations.
              </p>

            </div>

          </div>

          {/* Card 2 */}

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300">

            <Image
              src="/premium-catering.jpg"
              alt="Premium Catering"
              width={500}
              height={350}
              className="w-full h-64 object-cover"
            />

            <div className="p-8">

              <h3 className="text-2xl font-bold text-[#5a001a]">
                Premium Catering
              </h3>

              <p className="mt-4 text-gray-600">
                Curated menus, exceptional presentation,
                and premium hospitality designed for
                memorable dining experiences.
              </p>

            </div>

          </div>

          {/* Card 3 */}

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300">

            <Image
              src="/live-food-stations.jpg"
              alt="Live Food Stations"
              width={500}
              height={350}
              className="w-full h-64 object-cover"
            />

            <div className="p-8">

              <h3 className="text-2xl font-bold text-[#5a001a]">
                Live Food Stations
              </h3>

              <p className="mt-4 text-gray-600">
                Interactive food counters featuring
                freshly prepared dishes and live
                culinary experiences.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
