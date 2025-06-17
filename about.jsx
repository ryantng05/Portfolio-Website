import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function calcPct(years){
    const pct = Math.min(100, Math.round((years / 4) * 100));
    return pct;
}

export default function About() {

    const [isOpen, setIsOpen] = useState(true);
    return(
        <>
            <a id="about">
                <div className="ml-50 mt-25 text-yellow-300 text-5xl mb-10">
                    <h1>About me</h1>
                </div>
                <div className="ml-55">
                    <p>I am a very ambitious software developer with a unique background that has prepared me to <br></br>be a team player who communicates effectively, 
                        faces problems analytically and has the <br></br>technical skills to tackle any challenge.</p>
                    <h2 className="text-yellow-500 text-2xl mt-5 mb-5">Languages</h2>

                    <ul>
                        <li>
                            <span>Java: 4 years</span>
                            {/* outer bar */}
                            <div className="w-150 h-4 bg-gray-200 rounded-full overflow-hidden bg-transparent">
                                {/* inner bar */}
                                <div
                                className={`h-full rounded-full bg-orange-500 transition-width duration-500`}
                                    style={{ width: `${calcPct(4)}%` }}
                                />
                            </div>
                        </li>
                        <li>
                            <span>C#: 4 years</span>
                            {/* outer bar */}
                            <div className="w-150 h-4 bg-gray-200 rounded-full overflow-hidden bg-transparent">
                                {/* inner bar */}
                                <div
                                className={`h-full rounded-full bg-gray-500 transition-width duration-500`}
                                    style={{ width: `${calcPct(4)}%` }}
                                />
                            </div>
                        </li>
                        <li>
                            <span>Python: 3 years</span>
                            <div className="w-150 h-4 bg-gray-200 rounded-full overflow-hidden bg-transparent">
                                {/* inner bar */}
                                <div
                                className={`h-full rounded-full bg-yellow-500 transition-width duration-500`}
                                    style={{ width: `${calcPct(3)}%` }}
                                />
                            </div>
                        </li>
                        <li>
                            <span>HTML/CSS/JS: 3 years</span>
                            <div className="w-150 h-4 bg-gray-200 rounded-full overflow-hidden bg-transparent">
                                {/* inner bar */}
                                <div
                                className={`h-full rounded-full bg-green-500 transition-width duration-500`}
                                    style={{ width: `${calcPct(3)}%` }}
                                />
                            </div>
                            
                        </li>
                        <li>
                            <span>C: 1 years</span>
                            <div className="w-150 h-4 bg-gray-200 rounded-full overflow-hidden mb-10 bg-transparent">
                                {/* inner bar */}
                                <div
                                className={`h-full rounded-full bg-black transition-width duration-500`}
                                    style={{ width: `${calcPct(1)}%` }}
                                />
                            </div>
                        </li>
                    </ul>
                        <Link to="/tech">
                            <button className='border-1 border-yellow-300 mb-5 pt-2 pb-2 pl-10 pr-10 cursor-pointer hover:bg-yellow-50
                                            transition-colors duration-200'>
                                FRAMEWORKS/TECHNOLOGIES
                            </button>
                        </Link>
                        <br></br>
                        <Link to="/dev">
                            <button className='border-1 border-yellow-300 pt-2 pb-2 pl-10 pr-26 text-center cursor-pointer hover:bg-yellow-50
                                            transition-colors duration-200'>
                                DEVELOPMENT TOOLS
                            </button>
                        </Link>
                </div>
            </a>
        </>

    );
}
