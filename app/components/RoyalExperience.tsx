"use client";

const processSteps = [
  {
    id: 1,
    title: "Personalized Consultation",
    description: "We begin by understanding your vision, preferences, and dietary requirements to curate a bespoke catering experience.",
    icon: "🤝",
  },
  {
    id: 2,
    title: "Curated Menu Tasting",
    description: "Experience our royal flavors firsthand. Sample our signature dishes and refine the menu to absolute perfection.",
    icon: "🍽️",
  },
  {
    id: 3,
    title: "Flawless Grand Execution",
    description: "On your big day, our expert team delivers impeccable hospitality, stunning presentations, and unforgettable taste.",
    icon: "✨",
  },
];

export default function RoyalExperience() {
  return (
    <section className="py-24 bg-[#F8F5F0] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-[#C8A64D] font-semibold text-sm mb-4">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#5A001A] font-serif mb-6">
            The Royal Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From the first meeting to the final bite, we ensure a seamless, luxurious, and stress-free catering journey for your celebration.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {processSteps.map((step, index) => (
              <div 
                key={step.id}
                className="relative group flex flex-col items-center text-center"
              >
                {/* Number Indicator */}
                <div className="text-[120px] font-bold text-[#D4AF37]/10 absolute -top-12 select-none transition-transform duration-500 group-hover:-translate-y-4">
                  0{step.id}
                </div>

                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-white border border-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.2)] flex items-center justify-center text-4xl mb-8 relative z-10 group-hover:bg-[#5A001A] transition-colors duration-500">
                  <span className="group-hover:scale-110 transition-transform duration-500">{step.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#5A001A] mb-4 font-serif">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed px-4">
                  {step.description}
                </p>

                {/* Arrow for Desktop */}
                {index !== processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-8 text-[#D4AF37] text-2xl -translate-y-1/2">
                    ➔
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
