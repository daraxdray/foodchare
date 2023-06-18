import React,  { ReactNode }  from 'react';

interface CardGridContainerProps {
    children: ReactNode;
  }

const CardGridContainer = ({ children }: CardGridContainerProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );
};

export default CardGridContainer;
