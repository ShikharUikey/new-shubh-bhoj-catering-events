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
import SignatureMenu from "./components/SignatureMenu";
import RoyalExperience from "./components/RoyalExperience";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium Wedding Caterers in Delhi NCR & Bhopal",
  description: "Experience the best catering services in Delhi NCR and Bhopal with Shubh Bhoj Catering. Perfect for weddings, corporate events, and parties.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesPreview />
        <SignatureMenu />
        <WhyChooseUs />
        <RoyalExperience />
        <CTASection />
        <GalleryPreview />
        <Testimonials />
        <FAQ />
        
        {/* Premium Floating Contact Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <Link 
            href="/contact"
            className="flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#C8A64D] text-[#2A000F] px-6 py-4 rounded-full font-bold shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:scale-105 hover:shadow-[0_10px_40px_rgba(212,175,55,0.6)] transition-all duration-300"
          >
            <span className="text-xl">✨</span>
            <span className="hidden md:inline">Request Royal Quote</span>
            <span className="md:hidden">Get Quote</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}