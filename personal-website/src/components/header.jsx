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

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/about', icon: User, label: 'About' },
    { to: '/work', icon: Building2, label: 'Work' },
    { to: '/portfolio', icon: Briefcase, label: 'Portfolio' },
    { to: '/contact', icon: Mail, label: 'Contact' },
  ];

  const socialItems = [
    { href: 'https://www.linkedin.com/in/ryan-tang-ab55192b1/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/ryantng05', icon: Github, label: 'GitHub' },
    { href: 'https://instagram.com/ryan.tng', icon: Instagram, label: 'Instagram' },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar with solid dark background */}
      <aside
        className={`
          fixed inset-y-0 left-0 w-16 bg-[#111111]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          flex flex-col justify-between text-white shadow-md
        `}
      >
        {/* Top: logo */}
        <div className="h-16 flex items-center justify-center border-b border-white/20">
          <span className="font-bold text-lg">Ryan</span>
        </div>

        {/* Middle: navigation icons */}
        <nav className="flex-1 flex flex-col items-center py-4 space-y-4 mt-55">
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
