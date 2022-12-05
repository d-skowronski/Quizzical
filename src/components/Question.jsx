import React from "react"

export default function Question(props) {
    const answerElements = props.answers.map(answer => 
        <button 
            key={answer.id}
            onClick={() => props.handleSelect(props.questionId, answer.id)} 
            className={`answerButton ${answer.selected ? "answerSelected" : ""}`}
        >{answer.answer}</button>
    )
    return (
        <div>

            <h1 className="question">{props.question}</h1>
            {answerElements}
            <hr></hr>
        </div>
    )
}