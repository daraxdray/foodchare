import React from "react";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import food1 from "/public/assets/images/food/food-1.png";
import food2 from "/public/assets/images/food/food-2.png";
import food3 from "/public/assets/images/food/food-3.png";
import food4 from "/public/assets/images/food/food-2.png";
import Image from "next/image";
import SmallerText from "../Typography/SmallerText"


const FoodCard = ({gridDouble = false}) => {

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
      <div className={`grid grid-cols-2 md:grid-cols-3 ${gridDouble? 'lg:grid-cols-2 gap-4':'lg:grid-cols-4  gap-4'}`}>

        {image.map((item, index) => (
          <div className="flex flex-col w-full bg-white drop-shadow-xl rounded-lg transform origin-top transition-transform hover:scale-105" key={index}>
            <div className="relative">
              <Image src={item.image} alt="ujali" className="w-full h-40 object-cover rounded-t-xl h-48" />
              <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-2">
                <button className="p-2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full">
                  <FaHeart size={20} color="black" />
                </button>
                <div className="flex items-center p-2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full">
                  <FaStar size={16} color="yellow" />
                  <span className="ml-1 text-sm font-bold">4.5</span>
                </div>
              </div>
            </div>
            <div className="p-4 ">
              <p className="font-bold text-lg mb-1 md:mb-4 tracking-wide">{item.name}</p>
              <SmallerText intro={"With lots of unique blocks you can easily create a page without coding."} />
              <div className="flex justify-between w-full mt-0 md:mt-4">
                <div className="flex items-center">
                  <p className="font-extrabold text-primary-blue text-lg md:text-xl">$26.5</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex classname items-center justify-center space-x-2 text-sm text-white rounded-full w-10 h-10 bg-primary-green hover:bg-primary-lightGreen hover:text-primary-green transition-colors"
                  >
                    <MdOutlineShoppingCart size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default FoodCard;
