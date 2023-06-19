import Head from "next/head";
import BeAPartnerHero from "../components/Hero/BeAPartnerHero";
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
        <BeAPartnerHero />
        {/* HOW CAN WE HELP STARTS */}
        <DivideY>

          <section className="relative w-screen h-90vh bg-cover bg-center bg-img-url h-full" style={{ minHeight: 500, backgroundImage: `url('assets/images/grow-business.png')` }}>
            <div  >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute top-0 left-0 mt-8 ml-8">
                <h2 className="text-4xl font-bold text-white">
                  How can
                  <span className="text-4xl font-bold text-primary-orange"> UJALI</span> <br />
                  help you?</h2>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="text-6xl text-white hover:text-primary-orange">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 22v-20l18 10-18 10z"></path>
                  </svg>
                </button>
              </div>

              {/* <!-- Button --> */}
              <button className="absolute bottom-[-20px] right-0 bg-primary-green rounded-lg shadow-lg py-4 px-6 text-lg w-1/3 font-semibold text-white hover:bg-primary-orange">
                Your Button
              </button>
            </div>
          </section>

        </DivideY>
        {/* HOW IT WORKS SECTION ENDS */}
        {/* Our Most  Delicious Meal Starts */}
        <DivideY>
          <h2 className={`font-bold text-3xl md:text-5xl mb-2 text-center md:mx-0 leading-normal md:items-center p-2 ${"bg-no-repeat bg-bottom"}`}>
            Why trust <span className="text-primary-orange">Ujali</span>
          </h2>
          <p className="leading-5 md:leading-loose font-normal text-center text-primary-black text-xs md:text-lg mx-8 md:mx-12 mb-8">
            Ujali is a trusted partner because we prioritize transparency, reliability, and exceptional service. With a proven track record and a commitment to exceeding expectations, we have earned the trust of our clients. Our dedicated team works tirelessly to deliver innovative solutions, ensuring that your business receives the utmost care and attention. Choose Ujali for a reliable and trustworthy partnership that will help your business thrive.
          </p>
        </DivideY>
        {/* Our Most  Delicious Meal Ends */}
        {/* Groceries To Your Door Starts */}
        <DivideY>
          <section className="flex flex-col items-center bg-primary-lightGreen w-screen py-15">
            <h2 className="text-4xl text-primary-orange font-bold mb-4">Ready to be with us</h2>
            <p className="text-gray-700 text-lg mb-4">Get in touch with us.</p>
            <p className="text-green-500 mb-8">Leave your details below so we can talk about how being an Ujali Partner can add to your success.</p>
            <form className="w-full md:w-2/3 lg:w-1/2">
              <div className="flex flex-wrap justify-between mb-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="firstName" className="text-gray-800">First Name</label>
                  <input type="text" id="firstName" className="w-full border border-gray-300 rounded-lg p-2" />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="lastName" className="text-gray-800">Last Name</label>
                  <input type="text" id="lastName" className="w-full border border-gray-300 rounded p-2" />
                </div>
              </div>
              <div className="flex flex-wrap mb-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="business" className="text-gray-800">Business</label>
                  <input type="text" id="business" className="w-full border border-gray-300 rounded-lg p-2" />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="contactPhone" className="text-gray-800">Contact Phone</label>
                  <input type="text" id="contactPhone" className="w-full border border-gray-300 rounded-lg p-2" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-gray-800">Email</label>
                <input type="email" id="email" className="w-full border border-gray-300 rounded-lg p-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="service" className="text-gray-800">What service do you offer?</label>
                <input type="text" id="service" className="w-full border border-gray-300 rounded-lg p-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="text-gray-800">How can we help you?</label>
                <textarea id="message" className="w-full border border-gray-300 rounded p-2"></textarea>
              </div>
              <button className="bg-green-500 text-white rounded px-4 py-2">Submit</button>
            </form>
          </section>
        </DivideY>

        {/* TESTIMONIAL SECTION starts */}
        <DivideY>
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
        </DivideY>
        {/* TESTIMONIAL SECTION ends*/}


      </main>
      <div className="flex flex-col items-center justify-between bg-secondary-grey">
        <Footer />
      </div>
    </>
  );
}
