// File: src/components/CategoryButton.jsx
import React from 'react';

/**
 * A bordered button for toggling sections.
 * Props:
 * -   label: string
 * -   onClick: () => void
 */
export default function CategoryButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center
        border-2 border-yellow-400
        text-yellow-400 font-medium uppercase tracking-wide
        py-2 md:py-3 px-2 md:px-4
        hover:bg-yellow-400 hover:text-blue-900
        transition-colors duration-200
        cursor-pointer
        text-xs md:text-sm w-full
      "
    >
      {label}
    </button>
  );
}
