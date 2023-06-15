
import { useEffect, useState, useRef } from "react";
const LoginCard = () => {
  const [notVerify, setNotVerify] = useState(true);
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [email, setEmail] = useState("");

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
  function resetPassword(event) {
    event.preventDefault();
    console.log(`Entered email: ${email}`);
    setNotVerify(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const enteredCode = code.join("");
    // Handle code verification here
    console.log(`Entered code: ${enteredCode}`);
  }

  return (
    <>
      <div className="flex items-centerlg-w-4/5 w-full  mx-auto shadow-lg">
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
                      Forgot Password?
                      <p className="text-sm font-normal mt-2">
                      type your email address or username and we will  send the verification code.
                      </p>
                    </>
                  ) : (
                    <>
                      Create Password
                      <p className="text-sm font-normal mt-2">
                        Create your new password to login
                      </p>
                    </>
                  )}
                </h1>
                {notVerify ? (
                  <form className="text-center ">
                    <div
                      id="otp"
                      className="flex flex-row justify-center text-center px-2 mt-5 gap-10"
                    >
                      <input
                        className={`w-full px-4 py-2 text-sm border border-grey rounded-md bg-primary-lightGrey focus:border-grey focus:outline-none`}
                        placeholder="Email Address"
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <button
                        className="bg-primary-green w-full mt-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={resetPassword}
                      >
                        RESET MY PASSWORD
                      </button>
                    </div>

                    <div className="text-primary-orange mb-4 mt-10">
                      <a href="#" className="underline">
                        Resend code
                      </a>
                    </div>
                  </form>
                ) : (
                  <form>
                    <div>
                      <input
                        type="text"
                        className={` w-full  lg:w-4/5 mb-5  px-4 py-2 text-sm border border-grey bg-primary-lightGrey rounded-md focus:border-grey focus:outline-none `}
                        placeholder="Password"
                      />
                    </div>
                    <div>
                      <input
                        className={`w-full lg:w-4/5  px-4 py-2 text-sm border border-grey rounded-md bg-primary-lightGrey focus:border-grey focus:outline-none `}
                        placeholder="Confrim Password"
                        type="text"
                      />
                    </div>

                    <div className="w-full mt-5">
                      <button
                        type="submit"
                        className="block w-full lg:w-4/5 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white bg-primary-green rounded"
                      >
                        CREATE PASSWORD
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