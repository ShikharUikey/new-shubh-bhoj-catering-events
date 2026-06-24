"use client";

import { useEffect, useState } from "react";

export default function PricingPage() {
  const [packages, setPackages] = useState<any[]>([]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const fetchPackages = async () => {
    const res = await fetch("/api/pricing");
    const data = await res.json();
    setPackages(data);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const addPackage = async () => {
    const res = await fetch("/api/pricing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
        description,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setTitle("");
      setPrice("");
      setDescription("");

      fetchPackages();
      alert("Package Added");
    }
  };

  const deletePackage = async (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this package?"
    );

    if (!confirmDelete) return;

    const res = await fetch(`/api/pricing/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
      fetchPackages();
      alert("Package Deleted");
    } else {
      alert("Delete Failed");
      console.log(data);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        📝 Pricing Management
      </h1>

      <div className="border rounded-lg p-4 mb-8">
        <input
          type="text"
          placeholder="Package Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <button
          onClick={addPackage}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Package
        </button>
      </div>

      <div className="grid gap-4">
        {packages.map((pkg: any) => (
          <div
            key={pkg.id}
            className="border rounded-lg p-4"
          >
            <h2 className="text-xl font-bold">
              {pkg.title}
            </h2>

            <p className="font-semibold">
              {pkg.price}
            </p>

            <p className="mb-3">
              {pkg.description}
            </p>

            <button
              onClick={() => deletePackage(pkg.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}