"use client";

import { useState } from "react";

import Image from "next/image";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

export default function EstimatorPage() {

  const [guests, setGuests] = useState(250);

  const [eventType, setEventType] = useState("Wedding");

  const [menu, setMenu] = useState("Royal");

  const [date, setDate] = useState("");

  const [liveCounter, setLiveCounter] = useState(false);

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const pricing = {
  Wedding: {
    Royal: 1200,
    Imperial: 1800,
    Maharaja: 2600,
  },

  Corporate: {
    Royal: 900,
    Imperial: 1400,
    Maharaja: 1900,
  },

  Birthday: {
    Royal: 700,
    Imperial: 1100,
    Maharaja: 1600,
  },

  Engagement: {
    Royal: 1000,
    Imperial: 1500,
    Maharaja: 2200,
  },
};

   const selectedPrice =
  pricing[eventType as keyof typeof pricing][
    menu as keyof typeof pricing.Wedding
  ];

  let totalEstimate = guests * selectedPrice;

  if (liveCounter) {

    totalEstimate += 25000;

  }
const submitEstimator = async () => {
  if (!name || !phone || !date) {
    alert("Please fill all required fields");
    return;
  }

  const res = await fetch("/api/estimator", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      phone,
      eventType,
      guests,
      budget: totalEstimate.toString(),
      eventDate: date,
    }),
  });

  const data = await res.json();

  if (data.success) {
    alert("Quote Request Submitted");

    setName("");
    setPhone("");
  } else {
    alert("Submission Failed");
  }
};
  return (

    <>

      <Navbar />

      <section className="bg-[#faf7f2] py-24 min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold mb-4">

              Royal Pricing Transparency

            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-[#5A001A]">

              Menu & Cost Estimator

            </h1>

            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">

              Plan your event with confidence. Estimate your catering

              budget instantly and discover the perfect menu package

              for your celebration.

            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT PANEL */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold text-[#5A001A] mb-8">

                Configure Your Dream Feast

              </h2>
              {/* Name */}

<div className="mb-6">
  <label className="block font-semibold mb-2">
    Full Name
  </label>

  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Enter your name"
    className="w-full border rounded-xl p-3"
  />
</div>

{/* Phone */}

<div className="mb-6">
  <label className="block font-semibold mb-2">
    Phone Number
  </label>

  <input
    type="tel"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    placeholder="Enter your phone number"
    className="w-full border rounded-xl p-3"
  />
</div>
              {/* Event Type */}

              <div className="mb-6">

                <label className="block font-semibold mb-2">

                  Event Style

                </label>

                <select

                  value={eventType}

                  onChange={(e) => setEventType(e.target.value)}

                  className="w-full border rounded-xl p-3"

                >

                  <option>Wedding</option>

                  <option>Corporate</option>

                  <option>Birthday</option>

                  <option>Engagement</option>

                </select>

              </div>

              {/* Date */}

              <div className="mb-6">

                <label className="block font-semibold mb-2">

                  Preferred Date

                </label>

                <input

                  type="date"

                  value={date}

                  onChange={(e) => setDate(e.target.value)}

                  className="w-full border rounded-xl p-3"

                />

              </div>

              {/* Guests */}

              <div className="mb-8">

                <div className="flex justify-between mb-3">

                  <label className="font-semibold">

                    Expected Guest Count

                  </label>

                  <span className="font-bold text-[#5A001A]">

                    {guests}

                  </span>

                </div>

                <input

                  type="range"

                  min="30"

                  max="1500"

                  value={guests}

                  onChange={(e) =>

                    setGuests(Number(e.target.value))

                  }

                  className="w-full"

                />

                <div className="flex justify-between text-xs text-gray-500 mt-2">

                  <span>30</span>

                  <span>700</span>

                  <span>1500+</span>

                </div>

              </div>

              {/* Menu Packages */}

              <div className="mb-8">

                <h3 className="font-semibold mb-4">

                  Select Menu Level

                </h3>

                <div className="grid gap-4">

                  {[

                    {

                      name: "Royal",

                      price: "₹1200 / plate",

                    },

                    {

                      name: "Imperial",

                      price: "₹1800 / plate",

                    },

                    {

                      name: "Maharaja",

                      price: "₹2600 / plate",

                    },

                  ].map((item) => (

                    <button

                      key={item.name}

                      onClick={() => setMenu(item.name)}

                      className={`border rounded-2xl p-5 text-left transition ${

                        menu === item.name

                          ? "bg-[#5A001A] text-white border-[#5A001A]"

                          : "bg-white"

                      }`}

                    >

                      <h4 className="font-bold text-xl">

                        {item.name}

                      </h4>

                      <p>{item.price}</p>

                    </button>

                  ))}

                </div>

              </div>

              {/* Live Counter */}

              <div className="border rounded-2xl overflow-hidden">

                <Image

                  src="/live-food-stations.jpg"

                  alt="Live Counter"

                  width={800}

                  height={500}

                  className="w-full h-52 object-cover"

                />

                <div className="p-5">

                  <label className="flex items-center gap-3 cursor-pointer">

                    <input

                      type="checkbox"

                      checked={liveCounter}

                      onChange={(e) =>

                        setLiveCounter(e.target.checked)

                      }

                    />

                    <span className="font-medium">

                      Add Live Food Counters (+ ₹25,000)

                    </span>

                  </label>

                </div>

              </div>

            </div>

            {/* RIGHT PANEL */}

            <div className="bg-[#5A001A] text-white rounded-3xl p-10 shadow-xl">

              <p className="uppercase tracking-[5px] text-[#D4AF37] text-sm mb-4">

                Shubh Bhoj Saffron Estimate

              </p>

              <h2 className="text-5xl font-bold mb-4">

                ₹ {totalEstimate.toLocaleString()}

              </h2>

              <p className="text-gray-300 mb-10">

                Estimated catering budget based on your selections.

              </p>

              <div className="space-y-4 border-t border-white/20 pt-8">

                <div className="flex justify-between">

                  <span>Event Type</span>

                  <span>{eventType}</span>

                </div>

                <div className="flex justify-between">

                  <span>Guests</span>

                  <span>{guests}</span>

                </div>

                <div className="flex justify-between">

                  <span>Menu Package</span>

                  <span>{menu}</span>

                </div>

                <div className="flex justify-between">

                  <span>Live Counter</span>

                  <span>

                    {liveCounter ? "Included" : "No"}

                  </span>

                </div>

              </div>

              <div className="mt-10 border-t border-white/20 pt-8">

                <h3 className="text-xl font-bold mb-5">

                  What’s Included

                </h3>

                <ul className="space-y-3 text-gray-200">

                  <li>✓ Premium Veg Buffet</li>

                  <li>✓ Professional Service Staff</li>

                  <li>✓ Elegant Presentation</li>

                  <li>✓ Royal Dining Setup</li>

                  {liveCounter && (

                    <li>✓ Live Food Counters</li>

                  )}

                </ul>

              </div>

              <button
  onClick={submitEstimator}
  className="block w-full text-center mt-10 bg-[#D4AF37] text-[#5A001A] font-bold py-4 rounded-xl"
>
  Request Detailed Quote
</button>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}