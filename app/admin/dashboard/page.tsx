"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DashboardPage() {

  const [stats, setStats] = useState({
    totalLeads: 0,
    totalGallery: 0,
    totalEstimator: 0,
    recentLeads: [] as any[],
  });

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => {
        console.error("Dashboard fetch error:", err);
      });
  }, []);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          👨🏻‍💻 Admin Dashboard
        </h1>

        <div className="flex gap-3">
          <a
            href="/"
            target="_blank"
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            🌐 Visit Website
          </a>

           <button
  onClick={async () => {
    try {
      const res = await fetch("/api/admin/logout", {
        method: "POST",
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = "/admin/login";
      } else {
        alert("Logout failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }}
  className="bg-red-600 text-white px-4 py-2 rounded-lg"
>
  
</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold">
            Total Leads
          </h2>

          <p className="text-3xl font-bold">
            {stats.totalLeads}
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold">
            Gallery Images
          </h2>

          <p className="text-3xl font-bold">
            {stats.totalGallery}
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold">
            Estimator Requests
          </h2>

          <p className="text-3xl font-bold">
            {stats.totalEstimator}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
<div className="mb-10">
  <h2 className="text-2xl font-bold mb-4">
    🚀 Quick Actions
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

    <Link
      href="/admin/leads"
      className="border rounded-xl p-5 hover:shadow-lg hover:border-[#5A001A] transition-all text-center"
    >
      <div className="text-3xl mb-2">📋</div>
      <h3 className="font-semibold">Lead Management</h3>
      <p className="text-sm text-gray-500 mt-1">
        View Contact Leads
      </p>
    </Link>

    <Link
      href="/admin/estimator-leads"
      className="border rounded-xl p-5 hover:shadow-lg hover:border-[#5A001A] transition-all text-center"
    >
      <div className="text-3xl mb-2">🧮</div>
      <h3 className="font-semibold">Estimator Leads</h3>
      <p className="text-sm text-gray-500 mt-1">
        View Quote Requests
      </p>
    </Link>

    <Link
      href="/admin/gallery"
      className="border rounded-xl p-5 hover:shadow-lg hover:border-[#5A001A] transition-all text-center"
    >
      <div className="text-3xl mb-2">🖼️</div>
      <h3 className="font-semibold">Gallery</h3>
      <p className="text-sm text-gray-500 mt-1">
        Manage Images
      </p>
    </Link>

    <Link
      href="/admin/pricing"
      className="border rounded-xl p-5 hover:shadow-lg hover:border-[#5A001A] transition-all text-center"
    >
      <div className="text-3xl mb-2">💰</div>
      <h3 className="font-semibold">Pricing</h3>
      <p className="text-sm text-gray-500 mt-1">
        Update Packages
      </p>
    </Link>

    <Link
      href="/admin/settings"
      className="border rounded-xl p-5 hover:shadow-lg hover:border-[#5A001A] transition-all text-center"
    >
      <div className="text-3xl mb-2">⚙️</div>
      <h3 className="font-semibold">Settings</h3>
      <p className="text-sm text-gray-500 mt-1">
        Website Settings
      </p>
    </Link>

  </div>
</div>

      {/* Recent Leads */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          📋 Recent Leads
        </h2>

        <div className="border rounded-lg p-4">
          {stats.recentLeads.length === 0 ? (
            <p>No leads found.</p>
          ) : (
            stats.recentLeads.map((lead: any) => (
              <div
                key={lead.id}
                className="border-b py-3"
              >
                <p className="font-semibold">
                  {lead.name}
                </p>

                <p>{lead.phone}</p>

                <p className="text-sm text-gray-500">
                  {lead.message}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}