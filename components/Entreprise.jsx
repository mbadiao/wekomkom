// import React from "react";
// import CustomButton from "./CustomButton";
// import Image from "next/image";
// const Entreprise = () => {
//   return (
//     <div className="z-10 max-w-[1128px] mt-36 max-h-[1449.54px]">
//       <div className="flex flex-col items-center gap-2">
//         <CustomButton
//           textContent="Entreprise"
//           classNames="text-blue bg-[#D4F0FF] py-[10px] px-[24px] rounded-xl w-max text-[18px]"
//         />
//         <h1 className="text-3xl max-w-[900px] text-center md:text-5xl font-bold text-dark leading-tight">
//           Lancer votre entreprise et bénéficier d’un écosystème de qualité.
//         </h1>
//       </div>
//       <div className="flex flex-col gap-4 mt-[20px]">
//         <div className="flex gap-4">
//           <div className="w-[608px] h-[400px] custom-box px-[30px]">
//             <div className="flex justify-between">
//               <h3 className="text-xl max-w-[365px] mt-[30.46px] md:text-2xl font-bold text-dark leading-tight">
//                 Une vitrine attractive pour votre business !
//               </h3>
//               <Image src="/Arrow.png" width={110} height={50} alt="arrow" />
//             </div>
//             <div>
//               <Image
//                 src="/entreprise.png"
//                 width={600}
//                 height={50}
//                 alt="entreprise"
//               />
//             </div>
//           </div>
//           <div className="w-[496px] h-[400px] custom-box px-[30px]">
//             <h3 className="text-xl max-w-[425px] mt-[30.46px] md:text-2xl font-bold text-dark leading-tight">
//               Des opportunités inédites pour votre entreprise !
//             </h3>
//             <div className="max-w-[360px]">
//               <div className="flex items-center mt-4 gap-x-6">
//                 <Image src="/check.png" width={40} height={50} alt="checked" />
//                 <p className="text-dark leading-tight">
//                   Bénéficier d’offres d’accompagnement
//                 </p>
//               </div>
//               <div className="flex items-center mt-4 gap-x-6">
//                 <Image src="/check.png" width={40} height={50} alt="checked" />
//                 <p className="text-dark leading-tight">
//                   Obtenir des bons d’accompagnement
//                 </p>
//               </div>
//               <div className="flex items-center mt-4 gap-x-6">
//                 <Image src="/check.png" width={40} height={50} alt="checked" />
//                 <p className="text-dark leading-tight">
//                   Rester informé.e des meilleures opportunités
//                 </p>
//               </div>
//               <div className="flex items-center mt-4 gap-x-6">
//                 <Image src="/check.png" width={40} height={50} alt="checked" />
//                 <p className="text-dark leading-tight">
//                   Trouver des investisseurs et des partenaires
//                 </p>
//               </div>
//               <div className="flex items-center mt-4 gap-x-6">
//                 <Image src="/check.png" width={40} height={50} alt="checked" />
//                 <p className="text-dark leading-tight">
//                   Développer votre réseau
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-4">
//           <div className="w-[496px] h-[400px] custom-box px-[20px]">
//             <h3 className="text-xl max-w-[425px] mt-[30.46px] md:text-2xl font-bold text-dark leading-tight">
//               Un écosystème diversifié vous offrant un cadre idéal.
//             </h3>
//             <div className="flex flex-wrap gap-3 mt-10">
//               <div className="custom-box-2 w-[214px] h-[100px] p-[16px]">
//                 <h2 className="text-blue text-4xl font-bold">+1532</h2>
//                 <p className="text-secondary font-light text-sm">
//                   Entreprises enregistrées
//                 </p>
//               </div>
//               <div className="custom-box-2 w-[214px] h-[100px] p-[16px]">
//                 <h2 className="text-blue text-4xl font-bold">+200</h2>
//                 <p className="text-secondary font-light text-sm">
//                   Opportunités partagées
//                 </p>
//               </div>
//               <div className="custom-box-2 w-[214px] h-[100px] p-[16px]">
//                 <h2 className="text-blue text-4xl font-bold">+148</h2>
//                 <p className="text-secondary font-light text-sm">
//                   Offres créées
//                 </p>
//               </div>
//               <div className="custom-box-2 w-[216px] h-[100px] py-[10px]">
//                 <h2 className="text-blue mx-2 text-4xl font-bold">+75</h2>
//                 <p className="text-secondary mx-1 font-light text-sm">
//                   Structures d&apos;accompagnement
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="w-[608px] p-[38px] h-[400px] custom-box flex items-center">
//             <div className="flex w-[330px] flex-col h-[345px]">
//               <div className="relative  h-[200px]">
//                 <Image
//                   src="/etudiant.png"
//                   alt="etudiant"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="relative h-[200px]">
//                 <Image
//                   src="/start-up.png"
//                   alt="start-up"
//                   layout="fill"
//                   objectFit="cover"

//                 />
//               </div>
//             </div>
//             <div>
//               <div className="relative w-[240px] h-[390px]">
//                 <Image
//                   src="/project.png"
//                   alt="project"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Entreprise;

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Entreprise = () => {
  return (
    <div className="z-10 max-w-[1128px] mt-36 max-h-[1449.54px] mx-auto px-4">
      <div className="flex flex-col items-center gap-2 text-center">
        <CustomButton
          textContent="Entreprise"
          classNames="text-blue bg-[#D4F0FF] py-[10px] px-[24px] rounded-xl w-max text-[18px]"
        />
        <h1 className="text-3xl md:text-5xl font-bold text-dark leading-tight max-w-[900px]">
          Lancer votre entreprise et bénéficier d’un écosystème de qualité.
        </h1>
      </div>
      <div className="flex flex-col gap-4 mt-[20px]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[608px] h-[400px] custom-box px-[30px]">
            <div className="flex justify-between">
              <h3 className="text-xl md:text-2xl font-bold text-dark leading-tight max-w-[365px] mt-[30.46px]">
                Une vitrine attractive pour votre business !
              </h3>
              <Image src="/Arrow.png" width={115} height={50} alt="arrow" />
            </div>
            <div>
              <Image
                src="/entreprise.png"
                width={600}
                height={50}
                alt="entreprise"
              />
            </div>
          </div>
          <div className="w-full md:w-[496px] h-[400px] custom-box px-[30px]">
            <h3 className="text-xl md:text-2xl font-bold text-dark leading-tight max-w-[425px] mt-[30.46px]">
              Des opportunités inédites pour votre entreprise !
            </h3>
            <div className="max-w-[360px]">
              {[
                "Bénéficier d’offres d’accompagnement",
                "Obtenir des bons d’accompagnement",
                "Rester informé.e des meilleures opportunités",
                "Trouver des investisseurs et des partenaires",
                "Développer votre réseau",
              ].map((text, index) => (
                <div className="flex items-center mt-4 gap-x-6" key={index}>
                  <Image src="/check.png" width={40} height={50} alt="checked" />
                  <p className="text-dark leading-tight">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[499px] h-auto custom-box p-[20px]">
            <h3 className="text-xl md:text-2xl font-bold text-dark leading-tight max-w-[425px] mt-[30.46px]">
              Un écosystème diversifié vous offrant un cadre idéal.
            </h3>
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                { label: "Entreprises enregistrées", value: "+1532" },
                { label: "Opportunités partagées", value: "+200" },
                { label: "Offres créées", value: "+148" },
                { label: "Structures d'accompagnement", value: "+75" },
              ].map((stat, index) => (
                <div
                  className="custom-box-2 w-[calc(50%-0.5rem)] h-[100px] p-[16px]"
                  key={index}
                >
                  <h2 className="text-blue text-4xl font-bold">{stat.value}</h2>
                  <p className="text-secondary font-light text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[608px] p-[20px] md:p-[38px] h-auto custom-box flex flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-[330px] h-[345px] gap-4">
              <div className="relative h-[200px]">
                <Image
                  src="/etudiant.png"
                  alt="etudiant"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/start-up.png"
                  alt="start-up"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="relative w-full md:w-[240px] h-[390px] mt-4 md:mt-0">
              <Image
                src="/project.png"
                alt="project"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entreprise;
