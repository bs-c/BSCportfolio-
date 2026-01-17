import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 px-6 border-t border-slate-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Ready to Collaborate?
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          Whether you need a custom engineering tool, a 3D web visualizer, or
          just want to talk about snowboarding, diving or motorcycling —my inbox
          is open.
        </p>

        <div className="flex justify-center gap-6 mb-16">
          {/* <a
          href="#"
          className="p-4 border border-slate-800 rounded-full hover:border-cyan-500 hover:text-cyan-400 text-slate-400 transition-all"
        >
          <Github size={24} />
        </a> */}
          <a
            href="https://www.linkedin.com/in/bo-sen-chuang-b3345b222"
            target="_blank"
            className="p-4 border border-slate-800 rounded-full hover:border-blue-500 hover:text-blue-500 text-slate-400 transition-all"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:bsc.doken@gmail.com"
            className="p-4 border border-slate-800 rounded-full hover:border-purple-500 hover:text-purple-500 text-slate-400 transition-all"
          >
            <Mail size={24} />
          </a>
        </div>

        <footer className="text-slate-600 text-sm font-mono">
          &copy; {new Date().getFullYear()} Designed & Built by BSC.
        </footer>
      </div>
    </section>
  );
}
