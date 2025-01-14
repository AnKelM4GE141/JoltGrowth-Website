import React from 'react';
import { Menu, X, Zap, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleMobileNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={(e) => {
              scrollToTop(e);
              handleMobileNavClick();
            }}
            className="flex items-center group hover:opacity-80 transition-opacity"
          >
            <Zap className="h-8 w-8 text-fuchsia-500 group-hover:text-fuchsia-400 transition-colors" />
            <span className="ml-2 text-xl font-bold text-white group-hover:text-gray-200 transition-colors">JOLTGROWTH</span>
          </Link>
          
          {/* Centered Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex space-x-8">
              <Link to="/content" className="text-gray-300 hover:text-fuchsia-500">Content / Socials</Link>
              <Link to="/case-studies" className="text-gray-300 hover:text-fuchsia-500">Case Studies</Link>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-300 hover:text-fuchsia-500"
              >
                How it Works
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-300 hover:text-fuchsia-500"
              >
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Right-aligned CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/book" 
              className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-md hover:from-fuchsia-700 hover:to-purple-700 transition-colors"
            >
              Book Intro Call <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/content" 
              className="block px-3 py-2 text-gray-300 hover:text-fuchsia-500"
              onClick={handleMobileNavClick}
            >
              Content / Socials
            </Link>
            <Link 
              to="/case-studies" 
              className="block px-3 py-2 text-gray-300 hover:text-fuchsia-500"
              onClick={handleMobileNavClick}
            >
              Case Studies
            </Link>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-fuchsia-500"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-fuchsia-500"
            >
              Contact Us
            </button>
            <Link 
              to="/book" 
              className="block px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-md hover:from-fuchsia-700 hover:to-purple-700 transition-colors mt-4"
              onClick={handleMobileNavClick}
            >
              Book Intro Call <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}