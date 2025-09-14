import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock images for demo - replace with your actual imports
import herosection1 from "../assets/hersosection1.jpg";
import { useNavigate } from "react-router-dom";

const herosection2 = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const herosection3 = "https://images.unsplash.com/photo-1567306301408-9b74779a11af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

const heroData = [
  {
    image: herosection1,
    tag: "DJ Fabrics & Food",
    title: "Global Reach,\nLocal Excellence",
    subtitle: "Connecting continents with premium fabrics and authentic Indian culinary experiences that define quality.",
    buttonText: "Discover More",
    gradient: "from-slate-900/90 via-slate-800/80 to-transparent"
  },
  {
    image: herosection2,
    tag: "Premium Quality",
    title: "Exceptional\nCraftsmanship",
    subtitle: "Curated collections of world-class fabrics, meticulously sourced and quality-assured for discerning clients.",
    buttonText: "Shop Collection",
    gradient: "from-emerald-900/90 via-emerald-800/80 to-transparent"
  },
  {
    image: herosection3,
    tag: "Authentic Heritage",
    title: "Traditional\nFlavors Reimagined",
    subtitle: "Experience the depth of authentic Indian cuisine, where time-honored recipes meet contemporary presentation.",
    buttonText: "Explore Menu",
    gradient: "from-amber-900/90 via-amber-800/80 to-transparent"
  }
];

// Pre-calculate split titles for better performance
const processedHeroData = heroData.map(item => ({
  ...item,
  titleLines: item.title.split('\n')
}));

// Memoized animation variants to prevent recreation
const animationVariants = {
  slide: {
    enter: { opacity: 0, scale: 1.05 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  },
  content: {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },
  tag: {
    hidden: { opacity: 0, x: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },
  title: {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.4, duration: 0.8 }
    }
  },
  subtitle: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, duration: 0.8 }
    }
  },
  button: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.8, duration: 0.8 }
    }
  }
};

// Memoized button component for better performance
const CTAButton = React.memo(({ buttonText, onClick }) => (
  <motion.button
    whileHover={{
      scale: 1.02,
      boxShadow: "0 10px 40px rgba(255,255,255,0.1)"
    }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    onClick={onClick}
    className="group relative inline-flex cursor-pointer items-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold tracking-wide overflow-hidden"
  >
    <span className="relative z-10 text-sm lg:text-base">
      {buttonText}
    </span>
    <motion.div
      className="absolute inset-0 bg-white"
      initial={{ x: "-100%" }}
      whileHover={{ x: "0%" }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="relative z-10 ml-2 group-hover:text-black transition-colors duration-300"
      whileHover={{ x: 5 }}
    >
      →
    </motion.span>
  </motion.button>
));

CTAButton.displayName = 'CTAButton';

// Memoized navigation button component
const NavButton = React.memo(({ direction, onClick, ariaLabel }) => {
  const isLeft = direction === 'left';
  return (
    <button
      onClick={onClick}
      className={`absolute ${isLeft ? 'left-2 sm:left-4 md:left-6' : 'right-2 sm:right-4 md:right-6'} cursor-pointer top-1/2 transform -translate-y-1/2 z-30 group`}
      aria-label={ariaLabel}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg">
        <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${isLeft ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'} transition-transform duration-200`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isLeft ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
        </svg>
      </div>
    </button>
  );
});

NavButton.displayName = 'NavButton';

// Memoized slide indicators
const SlideIndicators = React.memo(({ heroData, currentSlide, onSlideSelect }) => (
  <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-2 sm:space-x-3">
    {heroData.map((_, index) => (
      <button
        key={index}
        onClick={() => onSlideSelect(index)}
        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
          index === currentSlide
            ? 'bg-white scale-125 shadow-lg'
            : 'bg-white/40 hover:bg-white/70'
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
));

SlideIndicators.displayName = 'SlideIndicators';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  const navigate = useNavigate();

  // Optimized slide change handler with debouncing
  const handleSlideChange = useCallback((newSlide) => {
    if (isTransitioning || newSlide === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(newSlide);
    
    // Clear existing timeout to prevent memory leaks
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [isTransitioning, currentSlide]);

  // Optimized auto slide with proper cleanup
  useEffect(() => {
    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % processedHeroData.length);
      }, 6000);
    };

    if (!isPaused) {
      startInterval();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Optimized navigation handlers
  const nextSlide = useCallback(() => {
    handleSlideChange((currentSlide + 1) % processedHeroData.length);
  }, [currentSlide, handleSlideChange]);

  const prevSlide = useCallback(() => {
    handleSlideChange(currentSlide === 0 ? processedHeroData.length - 1 : currentSlide - 1);
  }, [currentSlide, handleSlideChange]);

  const goToSlide = useCallback((index) => {
    handleSlideChange(index);
  }, [handleSlideChange]);

  // Memoized current slide data
  const currentSlideData = useMemo(() => processedHeroData[currentSlide], [currentSlide]);

  // Memoized navigation to product page
  const handleNavigateToProduct = useCallback(() => {
    navigate("/product/fabrics");
  }, [navigate]);

  // Memoized mouse handlers
  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-slate-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Images with Enhanced Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={animationVariants.slide}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/20 z-10" />
          <img
            src={currentSlideData.image}
            alt={`${currentSlideData.tag} showcase`}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          {/* Premium Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.gradient} z-20`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          key={currentSlide}
          variants={animationVariants.content}
          initial="hidden"
          animate="visible"
          className="text-white max-w-2xl"
        >
          {/* Premium Tag */}
          <motion.div
            variants={animationVariants.tag}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center"
          >
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-white/60 mr-2 sm:mr-3" />
            <span className="text-xs lg:text-sm font-medium tracking-[0.2em] text-white/90 uppercase">
              {currentSlideData.tag}
            </span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-white/60 ml-2 sm:ml-3" />
          </motion.div>

          {/* Enhanced Typography */}
          <motion.h1
            className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tight"
            variants={animationVariants.title}
            initial="hidden"
            animate="visible"
          >
            {currentSlideData.titleLines.map((line, i) => (
              <React.Fragment key={i}>
                <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  {line}
                </span>
                {i < currentSlideData.titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.h1>

          {/* Premium Subtitle */}
          <motion.p
            className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg lg:text-xl text-white/80 font-light leading-relaxed"
            variants={animationVariants.subtitle}
            initial="hidden"
            animate="visible"
          >
            {currentSlideData.subtitle}
          </motion.p>

          {/* Enhanced CTA Button */}
          <motion.div
            variants={animationVariants.button}
            initial="hidden"
            animate="visible"
            className="mt-6 sm:mt-8"
            onClick={handleNavigateToProduct}
          >
            <CTAButton 
              buttonText={currentSlideData.buttonText}
              onClick={handleNavigateToProduct}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Navigation Buttons - Mobile Optimized */}
      <NavButton 
        direction="left"
        onClick={prevSlide}
        ariaLabel="Previous slide"
      />
      
      <NavButton 
        direction="right"
        onClick={nextSlide}
        ariaLabel="Next slide"
      />

      {/* Slide Indicators - Mobile Friendly */}
      <SlideIndicators 
        heroData={processedHeroData}
        currentSlide={currentSlide}
        onSlideSelect={goToSlide}
      />

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
        <motion.div
          className="h-full bg-gradient-to-r from-white/60 to-white/80"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </div>
  );
};

export default HeroSection;