import React, { useState, useEffect } from "react";
import Image from "next/image";
import heroImage from "/public/assets/images/hero/home.png";
import HeroSlider from "../Slider/HeroSlider";

const HomePageHero = () => {
  return (
    <>
      <div className="grid-col-1 grid md:grid-cols-2 gap-2 bg-home-hero bg-no-repeat bg-right-top md:bg-center tracking-wider ">
        <div className="md:py-8">
          <span className="rounded-2xl bg-secondary-orange px-4 py-1 text-xs font-bold">
            Food is an adventure
          </span>
          <h1 className="my-2 text-4xl md:text-7xl font-bold leading-relaxed md:leading-[96px]">
            We speak food language with{" "}
          </h1>
          <h1 className="my-2 text-4xl md:text-7xl font-bold leading-relaxed md:leading-[96px] text-primary-orange">
            Our Menu
          </h1>
          <p className="font-medium text-md md:text-base text-primary-gray my-4 leading-[34px]">
            Food is an Adventure, Satisfy Your Cravings with Our Delicious Food,
            Delivered to Your Doorstep!
          </p>
          <div className="mx-auto my-4 md:my-8">
            <form action="#">
              <div className="items-center mx-auto max-w-screen-sm flex flex-row drop-shadow-2xl ">
                <div className="relative w-full z-0">
                  <input
                    className="block p-3 pl-10 w-full text-sm border border-primary-grey hover:border-primary-green focus:border-primary-orange rounded-lg sm:rounded-none sm:rounded-l-lg"
                    placeholder="Enter delivery address"
                    type="text"
                    id="address"
                    required
                  />
                </div>
                <div className="z-10">
                  <button
                    type="submit"
                    className="-ml-2 py-3 px-4 md:px-12 w-full text-sm font-bold border border-white rounded-lg md:rounded-none md:rounded-r-lg text-white bg-primary-green cursor-pointer hover:bg-primary-orange"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-home-circle bg-no-repeat bg-left-bottom">
          {/* <HeroSlider /> */}
          <Image src={heroImage} alt="Ujali Foods" />
        </div>
      </div>
    </>
  );
};

export default HomePageHero;
