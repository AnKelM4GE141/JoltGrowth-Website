import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BookingPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Book a Strategy Call
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Schedule a call to discuss how we can help scale your coaching business
          </p>
        </div>

        {/* Calendly Inline Widget */}
        <div 
          className="calendly-inline-widget bg-gray-800 rounded-lg"
          data-url="https://calendly.com/maxochocinski/network"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </div>
  );
}