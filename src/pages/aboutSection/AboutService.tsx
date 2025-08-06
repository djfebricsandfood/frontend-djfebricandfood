import React from "react";
import { Ship, Warehouse, Plane, Building, Truck, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: <Ship className="w-10 h-10 text-red-600" />,
    title: "Sea Transport Services",
    desc: "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    icon: <Warehouse className="w-10 h-10 text-red-600" />,
    title: "Warehousing Services",
    desc: "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    icon: <Plane className="w-10 h-10 text-red-600" />,
    title: "Air Freight Services",
    desc: "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    icon: <Building className="w-10 h-10 text-red-600" />,
    title: "Project & Exhibition",
    desc: "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    icon: <Truck className="w-10 h-10 text-red-600" />,
    title: "Local Shipping Services",
    desc: "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-red-600" />,
    title: "Customer Clearance",
    desc: "Following the quality of our service thus having gained trust of our many clients.",
  },
];

const AboutService = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <div className="inline-flex items-center mb-6">
          <div className="w-1 h-6 bg-red-600 mr-3"></div>
          <span className="text-red-600 text-sm font-medium uppercase tracking-wider">
            What We Do
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Logistics Services
        </h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start space-y-4">
              {service.icon}
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md shadow-md font-medium transition">
            More Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutService;
