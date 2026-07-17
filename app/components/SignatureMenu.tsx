"use client";

import Image from "next/image";

const signatureDishes = [
  {
    id: 1,
    name: "Shahi Paneer Tikka",
    description: "Cottage cheese marinated in royal spices, slow-roasted in a traditional tandoor.",
    category: "Appetizer",
    image: "/premium-catering.jpg",
  },
  {
    id: 2,
    name: "Dal Makhani Awadhi",
    description: "Black lentils simmered overnight with fresh cream, butter, and secret Awadhi spices.",
    category: "Main Course",
    image: "/gallery-5.jpg",
  },
  {
    id: 3,
    name: "Kesari Rasmalai",
    description: "Soft cheese dumplings soaked in saffron-infused sweetened milk, garnished with pistachios.",
    category: "Dessert",
    image: "/live-food-stations.jpg",
  },
];

export default function SignatureMenu() {
  return (
    <section className="relative py-28 bg-[#2A000F] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#D4AF37] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37] rounded-full blur-[150px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm font-semibold mb-4">
            A Taste of Royalty
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Our Signature Menu
          </h2>
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-[1px] w-16 bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] text-2xl">✦</span>
            <div className="h-[1px] w-16 bg-[#D4AF37]"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
            Crafted by our master chefs, our signature dishes bring the authentic flavors of heritage recipes right to your celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {signatureDishes.map((dish) => (
            <div 
              key={dish.id}
              className="group relative rounded-3xl overflow-hidden bg-[#1A0009] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image 
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0009] via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-5 left-5 bg-[#D4AF37] text-[#2A000F] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                  {dish.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 w-12 h-12 bg-[#2A000F] border border-[#D4AF37] rounded-full flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-700 shadow-xl">
                  <span className="text-[#D4AF37] text-xl">🍽️</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 font-serif group-hover:text-[#D4AF37] transition-colors">
                  {dish.name}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm font-light">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
