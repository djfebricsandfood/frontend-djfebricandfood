import React from "react";
import { Package, ShieldCheck, Leaf } from "lucide-react";

const HowWeWork = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center mb-3">
            <div className="w-1 h-6 bg-red-600 mr-3"></div>
            <span className="text-sm text-gray-600 uppercase font-medium tracking-wider">
              Our Goodness
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How We Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Images */}
          <div className="flex flex-col space-y-6">
            <img
              src="https://images.unsplash.com/photo-1600488999208-2b0b13c6a21b?auto=format&fit=crop&w=800&q=80"
              alt="Warehouse Worker"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1595433562696-19b7b7d79a9d?auto=format&fit=crop&w=800&q=80"
              alt="Storage Facility"
              className="rounded-lg shadow-lg w-3/4 mx-auto"
            />
          </div>

          {/* Right: Features */}
          <div className="space-y-8">
            {/* Warehousing */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-red-100 text-red-600 p-3 rounded-lg shadow">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Warehousing Services
                </h3>
                <p className="text-gray-600 mt-2">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking.
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-red-100 text-red-600 p-3 rounded-lg shadow">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Safety & Quality
                </h3>
                <p className="text-gray-600 mt-2">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking.
                </p>
              </div>
            </div>

            {/* Care for Environment */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-red-100 text-red-600 p-3 rounded-lg shadow">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Care for Environment
                </h3>
                <p className="text-gray-600 mt-2">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
