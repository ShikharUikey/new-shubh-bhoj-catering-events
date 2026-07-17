import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#faf7f2] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center">

          

          {/* Right Side */}

          <div>

            <p className="text-yellow-600 font-semibold tracking-[4px] uppercase mb-4">
              About Shubh Bhoj
            </p>

            <h2 className="text-5xl font-bold text-[#5a001a] mb-6 leading-tight">
              Crafting Memorable
              <br />
              Dining Experiences
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              At Shubh Bhoj, we believe that great food brings people
              together. From intimate family gatherings to grand
              celebrations, our team is dedicated to delivering
              exceptional catering services with authentic flavors,
              elegant presentation, and warm hospitality.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">

              <div className="bg-white rounded-2xl shadow-md p-5 text-center">

                <h3 className="text-3xl font-bold text-[#5a001a]">
                  850+
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  Events Managed
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-md p-5 text-center">

                <h3 className="text-3xl font-bold text-[#5a001a]">
                  40+
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  Custom Menus
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-md p-5 text-center">

                <h3 className="text-3xl font-bold text-[#5a001a]">
                  1000+
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  Happy Guests
                </p>

              </div>

            </div>

            <a
              href="/contact"
              className="inline-block bg-[#5a001a] text-white px-8 py-4 rounded-full hover:opacity-90 transition"
            >
              Get Royal Quote
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}