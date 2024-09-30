import { useEffect, useState, useRef } from "react";
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
      <div className="flex items-center w-4/5  mx-auto shadow-lg">
        <div className="flex-1   bg-white  ">
          <div className="  flex flex-col md:flex-row  ">
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-3/5">
              {/* <div className="float-left w-full lg:-mt-10 text-xs">
                <img className="p-6 " src={Logo} alt="foodchare Logo" />
            </div> */}
              <div className="lg:w-4/5 md:w-4/5 sm:w-full">
                <h1 className="mb-4 text-2xl font-bold ">
                Sign Up
                </h1>
                  <form>
                    <div>
                      <input
                        type="text"
                        className={` w-full  lg:w-4/5 mb-5  px-4 py-2 text-sm border border-grey bg-primary-lightGrey rounded-md focus:border-grey focus:outline-none `}
                        placeholder="Username"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className={` w-full  lg:w-4/5 mb-5  px-4 py-2 text-sm border border-grey bg-primary-lightGrey rounded-md focus:border-grey focus:outline-none `}
                        placeholder="Email Address"
                      />
                    </div>
                    <div>
                      <input
                        className={`w-full lg:w-4/5 mb-5  px-4 py-2 text-sm border border-grey rounded-md bg-primary-lightGrey focus:border-grey focus:outline-none `}
                        placeholder="Password"
                        type="password"
                      />
                    </div>
                    <div>
                      <input
                        className={`w-full lg:w-4/5 mb-2  px-4 py-2 text-sm border border-grey rounded-md bg-primary-lightGrey focus:border-grey focus:outline-none `}
                        placeholder="Confirm Password"
                        type="password"
                      />
                    </div>
                    <div className="flex w-full  ">
                      <div className="mt-2 text-pblack text-xs">
                      <input type="checkbox"  className="text-primary-orange focus:outline-none rounded-lg "/>
                        <span className=" ml-2 " >
                        By signing up you accept the <span className="text-primary-orange">Term of service </span> <br />
                            and <span className="text-primary-orange">Privacy Policy </span>
                        </span>
                      </div>
                    </div>

                    <div className="w-full mt-5">
                      <button
                        type="submit"
                        className="block w-full lg:w-4/5 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white bg-primary-green rounded"
                      >
                        SIGN UP
                      </button>
                    </div>
                    <div className="lg:mr-20 ">
                      <div className="mt-4 text-xs">
                        <p>
                          Already have an account?{" "}
                          <a href="/login" className="text-primary-red ">
                            {" "}
                            Sign in{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </form>
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