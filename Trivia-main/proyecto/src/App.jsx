import { useState } from "react";

function App() {
  const questions = [
    {
      question: "¿Cuál es el planeta más grande del sistema solar?",
      options: ["Marte", "Júpiter", "Saturno", "Venus"],
      answer: "Júpiter",
    },
    {
      question: "¿En qué año llegó el hombre a la Luna?",
      options: ["1965", "1969", "1972", "1959"],
      answer: "1969",
    },
    {
      question: "¿Cuál es el océano más grande del mundo?",
      options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
      answer: "Pacífico",
    },
    {
      question: "¿Quién escribió 'Cien años de soledad'?",
      options: [
        "Mario Vargas Llosa",
        "Gabriel García Márquez",
        "Pablo Neruda",
        "Julio Cortázar",
      ],
      answer: "Gabriel García Márquez",
    },
    {
      question: "¿Cuál es el país con mayor población del mundo?",
      options: ["India", "China", "Estados Unidos", "Brasil"],
      answer: "India",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div style={styles.container}>
      <h1>Trivia de Conocimiento General</h1>

      {showResult ? (
        <div style={styles.card}>
          <h2>Tu puntaje final es:</h2>
          <h3>
            {score} / {questions.length}
          </h3>

          <p>
            {score === questions.length
              ? "¡Perfecto! 🎉"
              : score >= 3
              ? "¡Buen trabajo!"
              : "Puedes intentarlo de nuevo"}
          </p>

          <button style={styles.button} onClick={restartGame}>
            Reiniciar Trivia
          </button>
        </div>
      ) : (
        <div style={styles.card}>
          <h2>
            Pregunta {currentQuestion + 1} de {questions.length}
          </h2>
          <p>{questions[currentQuestion].question}</p>

          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              style={styles.button}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f6f9",
    fontFamily: "Arial",
    padding: "20px",
    textAlign: "center",
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    width: "100%",
  },
  button: {
    display: "block",
    width: "100%",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default App;