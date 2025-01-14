import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudiesPage } from './pages/CaseStudies';
import { BookingPage } from './pages/Booking';
import { ContentPage } from './pages/Content';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <Pricing />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/content" element={<ContentPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;