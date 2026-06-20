export default function ContactSection() {
  return (
    <section className="py-24 bg-[#F8F5F1]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold mb-4">
              Get In Touch
            </p>

            <h2 className="text-5xl font-bold text-[#5A001A] mb-6">
              Let's Plan Something Special
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              We would love to hear about your upcoming celebration.
              Share your event details and our team will help create
              a catering experience tailored to your requirements.
            </p>

            <div className="space-y-6">

              <div className="bg-white p-5 rounded-2xl shadow-sm">
                <h3 className="font-bold text-[#5A001A] mb-1">
                  📞 Call Us
                </h3>
                <p className="text-gray-600">
                  +91 XXXXX XXXXX
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm">
                <h3 className="font-bold text-[#5A001A] mb-1">
                  ✉️ Email
                </h3>
                <p className="text-gray-600">
                  info@shubhbhoj.com
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm">
                <h3 className="font-bold text-[#5A001A] mb-1">
                  📍 Location
                </h3>
                <p className="text-gray-600">
                  Madhya Pradesh, India
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm">
                <h3 className="font-bold text-[#5A001A] mb-1">
                  🕒 Working Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Sunday | 9 AM - 9 PM
                </p>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <h3 className="text-3xl font-bold text-[#5A001A] mb-8">
              Request A Quote
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />

              <select className="w-full border border-gray-300 rounded-xl px-4 py-3">
                <option>Select Event Type</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Birthday Party</option>
                <option>Engagement</option>
                <option>Family Function</option>
                <option>Other</option>
              </select>

              <input
                type="number"
                placeholder="Expected Guests"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Event Location
  </label>

  <textarea
    placeholder="Enter Complete Venue Address"
    rows={3}
    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#7A0026]"
  />
</div>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your event..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />

              <button
                className="w-full bg-[#5A001A] hover:bg-[#720020] text-white py-4 rounded-xl font-semibold transition"
              >
                Request Quote
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}