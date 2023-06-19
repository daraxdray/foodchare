import React from 'react';
import { GiHamburgerMenu, GiPotato, } from 'react-icons/gi';
import { FaCarrot, FaCoffee, FaDrumstickBite, FaHamburger, FaPizzaSlice, FaMapMarkedAlt, FaAward, FaTag } from 'react-icons/fa';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Space, Tag, Divider } from 'antd';
import { IconType } from 'react-icons';
const { Header, Content, Sider } = Layout;
import { Switch } from 'antd';
import { BorderAllRounded } from '@mui/icons-material';
import DivideY from '../Divider/DivideY';



type MenuItem = Required<MenuProps>['items'][number];

type NavigationProp = {
    key: React.Key,
    icon?: IconType,
    label: string | React.ReactNode,
    children?: NavigationProp[],
    type?: string

}


const SideNavigation = () => {


    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: IconType,
        children?: NavigationProp[],
        type?: 'group',
    ): NavigationProp {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const categories: Array<NavigationProp> = [
        {
            key: 'ff',
            icon: GiPotato,
            label: 'Fast Food',
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = 'ff' + j;
                return {
                    key: subKey,
                    label: `option${subKey}`,

                    type: '',
                } as NavigationProp;
            }),
        },
        {
            key: 'bb',
            icon: FaDrumstickBite,
            label: 'Breakfast',
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = 'bb1' + j
                return {
                    key: subKey,
                    label: `option${subKey}`,
                    type: '',
                } as NavigationProp;
            }),
        },
        {
            key: 'cf',
            icon: FaCoffee,
            label: 'Coffee',
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = 'cc' + j
                return {
                    key: subKey,
                    label: `option${subKey}`,
                    type: '',
                } as NavigationProp;
            }),
        },

        {
            key: 'mt',
            icon: FaDrumstickBite,
            label: 'Meat',
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = 'mt' + j
                return {
                    key: subKey,
                    label: `option${subKey}`,
                    type: '',
                } as NavigationProp;
            }),
        },

        {
            key: 'ds',
            icon: FaPizzaSlice,
            label: 'Deserts',
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = 'cc' + j
                return {
                    key: subKey,
                    label: `option${subKey}`,
                    type: '',
                } as NavigationProp;
            }),
        },

        {
            key: 'bg',
            icon: FaHamburger,
            label: 'Burger',
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = 'cc' + j
                return {
                    key: subKey,
                    label: `option${subKey}`,
                    type: '',
                } as NavigationProp;
            }),
        },








    ]




    const sorts: Array<NavigationProp> = [
        getItem(<h3 className="text-lg font-bold uppercase font-bold">Sort</h3>, 'sort', undefined, [
            getItem(<div className="flex items-center">
                <input type="radio" name="sort" id="picked-for-you" className="mr-2" />
                <label htmlFor="text-sm picked-for-you">Picked for you</label>
            </div>, 'g1', undefined,),
            getItem(<div className=" flex items-center">
                <input type="radio" name="sort" id="most-popular" className="mr-2" />
                <label htmlFor="most-popular">Most Popular</label>
            </div>, 'g2', undefined,),

            getItem(<div className="flex items-center">
                <input type="radio" name="sort" id="picked-for-you" className="mr-2" />
                <label htmlFor="picked-for-you">Rating</label>
            </div>, 'g3', undefined,),
            getItem(<div className="flex items-center">
                <input type="radio" name="sort" id="picked-for-you" className="mr-2" />
                <label htmlFor="picked-for-you">Delivery time</label>
            </div>, 'g4', undefined,),


        ],)];


    const ujaliFood: Array<NavigationProp> = [
        getItem(<h4 className="text-lg font-bold uppercase font-bold">From Ujali Food</h4>, 'sort', undefined, [
            getItem(<div className="flex justify-between items-center">
                <span className="flex mr-2 items-center">
                    <FaAward size={20} />
                    <p className="ml-1">Top Eats</p>
                </span>
                <Switch defaultChecked onChange={onChange} />
            </div>, 'u1', undefined,),
            getItem(<div className=" flex  items-center justify-between">
                <span className="mr-2 flex items-center">
                    <FaTag size={20} />
                    <p className="ml-1">Deals</p>
                </span>
                <Switch onChange={onChange} />
            </div>, 'u2', undefined,),
        ],)];




    return (
        <>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            
            <aside id="logo-sidebar" className="md:sticky fixed z-40 top-20   w-64 text-gray-800 bg-red h-screen pt-0 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-transparent dark:border-none" aria-label="Sidebar">

                <div className="h-full px-3 pt-20 pb-4 overflow-y-auto bg-white ">
                    <div className="mb-10">
                        <ul>
                            <li className="mb-4 ">
                                <button className="pl-4 w-40 py-2 pr-4 bg-gray-200 rounded-2xl flex items-center">
                                    <FaMapMarkedAlt className='w-5 h-5 mr-1' />
                                    <span>Address</span>
                                </button>
                            </li>
                            <li className="mb-4 ">
                                <button className="mb-4 py-2 w-40 pl-4 bg-green-500 pr-4 rounded-2xl flex items-center text-white">
                                    <GiHamburgerMenu className='w-5 h-5 mr-1' />
                                    <span>Categories</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <ul className="space-y-2 font-medium">
                        {Array.isArray(categories) && categories.map((parent) => {

                            return (
                                parent?.children != null && Array.isArray(parent.children) ?
                                    <li key={parent.key}>
                                        <button type="button" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group  dark:hover:bg-primary-lightGreen" aria-controls={`dd-${parent.key}`} data-collapse-toggle={`dd-${parent.key}`}>
                                            {parent.icon ? <parent.icon /> : null}
                                            <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{parent.label}</span>
                                            <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                        <ul id={`dd-${parent.key}`} className="hidden py-2 space-y-2">
                                            {parent.children.map((child) => {
                                                return (
                                                    <li key={child.key}>
                                                        <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-primary-orange dark:hover:text-white ">{child.label}</a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                    :
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
                                            {parent.icon ? <parent.icon /> : null}
                                            <span className="flex-1 ml-3 whitespace-nowrap">{parent.label}</span>
                                        </a>
                                    </li>


                            )
                        })}
                    </ul>
                    <div className='mt-20 mb-20'>
                        <ul className="space-y-2 font-medium">
                            {Array.isArray(sorts) && sorts.map((parent) => {
                                return (
                                    parent?.children != null && Array.isArray(parent.children) ?
                                        <li key={parent.key}>
                                            <button type="button" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group  dark:hover:bg-primary-lightGreen" aria-controls={`ss-${parent.key}`} data-collapse-toggle={`ss-${parent.key}`}>
                                                {parent.icon ? <parent.icon /> : null}
                                                <span className="flex-1 ml-3 text-left whitespace-nowrap text-bold" sidebar-toggle-item>{parent.label}</span>
                                                <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </button>
                                            <ul id={`ss-${parent.key}`} className="py-2 space-y-2">
                                                {parent.children.map((child) => {
                                                    return (
                                                        <li key={child.key}>
                                                            <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-primary-light dark:hover:bg-primary-orange dark:hover:text-white  ">{child.label}</a>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                        :
                                        <li>
                                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
                                                {parent.icon ? <parent.icon /> : null}
                                                <span className="flex-1 ml-3 whitespace-nowrap">{parent.label}</span>
                                            </a>
                                        </li>


                                )
                            })}
                        </ul>
                    </div>
                    <div className='mb-20'>
                        <ul className="space-y-2 font-medium">
                            {Array.isArray(ujaliFood) && ujaliFood.map((parent) => {

                                return (
                                    parent?.children != null && Array.isArray(parent.children) ?
                                        <li key={parent.key}>
                                            <button type="button" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group  dark:hover:bg-lightGreen" aria-controls={`uu-${parent.key}`} data-collapse-toggle={`uu-${parent.key}`}>
                                                {parent.icon ? <parent.icon /> : null}
                                                <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{parent.label}</span>
                                                <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </button>
                                            <ul id={`uu-${parent.key}`} className=" py-2 space-y-2">
                                                {parent.children.map((child) => {
                                                    return (
                                                        <li key={child.key}>
                                                            <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 
                                                            dark:hover:bg-primary-orange dark:hover:text-white ">{child.label}</a>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                        :
                                        <li>
                                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
                                                {parent.icon ? <parent.icon /> : null}
                                                <span className="flex-1 ml-3 whitespace-nowrap">{parent.label}</span>
                                            </a>
                                        </li>


                                )
                            })}
                        </ul>
                    </div>
                </div>
            </aside>

        </>
    );
}

export default SideNavigation;
