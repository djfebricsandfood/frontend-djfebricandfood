
import { Package, ShieldCheck, Leaf } from "lucide-react";
import foodQulity from '../../assets/mnf.mp4'

const HowWeWork = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center mb-3">
            <div className="w-1 h-6 bg-red-600 mr-3"></div>
            <span className="text-sm text-gray-600 uppercase font-medium tracking-wider">
              How We Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our approach combines efficiency, safety, and sustainability to ensure seamless logistics and trade solutions. We focus on delivering value, maintaining high standards, and fostering long-term partnerships.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Images */}
          <div className="relative w-full h-[70vh] bg-gradient-to-b from-orange-200 to-orange-300 flex items-center justify-center">
                  <video
                    className="h-full w-full object-cover"
                    src={foodQulity}
                    autoPlay
                    loop
                    muted
                    playsInline
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
                  We provide modern, secure, and organized warehousing solutions to ensure safe storage and efficient management of goods, optimized for both local and international trade.
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
                  We adhere to stringent safety protocols and quality standards, guaranteeing that every shipment is handled with care and delivered in perfect condition.
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
                  Our operations prioritize eco-friendly practices, minimizing environmental impact through sustainable logistics, energy-efficient facilities, and responsible transportation methods.
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
