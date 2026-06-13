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
    return <div className="main-layout text-center">Parsing configuration logs...</div>;
  }

  // --- 1. SETUP MODULE ---
  if (gameState === 'config') {
    return (
      <div className="main-layout flex-center">
        <div className="quiz-card-box setup-box">
          <h2 className="panel-title">Quiz Configurator</h2>
          <p className="panel-desc">Set question array limits before evaluation.</p>
          
          <div className="input-group">
            <label>Question Count (Max {allQuestions.length}):</label>
            <input 
              type="number" min="1" max={allQuestions.length}
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="quiz-input"
            />
          </div>
          
          <button onClick={startQuiz} className="quiz-btn-primary">
            Initialize Sequence
          </button>
        </div>
      </div>
    );
  }

  // --- 2. GAMEPLAY ACTIVE NODE ---
  if (gameState === 'playing') {
    const currentQuestion = quizQuestions[currentIdx];
    return (
      <div className="main-layout">
        <div className="quiz-card-box">
          <div className="quiz-progress">
            <span>Question {currentIdx + 1} of {quizQuestions.length}</span>
          </div>

          <h3 className="quiz-question-text">{currentQuestion.question}</h3>

          <div className="quiz-options-list">
            {currentQuestion.options.map((option) => {
              const isSelected = userAnswers[currentIdx] === option;
              return (
                <button
                  key={option}
                  onClick={() => handleAnswerSelect(option)}
                  className={`quiz-option-row ${isSelected ? 'selected' : ''}`}
                >
                  <span>{option}</span>
                  <div className="radio-circle" />
                </button>
              );
            })}
          </div>

          <div className="quiz-nav-footer">
            <button 
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx(currentIdx - 1)}
              className="quiz-btn-secondary"
            >
              Previous
            </button>
            {currentIdx < quizQuestions.length - 1 ? (
              <button 
                disabled={!userAnswers[currentIdx]}
                onClick={() => setCurrentIdx(currentIdx + 1)}
                className="quiz-btn-primary"
              >
                Next Node
              </button>
            ) : (
              <button 
                disabled={!userAnswers[currentIdx]}
                onClick={() => setGameState('results')}
                className="quiz-btn-success"
              >
                Submit Run
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // --- 3. COLOR-CODED RESULTS SUMMARY ---
  if (gameState === 'results') {
    const score = calculateScore();
    return (
      <div className="main-layout space-y-md">
        <div className="quiz-card-box text-center">
          <h2 className="panel-title">Evaluation Report</h2>
          <div className="score-badge">
            <span className="score-num">{score}</span>
            <span className="score-total">/ {quizQuestions.length}</span>
          </div>
          <p className="panel-desc">Accuracy: {Math.round((score / quizQuestions.length) * 100)}%</p>
        </div>

        <div className="logs-header">
          <h3>Verification Logs</h3>
        </div>

        <div className="results-list">
          {quizQuestions.map((q, idx) => {
            const isCorrect = userAnswers[idx] === q.correctAnswer;
            return (
              <div key={q.id} className="log-item-box">
                <p className="log-question">
                  <span className="log-index">{idx + 1}.</span> {q.question}
                </p>
                <div className="log-answers-grid">
                  <div className={`log-badge ${isCorrect ? 'correct' : 'incorrect'}`}>
                    <span className="badge-label">Your Entry:</span> {userAnswers[idx]}
                  </div>
                  {!isCorrect && (
                    <div className="log-badge correct">
                      <span className="badge-label">Expected:</span> {q.correctAnswer}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="results-actions">
          <button onClick={() => setGameState('config')} className="quiz-btn-secondary">
            Retry Sequence
          </button>
          <Link to="/" className="quiz-btn-primary text-center-link">
            Return to Registry
          </Link>
        </div>
      </div>
    );
  }
}