import { GraduationCap, Award } from 'lucide-react';
import { education } from '../../data/education';

const Education = () => {
  return (
    <section id="education" className="relative py-32 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-3 mb-16 animate-fade-in-up">
          <GraduationCap className="text-pink-400 animate-bounce-subtle" size={40} />
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Educación
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 ${edu.borderColor} transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${edu.shadowColor} animate-scale-in`}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <Award 
                className={`${edu.iconColor} mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} 
                size={32} 
              />
              <h3 className={`text-2xl font-bold text-gray-800 mb-2 ${edu.gradient} transition-colors`}>
                {edu.institution}
              </h3>
              <p className="text-lg text-purple-600 font-semibold mb-1">{edu.degree}</p>
              <p className="text-gray-600 font-mono text-sm">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;