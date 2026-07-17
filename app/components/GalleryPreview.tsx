import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/wedding-events.jpg",
    alt: "Premium Wedding Event Catering Setup in Delhi NCR",
  },
  {
    src: "/premium-catering.jpg",
    alt: "Premium Catering Food Display by Shubh Bhoj",
  },
  {
    src: "/live-food-stations.jpg",
    alt: "Live Food Station for Corporate Events in Delhi",
  },
  {
    src: "/corporate-events.jpg",
    alt: "Corporate Event Catering Services in Delhi NCR",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-[#C8A64D] text-sm font-semibold mb-4">
            Our Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#6B001F] mb-6">
            Capturing Memorable Celebrations
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            A glimpse into our premium catering experiences, elegant setups,
            and unforgettable events.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Large Left */}
          <div className="md:col-span-2 relative h-[500px] rounded-3xl overflow-hidden group">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
          </div>

          {/* Right Stack */}
          <div className="flex flex-col gap-6">
            {galleryImages.slice(1, 3).map((image, index) => (
              <div
                key={index}
                className="relative h-[238px] rounded-3xl overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              </div>
            ))}
          </div>

          {/* Bottom Full Width */}
          <div className="md:col-span-3 relative h-[350px] rounded-3xl overflow-hidden group">
            <Image
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link 
            href="/gallery"
            className="inline-block bg-[#6B001F] text-white px-8 py-4 rounded-full font-medium hover:bg-[#520018] transition"
          >
            View Full Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}