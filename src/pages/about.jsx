
import React, { useState } from 'react';
import SkillBar from '../components/skillbar';
import CategoryButton from '../components/categorybutton';

const languages = [
  { label: 'Java', years: 5, colorClass: 'bg-orange-500' },
  { label: 'C#', years: 4, colorClass: 'bg-gray-600' },
  { label: 'Python', years: 5, colorClass: 'bg-yellow-400' },
  { label: 'Javascript', years: 4, colorClass: 'bg-pink-500' },
  { label: 'HTML/CSS/JS', years: 4, colorClass: 'bg-green-400' },
  { label: 'C', years: 1.5, colorClass: 'bg-black' },
];

const frameworks = [
  { label: 'React', years: 3, colorClass: 'bg-blue-500' },
  { label: 'Tailwind CSS', years: 2, colorClass: 'bg-teal-400' },
  { label: 'Node.js', years: 2, colorClass: 'bg-green-600' },
  { label: 'Spring Boot', years: 1.5, colorClass: 'bg-green-700' },
  { label: 'NextJS', years: 1, colorClass: 'bg-purple-700' },
  { label: 'DJango', years: 1, colorClass: 'bg-red-500' },
];

const tools = [
  { label: 'AWS', years: 1, colorClass: 'bg-yellow-600' },
  { label: 'GitHub', years: 5, colorClass: 'bg-purple-600' },
  { label: 'Docker', years: 2, colorClass: 'bg-blue-700' },
  { label: 'VS Code', years: 4, colorClass: 'bg-yellow-300' },
  { label: 'Postman', years: 2, colorClass: 'bg-orange-300' },
];

export default function About() {
    const [category, setCategory] = useState('languages');

    const dataMap = {
    languages,
    frameworks,
    tools,
    };

      const currentData = dataMap[category];

    return(
        <section className='min-h-screen
        pt-16 md:pt-0 px-4 py-8 md:p-8 md:pl-24
        bg-gradient-to-b from-blue-800 to-teal-400'>
            <div className="max-w-7xl mx-auto">
                <div className="mt-4 md:mt-8 font-bold text-yellow-400 text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-10">
                    <h1>About me</h1>
                </div>
                <div className="text-white">
                    <p className="text-sm md:text-base leading-relaxed mb-8">
                        I am a very ambitious software developer with a unique background that has prepared me to 
                        be a team player who communicates effectively, faces problems analytically and has the 
                        technical skills to tackle any challenge.
                    </p>

                    {/* Category Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8 mt-6 md:mt-10">
                        <CategoryButton
                        label="Languages"
                        onClick={() => setCategory('languages')}
                        />
                        <CategoryButton
                        label="Frameworks/Technologies"
                        onClick={() => setCategory('frameworks')}
                        />
                        <CategoryButton
                        label="Development Tools"
                        onClick={() => setCategory('tools')}
                        />
                    </div>

                    {/* Dynamic Skill Bars */}
                    <div className="space-y-2">
                        {currentData.map(({ label, years, colorClass }) => (
                        <SkillBar
                            key={label}
                            label={label}
                            years={years}
                            colorClass={colorClass}
                            showTrack={false}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}
