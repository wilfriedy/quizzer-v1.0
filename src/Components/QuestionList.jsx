import React from 'react'
import './Question.css'

function QuestionList() {
  return (
    <div className='questions-container'>
        <div className="timer"><h1>10</h1></div>
        <div className="question-title">
            <h2>Question appears here Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, numquam?</h2>
        </div>
        <div className="question-options">
            <div className="option-chosen">Option 1</div>
            <div className="option-chosen">Option 1</div>
            <div className="option-chosen">Option 1</div>
        </div>
    </div>
  )
}

export default QuestionList