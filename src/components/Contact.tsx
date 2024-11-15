import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <a href="mailto:nurhussein2003@yahoo.com" className="text-gray-300 hover:text-blue-400">
                nurhussein2003@yahoo.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <p className="text-gray-300">0046735598042</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-gray-300">Stockholm, Sweden</p>
            </div>
          </div>
        </div>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your email"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder="Your message"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            Send Message
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};