"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EstimatorPage() {
  const [guests, setGuests] = useState(100);
  const [estimate, setEstimate] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      <section className="bg-[#faf7f2] py-24 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold text-[#5a001a]">
            Event Cost Estimator
          </h1>

          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="border p-3 rounded-xl mt-8"
          />

          <div className="mt-6">
            <button
              onClick={() => setEstimate(guests * 500)}
              className="bg-[#5a001a] text-white px-6 py-3 rounded-xl"
            >
              Calculate
            </button>
          </div>

          {estimate && (
            <h2 className="mt-8 text-3xl font-bold">
              ₹ {estimate.toLocaleString()}
            </h2>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}