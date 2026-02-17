
import React, { useState, useEffect, useRef } from 'react';

const SKILLS_LIST = [
  { name: 'Frontend Development', level: 95, color: 'bg-sky-500', glow: 'shadow-sky-500/40' },
  { name: 'Backend Systems', level: 85, color: 'bg-indigo-500', glow: 'shadow-indigo-500/40' },
  { name: 'AI & Machine Learning', level: 90, color: 'bg-purple-500', glow: 'shadow-purple-500/40' },
  { name: 'Cloud Infrastructure', level: 75, color: 'bg-emerald-500', glow: 'shadow-emerald-500/40' },
  { name: 'UI/UX Design', level: 80, color: 'bg-pink-500', glow: 'shadow-pink-500/40' },
  { name: 'System Architecture', level: 88, color: 'bg-amber-500', glow: 'shadow-amber-500/40' },
];

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 px-6 bg-slate-900/50 scroll-mt-20 overflow-hidden relative"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Column: Progress Bars */}
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Technical <span className="text-sky-400">Expertise</span>
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg max-w-xl">
              I specialize in building high-performance applications with a focus on modern architectures and seamless user experiences.
            </p>
          </div>
          
          <div className="space-y-10">
            {SKILLS_LIST.map((skill, index) => (
              <div 
                key={skill.name} 
                className={`group transition-all duration-700 ease-out`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0
                }}
              >
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1 block mono">Domain</span>
                    <span className="font-semibold text-slate-200 group-hover:text-white transition-colors text-lg">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sky-400 mono text-xl font-bold">
                    {isVisible ? skill.level : 0}%
                  </span>
                </div>
                
                <div className="relative h-4 w-full bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5 group-hover:border-white/10 transition-colors">
                  {/* The Background Track Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"></div>
                  
                  {/* The Active Bar */}
                  <div 
                    className={`absolute inset-y-0 left-0 ${skill.color} transition-all duration-[2000ms] cubic-bezier(0.34, 1.56, 0.64, 1)`} 
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${(index * 150) + 400}ms`,
                    }}
                  >
                    {/* Inner highlight for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                    
                    {/* Animated tip glow */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-full bg-white blur-md opacity-50"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Stack Grid */}
        <div className="relative">
          <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-500 ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            {[
              { name: 'React', desc: 'Expert', icon: '⚛️', color: 'hover:border-sky-500/40' },
              { name: 'Node.js', desc: 'Advanced', icon: '🟢', color: 'hover:border-green-500/40' },
              { name: 'TypeScript', desc: 'Expert', icon: '🟦', color: 'hover:border-blue-500/40' },
              { name: 'PostgreSQL', desc: 'Advanced', icon: '🐘', color: 'hover:border-indigo-500/40' },
              { name: 'Docker', desc: 'Mid-Senior', icon: '🐳', color: 'hover:border-sky-600/40' },
              { name: 'Gemini AI', desc: 'Expert', icon: '✨', color: 'hover:border-purple-500/40' },
              { name: 'Tailwind', desc: 'Expert', icon: '🎨', color: 'hover:border-cyan-500/40' },
              { name: 'Next.js', desc: 'Advanced', icon: '🚀', color: 'hover:border-white/40' },
            ].map((item, index) => (
              <div 
                key={item.name} 
                className={`p-6 glass rounded-2xl border-slate-800 transition-all duration-500 group hover:-translate-y-2 cursor-default flex flex-col items-center text-center ${item.color}`}
                style={{ 
                  transitionDelay: `${(index * 75) + 600}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0
                }}
              >
                <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-500 transform-gpu">{item.icon}</div>
                <div className="text-white font-bold text-lg mb-1 group-hover:text-sky-400 transition-colors">{item.name}</div>
                <div className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mono font-bold">{item.desc}</div>
              </div>
            ))}
          </div>
          
          {/* Floating Accents */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-sky-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .cubic-bezier {
          transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </section>
  );
};

export default Skills;
