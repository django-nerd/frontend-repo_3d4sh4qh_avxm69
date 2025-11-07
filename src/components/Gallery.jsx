import React from 'react';
import { Server, Cpu, Bot, Monitor, Brain, HardDrive } from 'lucide-react';

const items = [
  {
    icon: Server,
    title: 'Server Fabric',
    desc: 'High-density racks with liquid-cooled accelerators and fiber backbone.',
  },
  {
    icon: Cpu,
    title: 'Inference Nodes',
    desc: 'Edge compute units dispatch and balance real-time model calls.',
  },
  {
    icon: Bot,
    title: 'Robotic Arms',
    desc: 'Precision manipulators assemble, test, and swap modules autonomously.',
  },
  {
    icon: Monitor,
    title: 'Operator Consoles',
    desc: 'Telemetry dashboards and pipeline controls for human-in-the-loop.',
  },
  {
    icon: Brain,
    title: 'AI Core',
    desc: 'The central brain aggregates signals and coordinates the workshop.',
  },
  {
    icon: HardDrive,
    title: 'Storage Arrays',
    desc: 'NVMe clusters stream datasets with ultra-low latency.',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Workshop Gallery</h2>
        <p className="mt-3 text-slate-300">
          A peek at the interconnected systems powering the AI workshop.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:bg-white/10"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
            <div className="relative z-10 flex items-center gap-3">
              <span className="rounded-lg bg-cyan-500/15 p-3 text-cyan-300 ring-1 ring-cyan-500/20">
                <Icon size={22} />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="relative z-10 mt-3 text-sm text-slate-300">{desc}</p>
            <div className="relative z-10 mt-6 flex items-center gap-2 text-cyan-300">
              <span className="text-xs font-medium">View details</span>
              <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707A1 1 0 118.707 5.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
