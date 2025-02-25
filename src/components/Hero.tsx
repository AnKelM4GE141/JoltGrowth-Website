import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RetroGrid } from './RetroGrid';
import { Stars } from './Stars';
import { HeroVideo } from './HeroVideo';

export function Hero() {
  return (
    <div id="home" className="relative bg-[#0a0a2c]">
      <Stars />
      <RetroGrid />
      
      <div className="relative z-20 pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center justify-start gap-12 py-12 md:py-16">
            <div className="w-full max-w-3xl text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                We Build & Manage
                <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-transparent bg-clip-text"> Growth Systems</span>
                <br />for Online Businesses
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Make life-changing money while entrusting the overwhelming complexity and management to people you can rely on to deliver exceptional results.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <Link 
                  to="/book" 
                  className="rounded-md bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-pink-600 hover:via-fuchsia-600 hover:to-purple-600 transition-all duration-300 hover:shadow-fuchsia-500/25"
                >
                  Get Started
                </Link>
                <a 
                  href="#services" 
                  className="flex items-center text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="w-full max-w-4xl">
              <HeroVideo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
