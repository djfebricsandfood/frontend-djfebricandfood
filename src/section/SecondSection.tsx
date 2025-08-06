import React from "react";
import { CheckCircle, Zap } from "lucide-react";
import Image from "../assets/Import_Export_Image.jpg";

const SecondSection = () => {
  return (
    <div className="relative z-20 -mt-20">
      <div className="max-w-7xl mx-auto bg-white shadow-top-2xl p-8 md:p-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* About Us Badge */}
            <div className="inline-flex items-center">
              <div className="w-1 h-6 bg-red-500 mr-3"></div>
              <span className="text-red-500 text-sm font-medium uppercase tracking-wider">
                About us
              </span>
            </div>
            
            {/* Main Heading */}
            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              About <span className="text-gray-900">DJ Fabrics &<br />Food</span>
            </h2>
            
            {/* Description */}
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              With decades of experience in international trade, DJ Fabrics & Food 
              stands as a trusted partner in global commerce. We specialize in 
              exporting premium quality fabrics and authentic Indian food products 
              to markets worldwide.
            </p>
            
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Our commitment to quality, timely delivery, and customer satisfaction 
              has earned us partnerships across continents. We bridge traditional 
              craftsmanship with modern business practices.
            </p>
          </div>

          {/* Features Section */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Feature 1 - Always Genuine */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-red-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Always Genuine</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We guarantee you will always receive genuine fabrics material quality.
                </p>
              </div>

              {/* Feature 2 - Rapid Production */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-red-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Rapid Production</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Specialized and annual production capacity of 1.95 million meters.
                </p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 lg:flex-shrink-0">
          <div className="relative">
            {/* Main building image placeholder */}
            <div className="w-full h-72 lg:h-[98vh] bg-gradient-to-br from-red-100 to-red-200  overflow-hidden shadow-xl">
              {/* Building facade mockup */}
              <img src={Image} alt="" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-300 rounded-full opacity-60"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SecondSection;