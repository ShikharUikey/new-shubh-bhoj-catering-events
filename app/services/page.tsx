import { Metadata } from "next";
import Navbar from "../components/Navbar";
import ServicesPreview from "../components/ServicesPreview";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Catering Services in Bhopal",
  description: "Explore our premium catering services for weddings, corporate events, birthday parties, and outdoor events in Bhopal and NCR.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPreview />
      </main>
      <Footer />
    </>
  );
}
