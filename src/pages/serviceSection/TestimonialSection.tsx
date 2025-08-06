import React from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Kathleen Smith",
    company: "Fuel Company",
    text: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    bg: "bg-white",
    textColor: "text-gray-800",
  },
  {
    name: "John Martin",
    company: "Restoration Company",
    text: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    bg: "bg-gray-900",
    textColor: "text-white",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center mb-3">
            <div className="w-1 h-6 bg-red-600 mr-3"></div>
            <span className="text-sm text-gray-600 uppercase font-medium tracking-wider">
              Testimonial
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Customer Say
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`${t.bg} ${t.textColor} p-8 rounded-lg shadow-lg relative`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg">
                <Quote className="w-5 h-5" />
              </div>

              {/* User Info */}
              <div className="flex items-center mb-6 space-x-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  <p className="text-sm opacity-80">{t.company}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="mb-6 leading-relaxed">{t.text}</p>

              {/* Stars */}
              <div className="flex space-x-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-red-500 fill-red-500"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">24</h3>
            <p className="text-gray-600 mt-2">Our Location</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">1294</h3>
            <p className="text-gray-600 mt-2">Delivered Packages</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">3594</h3>
            <p className="text-gray-600 mt-2">Satisfied Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">247+</h3>
            <p className="text-gray-600 mt-2">Owned Vehicles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
