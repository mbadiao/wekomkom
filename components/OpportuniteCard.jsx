import Image from "next/image";
const OpportuniteCard = () => {
  return (
    <div class="flex max-md:flex-col items-center px-8 max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="">
        <Image
          className="max-md:size-48"
          src="/cultural-image.png"
          width={900}
          height={900}
          alt="Logo"
        />
      </div>
      <div class="flex flex-col items-center p-4">
        <div class="ml-4">
          <div className="flex gap-2 items-center">
            <Image
              className="w-auto"
              src="/cercle-cultural.png"
              width={20}
              height={20}
              alt="Logo"
            />
            <h3 class="text-sm font-normal">Par Concree SAS</h3>
          </div>
          <a href="#" class="text-blue-600 hover:underline text-sm">
            Trouvez l’Opportunité qui Boostera Votre Entreprise
          </a>
          <p class="text-gray-500 text-sm mt-2">
            Découvrez Comm’une Opportunité, la plateforme de mise en relation
            entre porteurs de projet et communes de France. Outil gratuit pour
            les entrepreneurs...
          </p>
        </div>
        <div class="px-4 py-2 bg-gray-50 flex flex-wrap items-center">
          <div class="flex items-center text-gray-600 text-sm">
            <Image
              className=""
              src="/time-logo.svg"
              width={35}
              height={35}
              alt="Logo"
            />
            <span>31 Juillet 2024</span>
          </div>
          <div class="flex items-center text-gray-600 text-sm">
            <Image
              className=""
              src="/time-logo.svg"
              width={35}
              height={35}
              alt="Logo"
            />
            <span>6 mois</span>
          </div>
          <div class="flex items-center text-gray-600 text-sm">
            <Image
              className=""
              src="/location.svg"
              width={35}
              height={35}
              alt="Logo"
            />
            <span>Dakar, Sénégal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportuniteCard;
