
import { Ship, Warehouse, Plane, Building, Truck, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: <Ship className="w-10 h-10 text-red-600" />,
    title: "Sea Transport Services",
    desc: "Reliable and cost-effective sea freight solutions, ensuring safe and timely delivery for international shipments.",
  },
  {
    icon: <Warehouse className="w-10 h-10 text-red-600" />,
    title: "Warehousing Services",
    desc: "Secure and efficient warehousing solutions designed to optimize storage, inventory management, and distribution for your goods.",
  },
  {
    icon: <Plane className="w-10 h-10 text-red-600" />,
    title: "Air Freight Services",
    desc: "Fast and dependable air freight services for time-sensitive shipments, ensuring global reach with precision.",
  },
  {
    icon: <Building className="w-10 h-10 text-red-600" />,
    title: "Project & Exhibition",
    desc: "End-to-end logistics support for large-scale projects and exhibitions, handling transportation, setup, and timely delivery.",
  },
  {
    icon: <Truck className="w-10 h-10 text-red-600" />,
    title: "Local Shipping Services",
    desc: "Efficient domestic transportation and last-mile delivery services to ensure your goods reach their destination safely.",
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-red-600" />,
    title: "Customer Clearance",
    desc: "Expert customs clearance support to simplify import-export procedures, ensuring compliance with local and international regulations.",
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
         We provide comprehensive logistics and trade solutions, ensuring seamless movement of goods across borders while maintaining the highest standards of quality and reliability.
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
        {/* <div className="mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md shadow-md font-medium transition">
            More Works
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default AboutService;
