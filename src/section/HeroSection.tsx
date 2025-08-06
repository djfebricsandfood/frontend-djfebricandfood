import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock images for demo - replace with your actual imports
import herosection1 from "../assets/hersosection1.jpg";

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

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Memoized slide change handler
  const handleSlideChange = useCallback((newSlide) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(newSlide);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  // Auto slide with pause functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === heroData.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = useCallback(() => {
    handleSlideChange(currentSlide === heroData.length - 1 ? 0 : currentSlide + 1);
  }, [currentSlide, handleSlideChange]);

  const prevSlide = useCallback(() => {
    handleSlideChange(currentSlide === 0 ? heroData.length - 1 : currentSlide - 1);
  }, [currentSlide, handleSlideChange]);

  const goToSlide = useCallback((index) => {
    handleSlideChange(index);
  }, [handleSlideChange]);

  // Memoized current slide data
  const currentSlideData = useMemo(() => heroData[currentSlide], [currentSlide]);

  // Animation variants
  const slideVariants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };

  const contentVariants = {
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
  };

  const tagVariants = {
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
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-slate-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Enhanced Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
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
          />
          {/* Premium Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.gradient} z-20`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <motion.div
          key={currentSlide}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="text-white max-w-2xl"
        >
          {/* Premium Tag */}
          <motion.div
            variants={tagVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/60 mr-3" />
            <span className="text-xs lg:text-sm font-medium tracking-[0.2em] text-white/90 uppercase">
              {currentSlideData.tag}
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/60 ml-3" />
          </motion.div>

          {/* Enhanced Typography */}
          <motion.h1 
            className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {currentSlideData.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  {line}
                </span>
                {i < currentSlideData.title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.h1>

          {/* Premium Subtitle */}
          <motion.p 
            className="mt-6 max-w-xl text-lg lg:text-xl text-white/80 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {currentSlideData.subtitle}
          </motion.p>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 40px rgba(255,255,255,0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold tracking-wide overflow-hidden"
            >
              <span className="relative z-10 text-sm lg:text-base">
                {currentSlideData.buttonText}
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
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Navigation */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 group"
        aria-label="Previous slide"
      >
        <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300">
          <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 group"
        aria-label="Next slide"
      >
        <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300">
          <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>

      {/* Premium Progress Indicators */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
          {heroData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-500 ${
                index === currentSlide 
                  ? 'w-8 h-2' 
                  : 'w-2 h-2 hover:w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg shadow-white/25' 
                  : 'bg-white/40 hover:bg-white/60'
              }`} />
              {index === currentSlide && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white to-white/80 rounded-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div> */}

      {/* Trust Indicators */}
      <div className="absolute bottom-8 right-8 z-30 hidden lg:flex items-center space-x-4 text-white/60">
        
      </div>
    </div>
  );
};

export default HeroSection;