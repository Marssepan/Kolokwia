import React from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';

export default function Home() {
  return (
    <div className="main-layout">
      {/* Title Subsystem header block */}
      <div className="header-panel">
        <h1 className="header-title">Technical Core Modules</h1>
        <p className="header-desc">
          Select an engineered domain below to analyze source notes and launch verification sequences.
        </p>
      </div>

      {/* Grid container wrapper */}
      <div className="card-grid">
        {subjects.map((subject) => (
          <Link key={subject.id} to={`/notes/${subject.id}`} className="subject-box-link">
            <div className="subject-box">
              <h2 className="box-title">{subject.title}</h2>
              <p className="box-desc">{subject.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}