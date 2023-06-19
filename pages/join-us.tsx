import Navbar from "@/components/partials/header/NavBar";
import React from "react";

const JoinUsComponent = () => {
  return (
    <>
    {/* <Navbar /> */}
    <main className="flex justify-center bg-primary-orange items-center h-screen pt-20">
      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-transparent rounded-lg ">
        <div className="md:w-1/2 p-6">
          <img
            src="assets/images/join-us.png"
            alt="Image"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center items-left">
          <h1 className="text-3xl text-white font-bold mb-4">Join Us 👋</h1>
          <p className="text-white mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tincidunt lobortis ante, sed tempor neque hendrerit eu.
          </p>
          <button className="bg-gray-500 text-white py-2 px-4 rounded-full">
            Sign in with Google
          </button>

          <form className="flex flex-col w-full mt-5">
            <div className="mb-4">
              <label htmlFor="fullName" className="text-white mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="rounded-full border-white border bg-transparent w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-white mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="rounded-full border-white bg-transparent border w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-white mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="rounded-full border-white bg-transparent border w-full py-2 px-3"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-white">
                Remember me
              </label>
            </div>
            <button className="bg-white text-primary rounded-full py-2 px-4 mb-4">
              Create Account
            </button>
            <p className="text-white mb-4">
              Don't have an account? <a href="#" className="underline">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </main>
    </>
  );
};

export default JoinUsComponent;