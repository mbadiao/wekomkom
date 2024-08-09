import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import OpportuniteCard from "./OpportuniteCard";
const Oportunity = () => {
  return (
    <section className=" md:mx-10 lg:mx-20 md:mt-14  md:w-full p-10 md:p-[100px]">
      <div className="flex flex-col justify-center md:flex-row gap-6 items-center">
        <div className="flex flex-col  items-center  text-center md:text-left max-w-[1128px] p-4">
          <CustomButton
            textContent="Opportunités"
            classNames="text-blue bg-[#D9EBFF] py-[10px] px-[24px] rounded-xl w-max text-[18px]"
          />
          <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-extrabold text-dark leading-tight">
            Des opportunites partagés tout les jours
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between mt-10 items-center">
        <p className="text-sm md:text-base">Nos dernières opportunités</p>
        <a href="#" className="flex gap-3 items-center text-blue font-bold">
          <h3 className="text-sm md:text-base">Toutes les opportunités</h3>
          <Image
            src="/arrow.png"
            className="size-fit"
            width={50}
            height={10}
            alt="arrow"
          />
        </a>
      </div>
      <div className="flex flex-wrap mt-14">
        <OpportuniteCard />
        <OpportuniteCard />
        <OpportuniteCard />
        <OpportuniteCard />
      </div>
    </section>
  );
};

export default Oportunity;
