import { Menu, X } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen, activeSection, isScrolled, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Educación' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-purple-100/50 border-b border-purple-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 group cursor-pointer">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent group-hover:scale-125 group-hover:rotate-3 transition-all duration-300">
              &lt;DR/&gt;
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-xl capitalize transition-all duration-300 relative overflow-hidden ${
                  activeSection === item.id 
                    ? 'text-purple-700' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl animate-slide-bg" />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-purple-600 hover:scale-110 transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-purple-100 animate-slide-down">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-xl capitalize transition-all hover:translate-x-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;