
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
         We are a leading global import-export company, committed to providing seamless solutions in international trade and global logistics. By leveraging agile strategies and innovative frameworks, we ensure efficient supply chain management, reliable shipping, and maximized value for our partners worldwide.
        </p>
      

        {/* Features */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-red-600 w-6 h-6" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Global Trade Network
              </h4>
              <p className="text-gray-600 text-sm">
               We maintain trusted partnerships in over 25 countries, enabling smooth and efficient international trade operations for businesses of all sizes.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="text-red-600 w-6 h-6" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                ISO-Certified Quality Standards
              </h4>
              <p className="text-gray-600 text-sm">
             Our import-export processes follow ISO-certified protocols, ensuring high-quality assurance and compliance at every stage of the supply chain.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="text-red-600 w-6 h-6" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
               Reliable & Timely Delivery
              </h4>
              <p className="text-gray-600 text-sm">
              With a 99% on-time delivery record globally, we prioritize precision, reliability, and efficiency in shipping, helping your business stay competitive in international markets.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="text-red-600 w-6 h-6" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
               Comprehensive Logistics Solutions
              </h4>
              <p className="text-gray-600 text-sm">
               From freight management to customs clearance, we offer end-to-end logistics support, ensuring a hassle-free import-export experience.
              </p>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        {/* <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md shadow-md font-medium transition">
          Learn More
        </button> */}
      </div>
    </section>
  );
};

export default AboutCompanyOverView;
