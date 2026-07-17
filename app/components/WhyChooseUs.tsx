import { Utensils, ChefHat, Star, Sparkles, Clock, PartyPopper } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Utensils,
      title: "Premium Ingredients",
      description:
        "Fresh, high-quality ingredients sourced to create delicious and memorable dining experiences.",
    },
    {
      icon: ChefHat,
      title: "Customized Menus",
      description:
        "Tailored menu selections designed according to your event style, preferences and guests.",
    },
    {
      icon: Star,
      title: "Professional Service",
      description:
        "Experienced staff ensuring smooth coordination and exceptional hospitality throughout the event.",
    },
    {
      icon: Sparkles,
      title: "Elegant Presentation",
      description:
        "Beautiful food displays and refined setups that enhance the overall event experience.",
    },
    {
      icon: Clock,
      title: "Timely Execution",
      description:
        "Careful planning and punctual service to keep your event running seamlessly.",
    },
    {
      icon: PartyPopper,
      title: "Complete Event Support",
      description:
        "Comprehensive catering assistance from planning to final service delivery.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#FAF7F2] overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#FAF7F2] to-[#F2EDE4] opacity-70 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <p className="uppercase tracking-[6px] md:tracking-[9px] text-[#D4AF37] font-bold text-xs md:text-sm">
              Why Choose Shubh Bhoj
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5A001A] leading-tight">
            Creating Exceptional Experiences
            <br className="hidden md:block" />
            With Every Event
          </h2>

          <p className="mt-6 text-[#7A716E] max-w-2xl mx-auto text-lg leading-relaxed">
            From menu planning to flawless execution, we focus on every
            detail to deliver memorable catering experiences that exceed
            expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E1D7C6]/50 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(90,0,26,0.06)]"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-[#FAF7F2] border border-[#E1D7C6] group-hover:bg-[#5A001A] group-hover:border-[#5A001A] flex items-center justify-center mb-6 transition-colors duration-500">
                  <Icon className="w-8 h-8 text-[#5A001A] group-hover:text-[#D4AF37] transition-colors duration-500" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-serif font-bold text-[#2C2523] mb-4 group-hover:text-[#5A001A] transition-colors duration-500">
                  {item.title}
                </h3>

                <p className="text-[#7A716E] leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
                
                {/* Decorative subtle corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FAF7F2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-3xl pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}