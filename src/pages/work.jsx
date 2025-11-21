import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const workExperiences = [
  {
    id: 1,
    company: 'Academathon',
    role: 'Lead Software Engineer',
    date: 'Jan-Present 2025',
    details: [
      'Designed 30+ AWS Lambda Functions in AWS, strategically leveraging Lambda layers to increase processing speed by 35% and re-usability by 52%, resulting in cost savings of $1,000 per large scale deployment',
      'Implemented 15+ serverless workflows using AWS Step Functions, seamlessly integrating REST APIs and rigorously tested with Postman, resulting in a 65% reduction in execution time and improved system reliability',
      'Developed and maintained scalable microservices architecture using Spring Boot and Node.js',
      'Collaborated with cross-functional teams to deliver high-quality solutions within tight deadlines',
    ],
  },
  // Add more work experiences here
];

function WorkCard({ experience }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-yellow-400 text-2xl font-bold mb-2">
            {experience.company}
          </h3>
          {experience.role && (
            <p className="text-gray-300 text-lg mb-2">{experience.role}</p>
          )}
          <div className="text-gray-400 text-sm flex items-center gap-2">
            {isExpanded ? (
              <>
                <AiOutlineMinus size={16} />
                Click to collapse
              </>
            ) : (
              <>
                <AiOutlinePlus size={16} />
                Click for more
              </>
            )}
          </div>
        </div>
        <div
          className={`w-6 h-6 rounded-full border-4 transition-colors ${
            isExpanded
              ? 'border-red-500 bg-red-500'
              : 'border-green-500 bg-green-500'
          }`}
        />
      </div>

      <p className="text-yellow-400 font-semibold mb-3">{experience.date}</p>

      {isExpanded && (
        <div className="mt-4 space-y-3 transition-all duration-300 ease-in-out">
          {experience.details.map((detail, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3"
              style={{
                animation: `fadeIn 0.3s ease-in-out ${index * 0.1}s both`
              }}
            >
              <span className="text-yellow-400 mt-1 flex-shrink-0">•</span>
              <p className="text-white leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Work() {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <section className="min-h-screen bg-gradient-to-b from-blue-800 to-teal-400 p-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-yellow-400 mb-12">
            Work Experience
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left side: Work Experience Cards */}
            <div className="space-y-6">
              {workExperiences.map((experience) => (
                <WorkCard key={experience.id} experience={experience} />
              ))}
            </div>

            {/* Right side: Illustration */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Briefcase illustration */}
                <div className="relative w-80 h-80">
                  {/* Main briefcase */}
                  <div className="absolute top-24 left-12 w-64 h-48 bg-pink-600 rounded-lg shadow-2xl">
                    {/* Lock/clasp */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-white rounded"></div>
                    {/* Bottom section */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-cyan-400 rounded-b-lg"></div>
                  </div>
                  
                  {/* Handle */}
                  <div className="absolute top-16 left-24 w-40 h-16 border-8 border-gray-700 rounded-t-3xl bg-transparent"></div>
                  
                  {/* Lock tabs */}
                  <div className="absolute top-20 left-8 w-12 h-8 bg-yellow-500 rounded"></div>
                  <div className="absolute top-20 right-8 w-12 h-8 bg-yellow-500 rounded"></div>
                  
                  {/* Document/paper */}
                  <div className="absolute top-32 right-4 w-32 h-40 bg-white rounded-lg shadow-xl transform rotate-12">
                    {/* Hourglass on paper */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-6 bg-blue-800 rounded-t-lg"></div>
                      <div className="w-16 h-20 bg-pink-600 rounded-lg relative overflow-hidden my-1">
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-pink-700"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="w-16 h-6 bg-blue-800 rounded-b-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

