import { Metadata } from "next";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Shubh Bhoj Catering, the premium wedding caterers and event management experts based in Delhi NCR.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}