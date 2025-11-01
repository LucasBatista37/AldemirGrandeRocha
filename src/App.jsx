import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-[#1C1C1C]">
      <Navbar />
      <main className="mt-20">
        <section className="bg-gradient-to-b from-[#FFFFFF] to-[#FAFAFA]">
          <HeroSection />
        </section>

        <section className="bg-gradient-to-b from-[#FFF3E0] to-[#FFEBD0]">
          <AboutSection />
        </section>

        <section className="bg-gradient-to-b from-[#FFE5C2] to-[#FFDFA3]">
          <ServicesSection />
        </section>

        <section className="bg-gradient-to-b from-[#F5F5F5] to-[#ECECEC]">
          <GallerySection />
        </section>

        <section className="bg-gradient-to-b from-[#FFFFFF] to-[#FFF8EB]">
          <TestimonialsSection />
        </section>

        <section className="bg-gradient-to-b from-[#FFF7E9] to-[#FFF1D7]">
          <FinalCTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
