"use client";

import { useEffect, useState } from "react";

export default function EstimatorLeadsPage() {
  const [requests, setRequests] = useState<any[]>([]);

  const fetchRequests = async () => {
    const res = await fetch("/api/estimator");
    const data = await res.json();

    setRequests(data);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const deleteRequest = async (id: number) => {
    const confirmDelete = confirm(
      "Delete this estimator request?"
    );

    if (!confirmDelete) return;

    const res = await fetch(
      `/api/estimator/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    if (data.success) {
      fetchRequests();
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        Estimator Leads
      </h1>

      <div className="grid gap-4">
        {requests.map((item: any) => (
          <div
            key={item.id}
            className="border rounded-lg p-5"
          >
            <h2 className="font-bold text-xl">
              {item.name}
            </h2>

            <p>Phone: {item.phone}</p>

            <p>Event: {item.eventType}</p>

            <p>Guests: {item.guests}</p>

            <p>Budget: ₹{item.budget}</p>

            <p>Date: {item.eventDate}</p>

            <button
              onClick={() =>
                deleteRequest(item.id)
              }
              className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}