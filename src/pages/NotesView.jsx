import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { subjects } from '../data/subjects';

export default function NotesView() {
  const { subjectId } = useParams();
  const [markdown, setMarkdown] = useState('');
  const subject = subjects.find(s => s.id === subjectId);

  useEffect(() => {
    if (subject) {
      fetch(subject.notesPath)
        .then(res => res.text())
        .then(text => setMarkdown(text))
        .catch(() => setMarkdown('# Error\nCould not load target documentation module.'));
    }
  }, [subject]);

  if (!subject) return <div className="p-6 text-center text-slate-500">Subject registry missing.</div>;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Mobile Sticky-Action Header Sub-layer */}
      <div className="mb-4 flex items-center">
        <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800 transition py-2">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Core Title Panel */}
        <div className="p-6 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="text-2xl md:text-3xl font-extrabold tracking-tight">{subject.title}</div>
          <p className="text-slate-400 text-xs md:text-sm mt-2">Comprehensive Technical Reference Documentation</p>
        </div>

        {/* Dynamic Reader Box */}
        <div className="p-6 md:p-10">
          <article className="prose prose-slate max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-xl prose-h1:md:text-2xl prose-h1:border-b prose-h1:pb-2
            prose-h2:text-lg prose-h2:md:text-xl
            prose-p:text-sm prose-p:md:text-base prose-p:leading-relaxed text-slate-700
            prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:font-mono prose-code:text-rose-600 before:content-none after:content-none
            prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:p-4 prose-pre:text-xs prose-pre:overflow-x-auto">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}