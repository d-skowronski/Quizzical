import React from "react"

export default function Question(props) {

    const answerElements = props.answers.map(answer => {
        let onClickHandler = () => ""
        let cssClasses = "answerButton "

        if(props.answersSeen) {
            if(answer.correct){
                cssClasses += `buttonCorrect`
            }
            else if(!answer.correct && answer.selected){
                cssClasses += `buttonIncorrect`
            }
            else{
                cssClasses += `buttonInactive`
            }
        }
        else{
            onClickHandler = () => props.handleSelect(props.questionId, answer.id)
            cssClasses += `buttonActive ${answer.selected ? "answerSelected" : ""}`
        }

        return (
            <button 
                key={answer.id}
                onClick= {onClickHandler}
                className={cssClasses}
            >{answer.answer}</button>
        )
    }
    )
    return (
        <div>

            <h1 className="question">{props.question}</h1>
            {answerElements}
            <hr></hr>
        </div>
    )
}