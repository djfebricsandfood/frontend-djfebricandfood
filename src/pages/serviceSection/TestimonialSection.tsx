
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Verma",
    company: "Global Textiles Pvt. Ltd.",
    text: "Working with DJ Fabrics and Food has been seamless. Their fabrics meet international quality standards, and the timely delivery helped us fulfill large export orders without delays. Truly a reliable partner in the global market.",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    bg: "bg-white",
    textColor: "text-gray-800",
  },
  {
    name: "Sophia Rodriguez",
    company: "Mediterranean Food Imports",
    text: "We have been sourcing food products from DJ Fabrics and Food for the past two years. Their quality, packaging, and professional handling of international shipments make them stand out. A trustworthy partner for consistent supplies.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    bg: "bg-gray-900",
    textColor: "text-white",
  },
  {
    name: "James Anderson",
    company: "UK Apparel Traders",
    text: "DJ Fabrics and Food has been instrumental in expanding our product range. Their premium fabrics are appreciated by our customers, and the smooth import process makes collaboration effortless.",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    rating: 4,
    bg: "bg-white",
    textColor: "text-gray-800",
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
