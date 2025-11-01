import { forwardRef } from 'react';
import { Mail, Rocket, ChevronDown } from 'lucide-react';

const Hero = forwardRef(({ scrollToSection }, ref) => {
  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-float-slow">
          <div className="w-40 h-40 mx-auto bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl shadow-purple-300/50 hover:shadow-purple-400/80 transition-all duration-500 hover:scale-125 hover:rotate-12 relative group cursor-pointer">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 blur-xl opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
            <div className="absolute inset-0 rounded-full animate-pulse-ring" />
            <span className="relative z-10 group-hover:scale-110 transition-transform">DR</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-text-reveal">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent hover:scale-110 transition-all duration-300 animate-gradient-x">
            Dayana Rodríguez
          </span>
        </h1>
        
        <div className="mb-6 overflow-hidden">
          <p className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-semibold animate-slide-up-fade">
            Software Developer
          </p>
        </div>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Transformando ideas en <span className="text-purple-500 font-semibold animate-pulse-text">experiencias digitales</span> increíbles.
          <br />
          <span className="text-pink-500 font-bold animate-bounce-subtle">4 años</span> creando soluciones escalables con React, TypeScript, Next.js y Node.js.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-purple-300 to-pink-300 text-purple-800 rounded-xl font-semibold shadow-lg shadow-purple-200/50 hover:shadow-2xl hover:shadow-purple-300/80 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-2 animate-wiggle"
          >
            Ver Proyectos
            <Rocket className="group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:rotate-12 transition-all duration-300" size={20} />
          </button>
          <a
            href="mailto:dayanarodriguez120@gmail.com"
            className="px-8 py-4 border-2 border-purple-300 text-purple-700 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-2 hover:border-purple-400"
          >
            <Mail size={20} className="animate-pulse-subtle" />
            Contactar
          </a>
        </div>
        
        <button 
          onClick={() => scrollToSection('projects')}
          className="animate-bounce-smooth text-purple-400 hover:text-pink-400 transition-colors hover:scale-125"
        >
          <ChevronDown size={40} />
        </button>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;