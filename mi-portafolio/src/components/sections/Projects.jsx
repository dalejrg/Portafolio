import { useState } from 'react';
import ProjectCard from '../UI/ProjectCard';
import { projects } from '../../data/projects';
import { Github } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="md:h-[75px] text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-reveal">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in-up">Algunas aplicaciones web que he construido</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          ))}
        </div>

        <div className="flex justify-center mt-16 animate-fade-in-up" style={{ animationDelay: `${projects.length * 0.2}s` }}>
          <a
            href="https://github.com/dalejrg?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-purple-300 text-purple-700 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-2 hover:border-purple-400"
          >
            <Github size={20} className="animate-pulse-subtle" />
            Ver más en mi GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;