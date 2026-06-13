import React from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-xl mx-auto space-y-2 px-2">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Select a Subject
        </h1>
        <p className="text-sm md:text-base text-slate-500">
          Review structural technical notes or test your parameters with active quiz cycles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {subjects.map((subject) => (
          <div 
            key={subject.id} 
            className="group relative border border-slate-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl shadow-sm mb-4 group-hover:scale-105 transition-transform">
                {subject.icon}
              </div>
              <h2 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                {subject.title}
              </h2>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                {subject.description}
              </p>
            </div>

            {/* Touch-optimized actions layout */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <Link 
                to={`/notes/${subject.id}`} 
                className="flex items-center justify-center bg-slate-50 hover:bg-slate-100 active:bg-slate-200 text-slate-700 py-3 px-4 rounded-xl font-semibold text-xs tracking-wide uppercase border border-slate-200 transition"
              >
                Notes
              </Link>
              <Link 
                to={`/quiz/${subject.id}`} 
                className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white py-3 px-4 rounded-xl font-semibold text-xs tracking-wide uppercase shadow-sm shadow-indigo-100 transition"
              >
                Take Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}