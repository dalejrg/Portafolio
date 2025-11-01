import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index, hoveredProject, setHoveredProject }) => {
  const Icon = project.icon;

  return (
    <div
      onMouseEnter={() => setHoveredProject(index)}
      onMouseLeave={() => setHoveredProject(null)}
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-100 hover:border-purple-300 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200/50 overflow-hidden cursor-pointer animate-scale-in"
      style={{
        animationDelay: `${index * 0.15}s`
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:animate-gradient-rotate`} />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-fast" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-2xl ${project.bgColor} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
            <Icon className={`${project.iconColor} group-hover:animate-spin-slow`} size={28} />
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-purple-50 hover:bg-purple-100 transition-all group/link hover:scale-125 hover:rotate-12"
          >
            <ExternalLink className="text-purple-600 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" size={20} />
          </a>
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300 group-hover:scale-105">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-purple-50 border border-purple-200 rounded-lg text-sm font-medium text-purple-700 hover:bg-purple-100 transition-all hover:scale-110 hover:-translate-y-1"
              style={{
                animationDelay: `${i * 0.1}s`
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {hoveredProject === index && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 animate-shimmer-fast" />
      )}
      
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-200/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ProjectCard;