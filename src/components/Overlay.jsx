import React from "react"

export default function Overlay(props) {
    return (
        <div className="overlay">
            <h1>Quizzical</h1>
            <h2>Your favorite quiz app!</h2>
            <button onClick={props.handleButton}>Start quiz</button>
        </div>
    )
} 