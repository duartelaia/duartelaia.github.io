import React from 'react';
import { Github, Mail, Phone, MapPin, ExternalLink, Shield, Server, Cpu, Globe } from 'lucide-react';

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
      repo: "Example/OpenSourceProject",
      desc: "Improved documentation for distributed consensus modules and patched a minor memory leak in the C++ core.",
      link: "#"
    }
    // Add more here
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto pt-20 pb-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <h1 className="text-5xl font-bold text-white tracking-tight">Duarte Laia</h1>
            <p className="text-xl text-blue-400 mt-2 font-mono italic">MSc Computer Science @ IST</p>
            <div className="flex flex-wrap gap-4 mt-6 text-sm">
              <span className="flex items-center gap-1"><Mail size={16}/> duarte.laia04@gmail.com</span>
              <span className="flex items-center gap-1"><Phone size={16}/> +351 962497796</span>
              <span className="flex items-center gap-1"><MapPin size={16}/> Lisbon, PT</span>
            </div>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 backdrop-blur-sm">
            <h2 className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">Specialization</h2>
            <div className="flex gap-3">
              <Shield className="text-red-400" title="Cybersecurity" />
              <Server className="text-blue-400" title="Distributed Systems" />
              <Cpu className="text-green-400" title="System Architecture" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-24 pb-20">
        
        {/* Education & Grades */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-blue-500">01.</span> Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-2 border-blue-500/30 pl-6">
              <h4 className="text-lg font-bold text-slate-100">Master of CS & Engineering</h4>
              <p className="text-blue-400 text-sm mb-2">2025 - Present | Current: 17.2/20</p>
              <ul className="text-sm space-y-1 text-slate-400">
                <li>• Distributed Applications: 18/20</li>
                <li>• Network Security: 17/20</li>
                <li>• Forensics: 17/20</li>
              </ul>
            </div>
            <div className="border-l-2 border-slate-700 pl-6">
              <h4 className="text-lg font-bold text-slate-100">Bachelor in CS & Engineering</h4>
              <p className="text-slate-400 text-sm mb-2">2022 - 2025 | Final: 17.38/20</p>
              <p className="text-xs text-green-500 font-mono italic">Academic Merit Award 22/23 & 23/24</p>
            </div>
          </div>
        </section>

        {/* Relevant Projects */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-blue-500">02.</span> Technical Projects
          </h3>
          <div className="grid gap-4">
            {projects.map((p, i) => (
              <a key={i} href={p.link} target="_blank" rel="noreferrer" 
                 className="group p-6 bg-slate-800/40 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{p.title}</h4>
                  <ExternalLink size={18} className="text-slate-500" />
                </div>
                <p className="mt-2 text-slate-400 max-w-2xl">{p.desc}</p>
                <div className="flex gap-2 mt-4">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20 uppercase font-bold tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Open Source Contributions */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-blue-500">03.</span> Open Source Contributions
          </h3>
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            {contributions.length > 0 ? (
              <div className="grid gap-6">
                {contributions.map((c, i) => (
                  <div key={i} className="flex items-start gap-4 pb-6 border-b border-slate-800 last:border-0">
                    <Github className="text-slate-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-mono text-blue-400">{c.repo}</h4>
                      <p className="text-sm text-slate-400 mt-1">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-500 italic">Contributions incoming as I explore secure P2P networks...</p>
            )}
          </div>
        </section>

      </main>

      <footer className="text-center py-10 border-t border-slate-800">
        <p className="text-xs font-mono text-slate-600">Built with React & Tailwind • Duarte Laia 2026</p>
      </footer>
    </div>
  );
};

export default App;