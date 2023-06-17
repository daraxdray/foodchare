import React, { useState } from "react";
import { BsFillCreditCard2BackFill, BsTagFill } from "react-icons/bs";
const CreditCardForm = () => {
    const [code, setCode] = useState('');

    const formatSecurityCode = (event) => {
        let input = event.target.value.replace(/\D/g, ''); // Remove non-digit characters

        if (input.length > 2) {
            input = input.substring(0, 2) + '/' + input.substring(2); // Add "/" after two numbers
        }

        input = input.substring(0, 5); // Limit total input to 4 characters

        setCode(input);
    };

    return (
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 ">
            <div className="mx-auto w-full max-w-lg">
                <form action="" className="flex flex-col space-y-4">
                    <div>
                        <label htmlFor="holder" className="text-xs font-semibold text-gray-500">
                            Card Holder's name
                        </label>
                        <input
                            type="text"
                            id="holder"
                            name="holderName"
                            placeholder="Mark Green"
                            className="mt-1 block w-full rounded border-gray-300 bg-primary-lightGrey py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-primary-orange"
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="card-number" className="text-xs font-semibold text-gray-500">
                            Card number
                        </label>
                        <BsFillCreditCard2BackFill
                            className="absolute bottom-3 left-3 max-h-4"

                        />
                        <input
                            type="text"
                            id="card-number"
                            name="card-number"
                            placeholder="1234-5678-XXXX-XXXX"
                            className="block w-full rounded bg-primary-lightGrey py-3 px-4 border-orange-200 pl-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-primary-orange"
                        />
                        {/* <img
                            src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                            alt=""
                            className="absolute bottom-3 right-3 max-h-4"
                        /> */}
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-500">Expiration date</p>
                        <div className="mr-6 flex  flex-wrap">
                            <div className="relative my-1 mr-10">
                                <label htmlFor="security-code" className="sr-only">
                                    Expiration Date
                                </label>
                                <input
                                    type="text"
                                    id="security-code"
                                    name="security-code"
                                    placeholder="08/23"
                                    class="block w-36 rounded border-gray-300 bg-primary-lightGrey py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-primary-orange"
                                    value={code}
                                    onChange={formatSecurityCode}
                                />
                            </div>
                            <div className="relative my-1">
                                <label htmlFor="security-code" className="sr-only">
                                    Security code
                                </label>
                                <input
                                    type="number"
                                    id="security-code"
                                    name="security-code"
                                    placeholder="Security code"
                                    className="block w-full rounded border-gray-300 bg-primary-lightGrey py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-primary-orange"
                                    maxLength={3}
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <button
                    type="submit"
                    className="mt-4 inline-flex w-1/3 items-center justify-center rounded bg-primary-green py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-primary-orange sm:text-lg"
                >
                    Pay
                </button>
            </div>
        </div>
    );
};

export default CreditCardForm;
