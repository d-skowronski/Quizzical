import React from "react"
import { useState, useEffect } from "react"
import Overlay from "./components/Overlay"


export default function App() {
    const [game, setGame] = useState(false)
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
                            answer: question.correct_answer,
                            correct: true,
                            selected: false
                        }
                        const answers = question.incorrect_answers.map(answer => (
                            {
                                answer: answer,
                                correct: false,
                                selected: false
                            }
                        ))
                        answers.splice(Math.floor(Math.random() * (answers.length + 1)), 0, correct_answer)

                        return {
                            question: question.question,
                            answers: answers
                        }
                    })
                )
            }
        })
    }, [game])
    
    return (
        <div>
            {game ? 
            ""
            : 
            <Overlay handleButton={() => setGame(prevGame => !prevGame)}/>}
        </div>
    )
} 