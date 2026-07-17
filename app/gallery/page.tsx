import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";

export const metadata: Metadata = {
  title: "Event & Wedding Gallery",
  description: "Browse the stunning event gallery of Shubh Bhoj Catering. See our premium food setups, royal presentation, and beautiful event management in Delhi NCR.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}