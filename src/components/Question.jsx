import React from "react"

export default function Question(props) {
    console.log(props.answers)
    const answerElements = props.answers.map(answer => 
        <button className="answerButton">{answer.answer}</button>
    )
    return (
        <div>

            <h1 className="question">{props.question}</h1>
            {answerElements}
            <hr></hr>
        </div>
    )
}