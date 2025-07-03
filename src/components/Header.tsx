import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-2xl">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-700">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span>Warioba Street, Palm Village, Dar es Salaam</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-yellow-400" />
              <span>+255 775 123 567</span>
            </div>
          </div>
          <div className="text-yellow-400 font-semibold">
            Open Daily from 2:00 PM • Premium Gaming Experience
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img 
              src="/White.png" 
              alt="King Casino Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                KING CASINO
              </h1>
              <p className="text-xs text-gray-300">Premium Gaming Experience</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-yellow-400 transition-colors duration-300 font-medium">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors duration-300 font-medium">About</a>
            <a href="#games" className="hover:text-yellow-400 transition-colors duration-300 font-medium">Games</a>
            <a href="#gallery" className="hover:text-yellow-400 transition-colors duration-300 font-medium">Gallery</a>
            <a href="#services" className="hover:text-yellow-400 transition-colors duration-300 font-medium">Services</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300 font-medium">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-yellow-400 transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">About</a>
              <a href="#games" className="hover:text-yellow-400 transition-colors duration-300">Games</a>
              <a href="#gallery" className="hover:text-yellow-400 transition-colors duration-300">Gallery</a>
              <a href="#services" className="hover:text-yellow-400 transition-colors duration-300">Services</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;