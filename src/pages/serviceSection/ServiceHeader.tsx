import React from "react";

const ServiceHeader = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[450px]">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
        alt="Service Port"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16">
        <div className="inline-block bg-red-600 px-3 py-1 mb-4">
          <span className="text-white text-sm font-medium uppercase tracking-wider">
            Our Services
          </span>
        </div>
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug max-w-2xl">
          Our Import & <br /> Export Service
        </h1>
      </div>
    </div>
  );
};

export default ServiceHeader;
