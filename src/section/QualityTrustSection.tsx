import React from "react";
import { Package, Truck, Globe, Clock, DollarSign, Headphones, Play } from "lucide-react";
import foodQulity from "../assets/Food_Quality.jpg"

const QualityTrustSection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image with Video */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-orange-100 to-orange-200">
                {/* Professional in hard hat looking at tablet */}
                <div className="relative w-full h-full bg-gradient-to-b from-orange-200 to-orange-300 flex items-center justify-center">
              
                      <img className="h-full w-full object-cover" src={foodQulity} alt="" />
                    
                    
                </div>
              </div>
            </div>

            {/* Video Play Button Overlay */}
            <div className="absolute bottom-8 left-8">
              <div className="bg-red-600 rounded-xl p-6 shadow-xl flex items-center space-x-4 cursor-pointer hover:bg-red-700 transition-colors duration-300 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-red-600 ml-1" />
                </div>
                <div className="text-white">
                  <p className="font-bold text-lg">The Majority Have</p>
                  <p className="font-bold text-lg">Suffered.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center mb-4">
                <div className="w-1 h-6 bg-red-500 mr-3"></div>
                <span className="text-red-500 text-sm font-medium uppercase tracking-wider">
                  Why Choose Us
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Our Best Quality Products<br />
                Will <span className="text-red-600">Build Your Trust</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Our commitment to quality, timely delivery, and customer satisfaction 
                has earned us partnerships across continents. We bridge traditional 
                craftsmanship with modern business practices.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* Safe Package */}
              <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-red-600" />
                </div>
                <span className="font-semibold text-gray-900">Safe Package</span>
              </div>

              {/* Ship Everywhere */}
              <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-red-600" />
                </div>
                <span className="font-semibold text-gray-900">Ship Everywhere</span>
              </div>

              {/* Global Tracking */}
              <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-red-600" />
                </div>
                <span className="font-semibold text-gray-900">Global Tracking</span>
              </div>

              {/* 24/7 Support */}
              <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-red-600" />
                </div>
                <span className="font-semibold text-gray-900">24/7 Support</span>
              </div>

              {/* In Time Delivery */}
              <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-red-600" />
                </div>
                <span className="font-semibold text-gray-900">In Time Delivery</span>
              </div>

              {/* Transparent Pricing */}
              <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-red-600" />
                </div>
                <span className="font-semibold text-gray-900">Transparent Pricing</span>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default QualityTrustSection;