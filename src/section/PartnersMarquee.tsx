import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import aepc from "../assets/aepc.png";
import apda from "../assets/apda.png";
import fda from "../assets/Fda.png";
import fssai from "../assets/fssai.png";
import gmp from "../assets/gmp.png";
import halal from "../assets/halal.png";
import kosher from "../assets/kosher.png";
import spice from "../assets/spice-bord.jpg";

const PartnersMarquee = () => {
  const [isClient, setIsClient] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Partner data with fallback
  const partners = useMemo(() => [
    { id: 1, img: aepc, name: "AEPC", alt: "Apparel Export Promotion Council" },
    { id: 2, img: apda, name: "APDA", alt: "Agricultural & Processed Food Products Export Development Authority" },
    { id: 3, img: fda, name: "FDA", alt: "Food and Drug Administration" },
    { id: 4, img: fssai, name: "FSSAI", alt: "Food Safety and Standards Authority of India" },
    { id: 5, img: gmp, name: "GMP", alt: "Good Manufacturing Practice" },
    { id: 6, img: halal, name: "HALAL", alt: "Halal Certification" },
    { id: 7, img: kosher, name: "KOSHER", alt: "Kosher Certification" },
    { id: 8, img: spice, name: "SPICE BOARD", alt: "Spices Board India" },
  ], []);

  // Create duplicated array for infinite scroll
  const duplicatedPartners = useMemo(() => {
    const duplicates = [];
    // Create 4 copies for seamless infinite scroll
    for (let i = 0; i < 4; i++) {
      partners.forEach((partner, index) => {
        duplicates.push({
          ...partner,
          uniqueId: `${partner.id}-${i}-${index}`
        });
      });
    }
    return duplicates;
  }, [partners]);

  // Set client-side rendering flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Error boundary fallback
  if (!isClient) {
    return (
      <div className="bg-gray-50 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
              Membership & Certification
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="animate-pulse text-gray-400">Loading certifications...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
            Membership & Certification
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Trusted certifications and memberships that validate our commitment to quality
          </p>
        </div>

        {/* Marquee Container */}
        <div 
          ref={containerRef}
          className="relative w-full h-32 sm:h-36 lg:h-40"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-12 sm:w-20 lg:w-32 h-full bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-12 sm:w-20 lg:w-32 h-full bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Content */}
          <div className="relative overflow-hidden h-full">
            <motion.div
              className="flex items-center h-full"
              style={{
                gap: '2rem',
                width: 'max-content'
              }}
              animate={{
                x: isPaused ? undefined : [0, `-${25}%`]
              }}
              transition={isPaused ? {} : {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {duplicatedPartners.map((partner) => (
                <motion.div
                  key={partner.uniqueId}
                  className="flex-shrink-0"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2, type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-5 lg:p-6 cursor-pointer border border-gray-100 hover:border-gray-200 group w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
                    <div className="flex flex-col items-center justify-center text-center h-full">
                      <div className="w-full h-full flex items-center justify-center mb-1">
                        <img 
                          src={partner.img} 
                          alt={partner.alt || partner.name}
                          className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target;
                            target.style.display = 'none';
                            const fallback = target.parentElement.querySelector('.fallback');
                            if (fallback) {
                              fallback.style.display = 'flex';
                            }
                          }}
                        />
                        {/* Fallback for broken images */}
                        <div className="fallback hidden w-full h-full bg-gray-100 rounded items-center justify-center text-gray-400 text-xs text-center p-1">
                          {partner.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#E7000B] mb-1">8+</div>
              <div className="text-xs sm:text-sm text-gray-600">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#E7000B] mb-1">100%</div>
              <div className="text-xs sm:text-sm text-gray-600">Quality Assured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#E7000B] mb-1">50+</div>
              <div className="text-xs sm:text-sm text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#E7000B] mb-1">ISO</div>
              <div className="text-xs sm:text-sm text-gray-600">Certified</div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
            These certifications ensure our products meet international quality standards and regulatory requirements across global markets.
          </p>
        </div>
      </div>
    </div>
  );
};

// Error Boundary Component
class PartnersMarqueeErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('PartnersMarquee Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-gray-50 py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Membership & Certification
              </h2>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-gray-600 mb-4">
                  We maintain the highest quality standards through various certifications and memberships.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {['AEPC', 'APDA', 'FDA', 'FSSAI', 'GMP', 'HALAL', 'KOSHER', 'SPICE BOARD'].map((cert, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-sm font-medium text-gray-700">{cert}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Wrapped component with error boundary
const PartnersMarqueeWithErrorBoundary = () => (
  <PartnersMarqueeErrorBoundary>
    <PartnersMarquee />
  </PartnersMarqueeErrorBoundary>
);

export default PartnersMarqueeWithErrorBoundary;