import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Games from './components/Games';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Games />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;