import React from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Learning Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div key={subject.id} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
            <div>
              <span className="text-4xl mb-4 block">{subject.icon}</span>
              <h2 className="text-xl font-semibold text-gray-900">{subject.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">{subject.description}</p>
            </div>
            <div className="mt-6 flex gap-3">
              <Link to={`/notes/${subject.id}`} className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg font-medium text-sm transition">
                Read Notes
              </Link>
              <Link to={`/quiz/${subject.id}`} className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium text-sm transition">
                Take Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}