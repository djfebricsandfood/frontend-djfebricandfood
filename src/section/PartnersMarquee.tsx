import React from "react";

const PartnersMarquee = () => {
  // Dummy partner data - easily replaceable with real data later
  const partners = [
    { id: 1, name: "HOTSALE", color: "text-gray-600" },
    { id: 2, name: "iSTYLE", color: "text-black font-bold" },
    { id: 3, name: "VELT", color: "text-green-600 font-bold", bgColor: "bg-green-100" },
    { id: 4, name: "SENSALTA", color: "text-blue-600" },
    { id: 5, name: "KARCHER", color: "text-yellow-600 font-bold" },
    { id: 6, name: "Wendy's", color: "text-red-600 font-bold" },
    { id: 7, name: "GLOBAL TRADE", color: "text-purple-600" },
    { id: 8, name: "EXPORT HUB", color: "text-indigo-600 font-bold" },
    { id: 9, name: "QUALITY FIRST", color: "text-orange-600" },
    { id: 10, name: "RELIABLE IMPORTS", color: "text-teal-600" }
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by leading companies worldwide
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling Content */}
          <div className="flex animate-marquee space-x-16 items-center">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className={`flex-shrink-0 px-8 py-6 rounded-xl transition-all duration-300 hover:scale-110 cursor-pointer ${
                  partner.bgColor || 'bg-white hover:bg-gray-100'
                } shadow-md hover:shadow-lg`}
                style={{ minWidth: '200px' }}
              >
                <div className="text-center">
                  <h3 className={`text-xl font-semibold ${partner.color} whitespace-nowrap`}>
                    {partner.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Join our network of 500+ trusted partners across 50+ countries
          </p>
        </div>
      </div>

      {/* Custom CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PartnersMarquee;