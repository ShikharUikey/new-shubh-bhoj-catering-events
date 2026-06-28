"use client";

import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("");
  const [guests, setGuests] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          eventType,
          guests,
          location,
          eventDate,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Lead submitted successfully!");

        setName("");
        setPhone("");
        setEmail("");
        setEventType("");
        setGuests("");
        setLocation("");
        setEventDate("");
        setMessage("");
      } else {
        alert(data.message || "Submission failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit lead.");
    }
  };

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
                  +91 62631 26954
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
                  Delhi NCR, India
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

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <select
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                <option value="">Select Event Type</option>
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
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />

              <textarea
                rows={3}
                placeholder="Event Location"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              <input
                type="date"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />

              <textarea
                rows={5}
                placeholder="Additional Details"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="submit"
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