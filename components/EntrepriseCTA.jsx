// import Image from "next/image";
// const EntrepriseCTA = () => {
//   return (
//     <>
//       <div className="custom-box p-10 max-w-[1128px] mt-7 h-[400px]  flex justify-between">
//         <div className="flex flex-col justify-between items-center md:items-start">
//           <Image src="logo-gray.svg" width={40} height={30} alt="" />
//           <Image src="human.svg" width={150} height={30} alt="" />
//         </div>
//         <div className="max-w-[620px] z-30 flex flex-col justify-center items-center gap-y-4">
//           <h1 className="text-gradient font-extrabold text-3xl">
//             Prêt à vous lancer ?
//           </h1>
//           <p className="max-w-[424px] text-center font-light">
//             Créez votre entreprise maintenant et profitez de toutes les
//             opportunités qu’offre WEKOMKOM.
//           </p>
//           <button className="bg-blue-color text-white px-5 py-3 raduis-20">
//             Créer votre entreprise maintenant
//           </button>
//         </div>
//         <div>
//           <Image src="home.svg" width={150} height={50} alt="" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default EntrepriseCTA;

import Image from "next/image";

const EntrepriseCTA = () => {
  return (
    <>
      <div className="custom-box p-10 max-w-[1128px] mt-7 h-auto md:h-[400px] flex flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-between items-center md:items-start">
          <Image src="logo-gray.svg" width={40} height={30} alt="logo" />
          <Image src="human.svg" width={150} height={30} alt="human" />
        </div>
        <div className="max-w-[620px] z-30 flex flex-col justify-center items-center gap-y-4 mt-6 md:mt-0">
          <h1 className="text-gradient font-extrabold text-3xl text-center md:text-left">
            Prêt à vous lancer ?
          </h1>
          <p className="max-w-[424px] text-center font-light">
            Créez votre entreprise maintenant et profitez de toutes les
            opportunités qu’offre WEKOMKOM.
          </p>
          <button className="bg-blue-color text-white px-5 py-3 raduis-20">
            Créer votre entreprise maintenant
          </button>
        </div>
        <div className="flex items-center justify-center mt-6 md:mt-0">
          <Image src="home.svg" width={150} height={50} alt="home" />
        </div>
      </div>
    </>
  );
};

export default EntrepriseCTA;
