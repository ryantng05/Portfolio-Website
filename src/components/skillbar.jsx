// File: src/components/SkillBar.jsx
import React from 'react';

/**
 * Calculate the fill percentage for a skill bar.
 * @param {number} years - Years of experience.
 * @param {number} maxYears - Maximum years representing 100%.
 * @returns {number} Percentage (0–100) of fill.
 */
function calcPct(years, maxYears) {
  const raw = (years / maxYears) * 100;
  return Math.min(100, Math.round(raw));
}

/**
 * A horizontal progress bar showing years of experience.
 * Props:
 * - label: string (e.g., "Java")
 * - years: number
 * - maxYears: number (default 5)
 * - colorClass: Tailwind bg-* class for the fill
 * - showTrack: boolean (show or hide gray track)
 */
export default function SkillBar({ label, years, maxYears = 4, colorClass = 'bg-blue-500', showTrack = true }) {
  const pct = calcPct(years, maxYears);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-800">{label}: {years} {years === 1 ? 'year' : 'years'}</span>
      </div>
      <div className={`h-4 rounded-full overflow-hidden ${showTrack ? 'bg-gray-200' : 'bg-transparent'}`} style={{ width: `${80}%`}}>
        <div
          className={`${colorClass} h-full rounded-full transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}