import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Capabilities } from './components/Capabilities';
import { Process } from './components/Process';
import { Results } from './components/Results';
import { Pricing } from './components/Pricing';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen'; // ✅ new

function App() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Start fade-out after 1.5s
    const timer = setTimeout(() => setLoading(false), 1500);

    // Fully remove loader after fade-out (0.7s later)
    const removeTimer = setTimeout(() => {
      setShowLoader(false);
      setContentVisible(true);
    }, 2200);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {/* ✅ Loader */}
      {showLoader && <LoadingScreen isVisible={loading} />}

      {/* ✅ Main Content with fade + slide-in */}
      <div
        className={`transform transition-all duration-1000 ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
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
      </div>
    </>
  );
}

export default App;