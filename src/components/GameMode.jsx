import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuizGame({ dataJSON }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [answered, setAnswered] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(dataJSON)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.q);
        setCurrentQuestion(getRandomQuestion(data.q));
      })
      .catch((err) => console.error('Error cargando JSON:', err));
  }, [dataJSON]);

  const getRandomQuestion = (questions) => {
    return questions[Math.floor(Math.random() * questions.length)];
  };

  const handleCheckAnswer = () => {
    if (!currentQuestion) return;

    const isCorrect =
      userAnswer.trim().toLowerCase() === currentQuestion.a.toLowerCase();

    setFeedback(isCorrect ? '✅ Correcto' : `❌ Incorrecto. Era: ${currentQuestion.a}`);
    setAnswered(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(getRandomQuestion(questions));
    setUserAnswer('');
    setFeedback('');
    setAnswered(false);
  };

  if (!currentQuestion) return <div>Cargando...</div>;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <button onClick={() => navigate('/')}>🏠</button>

      <h2>¿Qué especie es esta?</h2>
      <img
        src={currentQuestion.q}
        alt="Pregunta"
        style={{ maxWidth: '300px', borderRadius: '8px' }}
      />
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Escribe tu respuesta"
          style={{ padding: '8px', width: '200px' }}
          disabled={answered}
        />
      </div>
      {!answered && (
        <button
          onClick={handleCheckAnswer}
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Comprobar
        </button>
      )}
      {feedback && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{feedback}</p>}
      {answered && (
        <button
          onClick={handleNextQuestion}
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Siguiente
        </button>
      )}
    </div>
  );
}
