import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

import logo from "../assets/DjFebricsAndFood2.png";
import { useNavigate } from "react-router-dom";
import Terms from '../assets/Terms-of-use.pdf';
import privacy from '../assets/Privacy-policy.pdf';



const Footer = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (name) => {
    navigate(`/${name}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo and Description */}
          <div className="lg:col-span-1 flex flex-col items-center text-center">
            {/* Logo */}
            <div className="w-24 h-24 rounded-full overflow-hidden bg-white p-2 shadow-lg">
              <img src={logo} className="w-full h-full object-contain" alt="DJ Fabrics & Foods Logo" />
            </div>
            <h3 className="text-white text-lg font-bold mt-3">DJ Fabrics & Foods</h3>

            {/* Motto */}
            <p className="text-gray-300 leading-relaxed mt-6 mb-4 text-center">
              Delivering Quality Fabrics & Foods <br />
              Building Global Connections
            </p>

            {/* Tagline */}
            <p className="text-gray-400 text-sm text-center leading-relaxed">
              Your trusted partner in global import and export solutions.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-red-500 pb-2 inline-block">
              Useful Links
            </h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleNavigate("")}
                  className="text-gray-300 hover:text-red-400 hover:translate-x-1 cursor-pointer transition-all duration-300 text-left"
                >
                  → Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("about")}
                  className="text-gray-300 hover:text-red-400 hover:translate-x-1 cursor-pointer transition-all duration-300 text-left"
                >
                  → About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("service")}
                  className="text-gray-300 hover:text-red-400 hover:translate-x-1 cursor-pointer transition-all duration-300 text-left"
                >
                  → Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("contact-us")}
                  className="text-gray-300 hover:text-red-400 hover:translate-x-1 cursor-pointer transition-all duration-300 text-left"
                >
                  → Contact Us
                </button>
              </li>
              <li>
                <button
                  disabled
                  onClick={() => handleNavigate("work-at-future-learn")}
                  className="text-gray-600  pointer-events-none transition-all duration-300 text-left"
                >
                  → Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-red-500 pb-2 inline-block">
              Our Products
            </h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleNavigate("product")}
                  className="text-gray-300 hover:text-red-400 cursor-pointer hover:translate-x-1 transition-all duration-300 text-left"
                >
                  → Indian Spices & Snacks
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("product")}
                  className="text-gray-300 hover:text-red-400 hover:translate-x-1 cursor-pointer transition-all duration-300 text-left"
                >
                  → Food Grains & Vegetables
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("product")}
                  className="text-gray-300 hover:text-red-400 hover:translate-x-1 cursor-pointer transition-all duration-300 text-left"
                >
                  → Apparel & Clothing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("product")}
                  className="text-gray-300 hover:text-red-400 hover:translate-x-1 cursor-pointer transition-all duration-300 text-left"
                >
                  → Premium Fabrics
                </button>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-red-500 pb-2 inline-block">
              Get In Touch
            </h3>

            {/* Contact Information */}
            <div className="space-y-5 mb-8">
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Email</p>
                  <a 
                    href="mailto:djfabricsfood@gmail.com" 
                    className="text-white hover:text-red-400 transition-colors duration-300 text-sm"
                  >
                    djfabricsfood@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Call Us</p>
                  <a 
                    href="tel:+917610645417" 
                    className="text-white hover:text-red-400 transition-colors duration-300 text-sm"
                  >
                    +91 7610645417
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Address</p>
                  <p className="text-white text-sm leading-relaxed">
                    Sector E, 6 Shivdham Colony <br />
                    Limbodi, Indore - 452001 <br />
                    Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61578175827286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/djfabricsandfood/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/devendra-jat-1b3365180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 DJ Fabrics and Foods. All rights reserved.
            </p>
<div className="flex space-x-6">
  <a
    href={Terms}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
  >
    Terms of Use
  </a>

  <a
    href={privacy}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
  >
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