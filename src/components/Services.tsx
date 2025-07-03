import React from 'react';
import { Utensils, Car, Gift, Clock, Wifi, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Exquisite cuisine and premium beverages served in our elegant restaurant and bars."
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Complimentary valet parking service for all our valued guests."
    },
    {
      icon: Gift,
      title: "Loyalty Program",
      description: "Exclusive rewards and benefits for our regular players and VIP members."
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock gaming and hospitality services for your convenience."
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet access throughout the casino premises."
    },
    {
      icon: Shield,
      title: "Security",
      description: "Advanced security systems ensuring a safe and secure gaming environment."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Premium <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beyond gaming, we offer a comprehensive range of luxury services to ensure your visit is exceptional in every way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* VIP Services Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="text-yellow-400">VIP</span> Membership Program
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Join our exclusive VIP program and enjoy premium benefits including private gaming areas, 
                personal account managers, complimentary services, and special event invitations.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Private gaming lounges</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Exclusive tournaments</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Complimentary dining</span>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400/20 to-red-600/20 rounded-xl p-8 backdrop-blur-sm border border-yellow-400/30">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">VIP</div>
                  <div className="text-lg font-semibold mb-4">Exclusive Benefits</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="font-bold text-yellow-400">Priority</div>
                      <div className="text-gray-300">Service</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="font-bold text-yellow-400">Private</div>
                      <div className="text-gray-300">Gaming</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="font-bold text-yellow-400">Special</div>
                      <div className="text-gray-300">Events</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="font-bold text-yellow-400">Premium</div>
                      <div className="text-gray-300">Rewards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;