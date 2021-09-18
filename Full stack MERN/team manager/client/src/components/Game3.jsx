import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

const Game3 = () => {
    const [players, setPlayers] = useState([])
    const [state, setState] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err))
    }, [state])

    const clickHandler = (id, str) =>{
        axios.put("http://localhost:8000/api/players/" + id,  {action3: str})
        .then(res => setState(!state))
        .catch(err => console.log(err))
    }

    return (
         <div style={{backgroundColor:"white", border:"1px black solid", padding:"30px"}}>
            <h1>Player Status - Game 3</h1>
             <Link to="/status/game">Game 1</Link> | <Link to="/status/game/2">Game 2</Link> | <Link to="/status/game/3">Game 3</Link> 
        <div>
             <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Team Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                   { players.map((player, i) => 
                    <tr key={i}>
                        <td>{player.name}</td>
                        <td>
                        {(player.action3 == "playing")? <button onClick={() => clickHandler(player._id, "playing")} style={{backgroundColor:"green"}}>Playing</button>:<button onClick={() => clickHandler(player._id, "playing")}>Playing</button>}&nbsp;
                        {(player.action3 == "not playing")? <button onClick={() => clickHandler(player._id, "not playing")}  style={{backgroundColor:"red"}}>Not Playing</button>:<button onClick={() => clickHandler(player._id, "not playing")} >Not Playing</button>}&nbsp;
                        {(player.action3 == "undecided")? <button onClick={() => clickHandler(player._id, "undecided")} style={{backgroundColor:"yellow"}}>Undecided</button>:<button onClick={() => clickHandler(player._id, "undecided")}>Undecided</button>}
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
                </div>
        </div>
    )
}

export default Game3
