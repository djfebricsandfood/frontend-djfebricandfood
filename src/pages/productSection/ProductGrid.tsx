import React, { useState } from "react";
import { Star } from "lucide-react";

const categories = [
  "Apparel & Clothing",
  "Food Grains & Pulses",
  "Indian Spices & Masalas",
];

const products = [
  {
    id: 1,
    name: "Trendy Outfit",
    price: "$442.12",
    rating: 5,
    reviews: "56,767",
    img: "https://images.unsplash.com/photo-1520975922203-b52e9c1aeb9c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Casual Blackwear",
    price: "$442.12",
    rating: 4,
    reviews: "56,767",
    img: "https://images.unsplash.com/photo-1602810313321-b5de3ebd508c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Stylish Evening Dress",
    price: "$442.12",
    rating: 5,
    reviews: "56,767",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Fashion Shoot",
    price: "$442.12",
    rating: 5,
    reviews: "56,767",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Designer Top",
    price: "$442.12",
    rating: 5,
    reviews: "56,767",
    img: "https://images.unsplash.com/photo-1593032465171-9b68ef75b83f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Summer Fashion",
    price: "$442.12",
    rating: 4,
    reviews: "56,767",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80",
  },
];

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Categories */}
        <div className="flex space-x-4 mb-8 overflow-x-auto">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-md font-semibold whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < product.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs text-gray-500">
                    ({product.reviews})
                  </span>
                </div>
                {/* Product Name */}
                <h3 className="text-sm font-medium text-gray-800 truncate">
                  {product.name}
                </h3>
                {/* Price */}
                <p className="text-blue-600 font-semibold mt-1">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
