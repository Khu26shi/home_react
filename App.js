import React from 'react';
import Header from './components/header';
import HeroSection from './components/herosection';
import Features from './components/features';
import Products from './components/products';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
