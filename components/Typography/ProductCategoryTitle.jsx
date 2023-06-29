
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import React from 'react';

const ProductCategoryTitle = ({
  title,
}) => {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div>
            <h4
              className={`font-bold text-1xl md:text-2xl mb-2 text-center md:mx-0 leading-normal md:items-center p-2
                  : "bg-none"
                }`}
            >{title}
            </h4>
          </div>
          <div className="flex justify-around">
            <div className='mx-4'>See all</div>
              <div className="flex justify-evenly">
              
              <div className="bg-gray-200 rounded-full mr-2 hover:bg-primary-green transition-colors h-8 p-2">
                <FaArrowLeft size={12} color="#6B7280" />
              </div>
              <div className="bg-gray-200 rounded-full hover:bg-primary-green  transition-colors h-8 p-2">
                <FaArrowRight  size={12} color="#6B7280"/>
              </div>
              
            </div>
          </div>
        </div>


      </div >
    </>
  );
};

export default ProductCategoryTitle;


{/* <div className="flex justify-between">
      <div>Child 1</div>
      <div>Child 2</div>
    </div> */}