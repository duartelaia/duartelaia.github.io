import React, { useState, useEffect, useRef } from 'react';
import { Github, Mail, Phone, MapPin, ExternalLink, Shield, Server, Network, Terminal, Code, Database, Lock, Circle } from 'lucide-react';

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setVisible(true);
      });
    }, { threshold: 0.1 });
    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div ref={domRef} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {children}
    </div>
  );
};

const App = () => {
  const projects = [
    {
      title: "DeathNode",
      link: "https://github.com/tecnico-sec/A01-DeathNode",
      desc: "Decentralized, anonymous reporting platform. Peer-backed architecture with cryptographic verification and DMZ protected storage.",
      tags: ["Cryptography", "P2P", "Security"]
    },
    {
      title: "Dida-meetings",
      link: "https://github.com/RafaelAvelar14/DIDA---Project",
      desc: "Distributed consensus system using Vertical Multi-Paxos for high availability and fault tolerance in meeting management.",
      tags: ["Distributed Systems", "Paxos", "Fault Tolerance"]
    },
    {
      title: "Chat-App Microservices",
      link: "https://github.com/duartelaia/agisit",
      desc: "Real-time communication platform deployed on GCP/Kubernetes. Automated with Terraform/Ansible with Prometheus monitoring.",
      tags: ["Kubernetes", "GCP", "DevOps"]
    }
  ];

  const contributions = [
    {
      repo: "Metabase",
      title: "Bug Fix: Navigation State Reset",
      desc: "Resolved a critical state management issue where object-detail navigation state persisted across query changes, preventing invalid application states.",
      status: "Committed",
      tech: ["React"],
      link: "https://github.com/duartelaia/metabase/tree/Object-detail-navigation-state-is-not-reset-when-query-changes-which-may-lead-to-an-invalid-state"
    },
    {
      repo: "Metabase",
      title: "Feature Proposal: Multi-Dimensional Breakouts",
      desc: "Engineered a proposal for multi-dimensional breakouts in bar charts, enabling series coloring based on secondary data dimensions.",
      status: "Proposed",
      tech: ["React"],
      link: "https://github.com/duartelaia/metabase/tree/Multi-Dimensional_Breakout_for_Series_Color_in_Bar_Charts"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION */}
      <header className="max-w-5xl mx-auto pt-32 pb-24 px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-6xl font-extrabold text-white tracking-tight italic">Duarte Laia</h1>
            <p className="text-2xl text-blue-400 mt-4 font-mono italic">MSc Computer Science @ IST</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mt-4 max-w-xl text-sm text-slate-400">
              <a href="mailto:duarte.laia04@gmail.com" className="flex items-center gap-3 hover:text-blue-400 transition-colors py-1">
                <Mail size={18} className="text-blue-500/70"/> duarte.laia04@gmail.com
              </a>
              <a href="https://github.com/duartelaia" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors py-1">
                <Github size={18} className="text-blue-500/70"/> github.com/duartelaia
              </a>
              <span className="flex items-center gap-3 cursor-default py-1">
                <Phone size={18} className="text-blue-500/70"/> +351 962497796
              </span>
              <span className="flex items-center gap-3 cursor-default py-1">
                <MapPin size={18} className="text-blue-500/70"/> Lisbon, PT
              </span>
            </div>
          </div>
          
          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-right duration-1000">
            <h2 className="text-xs uppercase tracking-[0.2em] text-blue-500 mb-4 font-bold">Specialization</h2>
            <div className="flex gap-5">
              <Shield className="text-red-500 w-8 h-8" title="Cybersecurity" />
              <Server className="text-blue-500 w-8 h-8" title="Distributed Systems" />
              <Network className="text-emerald-500 w-8 h-8" title="Network Architectures" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-48 pb-32">
        
        {/* 2. ABOUT ME SECTION */}
        <FadeInSection>
          <section id="about" className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="text-blue-500 font-mono text-xl">01.</span> About Me
              </h3>
              <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                <p>
                  I am a Master's student at <span className="text-white">Instituto Superior Técnico</span>, specializing in <span className="text-blue-400">Cybersecurity</span> and <span className="text-blue-400">Distributed Systems</span>.
                </p>
                <p>
                  My approach focuses on the design of resilient architectures and secure peer-to-peer networks, ensuring a balance between theoretical design and practical functionality.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 border-2 border-blue-500/20 rounded-xl group-hover:border-blue-500/50 transition-colors duration-500"></div>
                <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-lg border-2 border-slate-800 bg-slate-900 shadow-2xl">
                  <img 
                    src="/photo.jpeg" 
                    alt="Duarte Laia"
                    className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x400?text=DL"; }}
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* 3. EDUCATION SECTION */}
        <FadeInSection>
          <section id="education">
            <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
              <span className="text-blue-500 font-mono text-xl">02.</span> Education
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="group border-l-2 border-blue-500/30 pl-8 hover:border-blue-500 transition-colors">
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">Master of CS & Engineering</h4>
                <p className="text-blue-400 font-mono text-sm mt-1">2025 - Present | Current: 17.2/20</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-400">
                  <p>Distributed Applications</p><p className="text-right text-white">18/20</p>
                  <p>Network Security</p><p className="text-right text-white">17/20</p>
                  <p>Forensics</p><p className="text-right text-white">17/20</p>
                </div>
              </div>
              <div className="group border-l-2 border-slate-800 pl-8 hover:border-slate-600 transition-colors">
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-slate-300 transition-colors">Bachelor in CS & Engineering</h4>
                <p className="text-slate-400 font-mono text-sm mt-1">2022 - 2025 | Final: 17.38/20</p>
                <p className="mt-4 text-xs text-emerald-500 font-mono uppercase tracking-widest">Academic Merit Award 22/23 & 23/24</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* 4. TECHNICAL SKILLS SECTION */}
        <FadeInSection>
          <section id="skills">
            <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
              <span className="text-blue-500 font-mono text-xl">03.</span> Skill Matrix
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Code />, label: "Languages", list: "C/C++, Java, Python" },
                { icon: <Database />, label: "Distributed", list: "gRPC, Paxos" },
                { icon: <Lock />, label: "Security", list: "Cryptography, Forensics" },
                { icon: <Terminal />, label: "DevOps", list: "K8s, Docker, Terraform" }
              ].map((skill, i) => (
                <div key={i} className="p-6 bg-slate-900/20 border border-slate-800 rounded-xl hover:bg-slate-800/30 transition-all text-center md:text-left">
                  <div className="text-blue-400 mb-4 flex justify-center md:justify-start">{skill.icon}</div>
                  <h4 className="text-white font-bold mb-2">{skill.label}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{skill.list}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* 5. PROJECTS SECTION */}
        <FadeInSection>
          <section id="projects">
            <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
              <span className="text-blue-500 font-mono text-xl">04.</span> Selected Work
            </h3>
            <div className="grid gap-6">
              {projects.map((p, i) => (
                <a key={i} href={p.link} target="_blank" rel="noreferrer" 
                   className="group p-8 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/40 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{p.title}</h4>
                    <ExternalLink size={20} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <p className="mt-4 text-slate-400 text-lg leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {p.tags.map(t => (
                      <span key={t} className="text-[11px] px-3 py-1 bg-blue-500/5 text-blue-400 rounded-full border border-blue-500/20 font-semibold uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* 6. OPEN SOURCE SECTION */}
        <FadeInSection>
          <section id="opensource">
            <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
              <span className="text-blue-500 font-mono text-xl">05.</span> Open Source
            </h3>
            <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-10 backdrop-blur-sm">
              <div className="grid gap-8">
                {contributions.map((c, i) => (
                  <a key={i} href={c.link} target="_blank" rel="noreferrer" 
                     className="flex flex-col md:flex-row items-start gap-6 group hover:bg-slate-800/30 p-6 rounded-2xl border-transparent hover:border-slate-700 transition-all duration-300">
                    <div className="p-4 bg-slate-900/60 rounded-xl text-slate-500 group-hover:text-blue-400 transition-colors border border-slate-800">
                      <Github size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h4 className="text-3xl font-mono text-blue-400">{c.repo}</h4>
                        
                        {/* Status Badges */}
                        <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest px-3 py-0.5 bg-emerald-500/10 text-emerald-400 border border-blue-500/20 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                          <Circle size={6} className="fill-emerald-400" /> {c.status}
                        </span>
                      </div>
                      <h5 className="text-white font-bold mb-2 group-hover:text-blue-100 transition-colors text-lg">{c.title}</h5>
                      <p className="text-slate-400 leading-relaxed max-w-2xl text-sm mb-4">{c.desc}</p>
                      
                      {/* Contribution Tech Tags */}
                      <div className="flex gap-2">
                        {c.tech.map(t => (
                          <span key={t} className="text-[9px] px-2 py-0.5 text-slate-500 rounded font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:block self-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
                       <ExternalLink size={20} className="text-blue-500" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

      </main>

      <footer className="text-center py-20 border-t border-slate-900">
        <p className="text-sm font-mono text-slate-600 uppercase tracking-widest">
          Duarte Laia &copy; 2026
        </p>
      </footer>
    </div>
  );
};

export default App;