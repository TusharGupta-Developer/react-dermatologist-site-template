// Therapist Website Starter Template (React + CSS3)

import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import CircularGallery from './components/pages/CircularGallery';
import ScrollToTop from './components/common/ScrollToTop';
import Loader from './components/common/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 700); // Simulate loading delay
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Home />
            <About />
            <Services />
            <Testimonials />
            <CircularGallery />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default App;
