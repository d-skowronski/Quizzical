import React from "react"
import { useState, useEffect } from "react"
import Question from "./Question"
import he from "he"
import { nanoid } from 'nanoid'

export default function Quiz(props) {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')
        .then(response => response.json())
        .then(data => {
            if(data.response_code === 0){
                let all_questions = data.results
                setQuestions(
                    all_questions.map(question => {
                        const correct_answer = {
                            id: nanoid(),
                            answer: he.decode(question.correct_answer),
                            correct: true,
                            selected: false
                        }
                        const answers = question.incorrect_answers.map(answer => (
                            {
                                id: nanoid(),
                                answer: he.decode(answer),
                                correct: false,
                                selected: false
                            }
                        ))
                        answers.splice(Math.floor(Math.random() * (answers.length + 1)), 0, correct_answer)

                        return {
                            id: nanoid(),
                            question: he.decode(question.question),
                            answers: answers
                        }
                    })
                )
            }
        })
    }, [props.gameStatus])

    function handleSelect(questionId, answerId){
        setQuestions(prevQuestions => 
            prevQuestions.map(question => {
                if(question.id == questionId){
                    return {
                        ...question, 
                        answers: question.answers.map(answer => {
                                if(answer.id == answerId){
                                    return {...answer, selected: !answer.selected}
                                }
                                else{
                                    return {...answer, selected: false}
                                }
                            })
                    }
                }
                else{
                    return question
                }
            })
            )
    }

    const questionElements = questions.map(question => 
        <Question 
            key={question.id} 
            question={question.question} 
            questionId={question.id}
            answers={question.answers}
            handleSelect={handleSelect}
        />
    )
    return (
        <main>
            {questionElements}
        </main>
    )
}