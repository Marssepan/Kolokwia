import React from 'react';
import { subjects } from '../data/subjects';
import SubjectCard from '../components/SubjectCard';

export default function Home() {
  return (
    <div className="space-y-8 py-4">
      <div className="max-w-xl space-y-2">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-950">
          Technical Core Modules
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          Select an engineered domain below to analyze source notes and launch verification sequences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
}