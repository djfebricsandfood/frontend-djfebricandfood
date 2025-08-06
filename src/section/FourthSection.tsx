import React from "react";
import { ArrowUpRight } from "lucide-react";

const FourthSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-center">
      {/* Section Heading */}
      <span className="text-red-600 uppercase tracking-wide font-semibold text-sm">
        Our Products
      </span>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
        Take Look Into Our <span className="text-black">Best PRODUCTS</span>
      </h2>

      {/* Product Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden text-left hover:shadow-xl transition duration-300">
          <img
            src="https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Apparel & Clothing"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="font-semibold text-lg flex items-center justify-between">
              Apparel & Clothing
              <ArrowUpRight className="w-5 h-5 text-gray-500" />
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              High-quality fabrics and ready-made garments for international fashion markets
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden text-left hover:shadow-xl transition duration-300">
          <img
            src="https://plus.unsplash.com/premium_photo-1726750862897-4b75116bca34?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Food Grains & Pulses"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="font-semibold text-lg flex items-center justify-between">
              Food Grains & Pulses
              <ArrowUpRight className="w-5 h-5 text-gray-500" />
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Authentic Indian grains and pulses with superior nutritional value
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden text-left hover:shadow-xl transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1623569559000-c3031217d717?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Indian Spices & Masalas"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="font-semibold text-lg flex items-center justify-between">
              Indian Spices & Masalas
              <ArrowUpRight className="w-5 h-5 text-gray-500" />
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Premium quality spices that bring authentic Indian flavors worldwide
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-10 border border-gray-800 px-6 py-3 font-medium text-sm hover:bg-gray-800 hover:text-white transition duration-300">
        VIEW DETAILS PRODUCTS!
      </button>
    </div>
  );
};

export default FourthSection;
