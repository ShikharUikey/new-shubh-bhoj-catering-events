export default function Footer() {
  return (
    <footer className="bg-[#4B0015] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Shubh Bhoj
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Premium Catering & Event Management services crafted to make every celebration memorable Across Delhi NCR.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#D4AF37]">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Gallery</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#D4AF37]">
              Services
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>Wedding Events</li>
              <li>Premium Catering</li>
              <li>Corporate Events</li>
              <li>Live Food Stations</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#D4AF37]">
              Contact
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>📞 +91 XXXXX XXXXX</li>
              <li>✉️ info@shubhbhoj.com</li>
              <li>📍 Delhi NCR, India</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-gray-400">
          © 2026 Shubh Bhoj. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}