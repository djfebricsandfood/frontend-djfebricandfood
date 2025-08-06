import React from "react";
import { Shield, Search, Award, Headphones, Package, Truck } from "lucide-react";

const ThirdSection = () => {
  
  return (
    <div className="bg-gray-50 py-20 z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Left Side - Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* What We Do Section */}
          <div className="lg:col-span-1">
            <div className="inline-flex items-center mb-6">
              <div className="w-1 h-6 bg-red-500 mr-3"></div>
              <span className="text-red-500 text-sm font-medium uppercase tracking-wider">
                What We Do
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Safe & Reliable<br />
              <span className="text-gray-900">Import Solutions</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Product Sourcing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                    <Search className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Product Sourcing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Following the quality of our service thus having gained trust of our many clients.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Control */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                    <Package className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Control</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Following the quality of our service thus having gained trust of our many clients.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Control (Second) */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                    <Award className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Control</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Following the quality of our service thus having gained trust of our many clients.
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Support */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                    <Headphones className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Support</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Following the quality of our service thus having gained trust of our many clients.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;