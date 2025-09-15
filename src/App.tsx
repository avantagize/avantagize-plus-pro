import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Capabilities } from './components/Capabilities';
import { Process } from './components/Process';
import { Results } from './components/Results';
import { Pricing } from './components/Pricing';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Capabilities />
      <Process />
      <Results />
      <Pricing />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
