import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Planets from './Planets';

const People = ({setReponseData,responseData, id}) => {
    const history = useHistory();

    const [state, setState] = useState({
        inptype:"",
        inpid:0
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        setState({
        inptype: e.target.type.value,
        id:e.target.id.value
        })
       history.push(`/${e.target.type.value}/${e.target.id.value}`)
    }
  
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${state.inptype}/${state.id}`)
        .then(response=> {setReponseData(response.data)})
    },[state])

    return (
        <div>
             <form onSubmit={handleSubmit}>
            <p>
                Search for:
                <select name="type" id="">
                    <option value=""></option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>

                ID:
                <input type="number" name="id" id="" placeholder={id}/>

                <input type="submit" value="Search" />
                </p>
            </form>

            <h1>{responseData.name}</h1>

            <p>
            <b>Height:</b>{responseData.height} cm<br/>
            <b>Mass:</b> {responseData.mass} kg<br/>
            <b>Hair Color:</b> {responseData.hair_color}<br/>
            <b>Skin Color:</b> {responseData.skin_color}<br/>
          </p> 
           
        </div>
    )
}

export default People
