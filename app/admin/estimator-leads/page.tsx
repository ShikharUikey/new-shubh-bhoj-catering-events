"use client";
 
import { useEffect, useState } from "react";
 
interface EstimatorRequest {
  id: number;
  name: string;
  phone: string;
  eventType: string;
  guests: number;
  budget: string;
  eventDate: string;
  createdAt: string;
}
 
export default function EstimatorLeadsPage() {
  const [requests, setRequests] = useState<EstimatorRequest[]>([]);
  const [loading, setLoading] = useState(true);
 
  const fetchRequests = async () => {
    try {
      const res = await fetch("/api/estimator");
      const data = await res.json();
      setRequests(data);
    } catch (err) {
      console.error("Failed to fetch estimator requests:", err);
    } finally {
      setLoading(false);
    }
  };
 
  const handleDelete = async (id: number) => {
    if (!confirm("Delete this estimator request?")) return;
 
    try {
      const res = await fetch(`/api/estimator/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setRequests((prev) => prev.filter((r) => r.id !== id));
      } else {
        alert("Delete failed.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Something went wrong.");
    }
  };
 
  useEffect(() => {
    fetchRequests();
  }, []);
 
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-neutral-800">
            Estimator Leads
          </h1>
          <p className="text-sm text-neutral-500 mt-1">
            Quote requests submitted from the website estimator
          </p>
        </div>
        <span className="bg-[#5A001A]/10 text-[#5A001A] text-sm font-semibold px-4 py-1.5 rounded-full">
          {requests.length} Requests
        </span>
      </div>
 
      {/* Loading */}
      {loading && (
        <div className="text-center py-20 text-neutral-400">
          Loading...
        </div>
      )}
 
      {/* Empty */}
      {!loading && requests.length === 0 && (
        <div className="text-center py-20 text-neutral-400 bg-white rounded-2xl border border-neutral-100">
          No estimator requests yet.
        </div>
      )}
 
      {/* Table */}
      {!loading && requests.length > 0 && (
        <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-100">
                <th className="text-left px-5 py-3 text-neutral-500 font-semibold">#</th>
                <th className="text-left px-5 py-3 text-neutral-500 font-semibold">Name</th>
                <th className="text-left px-5 py-3 text-neutral-500 font-semibold">Phone</th>
                <th className="text-left px-5 py-3 text-neutral-500 font-semibold">Event</th>
                <th className="text-left px-5 py-3 text-neutral-500 font-semibold">Guests</th>
                <th className="text-left px-5 py-3 text-neutral-500 font-semibold">Budget</th>
                <th className="text-left px-5 py-3 text-neutral-500 font-semibold">Date</th>
                <th className="text-left px-5 py-3 text-neutral-500 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, index) => (
                <tr
                  key={req.id}
                  className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors"
                >
                  <td className="px-5 py-4 text-neutral-400">{index + 1}</td>
                  <td className="px-5 py-4 font-medium text-neutral-800">
                    {req.name}
                  </td>
                  <td className="px-5 py-4 text-neutral-600">{req.phone}</td>
                  <td className="px-5 py-4">
                    <span className="bg-[#5A001A]/10 text-[#5A001A] text-xs font-semibold px-2.5 py-1 rounded-full">
                      {req.eventType}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-neutral-600">{req.guests}</td>
                  <td className="px-5 py-4 font-semibold text-neutral-800">
                    ₹{Number(req.budget).toLocaleString()}
                  </td>
                  <td className="px-5 py-4 text-neutral-600">
                    {new Date(req.eventDate).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => handleDelete(req.id)}
                      className="text-red-500 hover:text-red-700 text-xs font-semibold border border-red-200 hover:border-red-400 px-3 py-1.5 rounded-lg transition-all"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
 