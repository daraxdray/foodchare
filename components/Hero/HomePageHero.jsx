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
          Reducing Food Waste, Sharing Resources
                    </span>
          <h1 className="my-2 text-4xl md:text-7xl font-bold leading-relaxed md:leading-[96px]">
          Bringing Communities Together To
          </h1>
          <h1 className="my-2 text-4xl md:text-7xl font-bold leading-relaxed md:leading-[96px] text-primary-orange">
           Share Food and Care
          </h1>
          <p className="font-medium text-md md:text-base text-primary-gray my-4 leading-[34px]">
          Connect with neighbors to reduce food waste and help those in need. 
          Together, we can make a difference.
          </p>
          <div className="mx-auto my-4 md:my-8">
            <form action="#">
              <div className="items-center mx-auto max-w-screen-sm flex flex-row drop-shadow-2xl " style={{height:60}}>
                <div className="relative w-full h-full  z-0">
                  <input
                    className="block p-3 pl-10 w-full h-full text-sm border border-primary-grey hover:border-primary-green focus:border-primary-orange rounded-lg sm:rounded-none sm:rounded-l-lg"
                    placeholder="Locate nearest foodbank"
                    type="text"
                    id="address"
                    required
                  />
                </div>
                <div className="z-10 h-full">
                  <button
                    type="submit"
                    className="-ml-2 py-3 h-full px-4 md:px-12 w-full text-sm font-bold border border-white rounded-lg md:rounded-none md:rounded-r-lg text-white bg-primary-green cursor-pointer hover:bg-primary-orange"
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
          <Image src={heroImage} alt="Food Foods" style={{width:'100%', }} />
        </div>
      </div>
    </>
  );
};

export default HomePageHero;
