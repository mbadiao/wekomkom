import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import CircleBleu from "@/components/CircleBleu";
import Entreprise from "@/components/Entreprise";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center z-10">
      <HeroSection />
      <Entreprise/>
      </section>
      {/* <CircleBleu/> */}
    </>
  );
}
