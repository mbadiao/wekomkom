import Image from "next/image";
import CustomButton from "./CustomButton";
const Contact = () => {
  return (
    <div className="bg-[#D9EBFF] w-full mt-10 p-8 py-28 flex flex-col items-center">
      <div className="text-center mb-8">
        <CustomButton
          textContent="Contact"
          classNames="text-secondary bg-orange-200 py-[10px] px-[24px] rounded-xl w-max text-[18px]"
        />
        <h2 className="text-3xl md:text-5xl break-words font-bold mt-4 leading-tight max-w-[900px] text-secondary">
          Nous répondons à toutes vos questions !
        </h2>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 gap-10">
        <div className="row-span-2 bg-white p-8 raduis-20 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-secondary">
            Écrivez-nous !
          </h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Prénom *"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nom *"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Adresse email *"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message *"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-color text-white px-6 py-2 raduis-20 w-full"
            >
              Envoyer un message
            </button>
          </form>
        </div>

        <div className="bg-white p-8 raduis-20 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-secondary">Newsletter</h3>
          <p className="mb-6">
            Restez informé des dernières opportunités sur wekomkom.
          </p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nom complet *"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Adresse email *"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-color text-white px-6 py-2 raduis-20 w-full"
            >
              S’abonner à la newsletter
            </button>
          </form>
        </div>

        <div className="bg-white p-8 raduis-20 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-secondary">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Image
                className="h-6 w-auto "
                src="/phone.svg"
                width={5}
                height={5}
                alt="Logo"
              />
              <span>+221 77 779 83 83 / 33 867 80 43</span>
            </li>
            <li className="flex items-center gap-2">
              <Image
                className="h-6 w-auto "
                src="/whatsapp.svg"
                width={5}
                height={5}
                alt="Logo"
              />
              <a href="#" className="hover:underline">
                Rejoindre la communauté WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Image
                className="h-6 w-auto "
                src="/email.svg"
                width={5}
                height={5}
                alt="Logo"
              />
              <span>contact@wekomkom.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Image
                className="h-6 w-auto "
                src="/map.svg"
                width={5}
                height={5}
                alt="Logo"
              />
              <span>Karack Amitié 3, à côté pharmacie selma</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
