import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { subjects } from '../data/subjects';

export default function NotesView() {
  const { subjectId } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  const subject = subjects.find(s => s.id === subjectId);

  useEffect(() => {
    // If there's no subject or it's a PDF module, abort fetch instantly
    if (!subject || !subject.notesPath) {
      setLoading(false);
      return;
    }

    setLoading(true);
    
    fetch(`${import.meta.env.BASE_URL}${subject.notesPath}`)
      .then(res => {
        if (!res.ok) throw new Error("Network logs failed fetching asset");
        return res.text();
      })
      .then(text => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setMarkdown('# Error\nCould not parse configuration notes data stream.');
        setLoading(false);
      });

  }, [subjectId]);

  if (!subject) {
    return <div className="main-layout">Subject registry entry missing.</div>;
  }

  // 🔽 NATIVE EMBED VIEW: Fully safe now that fetch isn't hijacking the file
  if (subject.pdfPath) {
    const fileUrl = `${import.meta.env.BASE_URL}${subject.pdfPath}`;

    return (
      <div className="main-layout">
        <div className="back-nav">
          <Link to="/" className="back-link">← Back to Dashboard</Link>
        </div>

        <div className="document-container">
          <div className="document-header">
            <h1 className="document-title">{subject.title}</h1>
            <p className="document-meta">DOC_ID: {subject.id.toUpperCase()} // NATIVE_PDF_VIEW</p>
          </div>

          <div className="pdf-frame-wrapper">
            <iframe
              src={`${fileUrl}#toolbar=0`} /* #toolbar=0 keeps the layout clean and minimalist */
              title={subject.title}
              width="100%"
              height="800px"
              frameBorder="0"
              className="pdf-iframe-canvas"
            />
          </div>

          <div className="quiz-trigger-zone">
            <div className="quiz-trigger-text">
              <h3>Ready for verification?</h3>
              <p>Launch a validation sequence using parameters from this material.</p>
            </div>
            <Link to={`/quiz/${subject.id}`} className="quiz-launch-btn">
              Start Subject Quiz →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Standard Markdown Layout
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
          {loading ? (
            <div className="pdf-loading">Compiling database document arrays...</div>
          ) : (
            <article className="markdown-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {markdown}
              </ReactMarkdown>
            </article>
          )}
        </div>

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