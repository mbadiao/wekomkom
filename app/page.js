import CircleBleu from "@/components/CircleBleu";
import Contact from "@/components/Contact";
import Entreprise from "@/components/Entreprise";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center z-10">
        <HeroSection />
        <Entreprise />
      </section>
      <CircleBleu />
      <Contact />
      <Footer />
    </>
  );
}
