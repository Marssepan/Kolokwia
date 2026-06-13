import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function QuizView() {
  const { subjectId } = useParams();
  const [allQuestions, setAllQuestions] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);
  
  // State Machine: 'config' | 'playing' | 'results'
  const [gameState, setGameState] = useState('config');
  const [questionCount, setQuestionCount] = useState(5);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { questionIdx: "Selected Answer" }

  // Load question data dynamically
  useEffect(() => {
    import(`../data/quizzes/${subjectId}.json`)
      .then(module => setAllQuestions(module.default))
      .catch(() => setAllQuestions([]));
  }, [subjectId]);

  const startQuiz = () => {
    // Shuffle all loaded questions and slice to requested count
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, Math.min(questionCount, shuffled.length)));
    setUserAnswers({});
    setCurrentIdx(0);
    setGameState('playing');
  };

  const handleAnswerSelect = (answer) => {
    setUserAnswers({ ...userAnswers, [currentIdx]: answer });
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) score++;
    });
    return score;
  };

  if (allQuestions.length === 0) {
    return <div className="p-6">Loading quiz or no questions found...</div>;
  }

  // --- 1. SETUP / CONFIGURATION SCREEN ---
  if (gameState === 'config') {
    return (
      <div className="max-w-md mx-auto p-6 bg-white border rounded-xl shadow-sm mt-10">
        <h2 className="text-2xl font-bold mb-4">Quiz Setup</h2>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Questions (Max {allQuestions.length}):
        </label>
        <input 
          type="number" 
          min="1" 
          max={allQuestions.length}
          value={questionCount}
          onChange={(e) => setQuestionCount(Number(e.target.value))}
          className="w-full border rounded-lg p-2 mb-6"
        />
        <button onClick={startQuiz} className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Start Quiz
        </button>
      </div>
    );
  }

  // --- 2. ACTIVE QUIZ GAMEPLAY ---
  if (gameState === 'playing') {
    const currentQuestion = quizQuestions[currentIdx];
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white border rounded-xl shadow-sm mt-10">
        <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
          <span>Question {currentIdx + 1} of {quizQuestions.length}</span>
        </div>
        <h3 className="text-xl font-semibold mb-6">{currentQuestion.question}</h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswerSelect(option)}
              className={`w-full text-left p-3 border rounded-lg transition text-sm ${
                userAnswers[currentIdx] === option ? 'border-blue-600 bg-blue-50 font-medium' : 'hover:bg-gray-50'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-8 flex justify-between">
          <button 
            disabled={currentIdx === 0}
            onClick={() => setCurrentIdx(currentIdx - 1)}
            className="px-4 py-2 bg-gray-100 rounded-lg text-sm disabled:opacity-50"
          >
            Previous
          </button>
          {currentIdx < quizQuestions.length - 1 ? (
            <button 
              disabled={!userAnswers[currentIdx]}
              onClick={() => setCurrentIdx(currentIdx + 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm disabled:opacity-50"
            >
              Next
            </button>
          ) : (
            <button 
              disabled={!userAnswers[currentIdx]}
              onClick={() => setGameState('results')}
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm disabled:opacity-50"
            >
              Finish Quiz
            </button>
          )}
        </div>
      </div>
    );
  }

  // --- 3. COLOR-CODED RESULTS SCREEN ---
  if (gameState === 'results') {
    const finalScore = calculateScore();
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white border rounded-xl shadow-sm mt-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Quiz Completed!</h2>
          <p className="text-lg mt-2">Your Score: <span className="font-bold text-blue-600">{finalScore} / {quizQuestions.length}</span></p>
        </div>

        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Review Answers</h3>
        <div className="space-y-6">
          {quizQuestions.map((q, idx) => {
            const isCorrect = userAnswers[idx] === q.correctAnswer;
            return (
              <div key={q.id} className="p-4 border rounded-lg bg-gray-50">
                <p className="font-medium text-gray-900 mb-2">{idx + 1}. {q.question}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-sm">
                  <div className={`p-2 rounded-md ${isCorrect ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'}`}>
                    <span className="font-semibold">Your Answer:</span> {userAnswers[idx]}
                  </div>
                  {!isCorrect && (
                    <div className="p-2 rounded-md bg-green-100 text-green-800 border border-green-300">
                      <span className="font-semibold">Correct Answer:</span> {q.correctAnswer}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex gap-4 justify-center">
          <button onClick={() => setGameState('config')} className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg text-sm font-medium">
            Try Again
          </button>
          <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
}