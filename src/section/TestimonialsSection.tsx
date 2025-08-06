import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Kathleen Smith",
      company: "Textile Solutions Ltd",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "DJ Fabrics has been our trusted partner for premium fabric imports. Their quality control is exceptional, and delivery times are always met. The team understands our requirements perfectly and provides excellent customer service throughout the entire process."
    },
    {
      id: 2,
      name: "John Martin",
      company: "Global Trading Company", 
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Working with DJ Fabrics & Food has transformed our supply chain operations. Their expertise in international trade and commitment to quality has helped us expand our business globally. Highly recommended for reliable import solutions."
    },
    {
      id: 3,
      name: "Sarah Johnson",
      company: "Premium Foods Inc",
      image: "/api/placeholder/60/60", 
      rating: 5,
      text: "The authentic Indian food products we import through DJ Fabrics & Food are of outstanding quality. Their attention to detail in packaging and preservation ensures our customers receive the best products every time."
    },
    {
      id: 4,
      name: "Michael Chen",
      company: "Asian Imports Co",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Professional service, competitive pricing, and reliable delivery schedules. DJ Fabrics & Food has consistently exceeded our expectations. Their global tracking system gives us complete visibility of our shipments."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-red-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const currentTestimonials = testimonials.slice(currentSlide * 2, currentSlide * 2 + 2);

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="inline-flex items-center mb-4">
              <div className="w-1 h-6 bg-red-500 mr-3"></div>
              <span className="text-red-500 text-sm font-medium uppercase tracking-wider">
                Testimonial
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              What Our Customer Say
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex space-x-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                index === 0 ? 'bg-gray-50' : 'bg-gray-800 text-white'
              }`}
            >
              {/* Quote Icon */}
              <div className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center ${
                index === 0 ? 'bg-red-100' : 'bg-red-600'
              }`}>
                <Quote className={`w-6 h-6 ${
                  index === 0 ? 'text-red-600' : 'text-white'
                }`} />
              </div>

              {/* Customer Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className={`font-bold text-lg ${
                    index === 0 ? 'text-gray-900' : 'text-white'
                  }`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${
                    index === 0 ? 'text-gray-600' : 'text-gray-300'
                  }`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className={`text-lg leading-relaxed mb-6 ${
                index === 0 ? 'text-gray-700' : 'text-gray-200'
              }`}>
                "{testimonial.text}"
              </p>

              {/* Star Rating */}
              <div className="flex space-x-1">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center space-x-3 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(Math.ceil(testimonials.length / 2))].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-red-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;