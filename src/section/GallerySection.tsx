import React from "react";

const GallerySection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-300 text-lg">
            Showcasing our products and operations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Warehouse Image */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.34.21 3.5 0 5.16-1 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Warehouse</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Spices Image */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 p-4">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${
                    ['bg-yellow-400', 'bg-red-500', 'bg-orange-500', 'bg-green-500', 'bg-purple-500', 'bg-blue-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'][i]
                  }`}></div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Factory/Production Image */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Production</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Textile/Fabric Display */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="space-y-2">
                  <div className="h-4 bg-white/30 rounded"></div>
                  <div className="h-4 bg-white/50 rounded"></div>
                  <div className="h-4 bg-white/40 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-white/60 rounded"></div>
                  <div className="h-4 bg-white/30 rounded"></div>
                  <div className="h-4 bg-white/50 rounded"></div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Quality Control */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Quality Check</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Showroom */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <div className="grid grid-cols-3 gap-1 mb-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-3 h-8 bg-white/30 rounded-sm"></div>
                  ))}
                </div>
                <span className="text-sm font-medium">Showroom</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Packaging */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
              <div className="flex space-x-2">
                <div className="w-6 h-10 bg-white/40 rounded"></div>
                <div className="w-6 h-10 bg-white/60 rounded"></div>
                <div className="w-6 h-10 bg-white/50 rounded"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Raw Materials */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 p-4">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`w-6 h-6 rounded-full ${
                    i % 3 === 0 ? 'bg-amber-300' : i % 3 === 1 ? 'bg-orange-400' : 'bg-yellow-300'
                  }`}></div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GallerySection;