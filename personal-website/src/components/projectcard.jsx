import React from 'react';

/**
 * ProjectCard displays a project with an image, title, and tech stack.
 * Props:
 * - image: string (URL or import)
 * - title: string
 * - tech: string (comma-separated list)
 * - href: string (optional link)
 */
export default function ProjectCard({ image, title, tech, href }) {
  return (
    <a
      href={href || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* background image */}
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* overlay for text */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm opacity-90">{tech}</p>
      </div>
    </a>
  );
}
