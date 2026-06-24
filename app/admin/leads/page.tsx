"use client";

import { useEffect, useState } from "react";

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/leads")
      .then((res) => res.json())
      .then((data) => setLeads(data));
  }, []);

  const deleteLead = async (id: number) => {
    const res = await fetch(`/api/leads/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
      setLeads((prev) =>
        prev.filter((lead) => lead.id !== id)
      );

      alert("Lead Deleted");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Lead Management
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">ID</th>
              <th className="border p-3">Name</th>
              <th className="border p-3">Phone</th>
              <th className="border p-3">Message</th>
              <th className="border p-3">Date</th>
              <th className="border p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead: any) => (
              <tr key={lead.id}>
                <td className="border p-3">{lead.id}</td>
                <td className="border p-3">{lead.name}</td>
                <td className="border p-3">{lead.phone}</td>
                <td className="border p-3">{lead.message}</td>
                <td className="border p-3">
                  {new Date(
                    lead.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="border p-3">
                  <button
                    onClick={() => {
                      if (
                        confirm(
                          `Delete ${lead.name}?`
                        )
                      ) {
                        deleteLead(lead.id);
                      }
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}