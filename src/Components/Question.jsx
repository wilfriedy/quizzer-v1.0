import React, { useEffect, useState } from "react";
import QuestionList from "./QuestionList";
import questions from "../questions_data";
import Result from "./Result";

function Question() {
  const [num, setNum] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [userAswers, setUserAswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (questions[num]) {
      setRemainingTime(questions[num].timer);
      const timerId = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 0) {
            clearInterval(timerId);
            handleUserAnswers("");
            return 0;
          }
          return prev - 1000;
        });
      }, 1000);
      return () => {
        clearInterval(timerId);
      };
    }
  }, [num]);

  useEffect(() => {
    if (userAswers.length === questions.length) {
      checkAllAnswers(userAswers, questions);
    }
  }, [userAswers]);

  const checkAllAnswers = (answers, questions) => {
    let count = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].answer) {
        count++;
      }
    }
    setScore(count);
  };

  const handleUserAnswers = (chosenAnswer) => {
    let answer = chosenAnswer === "" ? "timedOut" : chosenAnswer;
    setNum((prev) => prev + 1);
    setUserAswers((prevAnswers) => {
      const newAnswers = [...prevAnswers, answer];
      if (num >= questions.length - 1) {
        checkAllAnswers(newAnswers, questions);
      }
      return newAnswers;
    });
  };

  const handleChoice = (e) => {
    let chosenOption = e.target.dataset.chosen;
    handleUserAnswers(chosenOption);
  };

  return (
    <>
      {num >= questions.length ? (
        <>
          <Result score={score} quizLength={questions.length} />
        </>
      ) : (
        <QuestionList
          question={questions[num]}
          time={remainingTime}
          chooseAnswer={handleChoice}
        />
      )}
    </>
  );
}

export default Question;
