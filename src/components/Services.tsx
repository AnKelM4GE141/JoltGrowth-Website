import React from 'react';
import { Code, Palette, Megaphone } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies. We create responsive, fast, and scalable solutions.',
    icon: Code,
    gradient: 'from-blue-600 via-blue-500 to-purple-600',
  },
  {
    title: 'Creative Design',
    description: 'Beautiful, intuitive designs that enhance user experience. Our designs are modern, engaging, and tailored to your brand.',
    icon: Palette,
    gradient: 'from-purple-600 via-violet-500 to-indigo-600',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that drive results. We help you reach your target audience and achieve your business goals.',
    icon: Megaphone,
    gradient: 'from-indigo-600 via-purple-500 to-blue-600',
  },
];

export function Services() {
  return (
    <div id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side heading */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What We Offer
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-400">
                Our comprehensive range of services designed to create exceptional digital experiences.
              </p>
            </div>
          </div>

          {/* Right side cards */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 gap-6">
              {services.map((service) => (
                <div 
                  key={service.title}
                  className="relative group"
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                       style={{
                         background: `linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))`
                       }} />
                  
                  {/* Card content */}
                  <div className="relative p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/30 transition-all duration-500">
                    <div className="flex items-start gap-6">
                      <div className={`rounded-xl bg-gradient-to-r ${service.gradient} p-3`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{service.description}</p>
                        
                        <div className="mt-4">
                          <a 
                            href="#contact" 
                            className="inline-flex items-center text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            Learn more
                            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}