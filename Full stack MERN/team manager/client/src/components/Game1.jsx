import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Game1 = () => {
    const [players, setPlayers] = useState([])
    const [state, setState] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err))
    }, [state])

    const clickHandler = (id, str) =>{
        axios.put("http://localhost:8000/api/players/" + id,  {action: str})
        .then(res => setState(!state))
        .catch(err => console.log(err))
    }

    return (
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
                        {(player.action == "playing")? <button onClick={() => clickHandler(player._id, "playing")} style={{backgroundColor:"green"}}>Playing</button>:<button onClick={() => clickHandler(player._id, "playing")}>Playing</button>}&nbsp;
                        {(player.action == "not playing")? <button onClick={() => clickHandler(player._id, "not playing")}  style={{backgroundColor:"red"}}>Not Playing</button>:<button onClick={() => clickHandler(player._id, "not playing")} >Not Playing</button>}&nbsp;
                        {(player.action == "undecided")? <button onClick={() => clickHandler(player._id, "undecided")} style={{backgroundColor:"yellow"}}>Undecided</button>:<button onClick={() => clickHandler(player._id, "undecided")}>Undecided</button>}
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
        </div>
    )
}

export default Game1
