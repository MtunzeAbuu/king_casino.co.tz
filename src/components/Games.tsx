import React from 'react';
import { Spade, Heart, Diamond, Club } from 'lucide-react';

const Games = () => {
  const gameCategories = [
    {
      title: "Table Games",
      icon: Spade,
      games: ["Blackjack", "Poker", "Roulette", "Baccarat"],
      description: "Classic casino table games with professional dealers",
      color: "from-red-500 to-red-700",
      image: "/WhatsApp Image 2025-07-01 at 10.46.39_016efe1a.jpg"
    },
    {
      title: "Slot Machines",
      icon: Diamond,
      games: ["Progressive Slots", "Video Slots", "Classic Slots", "Jackpot Games"],
      description: "State-of-the-art slot machines with exciting themes",
      color: "from-yellow-500 to-yellow-700",
      image: "/WhatsApp Image 2025-07-01 at 10.46.39_bad328db.jpg"
    },
    {
      title: "Card Games",
      icon: Heart,
      games: ["Texas Hold'em", "Omaha", "Stud Poker", "Bridge"],
      description: "Professional card games in elegant gaming rooms",
      color: "from-purple-500 to-purple-700",
      image: "/WhatsApp Image 2025-07-01 at 10.46.39_4d7c557a.jpg"
    },
    {
      title: "VIP Gaming",
      icon: Club,
      games: ["High Stakes", "Private Tables", "Exclusive Tournaments", "Personal Service"],
      description: "Exclusive gaming experience for our VIP members",
      color: "from-gray-700 to-gray-900",
      image: "/WhatsApp Image 2025-07-01 at 10.52.56_6110b311.jpg"
    }
  ];

  return (
    <section id="games" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Games</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover an extensive collection of premium gaming options designed to provide excitement and entertainment for every player.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {gameCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
                <div className="absolute top-4 left-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                <ul className="space-y-2">
                  {category.games.map((game, gameIndex) => (
                    <li key={gameIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {game}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* VIP Gaming Section with New Image */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-red-600/10 rounded-2xl overflow-hidden border border-yellow-400/20 mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-auto">
              <img 
                src="/WhatsApp Image 2025-07-01 at 10.52.56_6110b311.jpg" 
                alt="VIP Gaming Entrance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30"></div>
              <div className="absolute top-6 left-6">
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">
                  VIP EXCLUSIVE
                </div>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                <span className="text-yellow-400">VIP</span> Gaming Lounge
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Step into our exclusive VIP gaming lounge featuring private tables, dedicated service, and an atmosphere of ultimate luxury. 
                Our VIP area offers the highest level of privacy and personalized attention for discerning players.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-black/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">Private</div>
                  <div className="text-sm text-gray-400">Gaming Tables</div>
                </div>
                <div className="text-center bg-black/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Concierge Service</div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg self-start">
                Join VIP Program
              </button>
            </div>
          </div>
        </div>

        {/* Gaming Floor Highlights */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-red-600/10 rounded-2xl overflow-hidden border border-yellow-400/20">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Premium Gaming Floor
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our spacious gaming floor features over 100 gaming stations with the latest technology and classic favorites. 
                Experience the thrill of gaming in an atmosphere of luxury and sophistication.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">50+</div>
                  <div className="text-sm text-gray-400">Slot Machines</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">20+</div>
                  <div className="text-sm text-gray-400">Table Games</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">5</div>
                  <div className="text-sm text-gray-400">VIP Rooms</div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg self-start">
                Visit Gaming Floor
              </button>
            </div>
            <div className="relative h-80 lg:h-auto">
              <img 
                src="/WhatsApp Image 2025-07-01 at 10.46.39_aa3cc852.jpg" 
                alt="Gaming Floor Atmosphere"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;