import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesPreview from "./components/ServicesPreview";
import WhyChooseUs from "./components/WhyChooseUs";
import CTASection from "./components/CTASection";
import GalleryPreview from "./components/GalleryPreview";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Premium Wedding Caterers in Delhi NCR",
  description: "Experience the best catering services in Delhi NCR with Shubh Bhoj Catering. Perfect for weddings, corporate events, and parties.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesPreview />
        <WhyChooseUs />
        <CTASection />
        <GalleryPreview />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}