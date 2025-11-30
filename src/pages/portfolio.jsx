import ProjectCard from '../components/projectcard';
import plMatchPredictorImg from '../assets/Premier-League-symbol.png';
import aiCodeReviewerImg from '../assets/AICodeReviewer-page.jpg';
import genUIDesignerImg from '../assets/GenUIDesigner-page.webp';

const projects = [
  {
    title: 'PL Match Predictor',
    tech: 'DJango,Python, scikit-learn, Pandas',
    image: plMatchPredictorImg,
    href: 'https://pl-predictor-website.vercel.app/',
  },
  {
    title: 'AI Code Reviewer',
    tech: 'NextJS, Typescript, OpenAI API',
    image: aiCodeReviewerImg,
    href: 'https://ai-coder-reviewer.vercel.app/',
  },
  {
    title: 'Generative UI Designer',
    tech: 'NextJS, Typescript, OpenAI API',
    image: genUIDesignerImg,
    href: 'https://generative-ui-designer.vercel.app/',
  },
  // add more projects...
];

export default function Portfolio() {

return (
    <section className="min-h-screen pt-16 md:pt-0 px-4 py-8 md:p-8 md:pl-24 bg-gradient-to-b from-blue-800 to-teal-400">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-8 mt-4 md:mt-8">Portfolio</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {projects.map((proj) => (
            <ProjectCard
              key={proj.title}
              image={proj.image}
              title={proj.title}
              tech={proj.tech}
              href={proj.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}