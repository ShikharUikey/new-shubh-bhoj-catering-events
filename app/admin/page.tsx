"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    leads: 0,
    estimator: 0,
    gallery: 0,
    pricing: 0,
  });

  const fetchData = async () => {
    try {
      const leadsRes = await fetch("/api/leads");
      const estimatorRes = await fetch("/api/estimator");
      const galleryRes = await fetch("/api/gallery");
      const pricingRes = await fetch("/api/pricing");

      const leads = await leadsRes.json();
      const estimator = await estimatorRes.json();
      const gallery = await galleryRes.json();
      const pricing = await pricingRes.json();

      setStats({
        leads: Array.isArray(leads) ? leads.length : 0,
        estimator: Array.isArray(estimator)
          ? estimator.length
          : 0,
        gallery: Array.isArray(gallery)
          ? gallery.length
          : 0,
        pricing: Array.isArray(pricing)
          ? pricing.length
          : 0,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="mb-8">
  <p className="text-[#5A001A] font-semibold uppercase tracking-widest">
    Shubh Bhoj
  </p>

  <h1 className="text-5xl font-extrabold">
    Admin Dashboard
  </h1>

  <p className="text-gray-500 mt-2">
    Manage leads, pricing, gallery and estimator requests.
  </p>
</div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <a
          href="/admin/leads"
          className="bg-gradient-to-br from-white to-gray-100
shadow-xl
rounded-2xl
p-6
border
hover:scale-105
hover:shadow-2xl
transition-all
duration-300"
        >
          <h2 className="text-blue-600 font-semibold">
  📩 Total Leads
</h2>

          <p className="text-4xl font-bold mt-2">
            {stats.leads}
          </p>
        </a>

        <a
          href="/admin/estimator-leads"
          className="bg-gradient-to-br from-white to-gray-100
shadow-xl
rounded-2xl
p-6
border
hover:scale-105
hover:shadow-2xl
transition-all
duration-300"
        >
          <h2 className="text-purple-600 font-semibold">
  🧮 Estimator Requests
</h2>

          <p className="text-4xl font-bold mt-2">
            {stats.estimator}
          </p>
        </a>

        <a
          href="/admin/gallery"
          className="bg-gradient-to-br from-white to-gray-100
shadow-xl
rounded-2xl
p-6
border
hover:scale-105
hover:shadow-2xl
transition-all
duration-300"
        >
          <h2 className="text-pink-600 font-semibold">
  🖼 Gallery Images
</h2>

          <p className="text-4xl font-bold mt-2">
            {stats.gallery}
          </p>
        </a>

        <a
          href="/admin/pricing"
          className="bg-gradient-to-br from-white to-gray-100
shadow-xl
rounded-2xl
p-6
border
hover:scale-105
hover:shadow-2xl
transition-all
duration-300"
        >
          <h2 className="text-green-600 font-semibold">
  💰 Pricing Packages
</h2>

          <p className="text-4xl font-bold mt-2">
            {stats.pricing}
          </p>
        </a>

      </div>

      {/* Quick Actions */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-5">
  ⚡ Quick Actions
</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

          <a
            href="/admin/pricing"
            className="bg-green-600 text-white p-4 rounded-xl text-center font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300"
          >
            ➕ Add Pricing Package
          </a>

          <a
            href="/admin/gallery"
            className="bg-blue-600 text-white p-4 rounded-xl text-center font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            🖼 Manage Gallery
          </a>

          <a
            href="/admin/estimator-leads"
            className="bg-purple-600 text-white p-4 rounded-xl text-center font-semibold hover:bg-purple-700 hover:scale-105 transition-all duration-300"
          >
            🧮 View Estimator Leads
          </a>

          <a
            href="/admin/leads"
            className="bg-orange-600 text-white p-4 rounded-xl text-center font-semibold hover:bg-orange-700 hover:scale-105 transition-all duration-300"
          >
            📩 View Contact Leads
          </a>

        </div>
      </div>
    </div>
  );
}