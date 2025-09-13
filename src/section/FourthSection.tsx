import { ArrowUpRight, Package, Leaf, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FourthSection = () => {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/product");
  };

  const products = [
    {
      id: 1,
      title: "Apparel & Clothing",
      description: "High-quality fabrics and ready-made garments for international fashion markets",
      image: "https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: Package,
      features: ["Premium Quality", "Global Standards"]
    },
    {
      id: 2,
      title: "Food Grains & Vegetables",
      description: "Authentic Indian grains and vegetables with superior nutritional value",
      image: "https://plus.unsplash.com/premium_photo-1726750862897-4b75116bca34?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: Leaf,
      features: ["Fresh & Natural", "Export Quality"]
    },
    {
      id: 3,
      title: "Indian Spices & Masalas",
      description: "Premium quality spices that bring authentic Indian flavors worldwide",
      image: "https://images.unsplash.com/photo-1623569559000-c3031217d717?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: Star,
      features: ["Authentic Taste", "Pure & Organic"]
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <div className="mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 uppercase tracking-wide font-semibold text-sm rounded-full">
            <Package className="w-4 h-4 mr-2" />
            Our Products
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Take Look Into Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              Best PRODUCTS
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium range of export-quality products that connect India to the world
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="group bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <IconComponent className="w-5 h-5 text-red-600 " />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <button
                      onClick={handleNavigate}
                      className="p-2 rounded-full bg-gray-100 cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-45"
                      aria-label={`View ${product.title} details`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Button */}
        <div className="relative">
          <button
            onClick={handleNavigate}
            className="group relative inline-flex cursor-pointer items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-sm uppercase tracking-wide rounded-lg overflow-hidden transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-xl hover:shadow-red-500/25 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center">
              View All Products
              <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
          
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-200 rounded-full animate-pulse" />
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-300 rounded-full animate-pulse delay-300" />
        </div>
      </div>
    </section>
  );
};

export default FourthSection;