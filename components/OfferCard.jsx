import Image from "next/image";

const OfferCard = () => {
  return (
    <div className="relative max-w-lg min-w-[300px] h-max rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="absolute z-30 top-2 left-2 bg-[#4CAF50] text-white text-xs sm:text-sm md:text-base font-bold px-2 py-1 rounded-md">
        Bon d&apos;accompagnement
      </div>

      <div className="relative w-full h-[200px]">
        <Image
          src="/boutique-image-component.png"
          alt="Offer Image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-dark">
          Définir son offre commercial
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
          Objectifs : Attirer des clients potentiels. Convaincre les clients
          d&apos;acheter vos produits ou services. Fidéliser vos clients
          existants.
        </p>
      </div>

      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center">
          <Image
            src="/concree.png"
            alt="Company Logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="ml-2 text-sm sm:text-base md:text-lg font-medium text-gray-700">
            Concree SAS
          </span>
        </div>
        <div className="text-blue-600 p-3 rounded-xl bg-[#D9EBFF] font-bold text-sm sm:text-base md:text-lg">
          550 000 FCFA
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
