import React, { useState } from 'react';

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  
  

  const [question, setQuestion] = useState(questions[0]);
  // define event handlers 
const goBack = () => {
    const index = questionIndex-1;
    setQuestionIndex(index);
    setQuestion(questions[index])
}

const goToNext = () => {
  const index = questionIndex+1;
  setQuestionIndex(index);
  setQuestion(questions[index])
}
  // determine if on the first question or not 
  const onFirstQuestion = questionIndex === 0;
  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button onClick={goBack} disabled={onFirstQuestion}>
          Go Back
        </button>
        <button onClick={goToNext} disabled={onLastQuestion}>
          Next Question
        </button>
      </div>
      <div>
         <h1>{question}</h1>
      </div>
    </nav>
  );
}