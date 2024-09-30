import Head from "next/head";
import HomePageHero from "../components/Hero/HomePageHero";
import Footer from "../components/partials/footer/Footer";
import Title from "../components/Typography/Title";
import Navbar from "../components/partials/header/NavBar/index";
import FoodCard from "../components/Cards/FoodCard";
import TestimonialCard from "../components/Cards/TestimonialCard";
import JoinUsCard from "../components/Cards/JoinUsCard";
import SubscribeNow from "../components/Subscribe/SubscribeNow";
import HowItWorks from "../components/Cards/HowItWorksCard";
import howItWork1 from "/public/assets/images/how-it-work/how-it-work-food.png";
import howItWork2 from "/public/assets/images/how-it-work/how-it-work-food-2.png";
import howItWork3 from "/public/assets/images/how-it-work/how-it-work-food-3.png";
import DivideY from "../components/Divider/DivideY";
import ButtonWithIconRight from "../components/Button/ButtonWithIconRight";
import { FaRegHandshake } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

export default function Home() {
  return (
    <>
      {/* <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head> */}
      <Navbar />{" "}
      <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 tracking-wide md:tracking-wide font-poppins ">
        <HomePageHero />
        {/* HOW IT WORKS SECTION STARTS */}
        <DivideY>
          <Title
            intro="Our Strategy"
            titleInitial="How it"
            titleEnding="works"
            subtitle={
              "Know how are platform woks for a seamless food sharing process"
            }
            introRequired={true}
            subtitleRequired={true}
            bgLineRequired={true}
          />

          <div className="grid grid-col-1 md:grid-cols-3 md:px-12  gap-4 md:gap-8">
            <HowItWorks
              headerImg={howItWork1}
              title={"Download App"}
              description={
                "Deposit your surplus food by downloading our app"
              }
            />
            <HowItWorks
              headerImg={howItWork2}
              title={"Locate FoodBank"}
              description={
                "Locate nearest food bank for deposit or pickup"
              }
            />
            <HowItWorks
              headerImg={howItWork3}
              title={"Food Supply"}
              description={"Easily identify your food choice from avaliable list in the closest food bank"}
            />
          </div>
        </DivideY>
        {/* HOW IT WORKS SECTION ENDS */}
        {/* Our Most  Delicious Meal Starts */}
        {/* <DivideY>
          <Title
            intro="Our Favorite Restaurants"
            titleInitial="Our Most"
            titleEnding="Delicious Meal"
            subtitle={
              "Fully nobis id expedita dolores officiis layered dolor sit amet layered dolor sit amet"
            }
            introRequired={true}
            subtitleRequired={true}
            bgLineRequired={false}
          />

         
            <FoodCard />
         
          <ButtonWithIconRight text="Explore our list" />
        </DivideY> */}
        {/* Our Most  Delicious Meal Ends */}
        {/* Groceries To Your Door Starts */}
        {/* <DivideY>
          <Title
            intro="Making shooping easier"
            titleInitial="Groceries"
            titleEnding="To Your Door"
            subtitle={
              "Fully nobis id expedita dolores officiis layered dolor sit amet layered dolor sit amet"
            }
            introRequired={true}
            subtitleRequired={true}
            bgLineRequired={false}
          />

          
            <FoodCard />
          
          <ButtonWithIconRight text="Explore our service" />
        </DivideY> */}
        {/* Groceries To Your Door Ends */}
        {/* Groceries To Your Door Starts */}
        {/* <DivideY>
          <Title
            intro="Our Specials Deals"
            titleInitial="The Best"
            titleEnding="Distribution Service"
            subtitle={
              "Fully nobis id expedita dolores officiis layered dolor sit amet layered dolor sit amet"
            }
            introRequired={true}
            subtitleRequired={true}
            bgLineRequired={false}
          />

          
            <FoodCard />
          
          <ButtonWithIconRight text="Explore our service" />
        </DivideY> */}
        {/* Groceries To Your Door Ends */}
        {/* JoinUs SECTION starts */}
        {/* <DivideY>
          <Title
            intro=""
            titleInitial="Be A Part Of"
            titleEnding="foodchare"
            subtitle={
              "Fully nobis id expedita dolores officiis layered dolor sit amet layered dolor sit amet"
            }
            introRequired={false}
            subtitleRequired={true}
            bgLineRequired={false}
          />
          <div className="grid grid-col-1 md:grid-cols-2 py-8 gap-8 md:gap-24 md:px-28">
            <JoinUsCard
              text={"Become a Partner"}
              btnText={"See more"}
              IconName={FaRegHandshake}
            />
            <JoinUsCard
              text={"Become a Driver"}
              btnText={"Join us"}
              IconName={TbTruckDelivery}
            />
          </div>
        </DivideY> */}
        {/* JoinUs SECTION ends*/}
        {/* TESTIMONIAL SECTION starts */}
        {/* <DivideY>
          <Title
            intro=""
            titleInitial="Reviews"
            titleEnding="from our customers"
            subtitle={
              "Fully nobis id expedita dolores officiis layered dolor sit amet layered dolor sit amet"
            }
            introRequired={false}
            subtitleRequired={true}
            bgLineRequired={false}
          />

          <div className="grid grid-col-1 md:grid-cols-3 py-8 gap-8 md:gap-12">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </DivideY> */}
        {/* TESTIMONIAL SECTION ends*/}
        {/* SUBSCRIBE SECTION starts */}
        <SubscribeNow />
        {/* SUBSCRIBE SECTION starts */}

      </main>
      <div className="flex flex-col items-center justify-between bg-secondary-grey">
        <Footer />
      </div>
    </>
  );
}
