import React, { useState } from "react";
import { FaPersonBooth } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCard2BackFill, BsTagFill } from "react-icons/bs";
import { TiFlash } from "react-icons/ti";
import SmallText from "../Typography/SmallText";
import SmallerText from "../Typography/SmallerText";
import CreditCardForm from "../Cards/CreditCardForm"
const CheckoutCard = () => {
  const [isFinal, setIsFinal] = useState(false);
  const makePayment = () => {
    setIsFinal(true)
  }
  return (
    <React.Fragment>
      {
        isFinal
          ?
          <React.Fragment>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
              <div className="px-4 pt-8">
                <h2 className="text-2xl font-bold mb-5">Final Step, Complete your Payment</h2>
                <p className="text-black text-xs md:text-sm text-primary-grey text-light">
                    To finish your payment, input your card details to make payment. 
                    You will be redirected to your banks authorization page .
                </p>
                <CreditCardForm />
              </div>

              <div className="mt-10 bg-secondary-grey border-l drop-shadow-lg px-4 pt-8 lg:mt-20 lg:p-20">
              <p className="mr-2 text-xs md:text-sm leading-loose font-medium md:leading-relaxed text-grey mb-2">
                    You're Paying,
              </p>
              <p className="text-3xl ml-3 font-bold mb-5">
                   $22,90
              </p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    <p className="mr-2 text-base  font-bold  ">
                      Chicken BBQ
                    </p>
                  </div>
                  <p className="mr-2 text-xs md:text-sm leading-loose font-medium md:leading-relaxed ">
                    $20.90
                  </p>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    <p className="mr-2 text-base  font-bold ">
                      Discount & Offer
                    </p>
                  </div>
                  <p className="mr-2 text-xs md:text-sm leading-loose font-medium md:leading-relaxed ">
                    $0.00
                  </p>
                </div>

                <div className="flex items-center justify-between mb-3 border-t border-black pt-5 mt-10 ">
                  <div className="flex">
                    <p className="mr-2 text-xs  md:text-sm leading-loose font-medium md:leading-relaxed">
                      Tax
                    </p>
                  </div>
                  <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed ">
                    $.00
                  </p>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    <h2 className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">
                      Total
                    </h2>
                  </div>
                  <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">
                    $22.90
                  </p>
                </div>
              </div>
            </div>
            </React.Fragment>
          :
          <React.Fragment>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
              <div className="px-4 pt-8">
                <p className=" font-black text-center text-2xl  mb-[4rem]">Chicken BBQ</p>

                <h1 className="text-black text-lg font-black mb-4">
                     Delivery Details
                </h1>
                <div className="flex items-center justify-between mb-7">
                  <div className="flex ">
                    <MdLocationPin className="mr-2 self-center" />
                    <p className="mr-2 text-black text-xs md:text-sm leading-loose font-bold md:leading-relaxed">Address</p>
                  </div>
                  <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">Edit</p>
                </div>

                <div className="flex items-center justify-between mb-7">
                  <div className="flex mr-20">
                    <FaPersonBooth className="mr-2 self-center" />
                    <div>
                      <p className="mr-2 text-black text-xs md:text-sm leading-loose font-bold md:leading-relaxed">
                        <span className="mr-2 text-black text-xs md:text-sm leading-loose font-bold md:leading-relaxed">
                          Meet at Door
                        </span>
                        <p className="text-primary-green text-sm leading-6">Add Delivery Instructions</p>
                      </p>
                    </div>
                  </div>
                  <p className="mr-2  ml-20 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">Edit</p>
                </div>

                <br />
                <h1 className="text-black text-lg font-black mb-4">
                  Delivery Estimate
                </h1>
                <div className="flex items-center justify-between mb-7">
                  <div className="flex">
                    <TiFlash className="mr-2 self-center text-primary-green" size={20} />
                    <div>
                      <p className="mr-2 text-black text-xs md:text-sm  ">
                        <span className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">
                          Priority
                        </span>
                        <span className="bg-primary-green text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-lg">
                          Faster
                        </span>
                        <p className="text-primary-grey text-sm">20 - 25 min. Delivered directly to you</p>
                      </p>
                    </div>
                  </div>
                  <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">$0.99</p>
                </div>

                <br />
                <h1 className="text-black text-lg font-black mb-4">
                  Payment
                </h1>
                <div className="flex items-center justify-between mb-7">
                  <div className="flex">
                    <BsFillCreditCard2BackFill className="mr-2 self-center" />
                    <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">
                      Add Payment Method
                    </p>
                  </div>
                  <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">Edit</p>
                </div>

                <div className="flex items-center justify-between mb-7">
                  <div className="flex">
                    <BsTagFill className="mr-2 self-center" />
                    <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">
                      Add Promo Code
                    </p>
                  </div>
                  <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">Edit</p>
                </div>
              </div>

              <div className="mt-5 bg-primary-lightGrey border-l px-4 pt-8 lg:mt-0">
                <button 
                onClick={makePayment}
                className="mt-4 mb-8 w-full rounded-md bg-primary-green px-6 py-3 font-medium text-white mb-10">
                  Continue to Payment
                </button>

                <h1 className="text-black text-lg font-black mb-4">
                  Order Total
                </h1>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    <p className="mr-2 text-xs text-grey md:text-sm leading-loose font-medium md:leading-relaxed">
                      Sub Total
                    </p>
                  </div>
                  <p className="mr-2 text-xs md:text-sm leading-loose font-medium md:leading-relaxed text-grey">
                    $20.90
                  </p>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    <p className="mr-2 text-xs text-grey md:text-sm leading-loose font-medium md:leading-relaxed">
                      Fee
                    </p>
                  </div>
                  <p className="mr-2 text-xs md:text-sm leading-loose font-medium md:leading-relaxed text-grey">
                    $0.00
                  </p>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    <p className="mr-2 text-xs text-grey md:text-sm leading-loose font-medium md:leading-relaxed">
                      Delivery
                    </p>
                  </div>
                  <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed text-grey">
                    $2.00
                  </p>
                </div>

                <div className="flex items-center justify-between mb-3 mt-10">
                  <div className="flex">
                    <h2 className="mr-2 text-black text-xs md:text-sm font-bold ">
                      Total
                    </h2>
                  </div>
                  <p className="mr-2 text-black text-xs md:text-sm  font-bold">
                    $22.90
                  </p>
                </div>
              </div>
            </div>
            </React.Fragment>
      }
    </React.Fragment>
  );
};

export default CheckoutCard;
