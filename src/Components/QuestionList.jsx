import React from "react";
import "./Question.css";

function QuestionList({ question, time, chooseAnswer }) {
  const countdown = time / 1000;
  const timed =
    countdown <= 5 ? "questions-container timeout" : "questions-container";

  return (
    <div className={timed}>
      <div className="timer">
        <h1>{countdown}</h1>
      </div>
      <div className="question-title">
        <h2>{question.title}</h2>
      </div>
      <div className="question-options">
        {Object.entries(question.options).map(([key, value], i) => {
          return (
            <div
              key={i}
              className="option-chosen"
              data-chosen={key}
              onClick={chooseAnswer}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionList;
