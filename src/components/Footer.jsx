import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} AI Workshop. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
