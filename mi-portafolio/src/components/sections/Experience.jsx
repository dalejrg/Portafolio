import { Briefcase, Sparkles } from 'lucide-react';
import { experiences } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="relative py-32 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-3 mb-16 animate-fade-in-up">
          <Briefcase className="text-purple-400 animate-bounce-subtle" size={40} />
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experiencia
          </h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-100 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-200/50 hover:scale-[1.03] animate-slide-in-left"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all group-hover:scale-105 inline-block">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-purple-500 font-semibold group-hover:scale-105 transition-transform inline-block ml-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 italic mt-1">{exp.description}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0 font-mono text-sm group-hover:text-purple-600 transition-colors">
                  {exp.period}
                </span>
              </div>
              
              <div className="mb-6">
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 group-hover:bg-purple-100 transition-all hover:scale-105 hover:translate-x-2"
                      style={{
                        animationDelay: `${i * 0.1}s`
                      }}
                    >
                      <Sparkles className="text-purple-400 flex-shrink-0 mt-1 animate-pulse-subtle" size={16} />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-xl text-sm font-medium text-purple-700 hover:scale-110 hover:-translate-y-1 transition-all hover:shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;