import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:opacity-80 transition">
            KnowledgeBase
          </span>
        </Link>
        <div className="text-xs font-mono tracking-wider text-slate-400 uppercase hidden sm:block">
          SYS.STATUS // READY
        </div>
      </div>
    </nav>
  );
}