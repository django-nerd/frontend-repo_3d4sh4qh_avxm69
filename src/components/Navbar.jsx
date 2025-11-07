import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold text-white">
          AI Workshop
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <a href="#" className="rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400">
          Launch Demo
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
