import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  User,
  Building2,
  Briefcase,
  Mail,
  Linkedin,
  Github,
  Instagram,
  Menu,
  X,
} from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', icon: Home, label: 'HOME' },
    { to: '/about', icon: User, label: 'ABOUT' },
    { to: '/work', icon: Building2, label: 'WORK' },
    { to: '/portfolio', icon: Briefcase, label: 'PORTFOLIO' },
    { to: '/contact', icon: Mail, label: 'CONTACT' },
  ];

  const socialItems = [
    { href: 'https://www.linkedin.com/in/ryan-tng/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/ryantng05', icon: Github, label: 'GitHub' },
    { href: 'https://instagram.com/ryan.tng', icon: Instagram, label: 'Instagram' },
  ];

  return (
    <>
      {/* Mobile Header Bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#1e3a5f] z-40 flex items-center justify-between px-4 shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded"></div>
          <span className="font-bold text-lg text-white">Ryan T.</span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-yellow-400 p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Full Screen Menu Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 bg-[#1a1a1a] z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}
          flex flex-col items-center justify-center text-white
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-yellow-400 p-2"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center space-y-8">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `group flex items-center space-x-3 text-lg
                ${isActive ? 'text-yellow-400' : 'text-gray-400'}
                hover:text-yellow-300 transition-colors`
              }
            >
              <Icon size={24} />
              <span className="font-medium tracking-wider">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Desktop Sidebar - unchanged */}
      <aside
        className="
          hidden md:flex
          fixed inset-y-0 left-0 w-16 bg-[#111111]
          flex-col justify-between text-white shadow-md
        "
      >
        {/* Top: logo */}
        <div className="h-16 flex items-center justify-center border-b border-white/20">
          <span className="font-bold text-lg">Ryan</span>
        </div>

        {/* Middle: navigation icons */}
        <nav className="flex-1 flex flex-col items-center py-4 space-y-4 mt-12 md:mt-20">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `group relative flex items-center justify-center w-10 h-10
                ${isActive ? 'text-yellow-400' : 'text-white/80'}
                hover:text-yellow-300`
              }
            >
              <Icon size={24} />
              <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2
                                bg-white text-gray-800 text-sm font-semibold
                                px-2 py-1 rounded shadow-md
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-200 whitespace-nowrap">
                {label}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom: social icons */}
        <div className="flex flex-col items-center py-4 space-y-3 border-t border-white/20">
          {socialItems.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-yellow-300 transition-colors"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
