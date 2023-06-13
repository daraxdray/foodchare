import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { MdDelete } from "react-icons/md"
import SmallText from "../Typography/SmallText";
import SmallerText from "../Typography/SmallerText";

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]

export default function CartCart({isOpen, onClose}) {
    const [open, setOpen] = useState(isOpen)
    useEffect(() => {
        setOpen(isOpen); 
      }, [isOpen]);

      const handleClose = () => {
        setOpen(false);
        onClose(); 
      };
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75   transition-opacity" />
                </Transition.Child>

                <div className="fixed  inset-0 overflow-hidden">
                    <div className="absolute inset-0  overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto   w-screen max-w-[23rem]">
                                    <div className="flex h-full flex-col rounded-tl-[4rem] rounded-bl-[4rem]  overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start   justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">My Order </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => handleClose()}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul role="list" className="-my-6 divide-y divide-grey-200">
                                                        {products.map((product) => (

                                                            <li key={product.id} className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                                                <div className="shrink-0 relative">
                                                                    <img
                                                                        className="h-24 w-24 max-w-full rounded-lg object-cover"
                                                                        src={product.imageSrc}
                                                                        alt={product.imageAlt}
                                                                    />
                                                                </div>

                                                                <div className="relative flex flex-1 flex-col justify-between">
                                                                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                                        <div className="pr-8 sm:pr-5">
                                                                            <a href={product.href} > <SmallerText intro={product.name} /></a>
                                                                            <div className="flex ">
                                                                                <div className="sm:order-1 ">
                                                                                    <div className="mx-auto flex h-6 items-stretch border rounded-lg ">
                                                                                        <button className="flex items-center justify-center rounded-l-md  px-3 transition hover:bg-primary-orange hover:text-white">-</button>
                                                                                        <div className="flex w-full items-center justify-center bg-gray-100 px-3 text-xs uppercase transition">{product.quantity}</div>
                                                                                        <button className="flex items-center justify-center rounded-r-md  px-3 transition hover:bg-primary-green hover:text-white">+</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                                            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">${product.price}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                                                        <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                                                            <MdDelete size={27} />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="x-4 py-6 sm:px-6">
                                            <div className=' border-t border-b p-2'>
                                                <div className="flex justify-between ">
                                                    <SmallText intro={"Subtotal"} />
                                                    <SmallText intro={"$80.00"} />
                                                </div>
                                                <div className="flex justify-between ">
                                                    <SmallText intro={"Taxes"} />
                                                    <SmallText intro={"$9.00"} />
                                                </div>
                                                <div className="flex justify-between ">
                                                    <SmallText intro={"Delivery Fee"} />
                                                    <SmallText intro={"$40.00"} />
                                                </div>
                                            </div>

                                            <div className="flex justify-between text-bold x-4 py-6 sm:px-6 p-2  font-bold">
                                                <SmallText intro={"Total Fee"} />
                                                <SmallText intro={"$40.00"} />
                                            </div>
                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-primary-green px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-green-700"
                                                >
                                                    Order and Checkout
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
