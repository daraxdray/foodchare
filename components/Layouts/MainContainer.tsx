import React, { ReactNode } from 'react';

interface MainContainerProps {
    children: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
    return (
        <main className="flex-auto w-full min-w30 lg:static lg:max-h-full lg:overflow-visible">
        
            <div className="p-4  border-gray-200 rounded-lg mt-14">
                {children}
            </div>
        </main>
    );
};

export default MainContainer;
