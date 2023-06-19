import React,  { ReactNode }  from 'react';

interface CardGridContainerProps {
    children: ReactNode;
    grid?: number
  }

const CardGridContainer = ({ children, grid = 3}: CardGridContainerProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${grid} gap-4`}>
      {children}
    </div>
  );
};

export default CardGridContainer;
