import React from 'react';
import { Crown, Shield, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Crown,
      title: "Royal Treatment",
      description: "Experience gaming like royalty with our premium services and exclusive VIP areas."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "State-of-the-art security systems ensure a safe and fair gaming environment."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized as Dar es Salaam's premier gaming destination with exceptional service."
    },
    {
      icon: Users,
      title: "Expert Staff",
      description: "Our professional team provides world-class service and gaming expertise."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">King Casino</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Palm Village, Dar es Salaam, King Casino stands as the city's most prestigious gaming destination. 
            We offer an unparalleled experience combining luxury, excitement, and world-class hospitality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Where Luxury Meets Gaming Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Since our establishment, King Casino has been synonymous with premium gaming experiences in Tanzania. 
              Our facility on Warioba Street features the latest gaming technology, elegant interiors, and exceptional service 
              that sets us apart from the competition.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're a seasoned player or new to casino gaming, our expert staff ensures every visit is memorable. 
              From classic table games to modern slot machines, we offer something for every gaming preference.
            </p>
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Our Location</h4>
              <p className="text-yellow-100">
                Warioba Street, Palm Village<br />
                Dar es Salaam, Tanzania
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Featured Casino Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/WhatsApp Image 2025-07-01 at 10.46.39_4d7c557a.jpg" 
                alt="King Casino Gaming Floor"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-bold text-xl mb-2">Premium Gaming Experience</h4>
                  <p className="text-gray-200 text-sm">Professional dealers and exciting table games</p>
                </div>
              </div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 text-white shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
                  <div className="text-xs text-gray-300">Open Daily</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">100+</div>
                  <div className="text-xs text-gray-300">Gaming Options</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">VIP</div>
                  <div className="text-xs text-gray-300">Exclusive Lounges</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">5★</div>
                  <div className="text-xs text-gray-300">Premium Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;