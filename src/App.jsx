import React from "react"
import {useState} from "react"
import Overlay from "./components/Overlay"


export default function App() {
    const [game, setGame] = useState(false)

    return (
        <div>
            {game ? 
            ""
            : 
            <Overlay handleButton={() => setGame(prevGame => !prevGame)}/>}
        </div>
    )
} 