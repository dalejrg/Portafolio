import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="md:h-[70px] text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            ¿Hablamos?
          </h2>
          <p className="text-xl text-gray-700 flex items-center justify-center gap-2">
            Estoy disponible para nuevos proyectos y colaboraciones
            <Heart className="text-pink-400 animate-pulse-subtle" size={24} />
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="mailto:dayanarodriguez120@gmail.com"
            className="group px-8 py-4 bg-gradient-to-r from-purple-300 to-pink-300 text-purple-800 rounded-xl font-semibold shadow-lg shadow-purple-200/50 hover:shadow-2xl hover:shadow-purple-300/80 transition-all hover:scale-110 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Mail size={20} className="group-hover:rotate-12 transition-transform" />
            dayanarodriguez120@gmail.com
          </a>
          <a
            href="tel:+573003351917"
            className="px-8 py-4 border-2 border-purple-300 text-purple-700 rounded-xl font-semibold hover:bg-purple-50 transition-all hover:scale-110 hover:-translate-y-1"
          >
            +57 300 335 1917
          </a>
        </div>
        
        <div className="flex justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://www.linkedin.com/in/dayana-rodriguez-guzman-b3381b214"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-purple-100 rounded-2xl hover:bg-purple-200 transition-all hover:scale-125 hover:rotate-12 group"
          >
            <Linkedin className="text-purple-600 group-hover:text-purple-700 transition-colors" size={28} />
          </a>
          <a
            href="https://github.com/dalejrg"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-pink-100 rounded-2xl hover:bg-pink-200 transition-all hover:scale-125 hover:rotate-12 group"
          >
            <Github className="text-pink-600 group-hover:text-pink-700 transition-colors" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;