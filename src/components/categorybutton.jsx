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
        border-2 border-yellow-500
        text-gray-800 font-medium uppercase tracking-wide
        py-3 px-4
        hover:bg-yellow-50
        transition-colors duration-200
        cursor-pointer
      " style={{ width: `${80}%`}}
    >
      {label}
    </button>
  );
}
