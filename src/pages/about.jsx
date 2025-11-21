
import React, { useState } from 'react';
import SkillBar from '../components/skillbar';
import CategoryButton from '../components/categorybutton';

const languages = [
  { label: 'Java', years: 4, colorClass: 'bg-orange-500' },
  { label: 'C#', years: 4, colorClass: 'bg-gray-600' },
  { label: 'Python', years: 3, colorClass: 'bg-yellow-400' },
  { label: 'Javascript', years: 3, colorClass: 'bg-pink-500' },
  { label: 'HTML/CSS/JS', years: 3, colorClass: 'bg-green-400' },
  { label: 'C', years: 1, colorClass: 'bg-black' },
];

const frameworks = [
  { label: 'React', years: 2.5, colorClass: 'bg-blue-500' },
  { label: 'Tailwind CSS', years: 1, colorClass: 'bg-teal-400' },
  { label: 'Node.js', years: 2, colorClass: 'bg-green-600' },
  { label: 'Spring Boot', years: 1, colorClass: 'bg-green-700' },
  { label: 'NextJS', years: 1, colorClass: 'bg-purple-700' },
  { label: 'DJango', years: 1, colorClass: 'bg-red-500' },
];

const tools = [
  { label: 'AWS', years: 1, colorClass: 'bg-yellow-600' },
  { label: 'GitHub', years: 3.5, colorClass: 'bg-purple-600' },
  { label: 'Docker', years: 1, colorClass: 'bg-blue-700' },
  { label: 'VS Code', years: 3, colorClass: 'bg-yellow-300' },
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
        p-8
        bg-gradient-to-b from-blue-800 to-teal-400
        pt-1'>
            <div>
                <div className="ml-50 mt-25 font-bold text-yellow-400 text-5xl mb-10">
                    <h1>About me</h1>
                </div>
                <div className="ml-55 text-white">
                    <p>I am a very ambitious software developer with a unique background that has prepared me to <br></br>be a team player who communicates effectively, 
                        faces problems analytically and has the <br></br>technical skills to tackle any challenge.</p>

                    {/* Category Buttons */}
                    <div className="grid grid-cols-3 gap-4 mb-8 mt-10">
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
                    <div>
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
