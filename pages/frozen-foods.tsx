import Head from "next/head";
import HomePageHero from "../components/Hero/HomePageHero";
import Footer from "../components/partials/footer/Footer";
import ProductCategoryTitle from "../components/Typography/ProductCategoryTitle";
import Title from "../components/Typography/Title";
import Navbar from "../components/partials/header/NavBar/index";
import FoodCard from "../components/Cards/FoodCard";
import TestimonialCard from "../components/Cards/TestimonialCard";
import JoinUsCard from "../components/Cards/JoinUsCard";
import SubscribeNow from "../components/Subscribe/SubscribeNow";
import SideNavigation from "../components/SideNav/SideNav";
import HowItWorks from "../components/Cards/HowItWorksCard";
import howItWork1 from "/public/assets/images/how-it-work/how-it-work-food.png";
import howItWork2 from "/public/assets/images/how-it-work/how-it-work-food-2.png";
import howItWork3 from "/public/assets/images/how-it-work/how-it-work-food-3.png";
import DivideY from "../components/Divider/DivideY";
import ButtonWithIconRight from "../components/Button/ButtonWithIconRight";
import { FaRegHandshake } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import ShopLayout from "@/components/Layouts/ShopLayout";
import CardGridContainer from "@/components/Layouts/GridContainer";

export default function Home() {
  return (
    <>
    <ShopLayout children={(
      <>
    
          <ProductCategoryTitle
            title="Frozen Food"
          />
                    <FoodCard gridDouble={true} />

       
        
        {/* Our Most  Delicious Meal Ends */}
        {/* Groceries To Your Door Starts */}
        <DivideY>
          <ProductCategoryTitle
            title="Food Products"
          />
       
            <FoodCard  />
       
         
        </DivideY>
      </>
    )}/>
    </>
  );
}
