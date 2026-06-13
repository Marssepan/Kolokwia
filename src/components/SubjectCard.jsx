import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function SubjectCard({ subject }) {
  return (
    <div className="subject-box">
      <div>
        <div className="icon-wrapper">
          {subject.icon}
        </div>
        <h2 className="box-title">{subject.title}</h2>
        <p className="box-desc">{subject.description}</p>
      </div>

      <RouterLink to={`/notes/${subject.id}`} className="action-button">
        Analyze Modules →
      </RouterLink>
    </div>
  );
}