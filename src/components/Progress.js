import { useQuiz } from "../contexts/QuizProvider";

function Progress() {
  const { index, points, numQuestions, maxPossiblePoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress
        type="range"
        max={numQuestions}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
