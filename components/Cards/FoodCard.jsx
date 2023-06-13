import React from "react";
import { FaStar } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import food1 from "/public/assets/images/food/food-1.png";
import food2 from "/public/assets/images/food/food-2.png";
import food3 from "/public/assets/images/food/food-3.png";
import food4 from "/public/assets/images/food/food-2.png";
import Image from "next/image";
import SmallerText from "../Typography/SmallerText"


const FoodCard = () => {

  const image = [
    {
      name: "Flavor Fusion",
      image: food1
    },
    {
      name: "Gourmet Grove",
      image: food2
    },
    {
      name: "Flavor Fusion",
      image: food3
    },
    {
      name: "Gourmet Grove",
      image: food4
    },
  ]
  return (
    <>
      {image.map((item, index) => (
        <div className="flex flex-col w-full bg-white drop-shadow-xl rounded-lg" key={index}>
          <div className="relative">
            <div className="flex justify-between absolute">

              <button
                type="button"
                className="m-2 inline-flex items-center justify-center space-x-1 border border-transparent text-sm font-medium rounded-full w-12 h-12 bg-white bg-opacity-80 hover:text-white  hover:bg-primary-lightGreen transition-colors mr-32"
              >
                <AiFillHeart size={25} className=" hover:text-primary-green" />
              </button>
              <button className="text-black">
                {" "}
                <div className="flex rounded-full py-1 px-4 font-medium justify-between items-center gap-2 bg-white bg-opacity-80  hover:bg-primary-green hover:text-white">
                  <FaStar color="yellow" />
                  <span className="font-bold">4.5</span>
                </div>{" "}
              </button>{" "}
            </div><Image src={item.image} alt="ujali" className="rounded-t-xl h-48" />

          </div>
          <div className="p-4">
            {" "}
            <p className="font-bold text-lg mb-1 md:mb-4 tracking-wide">{item.name}</p>{" "}
            <SmallerText intro={"With lots of unique blocks you can easily create a page without coding."} />

            <div className="flex justify-between w-full mt-0 md:mt-4">
              {" "}
              <div className="flex items-center ">
                {" "}
                <p className="font-extrabold text-primary-blue text-lg md:text-xl">$26.5</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <button
                  type="button"
                  className="inline-flex classname items-center justify-center space-x-2  text-sm text-white  rounded-full w-10 h-10 bg-primary-green hover:bg-primary-lightGreen hover:text-primary-green transition-colors"
                >
                  <MdOutlineShoppingCart size={25} />
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      ))}
    </>
  );
};
export default FoodCard;
