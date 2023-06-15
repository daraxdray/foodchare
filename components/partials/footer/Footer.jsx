import Image from "next/image";
import logo from "/public/ujali-logo.png";
import appstore from "/public/assets/images/footer/app-store.png";
import playstore from "/public/assets/images/footer/play-store.png";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="container bg-secondary-grey lg-mt-20 p-5 items-center ">
        <div className=" grid grid-col-2 md:grid-cols-4 gap-2 md:gap-4 tracking-wide">
          <div className="col-span-2 md:col-span-1 mb-4">
            <Image src={logo} className="mb-4"></Image>
            <p className="text-sm leading-6 tracking-wide">
              There are many variations of passages of Lorem the Ipsum available
              but it is the majority of suffered that a alteration in that some
              dummy.
            </p>
          </div>
          <div className="md:ml-16 capitalize text-sm mb-4">
            <p className="font-bold text-lg mb-4"> Services</p>
            <a className="block mb-2 font-normal hover:font-bold hover:text-primary-orange cursor-pointer">
              Incident Responder
            </a>
            <a className="block mb-2 font-normal hover:font-bold hover:text-primary-orange cursor-pointer">
              Secure Managed IT
            </a>
            <a className="block mb-2 font-normal hover:font-bold hover:text-primary-orange cursor-pointer">
              Check website Url
            </a>
            <a className="block mb-2 font-normal hover:font-bold hover:text-primary-orange cursor-pointer">
              Locker Security
            </a>
          </div>
          <div className="md:ml-16 capitalize text-sm mb-4">
            <p className="font-bold text-lg mb-4"> About Us</p>
            <a className="block mb-2 font-light md:font-normal hover:font-bold hover:text-primary-orange cursor-pointer">
              Payment Plans
            </a>
            <a className="block mb-2 font-normal hover:font-bold hover:text-primary-orange cursor-pointer">
              Make saving More
            </a>
            <a className="block mb-2 font-normal hover:font-bold hover:text-primary-orange cursor-pointer">
              Tax Calculator
            </a>
            <a className="block mb-2 font-normal hover:font-bold hover:text-primary-orange cursor-pointer">
              Talk To Us
            </a>
          </div>
          <div className="capitalize col-span-2 md:col-span-1">
            {" "}
            <p className="font-bold text-lg mb-4 capitalize text-center md:text-left">
              {" "}
              Follow Us
            </p>
            <div className="grid grid-cols-4 text-xl md:text-3xl text-primary-gray my-8 w-full px-8 md:px-0 md:w-2/3 ">
              <a className="">
                <BsLinkedin className=" hover:text-primary-orange" />
              </a>
              <a>
                <BsInstagram className=" hover:text-primary-orange" />
              </a>
              <a>
                <BsFacebook className=" hover:text-primary-orange" />
              </a>
              <a>
                <BsTwitter className=" hover:text-primary-orange" />
              </a>
            </div>
            <div className="grid grid-cols-2 text-3xl">
              <a>
                <Image src={appstore} alt="appstore " />
              </a>
              <a>
                <Image src={playstore} alt="playstore " />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs md:text-sm mt-16 mb-8">
          <p> © 2023 Ujali food All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
