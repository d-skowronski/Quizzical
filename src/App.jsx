import React from "react"
import { useState, useEffect } from "react"
import Overlay from "./components/Overlay"
import Quiz from "./components/Quiz"


export default function App() {
    const [game, setGame] = useState(false)
    
    return (
        <div>
            {game ? 
            <Quiz gameStatus={game}/>
            : 
            <Overlay handleButton={() => setGame(prevGame => !prevGame)}/>}
        </div>
    )
} 