import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "/WhatsApp Image 2025-07-01 at 10.46.39_4d7c557a.jpg",
      title: "Premium Table Games",
      description: "Experience the thrill of roulette with our professional dealers"
    },
    {
      src: "/WhatsApp Image 2025-07-01 at 10.46.39_15fa1424.jpg",
      title: "Slot Machine Floor",
      description: "State-of-the-art slot machines with exciting games and jackpots"
    },
    {
      src: "/WhatsApp Image 2025-07-01 at 10.46.39_016efe1a.jpg",
      title: "Roulette Excellence",
      description: "Classic roulette tables with colorful chips and professional setup"
    },
    {
      src: "/WhatsApp Image 2025-07-01 at 10.46.39_aa3cc852.jpg",
      title: "Gaming Atmosphere",
      description: "Enjoy our friendly service and exciting gaming environment"
    },
    {
      src: "/WhatsApp Image 2025-07-01 at 10.46.39_bad328db.jpg",
      title: "Modern Gaming Machines",
      description: "Latest slot machines with comfortable seating and great entertainment"
    },
    {
      src: "/WhatsApp Image 2025-07-01 at 10.52.56_6110b311.jpg",
      title: "VIP Gaming Entrance",
      description: "Exclusive VIP gaming lounge with premium amenities and private access"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Casino <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Take a virtual tour of King Casino and see our premium gaming facilities, elegant atmosphere, and exciting gaming options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-800">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-400 text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-500/10 to-red-600/10 rounded-2xl p-8 border border-yellow-400/20 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              Experience It Yourself
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Visit King Casino today and experience the luxury and excitement captured in these photos.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Visit Us Now
            </button>
          </div>
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-yellow-400 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src={images[selectedImage].src} 
                  alt={images[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2">
                    {images[selectedImage].title}
                  </h3>
                  <p className="text-gray-300">
                    {images[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;