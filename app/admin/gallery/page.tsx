"use client";

import { useEffect, useState } from "react";

export default function GalleryPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [images, setImages] = useState<any[]>([]);

  const fetchImages = async () => {
    const res = await fetch("/api/gallery");
    const data = await res.json();
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const addImage = async () => {
    const res = await fetch("/api/gallery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageUrl,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setImageUrl("");
      fetchImages();
      alert("Image Added");
    }
  };

  const deleteImage = async (id: number) => {
    const res = await fetch(`/api/gallery/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
      fetchImages();
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        📷 Gallery Management
      </h1>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Paste Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="border p-2 w-full"
        />

        <button
          onClick={addImage}
          className="bg-green-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img: any) => (
          <div
            key={img.id}
            className="border rounded-lg overflow-hidden"
          >
            <img
              src={img.imageUrl}
              alt="Gallery"
              className="w-full h-48 object-cover"
            />

            <button
              onClick={() => {
                if (confirm("Delete this image?")) {
                  deleteImage(img.id);
                }
              }}
              className="w-full bg-red-600 text-white py-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}