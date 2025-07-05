// File: src/components/ProjectCard.jsx
import React from 'react';

/**
 * ProjectCard shows each project with a subtle bottom gradient,
 * and on hover a bold gold overlay where title, tech, and button slide up.
 */
export default function ProjectCard({ image, title, tech, href }) {
  return (
    <a
      href={href || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-lg overflow-hidden shadow-lg h-48"
    >
      {/* Background image */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Persistent bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/90">{tech}</p>
      </div>

      {/* Gold overlay on hover */}
      <div
        className="
          absolute inset-0
          bg-yellow-500 bg-opacity-90
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          flex flex-col justify-end p-4
        "
      >
        {/* Slide-in title */}
        <h3
          className="
            text-lg font-semibold text-white mb-1
            transform translate-y-4 opacity-0
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-300 delay-100
          "
        >
          {title}
        </h3>
        {/* Slide-in tech description above the button */}
        <p
          className="
            text-sm text-white mb-4
            transform translate-y-4 opacity-0
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-300 delay-200
          "
        >
          {tech}
        </p>
        {/* Slide-up View button */}
        <button
          className="
            self-start px-4 py-2 border border-white text-white uppercase text-sm
            transform translate-y-4 opacity-0
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-300 delay-300
          "
        >
          View
        </button>
      </div>
    </a>
  );
}