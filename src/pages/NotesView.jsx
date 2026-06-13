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
        .catch(() => setMarkdown('# Error\nCould not load notes for this subject.'));
    }
  }, [subject]);

  if (!subject) return <div className="p-6">Subject not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-sm rounded-xl mt-6 border">
      <Link to="/" className="text-blue-600 hover:underline text-sm font-medium mb-4 inline-block">← Back to Dashboard</Link>
      <article className="prose max-w-none mt-4">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </div>
  );
}