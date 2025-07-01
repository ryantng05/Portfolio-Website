import ProjectCard from '../components/projectcard';

const projects = [
  {
    title: 'Wrestling Team Manager',
    tech: 'C#, Console App, Visual Studio',
    image: '/images/exam_scheduler.png',
    href: 'https://github.com/ryantng05/Wrestling_Team_Manager',
  },
  {
    title: 'Minecraft Plugin Development',
    tech: 'Java, SpigotMC, IntelliJ',
    image: '/images/empor.png',
    href: 'https://github.com/ryantng05/Minecraft-Plugin',
  },
  {
    title: 'PL Match Predictor',
    tech: 'Python, scikit-learn, Pandas',
    image: '/images/pl_predictor.png',
    href: 'https://github.com/yourusername/pl-predictor',
  },
  {
    title: 'PremierZone',
    tech: 'ReactJS, PostgreSQL, Spring Boot',
    image: '/images/premierzone.png',
    href: 'https://github.com/yourusername/premierzone',
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