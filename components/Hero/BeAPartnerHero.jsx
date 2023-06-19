import React, { useState, useEffect } from "react";
import Image from "next/image";
import heroImage from "/public/assets/images/hero/home.png";
import HeroSlider from "../Slider/HeroSlider";

const BeAPartnerHero = () => {
  return (
    <>
      <div className="grid-col-1 grid md:grid-cols-2 gap-2 bg-home-hero bg-no-repeat bg-right-top md:bg-center tracking-wider ">
        <div className="md:py-8">
          <span className="rounded-2xl bg-secondary-orange px-4 py-1 text-xs font-bold">
            Food is an adventure
          </span>
          <h1 className="my-2 text-4xl md:text-7xl font-bold w-1/5 leading-relaxed md:leading-[96px]">
            Grow your<br />
            Business<br /> with
            <span className="my-2 ml-2 text-4xl md:text-7xl font-bold leading-relaxed md:leading-[96px] text-primary-orange">
              UJALI
            </span>
          </h1>

          <p className="font-medium text-md md:text-base text-primary-gray my-4 leading-[34px]">
            Elevate your business with UJALI. Drive growth, streamline operations, and make informed decisions. Join our community for wider reach and increased profitability. Experience the power of UJALI and achieve success.
          </p>
          <div className="mx-auto my-4 md:my-8">
            <div className="z-10">
              <button
                type="submit"
                className="-ml-2 py-3 px-4 md:px-12  text-sm font-bold border border-white rounded-lg md:rounded-none md:rounded-lg text-white bg-primary-green cursor-pointer hover:bg-primary-orange"
              >
                Search
              </button>
            </div>
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

export default BeAPartnerHero;
