"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 h-28 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex mt-9">
            <div className="flex-shrink-0">
              <Image
                className="h-6 w-auto "
                src="/logo-wekomkom.svg"
                width={5}
                height={5}
                alt="Logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Accueil
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Opportunités
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Boutique
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 mt-9">
            <a
              href="#"
              className="relative bg-[#F6F6F6] p-3 rounded-full text-gray-800 hover:text-gray-600"
            >
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 p-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">
                4
              </span>
              <Image
                src="/mail-icon.svg"
                width={24}
                height={24}
                className="h-4 w-4 object-contain"
                alt="Mail"
              />
            </a>
            <a
              href="#"
              className="relative bg-[#F6F6F6] p-3 rounded-full text-gray-800 hover:text-gray-600"
            >
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 p-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">
                10
              </span>
              <Image
                src="/bell-icon.svg"
                width={24}
                height={24}
                className="h-4 w-4 object-contain"
                alt="Notifications"
              />
            </a>
            <a
              href="#"
              className="relative w-10 text-gray-800 hover:text-gray-600"
            >
              <Image
                src="/user-avatar.png"
                width={30}
                height={30}
                className="h-10 w-10 rounded-full object-cover"
                alt="User Avatar"
              />
            </a>
          </div>
          <div className="-mr-2 mt-9 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center px-2 rounded-md text-gray-800 hover:text-gray-600"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-lg z-40`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Accueil
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Opportunités
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Boutique
          </a>
          <a
            href="#"
            className="relative text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 p-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">
              4
            </span>
            Mail
          </a>
          <a
            href="#"
            className="relative text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 p-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">
              10
            </span>
            Notifications
          </a>
          <a
            href="#"
            className="relative text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
}
