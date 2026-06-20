export default function Testimonials() {
  const testimonials = [
    {
      name: "Wedding Client",
      text: "The food quality and presentation exceeded our expectations. Every guest was impressed.",
    },
    {
      name: "Corporate Event Client",
      text: "Professional service, timely execution, and excellent menu selection.",
    },
    {
      name: "Family Celebration Client",
      text: "From planning to execution, everything was seamless and memorable.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-[#C8A64D] text-sm font-semibold mb-4">
            Client Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#6B001F]">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-2xl mb-4 text-[#C8A64D]">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                "{item.text}"
              </p>

              <h4 className="font-bold text-[#6B001F]">
                — {item.name}
              </h4>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}