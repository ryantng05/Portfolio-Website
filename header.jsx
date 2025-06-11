import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-gray-800">MyBrand</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-inner">
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Services</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
        </nav>
      )}
    </header>
  );
}
