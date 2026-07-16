import React from "react";

const faqs = [
  {
    question: "How much does wedding catering cost in Bhopal?",
    answer: "The cost of wedding catering in Bhopal varies based on the menu, guest count, and service style. At Shubh Bhoj Catering, we offer customizable premium packages to suit your budget while ensuring an unforgettable experience.",
  },
  {
    question: "Do you provide catering outside Bhopal?",
    answer: "Yes, while we are based in Bhopal, we cater to premium events across Madhya Pradesh and the Delhi NCR region. Contact us to discuss destination wedding catering.",
  },
  {
    question: "Do you offer vegetarian and diverse menus?",
    answer: "Absolutely! We specialize in pure vegetarian, traditional Indian, continental, and fusion cuisines tailored exactly to your preferences and dietary requirements.",
  },
  {
    question: "Can I customize the catering menu?",
    answer: "Yes, every event is unique. Our expert chefs work closely with you to design a personalized menu that matches your theme, taste, and guest expectations.",
  },
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A001A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about our premium catering services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg text-gray-800 marker:content-none">
                {faq.question}
                <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                  <svg
                    className="w-6 h-6 text-[#D4AF37]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
