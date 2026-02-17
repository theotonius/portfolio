
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
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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
      className="py-24 px-6 bg-slate-900/50 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical <span className="text-sky-400">Expertise</span></h2>
          <p className="text-slate-400 mb-10 leading-relaxed text-lg">
            I build modern, scalable applications using the latest industry standards. My expertise spans across the entire stack, with a deep focus on performance and developer experience.
          </p>
          
          <div className="grid grid-cols-1 gap-8">
            {SKILLS_LIST.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sky-400 mono text-sm font-medium">
                    {isVisible ? skill.level : 0}%
                  </span>
                </div>
                <div className="h-3 w-full bg-slate-800/80 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                  <div 
                    className={`h-full ${skill.color} transition-all duration-[1500ms] ease-out shadow-lg ${skill.glow}`} 
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 150}ms`,
                      boxShadow: isVisible ? `0 0 15px ${skill.glow.split('-')[1]}` : 'none'
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {[
            { name: 'React', desc: 'Expert', icon: '⚛️' },
            { name: 'Node.js', desc: 'Advanced', icon: '🟢' },
            { name: 'TypeScript', desc: 'Expert', icon: '🟦' },
            { name: 'PostgreSQL', desc: 'Advanced', icon: '🐘' },
            { name: 'Docker', desc: 'Intermediate', icon: '🐳' },
            { name: 'Gemini AI', desc: 'Expert', icon: '✨' },
            { name: 'Tailwind', desc: 'Expert', icon: '🎨' },
            { name: 'Next.js', desc: 'Advanced', icon: '🚀' },
          ].map((item, index) => (
            <div 
              key={item.name} 
              className="p-6 glass rounded-2xl border-slate-800 hover:border-sky-500/40 transition-all duration-500 group hover:-translate-y-2 cursor-default"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl mb-3 group-hover:scale-125 transition-transform duration-300 transform-gpu origin-left">{item.icon}</div>
              <div className="text-sky-400 font-bold text-lg mb-1 group-hover:text-sky-300 transition-colors">{item.name}</div>
              <div className="text-slate-500 text-xs uppercase tracking-widest mono font-medium">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
