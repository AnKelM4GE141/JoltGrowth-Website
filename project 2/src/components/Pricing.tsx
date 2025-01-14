import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const packages = [
  {
    name: 'BASE BUILDOUT',
    price: '6,000',
    description: 'Perfect for coaches starting their digital journey',
    features: [
      'Custom Website Design',
      'Mobile Responsive Layout',
      'Basic SEO Setup',
      'Contact Form Integration',
      'Social Media Links',
      '2 Rounds of Revisions',
    ],
    gradient: 'from-blue-600 via-blue-500 to-purple-600',
  },
  {
    name: 'OVERT OPERATOR',
    price: '6,000',
    revShare: '20%',
    description: 'Comprehensive solution for growing coaching businesses',
    features: [
      'Everything in BASE BUILDOUT',
      'Advanced SEO Optimization',
      'Email Marketing Setup',
      'Blog/Content Section',
      'Payment Gateway Integration',
      'Premium Analytics Dashboard',
      'Booking System Integration',
      '4 Rounds of Revisions',
    ],
    gradient: 'from-purple-600 via-violet-500 to-indigo-600',
    featured: true,
  },
  {
    name: 'CUSTOM',
    price: 'Custom',
    description: 'Tailored solutions for established coaches',
    features: [
      'Everything in OVERT OPERATOR',
      'Custom Feature Development',
      'Advanced Security Features',
      'Priority Support',
      'Custom Integrations',
      'Unlimited Revisions',
      'Dedicated Project Manager',
    ],
    gradient: 'from-indigo-600 via-purple-500 to-blue-600',
  },
];

export function Pricing() {
  return (
    <div id="pricing" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Investment Plans
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Choose the perfect package for your coaching business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative group rounded-2xl ${
                  pkg.featured ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 rounded-full text-sm font-semibold text-white shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="relative p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 h-full hover:border-purple-500/30 transition-all duration-500">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-white mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">${pkg.price}</span>
                      {pkg.price !== 'Custom' && (
                        <span className="text-gray-400 ml-2">one-time</span>
                      )}
                      {pkg.revShare && (
                        <div className="mt-1 text-lg text-gray-400">
                          + {pkg.revShare} Revenue Share
                        </div>
                      )}
                    </div>
                    <p className="text-gray-400 mb-6">{pkg.description}</p>

                    <div className="flex-grow">
                      <ul className="space-y-4 mb-8">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className={`h-5 w-5 flex-shrink-0 bg-gradient-to-r ${pkg.gradient} rounded-full p-1 text-white`} />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#contact"
                      className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 bg-gradient-to-r ${pkg.gradient} hover:opacity-90`}
                    >
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
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
  );
}