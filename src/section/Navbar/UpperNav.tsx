import React from "react";
import { Mail, MapPin, Facebook, Twitter, Youtube, Instagram, Search } from "lucide-react";

const UpperNav = () => {
  return (
    <div className="bg-[#222D35] text-white text-sm py-2 px-4 hidden md:block lg:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left Side */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-red-500" />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>Jos Mnheles Hutyio, 1430 Marasil</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <Facebook className="w-4 h-4 cursor-pointer hover:text-red-500" />
          <Twitter className="w-4 h-4 cursor-pointer hover:text-red-500" />
          <Youtube className="w-4 h-4 cursor-pointer hover:text-red-500" />
          <Instagram className="w-4 h-4 cursor-pointer hover:text-red-500" />
          <Search className="w-4 h-4 cursor-pointer hover:text-red-500" />
        </div>

      </div>
    </div>
  );
};

export default UpperNav;
