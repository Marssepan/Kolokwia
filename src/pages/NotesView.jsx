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
        .catch(() => setMarkdown('# Error\nCould not parse core documentation repository markdown.'));
    }
  }, [subject]);

  if (!subject) return <div className="p-6 text-center text-slate-500">Registry target invalid.</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center">
        <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-700 transition">
          ← Main Registry
        </Link>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        {/* Document Header banner */}
        <div className="p-6 md:p-8 bg-slate-950 text-white border-b border-slate-800">
          <div className="text-xl md:text-2xl font-bold tracking-tight">{subject.title}</div>
          <p className="text-slate-400 font-mono text-xs mt-1">DOC_ID: {subject.id.toUpperCase()} // REF_DATA</p>
        </div>

        {/* Markdown Text Area */}
        <div className="p-6 md:p-10">
          <article className="prose prose-slate max-w-none 
            prose-headings:font-bold prose-headings:text-slate-950 prose-headings:tracking-tight
            prose-h1:text-xl prose-h1:md:text-2xl prose-h1:border-b prose-h1:pb-2
            prose-h2:text-lg prose-h2:md:text-xl
            prose-p:text-sm prose-p:md:text-base prose-p:leading-relaxed text-slate-600
            prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:font-mono prose-code:text-rose-600 before:content-none after:content-none
            prose-pre:bg-slate-950 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:p-4 prose-pre:text-xs prose-pre:overflow-x-auto">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>

        {/* Dynamic Contextual Quiz Trigger Box */}
        <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-0.5">
            <div className="text-sm font-bold text-slate-900">Ready to test your knowledge?</div>
            <p className="text-xs text-slate-500">Run through an adaptive self-evaluation check based on these logs.</p>
          </div>
          <Link 
            to={`/quiz/${subject.id}`} 
            className="inline-flex items-center justify-center text-center bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm shadow-indigo-100 transition whitespace-nowrap"
          >
            Launch Subject Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}