import React, { useState } from 'react';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Phone, 
  Mail, 
  X, 
  Send,
  ChevronLeft,
  ChevronRight,
  Package,
  Globe,
  Clock,
  CheckCircle,
  Shield,
  Facebook, Twitter, Linkedin, MessageCircle, Link
} from 'lucide-react';
import { imagUrl } from '../../utils/tokenHelper';
import { useGetProductById } from './http/useGetProductById';
import { useParams } from 'react-router-dom';
import ContactPopup from './ContactPopup';









const ImageGallery = ({ images, productName }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentUrl = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="relative w-[90%] h-[50vh] group rounded-xl overflow-hidden">
        <div className="relative place-items-center overflow-hidden">
          <img
            src={
              images[currentImage]
                ? `${imagUrl}/${images[currentImage]}`
                : "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80"
            }
            alt={productName}
            className="w-[80%] h-[80%]  object-contain  transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 cursor-pointer  -translate-y-1/2 bg-black/50 hover:bg-[#E7000B] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 cursor-pointer -translate-y-1/2 bg-black/50 hover:bg-[#E7000B] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {currentImage + 1} / {images.length}
          </div>
        )}

        {/* Share button + popup */}
        <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
          <button
            onClick={() => setOpen(!open)}
            className="bg-black/70 hover:bg-[#E7000B] cursor-pointer p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
          >
            <Share2 className="h-5 w-5 text-white" />
          </button>

          {open && (
            <div className="bg-white rounded-xl shadow-xl p-4 space-y-3 z-50 animate-fade-in">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-semibold text-gray-800">Share this product</h3>
                <button 
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://facebook.com/sharer/sharer.php?u=${currentUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 rounded-lg bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  <span>Facebook</span>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${productName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 rounded-lg bg-gray-100 hover:bg-sky-50 text-gray-700 hover:text-sky-600 transition-colors"
                >
                  <Twitter className="h-5 w-5 mr-2" />
                  <span>Twitter</span>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${productName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 rounded-lg bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`https://wa.me/?text=${productName} - ${currentUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 rounded-lg bg-gray-100 hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span>WhatsApp</span>
                </a>
              </div>
              
              <div className="pt-2 border-t">
                <div className="flex items-center">
                  <input
                    type="text"
                    readOnly
                    value={currentUrl}
                    className="flex-1 bg-gray-100 rounded-l-lg py-2 px-3 text-sm truncate"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="bg-gradient-to-r from-[#E7000B] to-[#FF4B4B] hover:from-[#FF4B4B] hover:to-[#E7000B] text-white py-2 px-3 rounded-r-lg transition-all duration-300 flex items-center"
                  >
                    {copied ? 'Copied!' : <Link className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto p-2 ">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                currentImage === index 
                  ? "border-[#E7000B] shadow-md scale-105" 
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={`${imagUrl}/${image}`}
                alt={`${productName} ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const ProductDetailPage = ({ productId = "sample-id" }) => {
  
    const {id} = useParams();
   const { data: response, isLoading } = useGetProductById(id);

   console.log(response?.success)

  
  // Mock data - replace with your API response
 
  const [contactPopup, setContactPopup] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!response?.success || !response?.data) {
    return (
      <div className="text-center py-20">
        <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-600 mb-2">Product Not Found</h2>
        <p className="text-gray-500">The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  const product = response.data;
  
  const getPlainDescription = (htmlString) => {
    return htmlString?.replace(/<[^>]*>/g, '') || "No description available";
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <span>Products</span>
            <ChevronRight className="h-4 w-4 "  color='#E7000B'/>
            <span className="capitalize">{product.category}</span>
            <ChevronRight className="h-4 w-4"  color='#E7000B' />
            <span className="text-gray-800 font-medium">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div>
              <ImageGallery images={product.images || []} productName={product.name} />
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-6">
              {/* Product Title & Category */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-[#E7000B] text-white text-xs px-2 py-1 rounded-full capitalize">
                    {product.category}
                  </span>
                  
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                
                {/* Rating */}
                {/* <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(4.8/5 from 156 reviews)</span>
                </div> */}
              </div>

              {/* Description */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {getPlainDescription(product.description)}
                </p>
              </div>

              {/* Sub Products */}
              

              {/* Export Info */}
              {/* <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Export Information</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Minimum Order Quantity: Contact for details</li>
                  <li>• Export Markets: Worldwide shipping available</li>
                  <li>• Lead Time: 15-30 days depending on quantity</li>
                  <li>• Payment Terms: Flexible payment options</li>
                  <li>• Certifications: ISO certified quality standards</li>
                </ul>
              </div> */}
            </div>
          </div>

          {product.subProducts && product.subProducts.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Variants</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {product.subProducts.map((subProduct) => (
                      <div key={subProduct._id} className="border-[#E7000B] border shadow-md scale-105 rounded-lg p-3 hover:shadow-md transition-shadow">
                        <img
                          src={`${imagUrl}/${subProduct.image}`}
                          alt={subProduct.name}
                          className="w-full h-80 object-contain rounded mb-2 "
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=200&q=80";
                          }}
                        />
                        <p className="text-sm font-medium text-gray-800 truncate">{subProduct.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Export Features */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Choose Us for Export</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">Quality Assured</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Globe className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Global Shipping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Timely Delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Shield className="h-5 w-5 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Secure Packaging</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={() => setContactPopup(true)}
                  className="w-full bg-[#E7000B] hover:bg-[#E7000B] cursor-pointer text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Get Export Quote</span>
                </button>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Call Now</span>
                  </button>
                  <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </button>
                </div>
              </div>
        </div>
      </div>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={contactPopup}
        onClose={() => setContactPopup(false)}
        productName={product.name}
      />
    </>
  );
};

export default ProductDetailPage;