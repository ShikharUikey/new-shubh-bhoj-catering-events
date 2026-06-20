import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesPreview from "./components/ServicesPreview";
import WhyChooseUs from "./components/WhyChooseUs";
import CTASection from "./components/CTASection";
import GalleryPreview from "./components/GalleryPreview";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <WhyChooseUs />
      <CTASection />
      <GalleryPreview />
      <Testimonials />
      <Footer />
    </>
  );
}