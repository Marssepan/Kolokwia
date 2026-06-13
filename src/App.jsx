import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NotesView from './pages/NotesView';
import QuizView from './pages/QuizView';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
        {/* Sticky Header */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 active:bg-white transition-colors">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent group-hover:opacity-80 transition">
                KnowledgeBase
              </span>
            </Link>
            <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase hidden sm:block">
              Study Hub v1.0
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <main className="max-w-6xl mx-auto px-4 py-6 md:py-10 animate-fade-in">
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