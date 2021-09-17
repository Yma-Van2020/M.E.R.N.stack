import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {useHistory} from "react-router-dom"

const List = () => {
  const[pirates, setPirates] = useState([])
  const [state, setState] = useState(false) 
  const history = useHistory()

  useEffect(() => {
    axios.get("http://localhost:8000/api/pirates")
        .then(res =>setPirates(res.data))
}, [state]) 

const deleteHandler = (id) => {
    axios.delete("http://localhost:8000/api/pirates/" + id)
        .then(() => setState(!state))
        .catch(err => console.log(err))
}

    return (
        <div>
            {pirates.map((pirate, i) => {
                return <div key={i} className="d-flex justify-content-around align-items-center" style={{border:"1px black solid", margin:"50px"}}>
                    <h3>{pirate.name}</h3>
                    <img style={{width:"100px"}} src={pirate.imageUrl} alt={`${pirate.name}'s image'`} /><br/>
                    <button className="btn btn-secondary" onClick={() => history.push(`/pirates/${pirate._id}`)}>View Pirate</button>&nbsp;
                    <button className="btn btn-secondary" onClick={() => deleteHandler(pirate._id)}>Walk the plank</button>
                </div>
            })}
        </div>
    )
}

export default List
