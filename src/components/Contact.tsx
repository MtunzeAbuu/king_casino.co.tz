import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Visit <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">King Casino</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the royal treatment at Dar es Salaam's premier gaming destination. We're open daily from 2:00 PM and ready to welcome you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-yellow-400/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-300">
                      Warioba Street, Palm Village<br />
                      Dar es Salaam, Tanzania
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">+255 775 123 567</p>
                    <p className="text-sm text-gray-400">Available during operating hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Hours</h4>
                    <p className="text-gray-300">Open Daily from 2:00 PM</p>
                    <p className="text-sm text-gray-400">7 Days a Week</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">jxbettinglimitted@gmail.com</p>
                    <p className="text-sm text-gray-400">For inquiries and reservations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="tel:+255775123567"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now
              </a>
              <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-4 px-6 rounded-lg transition-all duration-300">
                <Navigation className="w-5 h-5 inline mr-2" />
                Get Directions
              </button>
            </div>
          </div>

          {/* Map/Visual Section */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-yellow-400/20">
            <h3 className="text-2xl font-bold text-white mb-6">Find Us</h3>
            
            {/* Placeholder for map - in a real implementation, you'd integrate with Google Maps */}
            <div className="bg-gradient-to-br from-yellow-400/20 to-red-600/20 rounded-lg h-64 flex items-center justify-center border border-yellow-400/30 mb-6">
              <div className="text-center text-white">
                <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">King Casino</h4>
                <p className="text-gray-300">Warioba Street, Palm Village</p>
                <p className="text-gray-300">Dar es Salaam</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h5 className="font-semibold text-yellow-400 mb-2">Operating Hours</h5>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Monday - Sunday: 2:00 PM onwards</li>
                  <li>• Premium gaming experience daily</li>
                  <li>• VIP services available</li>
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h5 className="font-semibold text-yellow-400 mb-2">Transportation</h5>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Taxi services available</li>
                  <li>• Public transport nearby</li>
                  <li>• Complimentary valet parking</li>
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h5 className="font-semibold text-yellow-400 mb-2">Nearby Landmarks</h5>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Palm Village Shopping Center</li>
                  <li>• Dar es Salaam City Center</li>
                  <li>• Julius Nyerere International Airport</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;