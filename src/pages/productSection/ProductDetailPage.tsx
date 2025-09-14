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
      <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] group rounded-xl overflow-hidden">
        <div className="relative flex items-center justify-center h-full overflow-hidden">
          <img
            src={
              images[currentImage]
                ? `${imagUrl}/${images[currentImage]}`
                : "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80"
            }
            alt={productName}
            className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-105"
          />
          
         
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-3 top-1/2 cursor-pointer -translate-y-1/2 bg-black/50 hover:bg-[#E7000B] p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-3 top-1/2 cursor-pointer -translate-y-1/2 bg-black/50 hover:bg-[#E7000B] p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </button>
          </>
        )}

       
        {images.length > 1 && (
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm backdrop-blur-sm">
            {currentImage + 1} / {images.length}
          </div>
        )}

      
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col items-end space-y-2">
          <button
            onClick={() => setOpen(!open)}
            className="bg-black/70 hover:bg-[#E7000B] cursor-pointer p-2 sm:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
          >
            <Share2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </button>

          {open && (
            <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 space-y-3 z-50 animate-fade-in w-64 sm:w-72">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Share this product</h3>
                <button 
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`https://facebook.com/sharer/sharer.php?u=${currentUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 rounded-lg bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors text-sm"
                >
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>Facebook</span>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${productName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 rounded-lg bg-gray-100 hover:bg-sky-50 text-gray-700 hover:text-sky-600 transition-colors text-sm"
                >
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>Twitter</span>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${productName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 rounded-lg bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors text-sm"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`https://wa.me/?text=${productName} - ${currentUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 rounded-lg bg-gray-100 hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors text-sm"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>WhatsApp</span>
                </a>
              </div>
              
              <div className="pt-2 border-t">
                <div className="flex items-center">
                  <input
                    type="text"
                    readOnly
                    value={currentUrl}
                    className="flex-1 bg-gray-100 rounded-l-lg py-2 px-2 sm:px-3 text-xs sm:text-sm truncate"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="bg-gradient-to-r from-[#E7000B] to-[#FF4B4B] hover:from-[#FF4B4B] hover:to-[#E7000B] text-white py-2 px-2 sm:px-3 rounded-r-lg transition-all duration-300 flex items-center text-xs sm:text-sm"
                  >
                    {copied ? 'Copied!' : <Link className="h-3 w-3 sm:h-4 sm:w-4" />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto p-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
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
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
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
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm sm:text-base">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!response?.success || !response?.data) {
    return (
      <div className="text-center py-20 px-4">
        <Package className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-600 mb-2">Product Not Found</h2>
        <p className="text-gray-500 text-sm sm:text-base">The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  const product = response.data;
  
  const getPlainDescription = (htmlString) => {
    return htmlString?.replace(/<[^>]*>/g, '') || "No description available";
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 overflow-x-auto">
            <span className="whitespace-nowrap">Products</span>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" color='#E7000B'/>
            <span className="capitalize whitespace-nowrap">{product.category}</span>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" color='#E7000B' />
            <span className="text-gray-800 font-medium truncate">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            
            <div>
              <ImageGallery images={product.images || []} productName={product.name} />
            </div>

         
            <div className="space-y-4 sm:space-y-6">
              
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-[#E7000B] text-white text-xs px-2 py-1 rounded-full capitalize">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 leading-tight">{product.name}</h1>
              </div>

    
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Product Description</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {getPlainDescription(product.description)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            {product.subProducts && product.subProducts.length > 0 && (
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Available Products</h3>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                  {product.subProducts.map((subProduct) => (
                    <div key={subProduct._id} className="border-[#E7000B] border shadow-md scale-105 rounded-lg p-3 hover:shadow-md transition-shadow">
                      <img
                        src={`${imagUrl}/${subProduct.image}`}
                        alt={subProduct.name}
                        className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-contain rounded mb-2"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=200&q=80";
                        }}
                      />
                      <p className="text-xs sm:text-sm font-medium text-gray-800 truncate" title={subProduct.name}>
                        {subProduct.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

           
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Why Choose Us for Export</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Quality Assured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Global Shipping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-full flex-shrink-0">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Timely Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Secure Packaging</span>
                </div>
              </div>
            </div>

           
            <div className="space-y-4 sticky bottom-0 bg-gray-50 py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:static lg:bg-transparent lg:py-0 lg:mx-0 lg:px-0">
              <button
                onClick={() => setContactPopup(true)}
                className="w-full bg-[#E7000B] hover:bg-[#E7000B] cursor-pointer text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Get Export Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <ContactPopup
        isOpen={contactPopup}
        onClose={() => setContactPopup(false)}
        productName={product.name}
      />
    </>
  );
};

export default ProductDetailPage;