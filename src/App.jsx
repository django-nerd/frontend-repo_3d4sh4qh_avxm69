import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroWorkshop from './components/HeroWorkshop.jsx';
import Features from './components/Features.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Navbar />
      <main>
        <HeroWorkshop />
        <Features />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
