"use client";

export default function WhatsAppButton() {
  const whatsappLink =
    "https://wa.me/916263126954?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20catering%20services";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-4 z-50 w-18 h-18 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center border-4 border-white transition-all duration-300 hover:scale-110"
    >
      <span className="text-3xl">📞</span>
    </a>
  );
}