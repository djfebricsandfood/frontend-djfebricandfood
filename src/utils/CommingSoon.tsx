import React from 'react';
import logo from '../assets/DJ_Febric_Food_logo.png'

const ComingSoon = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>
      
      {/* Sophisticated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40 delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse opacity-50 delay-500"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
        {/* Enhanced DJ Logo */}
        <div className="mb-14 mt-3 flex justify-center">
          <div className="relative group">
           
            <div className="relative w-40 h-40 bg-gradient-to-br  rounded-3xl flex items-center justify-center shadow-2xl border border-orange-400/20 group-hover:scale-105 transition-all duration-500">
              <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
              <img src={logo} alt="" />
            </div>
          </div>
        </div>

        {/* Coming Soon Text with Animation */}
        <div className="mb-12">
          <h1 className="text-7xl md:text-9xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent leading-tight">
            Coming Soon
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Company Name with Elegance */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-wide">
          DJ  Fabrics & Food
        </h2>

        {/* Premium Tagline */}
        <p className="text-2xl md:text-3xl text-orange-300 font-light mb-12 tracking-wide">
          Global Reach, Local Excellence
        </p>

        {/* Enhanced Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8 font-light">
            Connecting continents with premium fabrics and authentic Indian culinary experiences that define quality.
          </p>
          <p className="text-lg md:text-xl text-blue-200 leading-relaxed font-light">
            Your trusted partner in international trade, bringing decades of expertise and unwavering commitment to excellence.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quality Assured</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Premium products with international standards</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Trusted Partner</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Decades of experience in global markets</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Global Network</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Seamless international connections</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-slate-400 text-lg mb-6">Something extraordinary is coming your way</p>
          <div className="inline-flex items-center space-x-2 text-orange-300">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-lg font-medium">Stay tuned for our grand launch</span>
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;