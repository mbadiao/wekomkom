// import React from "react";
// import CustomButton from "./CustomButton";
// import Image from "next/image";
// import OfferCard from "./OfferCard";
// const Boutique = () => {
//   return (
//     <section className="mx-10 p-[100px] md:mx-20">
//       <div className="flex  gap-x-7 items-center ">
//         <div>
//           <Image src="/boutique.png" width={170} height={250} alt="boutique" />
//         </div>
//         <div className="max-w-[1128px] p-4 md:p-[16px]  flex flex-col items-center justify-center">
//           <CustomButton
//             textContent="Boutique d’accompagnement"
//             classNames="bg-gradient-custom text-white p-3 rounded-2xl "
//           />
//           <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4  font-extrabold text-dark leading-tight max-w-[900px]">
//             Trouvez les offres promues par nos structures <br /> dans la
//             boutique d’accompagnement
//           </h1>
//         </div>
//       </div>

//       <div className="flex justify-between mt-10">
//         <p>Les offres d’accompagnement à la une !</p>{" "}
//         <a href="#" className="flex gap-3 items-center">
//           <h3 className="text-blue font-bold">Accéder à la boutique</h3>
//           <Image
//             src="/arrow.png"
//             className="size-fit"
//             width={50}
//             height={10}
//             alt="arrow"
//           />
//         </a>
//       </div>
//       <div className="mt-10">
//         <OfferCard />
//       </div>
//     </section>
//   );
// };

// export default Boutique;


import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import OfferCard from "./OfferCard";

const Boutique = () => {
  return (
    <section className=" md:mx-10 lg:mx-20 p-10 md:p-[100px]">
      <div className="flex flex-col justify-center md:flex-row gap-6 items-center">
        <div className="flex-shrink-0">
          <Image src="/boutique.png" width={170} height={250} alt="boutique" />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[1128px] p-4">
          <CustomButton
            textContent="Boutique d’accompagnement"
            classNames="bg-gradient-custom text-white p-3 rounded-2xl"
          />
          <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-extrabold text-dark leading-tight">
            Trouvez les offres promues par nos structures <br /> dans la boutique d’accompagnement
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between mt-10 items-center">
        <p className="text-sm md:text-base">Les offres d’accompagnement à la une !</p>
        <a href="#" className="flex gap-3 items-center text-blue font-bold">
          <h3 className="text-sm md:text-base">Accéder à la boutique</h3>
          <Image
            src="/arrow.png"
            className="size-fit"
            width={50}
            height={10}
            alt="arrow"
          />
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </section>
  );
};

export default Boutique;
