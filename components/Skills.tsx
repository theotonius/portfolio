
import React from 'react';

const SKILLS_LIST = [
  { name: 'Frontend Development', level: 95, color: 'bg-sky-500' },
  { name: 'Backend Systems', level: 85, color: 'bg-indigo-500' },
  { name: 'AI & Machine Learning', level: 90, color: 'bg-purple-500' },
  { name: 'Cloud Infrastructure', level: 75, color: 'bg-emerald-500' },
  { name: 'UI/UX Design', level: 80, color: 'bg-pink-500' },
  { name: 'System Architecture', level: 88, color: 'bg-amber-500' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical <span className="text-sky-400">Expertise</span></h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            I build modern, scalable applications using the latest industry standards. My expertise spans across the entire stack, with a deep focus on performance and developer experience.
          </p>
          
          <div className="grid grid-cols-1 gap-6">
            {SKILLS_LIST.map(skill => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-200">{skill.name}</span>
                  <span className="text-sky-400 mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} transition-all duration-1000`} 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'React', desc: 'Expert' },
            { name: 'Node.js', desc: 'Advanced' },
            { name: 'TypeScript', desc: 'Expert' },
            { name: 'PostgreSQL', desc: 'Advanced' },
            { name: 'Docker', desc: 'Intermediate' },
            { name: 'Gemini AI', desc: 'Expert' },
            { name: 'Tailwind', desc: 'Expert' },
            { name: 'Next.js', desc: 'Advanced' },
          ].map(item => (
            <div key={item.name} className="p-6 glass rounded-2xl border-slate-800 hover:border-sky-500/30 transition-all group">
              <div className="text-sky-400 font-bold text-lg mb-1 group-hover:scale-110 transition-transform origin-left">{item.name}</div>
              <div className="text-slate-500 text-xs uppercase tracking-widest mono">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
