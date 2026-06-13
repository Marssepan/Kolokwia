import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // Fixes the <sup> and <sub> bugs
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
        .catch(() => setMarkdown('# Error\nCould not load notes.'));
    }
  }, [subject]);

  if (!subject) return <div className="main-layout">Subject registry missing.</div>;

  return (
    <div className="main-layout">
      <div className="back-nav">
        <Link to="/" className="back-link">← Back to Dashboard</Link>
      </div>

      <div className="document-container">
        <div className="document-header">
          <h1 className="document-title">{subject.title}</h1>
          <p className="document-meta">DOC_ID: {subject.id.toUpperCase()} // TECHNICAL NOTES</p>
        </div>

        <div className="document-body">
          <article className="markdown-content">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
          </article>
        </div>

        {/* Spacious, balanced action box for Quiz launch */}
        <div className="quiz-trigger-zone">
          <div className="quiz-trigger-text">
            <h3>Ready for verification?</h3>
            <p>Launch a validation sequence using parameters from these core notes.</p>
          </div>
          <Link to={`/quiz/${subject.id}`} className="quiz-launch-btn">
            Start Subject Quiz →
          </Link>
        </div>
      </div>
    </div>
  );
}