function Result({ score, quizLength }) {
  let reaction =
    score >= quizLength / 2
      ? `Congratulations 🎉🎉 you\'ve scored ${score} / ${quizLength} questions `
      : `Your score is ${score} / ${quizLength}! Try again 😢😢`;
  return (
    <div>
      <h2>{reaction}</h2>
    </div>
  );
}

export default Result;
