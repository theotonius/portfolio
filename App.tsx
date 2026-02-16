
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="relative selection:bg-sky-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="py-24 px-6 border-y border-slate-800/50 scroll-mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 aspect-square glass rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 p-2">
              <img 
                src="https://picsum.photos/600/600?random=10" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Hello, I'm <span className="text-sky-400">Your Developer</span></h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I am a passionate Full Stack Developer with over 5 years of experience building scalable web solutions. 
                  My focus lies in creating efficient, secure, and user-friendly applications that bridge the gap between 
                  technical excellence and human-centered design.
                </p>
                <p>
                  From building real-time collaboration tools to implementing sophisticated AI integrations, I enjoy 
                  tackling complex challenges. I believe in clean code, robust testing, and the power of collaborative development.
                </p>
              </div>
              
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mono">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">40+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mono">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mono">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />

        <section id="contact" className="py-24 px-6 scroll-mt-20">
          <div className="max-w-3xl mx-auto glass rounded-[3rem] p-10 md:p-16 text-center">
            <h2 className="text-4xl font-bold mb-4">Let's <span className="gradient-text">Collaborate</span></h2>
            <p className="text-slate-400 mb-10">Have a project in mind? Let's turn your vision into reality.</p>
            
            <form className="space-y-4 max-w-lg mx-auto">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 focus:outline-none focus:border-sky-500/50 transition-all"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 focus:outline-none focus:border-sky-500/50 transition-all"
              />
              <textarea 
                rows={4} 
                placeholder="Your Message" 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 focus:outline-none focus:border-sky-500/50 transition-all"
              ></textarea>
              <button className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold transition-all transform active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p className="mb-4 font-mono tracking-tighter text-xl text-slate-300">&lt;DEV/&gt;</p>
        <p>&copy; {new Date().getFullYear()} - Designed & Built with ❤️ and Gemini AI</p>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
