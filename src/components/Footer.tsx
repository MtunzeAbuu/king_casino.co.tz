import React from 'react';
import { Crown, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/White.png" 
                alt="King Casino Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  KING CASINO
                </h3>
                <p className="text-sm text-gray-400">Premium Gaming Experience</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Experience the ultimate in luxury gaming at Dar es Salaam's premier casino destination. 
              Where every visit is treated with royal hospitality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Facebook className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Twitter className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Instagram className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#games" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Games</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Gallery</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Warioba Street, Palm Village<br />
                  Dar es Salaam, Tanzania
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+255 775 123 567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">jxbettinglimitted@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 King Casino. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Responsible Gaming</a>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-gray-500">
            Please gamble responsibly. Must be 18+ to enter. Open daily from 2:00 PM.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;