import React from "react"

export default function Question(props) {
    console.log(props.answers)
    const answerElements = props.answers.map(answer => 
        <button className="answer">{answer.answer}</button>
    )
    return (
        <div>

            <h1>{props.question}</h1>
            {answerElements}
        </div>
    )
}