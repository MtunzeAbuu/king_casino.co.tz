import React from 'react';
import { Sparkles, Crown, Star, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/WhatsApp Image 2025-07-01 at 10.46.39_4d7c557a.jpg" 
          alt="King Casino Interior"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/70 to-red-900/80"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-pulse">
          <Sparkles className="w-8 h-8 text-yellow-400 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce">
          <Crown className="w-12 h-12 text-yellow-500 opacity-40" />
        </div>
        <div className="absolute bottom-32 left-20 animate-pulse">
          <Star className="w-6 h-6 text-yellow-300 opacity-50" />
        </div>
        <div className="absolute top-60 left-1/3 animate-ping">
          <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-30"></div>
        </div>
        <div className="absolute bottom-40 right-1/4 animate-pulse">
          <div className="w-3 h-3 bg-red-500 rounded-full opacity-40"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Crown className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold tracking-wider uppercase text-sm">
                  Welcome to Excellence
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  KING
                </span>
                <br />
                <span className="text-white">CASINO</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Experience the ultimate in luxury gaming at Dar es Salaam's premier casino destination
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Premium Gaming Tables</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>State-of-the-Art Slot Machines</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>VIP Gaming Lounges</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>24/7 Premium Service</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Our Games
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Visit Us Today
              </button>
            </div>
          </div>

          {/* Right content - Real Casino Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main featured image */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/WhatsApp Image 2025-07-01 at 10.46.39_016efe1a.jpg" 
                  alt="Roulette Table"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold">Premium Roulette</h3>
                    <p className="text-gray-300 text-sm">Professional gaming experience</p>
                  </div>
                </div>
              </div>
              
              {/* Smaller images */}
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/WhatsApp Image 2025-07-01 at 10.46.39_bad328db.jpg" 
                  alt="Slot Machines"
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-2 left-2">
                    <p className="text-white text-xs font-semibold">Modern Slots</p>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/WhatsApp Image 2025-07-01 at 10.46.39_aa3cc852.jpg" 
                  alt="Gaming Atmosphere"
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-2 left-2">
                    <p className="text-white text-xs font-semibold">VIP Service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-4 shadow-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-black">LIVE</div>
                <div className="text-xs text-black/80">Gaming Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;