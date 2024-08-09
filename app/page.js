import CircleBleu from "@/components/CircleBleu";
import Contact from "@/components/Contact";
import Entreprise from "@/components/Entreprise";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Accecibilite from "@/components/Accecibilite";
import Structure from "@/components/Structure";
import Boutique from "@/components/Boutique";
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center">
        <HeroSection />
        <Entreprise />
        <Accecibilite />
        <Structure />
        <Boutique />
        <Contact />
        <Footer />
      </section>
      {/* <CircleBleu/> */}
    </>
  );
}
