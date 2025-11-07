import React from 'react';
import { Cpu, Server, Cog, CircuitBoard } from 'lucide-react';

const items = [
  {
    icon: Cpu,
    title: 'Neural Core',
    desc: 'A central AI brain orchestrating real-time inference across the lab.',
  },
  {
    icon: Server,
    title: 'Clustered Servers',
    desc: 'High-density racks connected with low-latency fabric for massive throughput.',
  },
  {
    icon: Cog,
    title: 'Robotic Arms',
    desc: 'Programmable arms assemble, calibrate, and test modules on the fly.',
  },
  {
    icon: CircuitBoard,
    title: 'Workstations',
    desc: 'Operator consoles visualize metrics and manage training pipelines.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Inside the AI Workshop</h2>
        <p className="mt-3 text-slate-300">
          A seamless mesh of compute, robotics, and human-in-the-loop interfaces.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-cyan-500/20 p-2 text-cyan-300">
                <Icon size={20} />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-slate-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
