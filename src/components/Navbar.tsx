import React from 'react';
import { Menu, X, Briefcase } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Briefcase className="h-8 w-8 text-fuchsia-500" />
            <span className="ml-2 text-xl font-bold text-white">Nova Agency</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-fuchsia-500">Home</a>
            <a href="#services" className="text-gray-300 hover:text-fuchsia-500">Services</a>
            <a href="#work" className="text-gray-300 hover:text-fuchsia-500">Our Work</a>
            <a href="#team" className="text-gray-300 hover:text-fuchsia-500">Team</a>
            <a href="#contact" className="text-gray-300 hover:text-fuchsia-500">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-fuchsia-500">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-fuchsia-500">Services</a>
            <a href="#work" className="block px-3 py-2 text-gray-300 hover:text-fuchsia-500">Our Work</a>
            <a href="#team" className="block px-3 py-2 text-gray-300 hover:text-fuchsia-500">Team</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-fuchsia-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}