import React, { useState } from "react";
import { MessageSquare, Menu, X } from "lucide-react"; 
import logo from '../../assets/logo3.png';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "SERVICES", path: "/service" },
    { name: "PRODUCTS", path: "/product" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  return (
    <div className="bg-white shadow-md py-4 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto" />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-red-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 font-semibold text-sm font-[400]">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 border-b-2 border-red-500 pb-1"
                  : "text-gray-700 hover:text-red-500"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: Contact Info (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
          <div>
            <p className="text-sm font-bold">+0 123 888 555</p>
            <p className="text-xs text-gray-600">Have any Questions?</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 animate-fadeIn">
          <nav className="flex flex-col font-semibold text-sm font-[400]">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 bg-gray-50 px-6 py-3 border-b"
                    : "hover:text-red-500 hover:bg-gray-50 px-6 py-3 border-b"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          
          {/* Mobile Contact Info */}
          <div className="flex items-center space-x-3 px-6 py-4 bg-gray-50">
            <MessageSquare className="w-5 h-5 text-red-500" />
            <div>
              <p className="text-sm font-bold">+0 123 888 555</p>
              <p className="text-xs text-gray-600">Have any Questions?</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
