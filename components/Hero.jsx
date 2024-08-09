import CustomButton from "./CustomButton";
import Image from "next/image";
import HeroCard from "./HeroCard";
import HeroStat from "./HeroStat";

export default function HeroSection() {
  return (
    <section className="bg-white h-auto mt-[180px] w-full flex flex-col items-center md:flex-row px-4 md:px-8">
      <div className="md:flex md:mt-32 flex flex-col items-center">
        <HeroCard />
        <HeroStat />
      </div>
      <div className="flex-1 text-center mt-8 md:mt-0 md:max-w-[900px] mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-dark leading-tight">
          La plateforme qui vous aide à développer votre{" "}
          <CustomButton
            textContent="entreprise"
            classNames="bg-gradient-custom rounded-3xl mt-1 text-white p-2 w-max"
          />
        </h1>
        <div className="flex flex-col items-center mt-4">
          <h3 className="text-center text-dark-secondary text-[16px] md:w-[590px] h-auto font-sans text-base font-normal leading-6">
            Bienvenue sur Wekomkom, votre carrefour de succès entrepreneurial.
            Trouvez les meilleures opportunités pour votre entreprise et
            connectez-vous avec des mentors, des investisseurs et des
            partenaires potentiels.
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button className="bg-blue-color text-white rounded-lg px-6 py-3">
              Trouver une opportunité
            </button>
            <button className="flex items-center ring-1 ring-[#0958A5] rounded-lg px-6 py-3 text-blue">
              Découvrir en vidéo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-7 h-7 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center md:justify-between gap-4 mt-12 md:mt-20 flex-wrap">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/hero-image-1.png"
                height={282}
                width={250}
                alt="heroImage"
                className="transition-transform duration-300 ease-in-out transform hover:scale-125"
              />
            </div>
            <div className="relative h-[282px] w-[250px] bg-secondary rounded-2xl"></div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/hero-image-2.png"
                height={282}
                width={250}
                alt="heroImage"
                className="transition-transform duration-300 ease-in-out transform hover:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:mt-32  flex flex-col items-center mt-8">
        <HeroCard />
        <HeroStat />
      </div>
    </section>
  );
}
