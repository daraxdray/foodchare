import React, { ReactNode } from 'react';
import Navbar from '../partials/header/NavBar';
import SideNavigation from '../SideNav/SideNav';
import MainContainer from './MainContainer';
import Footer from '../partials/footer/Footer';

interface CardGridContainerProps {
    children: ReactNode;
}

const ShopLayout = ({ children }: CardGridContainerProps) => {
    return (
        <>
            <Navbar />

            <div className='w-full px-4 mx-auto max-w-8xl mt-4'>
                <div className='lg:flex'>
                    <SideNavigation />
                    <MainContainer children={children} />
                </div>
            </div>
            <Footer />

        </>
    );
};

export default ShopLayout;

