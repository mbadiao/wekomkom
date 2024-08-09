import Image from "next/image";
import CustomButton from "./CustomButton";

const Structure = () => {
  return (
    <>
      <div className="max-w-[1128px] p-4 md:p-[16px] mt-10 md:mt-20 flex flex-col items-center justify-center">
        <CustomButton
          textContent="Structure d’accompagnement"
          classNames="bg-[#F4C790] p-3 rounded-2xl"
        />
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 text-center font-extrabold text-dark leading-tight max-w-[900px]">
          Digitalisez et promouvez vos <br /> offres d’accompagnement
        </h1>
        <p className="text-dark text-center max-w-[612px] mt-3 text-sm md:text-base">
          Accédez à une vaste communauté de porteurs de projets,
          d&apos;entreprises et de partenaires d&apos;appui. Créez et gérez des
          offres de services sur mesure, et suivez vos prestations étape par
          étape en toute simplicité.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 mt-[20px]">
        <div className="flex flex-col md:flex-row px-4 items-center justify-center gap-6">
          <div className="w-full md:w-[496px] h-max custom-box p-6 md:px-[30px]">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-dark leading-tight max-w-[425px] mt-[30.46px]">
              Gestion simplifiée et partagée de votre structure
            </h3>
            <div className="max-w-[360px]">
              {[
                "Création d’offres illimitées",
                "Publication de vos offres et opportunités",
                "Mise en place et gestion de votre équipe d’accompagnement",
                "Tracking et reporting de vos accompagnements",
              ].map((text, index) => (
                <div
                  className="flex items-center mt-4 gap-x-4 md:gap-x-6"
                  key={index}
                >
                  <Image
                    src="/check.png"
                    width={30}
                    height={30}
                    alt="checked"
                  />
                  <p className="text-dark text-sm md:text-base leading-tight">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[608px] h-max custom-box p-6 md:px-[30px]">
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-dark leading-tight max-w-[365px] mt-[30.46px]">
                Parmi les structures déjà sur Wekomkom
              </h3>
              <Image src="/Arrow.png" width={60} height={30} alt="arrow" />
            </div>
            <div className="mt-4 md:mt-8">
              <Image
                src="/sponsores.png"
                width={600}
                height={50}
                alt="entreprise"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row px-4 gap-6">
          <div className="w-full md:w-[733px] h-max  custom-box p-6 md:p-[20px]">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-dark leading-tight max-w-[425px] mt-[30.46px]">
              Votre plateforme{" "}
              <span className="relative inline-block">
                WEKOMKOM
                <Image
                  src="/underline.svg"
                  width={100}
                  height={5}
                  alt="underline"
                  className="absolute left-0 bottom-[-4px] w-full"
                />
              </span>{" "}
              <br /> c’est plus de :
            </h3>
            <div className="flex flex-wrap gap-3 mt-6 md:mt-10">
              {[
                { label: "Entreprises enregistrées", value: "+1532" },
                { label: "Structures d'accompagnement", value: "+75" },
                { label: "Partenaires techniques et financiers", value: "+10" },
                { label: "Offres créées", value: "+148" },
                { label: "Opportunités partagées", value: "+762" },
                { label: "Demandes d’accompagnements", value: "+162" },
              ].map((stat, index) => (
                <div
                  className="custom-box-2 w-full md:w-[calc(33%-0.5rem)] h-max  p-[16px]"
                  key={index}
                >
                  <h2 className="text-blue text-2xl md:text-4xl font-bold">
                    {stat.value}
                  </h2>
                  <p className="text-secondary font-light text-xs md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[363px] p-4 md:p-[20px] bg-gradient-custom custom-box flex flex-col justify-evenly items-center">
            <div className="relative w-full md:w-[340px] h-[200px] md:h-[257px] mt-4 md:-mt-20">
              <Image
                src="/image60.png"
                alt="project"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <button className="flex bg-white gap-x-3 p-3 mt-10 justify-between items-center ring-1 ring-[#0958A5] rounded-2xl py-2 md:py-3 text-blue">
              Créer votre structure maintenant
              <Image src="/arrow.png" width={20} height={10} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Structure;
