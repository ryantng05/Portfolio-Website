import React, { useState } from 'react';
import {Instagram, Github, Linkedin, Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 focus:outline-none bg-white p-2 rounded shadow"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 bg-white shadow-md transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out w-25`}>
        <div className="px-6 py-4">
          {/* Logo / Brand */}
          <div className="text-2xl font-bold text-gray-800 mb-70 text-center">Ryan</div>
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-8 mb-75 items-center">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>

          <nav className="flex flex-col space-y-1 items-center">
            <a href="https://www.linkedin.com/in/ryan-tang-ab55192b1/" className="text-gray-600 hover:text-gray-900"><Linkedin/></a>
            <a href="https://github.com/ryantng05" className="text-gray-600 hover:text-gray-900"><Github/></a>
            <a href="http://instagram.com/ryan.tng" className="text-gray-600 hover:text-gray-900"><Instagram/></a>
          </nav>
        </div>
      </aside>
    </>
  );
}
