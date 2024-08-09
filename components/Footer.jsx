import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 px-4 gap-8">
        <div>
          <Image
            className="mb-4"
            src="/footer-logo.svg"
            width={200}
            height={200}
            alt="Logo"
          />
          <p className="text-lg">
            Wekomkom est une plateforme digitale dédiée à l’accompagnement et à
            la valorisation de l’entrepreneuriat en Afrique. Nous connectons les
            entrepreneurs talentueux avec les ressources, les mentors et les
            investisseurs dont ils ont besoin pour concrétiser leurs rêves et
            propulser leurs entreprises vers le succès.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Menu</h3>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="#">Opportunités</a>
            </li>
            <li>
              <a href="#">Boutique</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Lien utiles</h3>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="#">Conditions générales d’utilisation</a>
            </li>
            <li>
              <a href="#">Politiques de confidentialité</a>
            </li>
            <li>
              <a href="#">Documentation utile</a>
            </li>
            <li>
              <a href="#">Devenir partenaire</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">
            Wekomkom est disponible sur mobile
          </h3>
          <div className="mb-6 flex flex-col gap-4">
            <a href="#">
              <Image
                className=""
                src="/google.png"
                width={200}
                height={200}
                alt="Logo"
              />
            </a>
            <a href="#">
              <Image
                className=""
                src="/app-store.png"
                width={200}
                height={200}
                alt="Logo"
              />
            </a>
          </div>
          <h3 className="text-xl font-bold mb-4">
            Suivez-nous sur nos réseaux
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <Image
                className=""
                src="/bi_linkedin.svg"
                width={30}
                height={30}
                alt="Logo"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Image
                className=""
                src="/uiw_facebook.svg"
                width={30}
                height={30}
                alt="Logo"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Image
                className=""
                src="/X.svg"
                width={30}
                height={30}
                alt="Logo"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Image
                className=""
                src="/instagram.svg"
                width={30}
                height={30}
                alt="Logo"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-blue-700 pt-6 text-center text-sm">
        Created by Concree © 2024 Wekomkom. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
