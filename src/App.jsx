import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotesView from './pages/NotesView';
import QuizView from './pages/QuizView';

export default function App() {
  return (
    <Router>
      <Navbar /> {/* This renders your sleek, updated navigation container */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes/:subjectId" element={<NotesView />} />
          <Route path="/quiz/:subjectId" element={<QuizView />} />
        </Routes>
      </main>
    </Router>
  );
}