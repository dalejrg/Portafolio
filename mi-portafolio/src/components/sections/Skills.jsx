import { Code, Sparkles } from 'lucide-react';
import { skills, softSkills } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-3 mb-16 animate-fade-in-up">
          <Code className="text-blue-400 animate-bounce-subtle" size={40} />
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Habilidades
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/50 animate-scale-in"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 capitalize hover:text-blue-600 transition-colors">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700 hover:bg-blue-100 hover:scale-125 hover:rotate-3 transition-all cursor-default animate-pop-in"
                    style={{
                      animationDelay: `${i * 0.05}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-200/50 hover:scale-[1.02] animate-scale-in">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <Sparkles className="text-purple-400 animate-pulse-subtle" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <span
                key={i}
                className="px-5 py-3 bg-white/70 backdrop-blur-sm rounded-xl font-medium text-purple-700 hover:bg-white transition-all hover:scale-110 hover:-translate-y-1 cursor-default border border-purple-100 hover:border-purple-300 hover:shadow-lg animate-fade-in-up"
                style={{
                  animationDelay: `${i * 0.1}s`
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;