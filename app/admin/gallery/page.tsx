"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";
import Image from "next/image";

// ── Types ─────────────────────────────────────────────────────────────────────

interface GalleryImage {
  id: number;
  imageUrl: string;
  createdAt: string;
}

// ── Upload states ─────────────────────────────────────────────────────────────

type UploadStatus = "idle" | "uploading" | "success" | "error";

// ── Component ─────────────────────────────────────────────────────────────────

export default function GalleryAdminPage() {
  // Gallery list
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [galleryError, setGalleryError] = useState<string | null>(null);

  // File selection
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Upload state
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("idle");
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Deleting
  const [deletingId, setDeletingId] = useState<number | null>(null);

  // ── Fetch gallery on mount ──────────────────────────────────────────────────

  useEffect(() => {
    fetchGallery();
  }, []);

  // Revoke the object URL when it changes to avoid memory leaks
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  async function fetchGallery() {
    setLoadingGallery(true);
    setGalleryError(null);

    try {
      const res = await fetch("/api/gallery");

      if (!res.ok) throw new Error("Failed to fetch gallery");

      const data: GalleryImage[] = await res.json();
      setImages(data);
    } catch (err) {
      console.error(err);
      setGalleryError("Could not load gallery. Please refresh.");
    } finally {
      setLoadingGallery(false);
    }
  }

  // ── File selection handler ──────────────────────────────────────────────────

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    // Reset previous upload state
    setUploadStatus("idle");
    setUploadError(null);

    const file = e.target.files?.[0] ?? null;

    if (!file) {
      setSelectedFile(null);
      setPreviewUrl(null);
      return;
    }

    // Client-side guard: type
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (!allowed.includes(file.type)) {
      setUploadError("Only JPG, PNG, and WebP images are allowed.");
      setSelectedFile(null);
      setPreviewUrl(null);
      // Reset the input so the same file can be re-selected after fixing
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // Client-side guard: size (5 MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("File is too large. Maximum size is 5 MB.");
      setSelectedFile(null);
      setPreviewUrl(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  }

  // ── Upload handler ──────────────────────────────────────────────────────────

  async function handleUpload() {
    if (!selectedFile) return;

    setUploadStatus("uploading");
    setUploadError(null);

    try {
      // Step 1: Upload file to /api/upload → get imageUrl
      const formData = new FormData();
      formData.append("file", selectedFile);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
        // ✅ No Content-Type header — browser sets multipart boundary automatically
      });

      const uploadData = await uploadRes.json();

      if (!uploadData.success) {
        throw new Error(uploadData.message ?? "Upload failed");
      }

      const imageUrl: string = uploadData.imageUrl;

      // Step 2: Save imageUrl to database via /api/gallery
      const galleryRes = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl }),
      });

      const galleryData = await galleryRes.json();

      if (!galleryData.success) {
        throw new Error(galleryData.message ?? "Failed to save image to gallery");
      }

      // Step 3: Success — reset state and refresh gallery
      setUploadStatus("success");
      setSelectedFile(null);
      setPreviewUrl(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      await fetchGallery();

      // Auto-clear success message after 3 seconds
      setTimeout(() => setUploadStatus("idle"), 3000);
    } catch (err) {
      console.error("UPLOAD ERROR:", err);
      setUploadStatus("error");
      setUploadError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  // ── Delete handler ──────────────────────────────────────────────────────────

  async function handleDelete(id: number) {
    if (!confirm("Delete this image? This cannot be undone.")) return;

    setDeletingId(id);

    try {
      const res = await fetch(`/api/gallery/${id}`, { method: "DELETE" });
      const data = await res.json();

      if (!data.success) throw new Error("Delete failed");

      // Remove from local state immediately for instant UI feedback
      await fetchGallery();
    } catch (err) {
      console.error(err);
      alert("Failed to delete image. Please try again.");
    } finally {
      setDeletingId(null);
    }
  }

  // ── Derived ───────────────────────────────────────────────────────────────

  const isUploading = uploadStatus === "uploading";
  const canUpload = selectedFile !== null && !isUploading;

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#fdf6f0] p-6">
      <div className="max-w-5xl mx-auto">

        {/* ── Page Header ── */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#5A001A]">
            Gallery Management
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Upload and manage images displayed in the public gallery.
          </p>
        </div>

        {/* ── Upload Card ── */}
        <div className="bg-white rounded-2xl shadow-md border border-[#e8d5c0] p-6 mb-10">
          <h2 className="text-lg font-semibold text-[#5A001A] mb-4">
            Upload New Image
          </h2>

          {/* File Input */}
          <label className="block mb-4">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Select Image
              <span className="text-gray-400 font-normal ml-1">
                (JPG, PNG, WebP — max 5 MB)
              </span>
            </span>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFileChange}
              disabled={isUploading}
              className="
                block w-full text-sm text-gray-600
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-[#5A001A] file:text-white
                hover:file:bg-[#7a0024]
                file:cursor-pointer
                file:transition-colors file:duration-200
                disabled:opacity-50 disabled:cursor-not-allowed
                cursor-pointer
              "
            />
          </label>

          {/* Preview */}
          {previewUrl && (
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Preview</p>
              <div className="relative w-48 h-48 rounded-xl overflow-hidden border-2 border-[#e8d5c0] shadow-sm">
                <Image
                  src={previewUrl}
                  alt="Selected image preview"
                  fill
                  className="object-cover"
                  unoptimized // local blob URL — skip Next.js image optimization
                />
              </div>
              {selectedFile && (
                <p className="text-xs text-gray-400 mt-1">
                  {selectedFile.name} —{" "}
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              )}
            </div>
          )}

          {/* Error message */}
          {uploadStatus === "error" && uploadError && (
            <div className="mb-4 flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
              <span className="mt-0.5">⚠️</span>
              <span>{uploadError}</span>
            </div>
          )}

          {/* Client-side validation error (no file selected yet) */}
          {uploadStatus === "idle" && uploadError && (
            <div className="mb-4 flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
              <span className="mt-0.5">⚠️</span>
              <span>{uploadError}</span>
            </div>
          )}

          {/* Success message */}
          {uploadStatus === "success" && (
            <div className="mb-4 flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg px-4 py-3">
              <span>✅</span>
              <span>Image uploaded successfully and added to the gallery.</span>
            </div>
          )}

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={!canUpload}
            className="
              mt-2 px-6 py-3 rounded-xl text-sm font-semibold
              bg-[#5A001A] text-white
              hover:bg-[#7a0024]
              active:scale-95
              transition-all duration-200
              disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
            "
          >
            {isUploading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                  />
                </svg>
                Uploading...
              </span>
            ) : (
              "Upload Image"
            )}
          </button>
        </div>

        {/* ── Gallery Grid ── */}
        <div>
          <h2 className="text-lg font-semibold text-[#5A001A] mb-4">
            Gallery Images
            {!loadingGallery && (
              <span className="ml-2 text-sm font-normal text-gray-400">
                ({images.length} {images.length === 1 ? "image" : "images"})
              </span>
            )}
          </h2>

          {/* Loading state */}
          {loadingGallery && (
            <div className="flex items-center justify-center py-16 text-gray-400 text-sm">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-[#5A001A]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                />
              </svg>
              Loading gallery...
            </div>
          )}

          {/* Fetch error */}
          {!loadingGallery && galleryError && (
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <p className="text-red-500 text-sm mb-3">{galleryError}</p>
                <button
                  onClick={fetchGallery}
                  className="text-sm text-[#5A001A] underline underline-offset-2 hover:text-[#7a0024]"
                >
                  Try again
                </button>
              </div>
            </div>
          )}

          {/* Empty state */}
          {!loadingGallery && !galleryError && images.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <div className="text-5xl mb-3">🖼️</div>
              <p className="text-sm">No images yet. Upload one above.</p>
            </div>
          )}

          {/* Image grid */}
          {!loadingGallery && !galleryError && images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="group relative aspect-square rounded-xl overflow-hidden border border-[#e8d5c0] shadow-sm bg-gray-100"
                >
                  <Image
                   src={img.imageUrl}
                   alt={`Gallery image ${img.id}`}
                   fill
                   sizes="(max-width: 768px) 100vw, 25vw"
                     className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                  {/* Hover overlay with delete button */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handleDelete(img.id)}
                      disabled={deletingId === img.id}
                      className="
                        opacity-0 group-hover:opacity-100
                        transition-all duration-200
                        bg-red-600 hover:bg-red-700
                        text-white text-xs font-semibold
                        px-3 py-1.5 rounded-lg
                        disabled:opacity-60 disabled:cursor-not-allowed
                        active:scale-95
                      "
                    >
                      {deletingId === img.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}