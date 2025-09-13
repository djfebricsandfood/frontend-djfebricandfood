import aepc from "../assets/aepc.png";
import apda from "../assets/apda.png";
import fda from "../assets/Fda.png";
import fssai from "../assets/fssai.png";
import gmp from "../assets/gmp.png";
import halal from "../assets/halal.png";
import kosher from "../assets/kosher.png";
import spice from "../assets/spice-bord.jpg";



const PartnersMarquee = () => {
  // Dummy partner data - easily replaceable with real data later
 const partners = [
  { id: 1, img: aepc },
  { id: 2, img: apda },
  { id: 3, img: fda },
  { id: 4, img: fssai },
  { id: 5, img: gmp },
  { id: 6, img: halal },
  { id: 7, img: kosher },
  { id: 8, img: spice },
];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-2xl font-bold text-gray-900 mb-4">
           Membership & Certification
          </h2>
          
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
                  partner?.bgColor || 'bg-white hover:bg-gray-100'
                } shadow-md hover:shadow-lg`}
                style={{ minWidth: '200px' }}
              >
                <div className="text-center">
                  <h3 className={`text-xl font-semibold ${partner?.color} whitespace-nowrap`}>
                    <img src={partner?.img} alt="" className="h-44" />
                    {/* {partner?.name} */}
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
          animation: marquee 20s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PartnersMarquee;