// File: src/components/ProjectCard.jsx
import React from 'react';

/**
 * ProjectCard displays a project image with title and tech fixed at the bottom,
 * and on hover slides them up to reveal the View button below.
 */
export default function ProjectCard({ image, title, tech, href }) {
  return (
    <div className="group relative block rounded-lg overflow-hidden shadow-lg h-64 sm:h-72 md:h-80 lg:h-95">
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      {/* Bottom content container */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4 flex flex-col space-y-2 z-10 min-h-[120px] md:min-h-[100px]">
        {/* Title at bottom, slides up on hover */}
        <h3 className="text-base md:text-lg font-semibold text-white duration-300 md:group-hover:-translate-y-5">
          {title}
        </h3>
        {/* Tech stack at bottom, slides up on hover */}
        <p className="text-xs md:text-sm text-white/90 duration-300 md:group-hover:-translate-y-5">
          {tech}
        </p>
        {/* View button - always visible on mobile, hidden on desktop until hover */}
        <a
          href={href || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block px-3 py-2 md:px-4 w-fit hover:bg-yellow-500 hover:border-yellow-500 border border-white text-white uppercase text-xs md:text-sm
            transition-all duration-300
            translate-y-0 opacity-100
            md:translate-y-5 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100
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