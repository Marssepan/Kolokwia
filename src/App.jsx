import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotesView from './pages/NotesView';
import QuizView from './pages/QuizView';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <nav className="bg-white border-b p-4 shadow-sm mb-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <span className="font-bold text-xl tracking-tight text-gray-800">KnowledgeBase</span>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes/:subjectId" element={<NotesView />} />
            <Route path="/quiz/:subjectId" element={<QuizView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}