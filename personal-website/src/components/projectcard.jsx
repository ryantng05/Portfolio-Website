// File: src/components/ProjectCard.jsx
import React from 'react';

/**
 * ProjectCard displays a project image with title and tech fixed at the bottom,
 * and on hover slides them up to reveal the View button below.
 */
export default function ProjectCard({ image, title, tech, href }) {
  return (
    <div className="group relative block rounded-lg overflow-hidden shadow-lg h-95">
      {/* Background image */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Bottom content container */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col space-y-1 z-10 h-30">
        {/* Title at bottom, slides up on hover */}
        <h3 className="text-lg font-semibold text-white duration-300 group-hover:-translate-y-10">
          {title}
        </h3>
        {/* Tech stack at bottom, slides up on hover */}
        <p className="text-sm text-white/90 duration-300 group-hover:-translate-y-10">
          {tech}
        </p>
        {/* View button, hidden initially, slides up into place */}
        <a
          href={href || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block px-4 py-2 w-17 hover:bg-yellow-500 hover:border-yellow-500 border border-white text-white uppercase text-sm
            transform translate-y-10 opacity-0
            transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100
          "
        >
          View
        </a>
      </div>

      {/* Full gold overlay on hover (decorative) */}
      <div
        className="
          absolute top-0 left-0 w-full h-100
          bg-gradient-to-b from-[#ffd700] to-transparent
          opacity-0 group-hover:opacity-70
          transition-opacity duration-300
          pointer-events-none
          z-0
        "
      />
    </div>
  );
}