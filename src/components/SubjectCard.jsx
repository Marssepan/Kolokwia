import React from 'react';
import { Link } from 'react-router-dom';

export default function SubjectCard({ subject }) {
  return (
    <Link 
      to={`/notes/${subject.id}`}
      className="group relative border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between text-left"
    >
      <div>
        <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-xl shadow-sm mb-4 group-hover:scale-105 transition-transform">
          {subject.icon}
        </div>
        <h2 className="text-lg font-bold text-slate-950 tracking-tight group-hover:text-indigo-600 transition-colors">
          {subject.title}
        </h2>
        <p className="text-slate-500 mt-1.5 text-sm leading-relaxed">
          {subject.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-indigo-600 transition-colors">
        <span>Open Documentation</span>
        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}