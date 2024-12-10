import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div id="contact" className="bg-gray-900 py-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-400">
              Let's discuss how we can help transform your digital presence
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-fuchsia-500" />
                <span className="ml-4 text-gray-300">contact@novaagency.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-fuchsia-500" />
                <span className="ml-4 text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-fuchsia-500" />
                <span className="ml-4 text-gray-300">123 Innovation Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-300 shadow-sm focus:border-fuchsia-500 focus:ring-fuchsia-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-300 shadow-sm focus:border-fuchsia-500 focus:ring-fuchsia-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-300 shadow-sm focus:border-fuchsia-500 focus:ring-fuchsia-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 py-3 px-4 rounded-md text-white font-semibold hover:from-fuchsia-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}