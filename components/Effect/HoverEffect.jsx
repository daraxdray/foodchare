import React, { useState } from 'react';

const HoverHighlight = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`inline-block relative bg-opacity-40${isHovered ? 'bg-green-500 ' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-colors duration-300 ${
          isHovered ? 'bg-green-500' : 'bg-transparent'
        }`}
      ></div>
    </div>
  );
};

export default HoverHighlight;