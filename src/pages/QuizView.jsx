import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function QuizView() {
  const { subjectId } = useParams();
  const [allQuestions, setAllQuestions] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);
  
  const [gameState, setGameState] = useState('config'); // 'config' | 'playing' | 'results'
  const [questionCount, setQuestionCount] = useState(5);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  useEffect(() => {
    import(`../data/quizzes/${subjectId}.json`)
      .then(module => setAllQuestions(module.default))
      .catch(() => setAllQuestions([]));
  }, [subjectId]);

  const startQuiz = () => {
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
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-500 space-y-3">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-300 border-t-indigo-600"></div>
        <p className="text-sm font-medium">Parsing array configuration files...</p>
      </div>
    );
  }

  // --- 1. SETUP / CONFIGURATION SCREEN ---
  if (gameState === 'config') {
    return (
      <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-4">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Quiz Configurator</h2>
          <p className="text-xs text-slate-500 mt-1">Determine parameters before executing code evaluation simulation loops.</p>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Question Array Depth (Max {allQuestions.length})
            </label>
            <input 
              type="number" 
              min="1" 
              max={allQuestions.length}
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full border border-slate-200 rounded-xl p-3 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
            />
          </div>
          <button 
            onClick={startQuiz} 
            className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white py-3.5 rounded-xl font-bold text-sm tracking-wide uppercase shadow-sm transition"
          >
            Initialize Quiz Run
          </button>
        </div>
      </div>
    );
  }

  // --- 2. ACTIVE QUIZ GAMEPLAY ---
  if (gameState === 'playing') {
    const currentQuestion = quizQuestions[currentIdx];
    const progressPercent = ((currentIdx + 1) / quizQuestions.length) * 100;

    return (
      <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-2">
        {/* Dynamic Execution Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5">
          <div className="bg-indigo-600 h-1.5 transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400">
            <span>Evaluation Sequence</span>
            <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">{currentIdx + 1} / {quizQuestions.length}</span>
          </div>

          <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
            {currentQuestion.question}
          </h3>

          {/* Large touch targets for choices */}
          <div className="space-y-3 pt-2">
            {currentQuestion.options.map((option) => {
              const isSelected = userAnswers[currentIdx] === option;
              return (
                <button
                  key={option}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full text-left p-4 rounded-xl border font-medium text-sm transition-all duration-150 flex items-center justify-between ${
                    isSelected 
                      ? 'border-indigo-600 bg-indigo-50/60 text-indigo-900 ring-1 ring-indigo-600' 
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 active:bg-slate-100'
                  }`}
                >
                  <span>{option}</span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                    isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300'
                  }`}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Controller Navigation Nodes */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
            <button 
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx(currentIdx - 1)}
              className="flex-1 sm:flex-none text-center bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border border-slate-200 text-slate-700 py-3 px-5 rounded-xl font-semibold text-xs uppercase tracking-wider transition disabled:opacity-40"
            >
              Previous
            </button>
            {currentIdx < quizQuestions.length - 1 ? (
              <button 
                disabled={!userAnswers[currentIdx]}
                onClick={() => setCurrentIdx(currentIdx + 1)}
                className="flex-1 sm:flex-none text-center bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white py-3 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider shadow-sm transition disabled:opacity-40"
              >
                Next Node
              </button>
            ) : (
              <button 
                disabled={!userAnswers[currentIdx]}
                onClick={() => setGameState('results')}
                className="flex-1 sm:flex-none text-center bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white py-3 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider shadow-sm transition disabled:opacity-40"
              >
                Compile Results
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // --- 3. COLOR-CODED RESULTS SCREEN ---
  if (gameState === 'results') {
    const finalScore = calculateScore();
    const percentCorrect = Math.round((finalScore / quizQuestions.length) * 100);

    return (
      <div className="max-w-2xl mx-auto space-y-6 mt-2">
        {/* Metric Summary Panel */}
        <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Diagnostics Complete</h2>
          <div className="inline-flex items-center justify-center p-6 bg-slate-50 rounded-full border border-slate-100 mx-auto my-2">
            <div className="text-3xl md:text-4xl font-black text-indigo-600">
              {finalScore} <span className="text-lg md:text-xl text-slate-400 font-bold">/ {quizQuestions.length}</span>
            </div>
          </div>
          <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Evaluation Accuracy: {percentCorrect}%
          </p>
        </div>

        {/* Color-Coded Answer Log Output */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 px-1">Reviewing Logs</h3>
          <div className="space-y-3">
            {quizQuestions.map((q, idx) => {
              const isCorrect = userAnswers[idx] === q.correctAnswer;
              return (
                <div key={q.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                  <p className="font-bold text-slate-900 text-sm md:text-base leading-snug">
                    <span className="text-slate-400 font-mono mr-1.5">{idx + 1}.</span> {q.question}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2.5 text-xs font-medium pt-1">
                    <div className={`p-3 rounded-lg flex-1 border ${
                      isCorrect 
                        ? 'bg-emerald-50 text-emerald-900 border-emerald-200' 
                        : 'bg-rose-50 text-rose-900 border-rose-200'
                    }`}>
                      <span className="font-bold block uppercase tracking-wide text-[10px] opacity-60 mb-0.5">Your Response</span>
                      {userAnswers[idx]}
                    </div>
                    {!isCorrect && (
                      <div className="p-3 rounded-lg flex-1 border bg-emerald-50 text-emerald-900 border-emerald-200">
                        <span className="font-bold block uppercase tracking-wide text-[10px] opacity-60 mb-0.5">Target Value</span>
                        {q.correctAnswer}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Exit Nodes */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button 
            onClick={() => setGameState('config')} 
            className="w-full sm:flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider border border-slate-200 transition"
          >
            Re-Initialize Setup
          </button>
          <Link 
            to="/" 
            className="w-full sm:flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-center shadow-sm transition"
          >
            Return to Hub
          </Link>
        </div>
      </div>
    );
  }
}