import Image from "next/image";
import CustomButton from "./CustomButton";
const Accecibilite = () => {
  return (
    <section className="h-screen bg-[#D9EBFF] flex flex-col items-center p-32 w-full">
      <div className="max-w-[620px] flex flex-col items-center justify-center ">
        <CustomButton
          textContent="Accécibilité"
          classNames="bg-[#A4F4E7] p-3 rounded-2xl"
        />
        <h1 className="text-3xl mt-4 md:text-4xl text-center font-bold text-dark leading-tight max-w-[900px]">
          Une <span className="text-[#006AA3]">expérience </span> unique de
          l’écosystème entrepreneurial
        </h1>
      </div>
      <div className="max-h-[500px] mt-5 rounded-3xl max-w-[1049px] bg-white p-5">
        <CarrosellItem1/>
      </div>
    </section>
  );
};

export const CarrosellItem1 = () => {
  return (
    <div className="flex gap-10">
      <div>
        <Image src="/carroussel-image-1.png" height={110} width={454} alt="CarrosellItem1" />
      </div>
      <div className="max-w-[440px] flex flex-col items-start justify-center gap-y-5">
        <h3 className="text-[#006AA3] font-extrabold text-3xl">Boutique d’Accompagnement</h3>
        <p className="w-max font-light">
          La Boutique d&apos;Accompagnement de Wekomkom est votre <br/> guichet unique
          pour accéder à une gamme complète de <br/> services et de ressources conçus
          pour propulser votre <br/>  entreprise.
        </p>
        <button className="flex gap-x-5 justify-center items-center ring-1 ring-[#0958A5] rounded-2xl px-6 py-3 text-blue">
          Boutique
          <Image src="/arrow.png" width={20} height={10} alt="arrow"/>
        </button>
      </div>
    </div>
  );
};

export default Accecibilite;
