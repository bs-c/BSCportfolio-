import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a className="font-bold text-xl tracking-tighter text-white" href="#">
          BSC's &nbsp; PORTFOLIO<span className="text-cyan-500">_</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-mono text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            01. ABOUT
          </a>
          <a href="#services" className="hover:text-cyan-400 transition-colors">
            02. SERVICES
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            03. WORK
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            04. CONTACT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 font-mono text-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "[ CLOSE ]" : "[ MENU ]"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 py-4 px-6 flex flex-col gap-4 font-mono text-sm text-slate-400">
          <a href="#about" onClick={() => setIsOpen(false)}>
            01. ABOUT
          </a>
          <a href="#services" onClick={() => setIsOpen(false)}>
            02. SERVICES
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            03. WORK
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            04. CONTACT
          </a>
        </div>
      )}
    </nav>
  );
}
