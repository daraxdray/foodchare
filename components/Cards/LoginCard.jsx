// import { MdKeyboardArrowLeft } from "react-icons/md";
// import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import FacebookIcon from "../../public/assets/images/icon/facebook.png";
import GoogleIcon from "../../public/assets/images/icon/google1.png";
import Image from "next/image";
const LoginCard = () => {
  const [notVerify, setNotVerify] = useState(false);
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  function handleChange(event, index) {
    const value = event.target.value;
    setCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });
    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const enteredCode = code.join("");
    // Handle code verification here
    console.log(`Entered code: ${enteredCode}`);
  }

  return (
    <>
      <div className="flex items-center lg-w-4/5 w-full mx-auto shadow-lg">
        <div className="flex-1   bg-white  ">
          <div className="  flex flex-col md:flex-row  ">
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-3/5">
              {/* <div className="float-left w-full lg:-mt-10 text-xs">
                <img className="p-6 " src={Logo} alt="Ujali Logo" />
            </div> */}
              <div className="lg:w-4/5 md:w-4/5 sm:w-full">
                <h1 className="mb-4 text-2xl font-bold ">
                  {notVerify ? (
                    <>
                      Verification Code
                      <p className="text-base mt-5">
                        <span className="font-normal">
                          Enter code that we have sent to your email{" "}
                        </span>{" "}
                        <span className="font-bold">jacxxxxx@gmail.com</span>
                      </p>
                    </>
                  ) : (
                    <>Login</>
                  )}
                </h1>
                {notVerify ? (
                  <form className="text-center ">
                    <div
                      id="otp"
                      className="flex flex-row justify-center text-center px-2 mt-5 gap-10"
                    >
                      {code.map((value, index) => (
                        <input
                          key={index}
                          ref={(el) => (inputRefs.current[index] = el)}
                          className="m-2 border h-12 w-12 text-center rounded font-bold focus:outline-none focus:border-primary-orange bg-primary-lightGrey shadow-lg  "
                          type="text"
                          value={value}
                          pattern="[0-9]*"
                          maxLength="1"
                          required
                          onChange={(event) => handleChange(event, index)}
                        />
                      ))}
                    </div>
                    <div>
                      <button
                        class="bg-primary-green w-full mt-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Verify
                      </button>
                    </div>

                    <div class="text-primary-orange mb-4 mt-10">
                      <a href="#" class="underline">
                        Resend code
                      </a>
                    </div>
                  </form>
                ) : (
                  <form>
                    <div>
                      <input
                        type="email"
                        className={` w-full  lg:w-4/5 mb-5  px-4 py-2 text-sm border border-grey bg-primary-lightGrey rounded-md focus:border-grey focus:outline-none `}
                        placeholder="Email Address"
                      />
                    </div>
                    <div>
                      <input
                        className={`w-full lg:w-4/5  px-4 py-2 text-sm border border-grey rounded-md bg-primary-lightGrey focus:border-grey focus:outline-none `}
                        placeholder="Password"
                        type="password"
                      />
                    </div>

                    <div className="flex w-full  ">
                      <div className="mt-4 text-primary-orange text-xs">
                        <a className=" " href="/forget-password">
                          Forgot Password?
                        </a>
                      </div>
                    </div>

                    <div className="w-full mt-5">
                      <button
                        type="submit"
                        className="block w-full lg:w-4/5 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white bg-primary-green rounded"
                      >
                        Login
                      </button>
                    </div>
                    <div className="flex w-full lg:mr-12 ">
                      <div className="mt-4 text-xs">
                        <p>
                          Do you have an account?{" "}
                          <a href="/signup" className="text-primary-orange ">
                            {" "}
                            Sign Up{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="float-right w-full ">
                      <div className=" block flex py-5 items-center w-4/5 ">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="flex-shrink mx-4 font-bold text-gray-400">
                          Or
                        </span>
                        <div className="flex-grow border-t border-gray-400"></div>
                      </div>
                    </div>

                    <div className="flex w-4/5  mt-4 gap-x-2">
                      <button
                        type="button"
                        className="flex items-center justify-center w-full p-2 font-sm rounded-lg shadow-lg"
                      >
                        <Image src={FacebookIcon} alt="Facebook Icon" />
                        {'\u00A0'}
                        Facebook
                      </button>
                      <button className="flex items-center justify-center w-full p-2 rouded-lg shadow-lg">
                        <Image src={GoogleIcon} alt="Google Icon" />
                        {'\u00A0'}
                        Google
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className="md:w-2/5 bg-cover bg-login bg-no-repeat invisible md:visible   "></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginCard;