import React from 'react';
import portView from '../../assets/about.jpg';

const ProductHeader = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[400px]">
      {/* Background Image */}
      <img
        src={portView}
        alt="Port view"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16">
        <div className="inline-flex items-center mb-4">
          <div className="w-1 h-6 bg-red-500 mr-3"></div>
          <span className="text-red-500 text-sm md:text-base font-medium uppercase tracking-wider">
            Product
          </span>
        </div>
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Our Products
        </h1>
      </div>
    </div>
  );
};

export default ProductHeader;
