"use client";

import { useEffect, useState } from "react";

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/leads")
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);
        console.log("IS ARRAY:", Array.isArray(data));
        console.log("LENGTH:", data.length);

        setLeads(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteLead = async (id: number) => {
    const res = await fetch(`/api/leads/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
      setLeads((prev) => prev.filter((lead) => lead.id !== id));
      alert("Lead Deleted");
    }
  };
console.log("STATE:", leads);
console.log("STATE LENGTH:", leads.length);
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        📋 Lead Management
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border border-gray-300">

          <thead className="bg-gray-100">

            <tr>
              <th className="border p-3">ID</th>
              <th className="border p-3">Name</th>
              <th className="border p-3">Phone</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Event Type</th>
              <th className="border p-3">Guests</th>
              <th className="border p-3">Event Date</th>
              <th className="border p-3">Location</th>
              <th className="border p-3">Message</th>
              <th className="border p-3">Created</th>
              <th className="border p-3">Action</th>
            </tr>

          </thead>

          <tbody>

            {leads.length === 0 ? (
              <tr>
                <td
                  colSpan={11}
                  className="text-center p-6 text-gray-500"
                >
                  No Leads Found
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id}>

                  <td className="border p-3">
                    {lead.id}
                  </td>

                  <td className="border p-3">
                    {lead.name}
                  </td>

                  <td className="border p-3">
                    {lead.phone}
                  </td>

                  <td className="border p-3">
                    {lead.email || "-"}
                  </td>

                  <td className="border p-3">
                    {lead.eventType || "-"}
                  </td>

                  <td className="border p-3">
                    {lead.guests || "-"}
                  </td>

                  <td className="border p-3">
                    {lead.eventDate
                      ? new Date(lead.eventDate).toLocaleDateString()
                      : "-"}
                  </td>

                  <td className="border p-3">
                    {lead.location || "-"}
                  </td>

                  <td className="border p-3 max-w-xs">
                    {lead.message || "-"}
                  </td>

                  <td className="border p-3">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>

                  <td className="border p-3">

                    <button
                      onClick={() => {
                        if (confirm(`Delete ${lead.name}?`)) {
                          deleteLead(lead.id);
                        }
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}