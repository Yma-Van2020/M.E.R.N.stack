import React from 'react'
import Game1 from '../components/Game1'
import {Link} from "react-router-dom"

const Status = () => {
    return (
        <div style={{backgroundColor:"white", border:"1px black solid", padding:"30px"}}>
            <h1>Player Status - Game 1</h1>
            <Link to="/status/game">Game 1</Link> | <Link to="/status/game/2">Game 2</Link> | <Link to="/status/game/3">Game 3</Link> 
            <Game1/>
        </div>
    )
}

export default Status
