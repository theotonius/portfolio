
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden relative">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      
      <div className="max-w-4xl text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-widest">
          Available for Hire
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Crafting Digital <br />
          <span className="gradient-text">Experiences</span> with AI & Code
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm a senior developer specialized in building high-performance web applications using React, Node.js, and Generative AI integration.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-sky-600/20">
            View My Work
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 rounded-xl font-semibold transition-all border-slate-700">
            Contact Me
          </a>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="mono text-xl">React</span>
          <span className="mono text-xl">TypeScript</span>
          <span className="mono text-xl">Node.js</span>
          <span className="mono text-xl">Gemini API</span>
          <span className="mono text-xl">Tailwind</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
