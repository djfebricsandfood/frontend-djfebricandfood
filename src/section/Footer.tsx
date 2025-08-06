import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            {/* Logo Placeholder - You'll replace this with your actual logo */}
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
              <span className="text-gray-800 font-bold text-2xl">DJ</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              When an unknown printer took a galley of type and scrambled it to make a specimen book has.
            </p>
            
            <p className="text-gray-400 text-sm">
              Your trusted partner in global import and export solutions.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Work at Future Learn
                </a>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Indian Spices & Masalas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Food Grains & Pulses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Apparel & Clothing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Premium Fabrics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Textile Materials
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a href="mailto:contact@djfabrics.com" className="text-white hover:text-red-400 transition-colors duration-300">
                    contact@djfabrics.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Call Us</p>
                  <a href="tel:+911234567890" className="text-white hover:text-red-400 transition-colors duration-300">
                    +91 123 456 7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white">
                    123 Export Plaza, Trade District<br />
                    Mumbai, India 400001
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 DJ Fabrics and Food.com. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;