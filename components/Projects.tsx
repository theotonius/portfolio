
import React from 'react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Smart CRM',
    description: 'A customer relationship management tool with automated lead scoring using LLMs.',
    tags: ['Next.js', 'PostgreSQL', 'Gemini'],
    image: 'https://picsum.photos/800/600?random=1',
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'CloudScale Dashboard',
    description: 'Real-time infrastructure monitoring dashboard for Kubernetes clusters.',
    tags: ['React', 'D3.js', 'Redis'],
    image: 'https://picsum.photos/800/600?random=2',
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'E-Stream Commerce',
    description: 'High-concurrency streaming service marketplace with instant checkout.',
    tags: ['TypeScript', 'Go', 'WebRTC'],
    image: 'https://picsum.photos/800/600?random=3',
    link: '#',
    github: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-sky-400">Projects</span></h2>
            <p className="text-slate-400 max-w-xl">Selected works that showcase my technical depth and problem-solving skills.</p>
          </div>
          <button className="text-sky-400 font-medium hover:underline flex items-center gap-2">
            View All Projects 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <div key={project.id} className="group glass rounded-2xl overflow-hidden hover:border-sky-500/50 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-100">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center space-x-4">
                  <a href={project.github} className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href={project.link} className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
