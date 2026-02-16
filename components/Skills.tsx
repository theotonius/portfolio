
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { subject: 'Frontend', A: 95, fullMark: 100 },
  { subject: 'Backend', A: 85, fullMark: 100 },
  { subject: 'UI/UX', A: 80, fullMark: 100 },
  { subject: 'AI Integration', A: 90, fullMark: 100 },
  { subject: 'DevOps', A: 75, fullMark: 100 },
  { subject: 'Architecture', A: 88, fullMark: 100 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical <span className="text-sky-400">Expertise</span></h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            I don't just write code; I architect systems that scale. My toolkit is focused on modern, type-safe technologies and AI-driven development patterns.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'React & Next.js', icon: '⚛️' },
              { name: 'TypeScript', icon: 'TS' },
              { name: 'Node.js/Express', icon: '🟢' },
              { name: 'PostgreSQL/Redis', icon: '🐘' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'Gemini/OpenAI', icon: '🤖' },
            ].map(skill => (
              <div key={skill.name} className="p-4 glass rounded-xl flex items-center space-x-3 hover:border-sky-500/30 transition-all">
                <span className="text-lg font-mono text-sky-400">{skill.icon}</span>
                <span className="font-medium text-slate-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[400px] glass rounded-3xl p-6 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Skill Level"
                dataKey="A"
                stroke="#38bdf8"
                fill="#38bdf8"
                fillOpacity={0.4}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                itemStyle={{ color: '#f8fafc' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Skills;
