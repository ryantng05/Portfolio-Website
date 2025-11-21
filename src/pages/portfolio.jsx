import ProjectCard from '../components/projectcard';

const projects = [
  {
    title: 'PL Match Predictor',
    tech: 'DJango,Python, scikit-learn, Pandas',
    image: './src/assets/Premier-League-symbol.png',
    href: 'https://github.com/ryantng05/PLWebsite',
  },
  {
    title: 'AI Code Reviewer',
    tech: 'NextJS, Typescript, OpenAI API',
    image: './src/assets/AICodeReviewer-page.jpg',
    href: 'https://ai-coder-reviewer.vercel.app/',
  },
  {
    title: 'Generative UI Designer',
    tech: 'NextJS, Typescript, OpenAI API',
    image: './src/assets/GenUIDesigner-page.webp',
    href: 'https://generative-ui-designer.vercel.app/',
  },
  // add more projects...
];

export default function Portfolio() {

return (
    <section className="min-h-screen p-8 bg-gradient-to-b from-blue-800 to-teal-400">
      <h1 className="text-5xl font-bold text-yellow-400 mb-8 ml-50 mt-20">Portfolio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ml-55">
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
    </section>
  );
}