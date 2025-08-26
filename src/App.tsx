import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Emergency from './components/Emergency';
import WhyChoose from './components/WhyChoose';
import Doctors from './components/Doctors';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Emergency />
        <WhyChoose />
        <Doctors />
        <Facilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;