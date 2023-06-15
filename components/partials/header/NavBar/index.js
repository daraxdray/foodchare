import React, { useState,useEffect } from "react";
import "flowbite";
import { RiHeart3Line } from "react-icons/ri";
import { TbMinusVertical } from "react-icons/tb";
import CartIcon from "../../../Button/cartButton";
import Image from "next/image";
// IMAGES
import logo from "/public/assets/images/logos/ujali-logo.png";
import CartCard from "../../../Cards/CartCard";

export default function Navbar() {
  const [isOpen, setIsOpen ] = useState(false);

  const openCart = () => {
    setIsOpen(true)
  }
  const closeCart = () => {
    setIsOpen(false);
  };
  return (
    <>
    <CartCard isOpen={isOpen} onClose={closeCart} />
      <nav className="bg-primary-lightGreen">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center ml-8">
            <Image src={logo} alt="Ujali Foods Logo" className="h-10 lg-mr-2" />
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Food, drinks, groceries, etc</span>
            </button>
            <div className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <button 
                    onClick={() =>{openCart()}}
                    >
                    <CartIcon itemCount={4} />

              </button>
            </div>
            <div className="relative hidden md:block">
              <form className="flex items-center">

                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-primary-grey"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="voice-search"
                    className="bg-white border border-primary-grey text-primary-grey text-sm rounded-full focus:outline-none focus:shadow-lg  w-full pl-10 p-2.5 pr-20  "
                    placeholder="Food, drinks, groceries ..."
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-10 flex items-center pr-4 text-primary-grey"
                  >
                    <TbMinusVertical className="pr-2" size={25} />
                  </button>
                  <button
                    type="button"
                    className="absolute inset-y-0 right-7 flex items-center pr-4 text-primary-grey"
                  >
                    <RiHeart3Line size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() =>{openCart()}}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-grey"
                  >
                    <CartIcon itemCount={3} size={20} />
                  </button>
                </div>
              </form>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>

              <form className="flex items-center">
                <label htmlFor="voice-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="voice-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:shadow-lg  w-full pl-10 p-2.5  "
                    placeholder="Food, drinks, groceries..."
                    required
                  />
                </div>
              </form>
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
              <li>
                <a
                  href="/"
                  className={`px-1 text-primary-orange py-2 flex items-center md:text-md hover:text-base hover:border-b-0 md:hover:border-b-2 hover:border-primary-orange hover:text-primary-orange leading-snug hover:opacity-75`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={`px-1  py-2 flex items-center md:text-md hover:text-base hover:border-b-0 md:hover:border-b-2 hover:border-primary-orange hover:text-primary-orange leading-snug hover:opacity-75`}
                  aria-current="page"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={`px-1  py-2 flex items-center md:text-md hover:text-base hover:border-b-0 md:hover:border-b-2 hover:border-primary-orange hover:text-primary-orange leading-snug hover:opacity-75`}
                  aria-current="page"
                >
                  Groceries
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={`px-1 py-2 flex items-center md:text-md hover:text-base hover:border-b-0 md:hover:border-b-2 hover:border-primary-orange hover:text-primary-orange leading-snug hover:opacity-75`}
                  aria-current="page"
                >
                  Distribution
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={`px-1 py-2 flex items-center md:text-md hover:text-base hover:border-b-0 md:hover:border-b-2 hover:border-primary-orange hover:text-primary-orange leading-snug hover:opacity-75`}
                  aria-current="page"
                >
                  Join us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
