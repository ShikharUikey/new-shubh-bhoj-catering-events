"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    icon: "💍",
    title: "Wedding & Social Events",
    short: "Elegant catering services for weddings, receptions, engagements and family celebrations.",
    description: "Celebrate your most precious moments with luxurious catering, handcrafted menus, live counters, premium buffet setups and exceptional hospitality designed to create unforgettable wedding experiences.",
    image: "/wedding-events.jpg",
  },
  {
    id: 2,
    icon: "🍽️",
    title: "Premium Catering",
    short: "Curated menus, premium hospitality and unforgettable dining experiences.",
    description: "Whether it's a corporate gala or an intimate gathering, our premium catering combines authentic flavours, elegant presentation and personalized service to impress every guest.",
    image: "/premium-catering.jpg",
  },
  {
    id: 3,
    icon: "👨‍🍳",
    title: "Live Food Stations",
    short: "Interactive live counters serving fresh dishes prepared on demand.",
    description: "Add excitement to your event with live chefs, regional specialties, sizzling grills and customized food stations that entertain while serving delicious cuisine.",
    image: "/live-food-stations.jpg",
  },
];

export default function ServicesPreview() {
  const [selected, setSelected] = useState(services[0]);

  return (
    <section className="py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20 relative">
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-[#D4AF37]/25 rounded-full" />
              <span className="relative text-5xl">🍽️</span>
            </div>
          </div>
          <p className="uppercase tracking-[8px] text-[#C89B3C] font-semibold text-sm">
            Our Services
          </p>
          <div className="flex items-center justify-center gap-4 mt-5 mb-6">
            <div className="w-16 h-[2px] bg-[#D4AF37]" />
            <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
            <div className="w-16 h-[2px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#4B0014] via-[#7A0024] to-[#C89B3C] bg-clip-text text-transparent">
              Exceptional Catering Solutions
            </span>
            <br />
            <span className="text-[#5A001A]">For Every Occasion</span>
          </h2>
          <p className="mt-8 max-w-3xl mx-auto text-gray-600 text-xl leading-9">
            From intimate family gatherings to grand celebrations, we craft
            unforgettable culinary experiences with authentic flavours,
            luxurious presentation and impeccable hospitality that leaves
            every guest delighted.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setSelected(service)}
              className={`group relative cursor-pointer rounded-[32px] overflow-hidden bg-white shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)] border ${
                selected.id === service.id
                  ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/20"
                  : "border-gray-100"
              }`}
            >
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#D4AF37]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-6 right-6">
                  <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="absolute top-6 left-6">
                  <div className="bg-[#D4AF37]/15 backdrop-blur-xl border border-[#D4AF37]/40 rounded-full px-5 py-2 flex items-center gap-2">
                    <span className="text-lg">{service.icon}</span>
                    <span className="text-white text-sm font-medium">Premium Service</span>
                  </div>
                </div>
                <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/20 blur-xl group-hover:left-[150%] transition-all duration-1000" />
              </div>
              <div className="relative p-7">
                <div className="w-14 h-[3px] bg-[#D4AF37] rounded-full mb-5 group-hover:w-24 transition-all duration-500" />
                <h3 className="text-2xl font-bold text-[#5A001A]">{service.title}</h3>
                <p className="mt-4 text-gray-600 leading-8">{service.short}</p>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[#C89B3C] font-semibold tracking-wide"></span>
                  <div className="w-10 h-10 rounded-full bg-[#5A001A] text-white flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#5A001A] transition">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Large Preview Section */}
        <div
          key={selected.id}
          className="mt-20 overflow-hidden rounded-[40px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.15)] border border-[#E8D9B0]"
        >
          {/* Hero Image */}
          <div className="relative h-[700px] overflow-hidden">
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              priority
              className="object-cover transition-all duration-700 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#220008]/85 via-[#3A0012]/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute -top-32 right-20 w-72 h-72 bg-[#D4AF37]/20 blur-3xl rounded-full" />
            <div className="absolute top-10 left-10">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 shadow-xl">
                <span className="text-2xl">{selected.icon}</span>
                <span className="text-white tracking-[4px] uppercase text-sm">Featured Service</span>
              </div>
            </div>
            <div className="absolute bottom-12 left-12 max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-24 h-[3px] bg-[#D4AF37]" />
                <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white">
                {selected.title}
              </h2>
              <p className="mt-8 text-xl text-gray-200 leading-9 max-w-2xl">
                {selected.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <h3 className="text-[#D4AF37] text-3xl font-bold">500+</h3>
                  <p className="text-white/80">Successful Events</p>
                </div>
                <div>
                  <h3 className="text-[#D4AF37] text-3xl font-bold">100+</h3>
                  <p className="text-white/80">Signature Dishes</p>
                </div>
                <div>
                  <h3 className="text-[#D4AF37] text-3xl font-bold">100%</h3>
                  <p className="text-white/80">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="absolute right-14 bottom-14 hidden lg:block">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-8 py-6">
                <p className="uppercase tracking-[4px] text-[#D4AF37] text-xs">Luxury Experience</p>
                <h4 className="mt-3 text-white text-2xl font-bold">Premium Catering</h4>
                <p className="mt-3 text-white/70">Crafted with Taste,<br />Tradition & Hospitality</p>
              </div>
            </div>
          </div>

          {/* Bottom Detail Cards */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 p-10 bg-[#FCFBF8]">
            {[
              { icon: "👑", title: "Premium Hospitality", body: "Professional staff delivering warm hospitality with flawless event execution from beginning to end.", label: "Luxury Service" },
              { icon: "🍽️", title: "Customized Menus", body: "Carefully curated vegetarian and regional menus personalized to your celebration and guest preferences.", label: "Tailor Made" },
              { icon: "🔥", title: "Live Food Stations", body: "Interactive chef counters serving freshly prepared delicacies with engaging live culinary experiences.", label: "Live Experience" },
              { icon: "✨", title: "Elegant Presentation", body: "Premium buffet layouts, artistic presentation and sophisticated serving styles that leave lasting impressions.", label: "Royal Styling" },
            ].map((card) => (
              <div key={card.title} className="group relative rounded-3xl border border-[#EAD8A6] bg-white p-8 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-500">
                <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#D4AF37]/10 rounded-full blur-2xl" />
                <div className="text-5xl mb-6">{card.icon}</div>
                <h3 className="text-2xl font-bold text-[#5A001A]">{card.title}</h3>
                <p className="mt-4 text-gray-600 leading-8">{card.body}</p>
                <div className="mt-8 flex items-center gap-3 text-[#D4AF37] font-semibold">
                  <span>{card.label}</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-b-[40px] bg-gradient-to-r from-[#4A0016] via-[#650022] to-[#7A0028] px-10 py-16">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />
            <div className="absolute inset-4 rounded-[28px] border border-[#D4AF37]/20 pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-3xl">
                <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm font-semibold">Ready To Celebrate?</p>
                <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Let's Create An<br />Unforgettable Event Together
                </h2>
                <p className="mt-6 text-gray-200 leading-8 text-lg">
                  Whether it's a wedding, reception, birthday, corporate gathering, or family celebration,
                  Shubh Bhoj delivers exceptional cuisine, elegant presentation and flawless hospitality
                  tailored to your special occasion.
                </p>
                <div className="mt-8 flex flex-wrap gap-6 text-white">
                  <div className="flex items-center gap-2"><span className="text-[#D4AF37]">✔</span> Premium Catering</div>
                  <div className="flex items-center gap-2"><span className="text-[#D4AF37]">✔</span> Live Counters</div>
                  <div className="flex items-center gap-2"><span className="text-[#D4AF37]">✔</span> Complete Event Support</div>
                </div>
              </div>
              <div className="flex flex-col gap-5 min-w-[280px]">
                <Link href="/estimator" className="bg-[#D4AF37] text-[#5A001A] text-center px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition duration-300 shadow-xl">
                  Get Royal Quote
                </Link>
                <Link href="/contact" className="border-2 border-white text-white text-center px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-[#5A001A] transition duration-300">
                  Contact Our Team
                </Link>
              </div>
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-60">
              <div className="w-16 h-[2px] bg-[#D4AF37]" />
              <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
              <div className="w-16 h-[2px] bg-[#D4AF37]" />
            </div>
          </div>

        </div>{/* end large preview div */}

      </div>{/* end max-w-7xl */}
    </section>
  );
}