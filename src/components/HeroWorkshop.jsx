import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroWorkshop = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        {/* Using validated Spline asset for reliable loading */}
        <Spline
          scene="https://prod.spline.design/EaQv24wazlheTQrd/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(56,189,248,0.25),rgba(2,6,23,0))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.9))]" />

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-28">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur">
          Live 3D AI Workshop
        </span>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Build the Brain. Power the Future.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Explore an interactive AI workshop featuring server racks, robotic arms, and workstations all connected into a single intelligent core.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#features"
            className="rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
          >
            Explore the Lab
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Book a Workshop
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Server Nodes', value: '32' },
            { label: 'Robotic Arms', value: '6' },
            { label: 'Compute TFLOPS', value: '520+' },
            { label: 'Latency (ms)', value: '~3' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-white/10 bg-white/5 p-4 text-left backdrop-blur"
            >
              <div className="text-xl font-bold text-white">{item.value}</div>
              <div className="text-xs uppercase tracking-wide text-slate-400">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroWorkshop;
