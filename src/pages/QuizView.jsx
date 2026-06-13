import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function QuizView() {
  const { subjectId } = useParams();
  const [allQuestions, setAllQuestions] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);
  
  const [gameState, setGameState] = useState('config'); // 'config' | 'playing' | 'results'
  const [questionCount, setQuestionCount] = useState(5);
  const [currentIdx, setCurrentIdx] = useState(0);
  
  // Store user selections as an array of selected indices: { questionIdx: [0, 2] }
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

  const handleOptionToggle = (optionIdx) => {
    const currentSelections = userAnswers[currentIdx] || [];
    if (currentSelections.includes(optionIdx)) {
      setUserAnswers({
        ...userAnswers,
        [currentIdx]: currentSelections.filter(idx => idx !== optionIdx)
      });
    } else {
      setUserAnswers({
        ...userAnswers,
        [currentIdx]: [...currentSelections, optionIdx].sort()
      });
    }
  };

  const isAnswerCorrect = (q, idx) => {
    const userSelections = userAnswers[idx] || [];
    const correctSelections = q.correctIndices || [];
    
    if (userSelections.length !== correctSelections.length) return false;
    return userSelections.every(val => correctSelections.includes(val));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (isAnswerCorrect(q, idx)) score++;
    });
    return score;
  };

  if (allQuestions.length === 0) {
    return <div className="main-layout text-center">Parsing matrix configuration arrays...</div>;
  }

  // --- 1. SETUP PARAMETERS PANEL ---
  if (gameState === 'config') {
    return (
      <div className="main-layout flex-center">
        <div className="quiz-card-box setup-box">
          <h2 className="panel-title">Quiz Configurator</h2>
          <p className="panel-desc">Set question array limits before evaluating multi-answer nodes.</p>
          
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
            Initialize Evaluation Run
          </button>
        </div>
      </div>
    );
  }

  // --- 2. MULTI-SELECT ACTIVE RUNTIME ---
  if (gameState === 'playing') {
    const currentQuestion = quizQuestions[currentIdx];
    const currentSelections = userAnswers[currentIdx] || [];

    return (
      <div className="main-layout">
        <div className="quiz-card-box">
          <div className="quiz-progress">
            <span>Question {currentIdx + 1} of {quizQuestions.length}</span>
            {currentQuestion.correctIndices.length > 1 && (
              <span className="multiselect-warning">⚠️ WIELOKROTNY WYBÓR</span>
            )}
          </div>

          <h3 className="quiz-question-text">{currentQuestion.question}</h3>

          {/* Dynamic Image Container Hook */}
          {currentQuestion.image && (
            <div className="quiz-image-container">
              <img 
                src={`${import.meta.env.BASE_URL}${currentQuestion.image.replace(/^\//, '')}`} 
                alt="Schemat pomocniczy" 
                className="quiz-circuit-img"
              />
            </div>
          )}

          <div className="quiz-options-list">
            {currentQuestion.options.map((option, optionIdx) => {
              const isChecked = currentSelections.includes(optionIdx);
              return (
                <button
                  key={optionIdx}
                  onClick={() => handleOptionToggle(optionIdx)}
                  className={`quiz-option-row ${isChecked ? 'selected' : ''}`}
                >
                  <span>{option}</span>
                  <div className="checkbox-square">
                    {isChecked && <div className="checkbox-check" />}
                  </div>
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
                onClick={() => setCurrentIdx(currentIdx + 1)}
                className="quiz-btn-primary"
              >
                Next Node
              </button>
            ) : (
              <button 
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

  // --- 3. SUMMARY REVIEW MODULE ---
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
            const isCorrect = isAnswerCorrect(q, idx);
            const userSelections = userAnswers[idx] || [];
            const correctSelections = q.correctIndices || [];

            return (
              <div key={q.id} className="log-item-box">
                <p className="log-question">
                  <span className="log-index">{idx + 1}.</span> {q.question}
                </p>
                
                <div className="log-answers-grid">
                  {/* User response panel */}
                  <div className={`log-badge ${isCorrect ? 'correct' : 'incorrect'}`}>
                    <span className="badge-label">
                      {isCorrect ? '✓ Twój Wybór (Prawidłowy)' : '✗ Twój Wybór (Błędny)'}
                    </span>
                    <div className="log-badge-text">
                      {userSelections.length === 0 ? (
                        <span className="italic opacity-50">Brak odpowiedzi</span>
                      ) : (
                        userSelections.map(idx => q.options[idx]).join(' || ')
                      )}
                    </div>
                  </div>
                  
                  {/* Answer template conditional target */}
                  {!isCorrect ? (
                    <div className="log-badge expected-matrix">
                      <span className="badge-label">Klucz Odpowiedzi:</span>
                      <div className="log-badge-text">
                        {correctSelections.map(idx => q.options[idx]).join(' || ')}
                      </div>
                    </div>
                  ) : (
                    <div className="log-badge correct" style={{ backgroundColor: '#fafafa', opacity: 0.8 }}>
                      <span className="badge-label">Status Zadania:</span>
                      <div className="log-badge-text" style={{ color: '#166534' }}>
                        Wszystkie wymagane parametry zostały dopasowane.
                      </div>
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