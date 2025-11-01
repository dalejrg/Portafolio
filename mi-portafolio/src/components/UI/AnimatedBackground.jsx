
const AnimatedBackground = ({ mousePosition }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute w-[600px] h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"
        style={{
          left: `${mousePosition.x / 15}px`,
          top: `${mousePosition.y / 15}px`,
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
      <div className="absolute w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 top-1/4 right-1/4" />
      <div className="absolute w-[600px] h-[600px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000 bottom-1/4 left-1/3" />
      
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-purple-300 rounded-full animate-float-particle opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;