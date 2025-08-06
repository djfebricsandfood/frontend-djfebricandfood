import React from "react";
import { CheckCircle } from "lucide-react";

import ShipImage from "../../assets/ShipImage.jpg";
import percelImage from "../../assets/ParcelImage.jpg";

const AboutCompanyOverView = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-10 items-center">
      {/* Left Images */}
      <div className="relative">
        <img
          src={ShipImage}
          alt="Shipping"
          className="rounded-lg shadow-lg w-full object-cover"
        />
        <img
          src={percelImage}
          alt="Delivery"
          className="absolute -bottom-8 -right-6 w-48 h-56 object-cover rounded-lg shadow-2xl border-4 border-white hidden sm:block"
        />
      </div>

      {/* Right Content */}
      <div>
        <div className="inline-flex items-center mb-4">
          <div className="w-1 h-6 bg-red-600 mr-3"></div>
          <span className="text-red-600 text-sm font-medium uppercase tracking-wider">
            About Us
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Company Overview
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value proposition.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa.
        </p>

        {/* Features */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-red-600 w-6 h-6" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Trusted Global Network
              </h4>
              <p className="text-gray-600 text-sm">
                Established partnerships across 25+ countries
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="text-red-600 w-6 h-6" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                High Quality Standards
              </h4>
              <p className="text-gray-600 text-sm">
                ISO certified processes and quality assurance
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="text-red-600 w-6 h-6" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Trusted Global Network
              </h4>
              <p className="text-gray-600 text-sm">
                Established partnerships across 25+ countries
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="text-red-600 w-6 h-6" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Timely Delivery
              </h4>
              <p className="text-gray-600 text-sm">
                99% on-time delivery record globally
              </p>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md shadow-md font-medium transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutCompanyOverView;
