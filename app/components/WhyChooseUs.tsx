export default function WhyChooseUs() {
  const features = [
    {
      icon: "🍽️",
      title: "Premium Ingredients",
      description:
        "Fresh, high-quality ingredients sourced to create delicious and memorable dining experiences.",
    },
    {
      icon: "👨‍🍳",
      title: "Customized Menus",
      description:
        "Tailored menu selections designed according to your event style, preferences and guests.",
    },
    {
      icon: "⭐",
      title: "Professional Service",
      description:
        "Experienced staff ensuring smooth coordination and exceptional hospitality throughout the event.",
    },
    {
      icon: "✨",
      title: "Elegant Presentation",
      description:
        "Beautiful food displays and refined setups that enhance the overall event experience.",
    },
    {
      icon: "⏰",
      title: "Timely Execution",
      description:
        "Careful planning and punctual service to keep your event running seamlessly.",
    },
    {
      icon: "🎉",
      title: "Complete Event Support",
      description:
        "Comprehensive catering assistance from planning to final service delivery.",
    },
  ];

  return (
    <section className="py-24 bg-[#f7f4ef]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[9px] text-[#d4af37] font-semibold text-sm">
            Why Choose Shubh Bhoj
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#5a001a]">
            Creating Exceptional Experiences
            <br />
            With Every Event
          </h2>

          <p className="mt-6 text-gray-900 max-w-3xl mx-auto text-lg">
            From menu planning to flawless execution, we focus on every
            detail to deliver memorable catering experiences that exceed
            expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#5a001a] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-900 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}