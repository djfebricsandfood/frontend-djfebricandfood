import React, { useState } from "react";
import { Star, ShoppingCart, X, Phone, Mail, MapPin, Send, Eye } from "lucide-react";
import { useGetProduct } from "./http/useGetProduct";
import { imagUrl } from "../../utils/tokenHelper";
import { useNavigate } from "react-router-dom";
import ContactPopup from "./ContactPopup";

const categories = [
  "Apparel & Clothing",
  "Food Grains & Pulses",
  "Indian Spices & Masalas",
];

// Contact popup component


const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [contactPopup, setContactPopup] = useState({
    isOpen: false,
    productName: ""
  });

  const categoryMap = {
    "Food Grains & Pulses": "fruits-vegetables",
    "Indian Spices & Masalas": "snacks",
    "Apparel & Clothing": "fabrics"
  };

  const apiCategory = categoryMap[activeCategory] || "fruits-vegetables";
  const { data, isLoading } = useGetProduct(apiCategory);


   const navigate = useNavigate();

  

  const openContactPopup = (productName) => {
    setContactPopup({
      isOpen: true,
      productName: productName
    });
  };

  const closeContactPopup = () => {
    setContactPopup({
      isOpen: false,
      productName: ""
    });
  };



  const handleDetailsPage = (id) => {
    navigate(`/product/${id}`); // 👈 set id in URL
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Loading products...</p>
        </div>
      </div>
    );
  }

  const products = data || [];

  return (
    <>
      <section className="bg-gray-50 py-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h1>
            <p className="text-gray-600">Discover our wide range of quality products</p>
          </div>

          <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-red-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {products.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.images && product.images.length > 0 
                        ? `${imagUrl}/${product.images[0]}` 
                        : "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=500&q=80"
                      }
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.subProducts && product.subProducts.length > 0 && (
                      <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                        {product.subProducts.length} variants
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {product.description?.replace(/\n/g, ' ').trim() || "No description available"}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                      <div onClick={() => handleDetailsPage(product._id)} className="flex items-center cursor-pointer">
                        <Eye/>
                      </div>
                    </div>

                    <button
                      onClick={() => openContactPopup(product.name)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold cursor-pointer py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group"
                    >
                      <ShoppingCart className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      <span>Request Quote</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactPopup
        isOpen={contactPopup.isOpen}
        onClose={closeContactPopup}
        productName={contactPopup.productName}
      />
    </>
  );
};

export default ProductGrid;