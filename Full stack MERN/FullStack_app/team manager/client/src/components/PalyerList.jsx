
import axios from "axios"
import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"

const PalyerList = () => {
    const [players, setPlayers] = useState([])
    const [state, setState] = useState(false) 

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err))
    }, [state])

    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/players/" + id)
            .then(() => setState(!state))
            .catch(err => console.log(err))
    }

    return (
        <div style={{ border: "1px solid black" }}>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Team Name</th>
                        <th scope="col">Preferred Position</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                   { players.map((player, i) => 
                    <tr key={i}>
                        <td><Link to={`/edit/${player._id}`}>{player.name}</Link></td>
                        <td>{player.position}</td>
                        <td>
                        <button className="btn btn-secondary" onClick={() => deleteHandler(player._id)}>Delete</button></td>
                    </tr>
                    )}
                </tbody>
                </table>
         </div>
                )
}

                export default PalyerList
