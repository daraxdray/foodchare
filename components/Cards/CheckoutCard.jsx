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
                <h2 className="text-xl font-bold mb-5">Final Step, Complete your Payment</h2>
                < SmallerText  intro={`To finish your payment, input your card details to make payment. 
                    You will be redirected to your banks authorization page .`} className="text-primary-grey text-light"/>
                <CreditCardForm />
              </div>

              <div className="mt-10 bg-primary-lightGrey border-l px-4 pt-8 lg:mt-20">
              <p className="mr-2 text-xs md:text-sm leading-loose font-medium md:leading-relaxed text-grey">
                    You're Paying,
              </p>
                <SmallText intro="$22,90" />
                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    <p className="mr-2 text-xs md:text-sm leading-loose font-medium md:leading-relaxed">
                      Chicken BBQ
                    </p>
                  </div>
                  <p className="mr-2 text-xs md:text-sm leading-loose font-medium md:leading-relaxed text-grey">
                    $20.90
                  </p>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    <p className="mr-2 text-xs  md:text-sm leading-loose font-medium md:leading-relaxed">
                      Discount & Offer
                    </p>
                  </div>
                  <p className="mr-2 text-xs md:text-sm leading-loose font-medium md:leading-relaxed text-grey">
                    $0.00
                  </p>
                </div>

                <div className="flex items-center justify-between mb-3 border-t">
                  <div className="flex">
                    <p className="mr-2 text-xs  md:text-sm leading-loose font-medium md:leading-relaxed">
                      Tax
                    </p>
                  </div>
                  <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed text-grey">
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
                <h2 className="text-xl font-bold mb-5">Chicken BBQ</h2>

                <SmallText intro="Delivery Details" />
                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    <MdLocationPin className="mr-2 self-center" />
                    <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">Address</p>
                  </div>
                  <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">Edit</p>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    <FaPersonBooth className="mr-2 self-center" />
                    <div>
                      <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">
                        <span className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">
                          Meet at Door
                        </span>
                        <p className="text-primary-green text-sm leading-6">Add Delivery Instructions</p>
                      </p>
                    </div>
                  </div>
                  <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">Edit</p>
                </div>

                <br />
                <SmallText intro="Delivery Estimate" />

                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    <TiFlash className="mr-2 self-center text-primary-green" size={20} />
                    <div>
                      <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">
                        <span className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">
                          Priority
                        </span>
                        <span className="bg-primary-green text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-lg">
                          Faster
                        </span>
                        <p className="text-primary-grey text-light">20 - 25 min. Delivered directly to you</p>
                      </p>
                    </div>
                  </div>
                  <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">$0.99</p>
                </div>

                <br />
                <SmallText intro="Payment" />

                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    <BsFillCreditCard2BackFill className="mr-2 self-center" />
                    <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">
                      Add Payment Method
                    </p>
                  </div>
                  <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">Edit</p>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    <BsTagFill className="mr-2 self-center" />
                    <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">
                      Add Promo Code
                    </p>
                  </div>
                  <p className="mr-2 text-black text-xs md:text-sm leading-loose font-medium md:leading-relaxed">Edit</p>
                </div>
              </div>

              <div className="mt-10 bg-primary-lightGrey border-l px-4 pt-8 lg:mt-0">
                <button 
                onClick={makePayment}
                className="mt-4 mb-8 w-full rounded-md bg-primary-green px-6 py-3 font-medium text-white">
                  Continue to Payment
                </button>

                <SmallText intro="Order Total" />
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
      }
    </React.Fragment>
  );
};

export default CheckoutCard;
