
import { useParams, useHistory } from "react-router-dom";
import axios from "axios"
import React, { useState, useEffect } from 'react'


const Update = () => {
    const{id} = useParams()
   const history = useHistory()
   const [errors, setErrors] = useState([]); 
   const [player, setPlayer] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/players/" + id)
        .then((res) => {
            setPlayer(res.data)
            console.log(player.name)
        })
    }, [])
    
      const changeHandler = e => {
      const {name, value} = e.target
      setPlayer({
          ...player,
          [name]:value
      })
  }

     const submitHandler = e =>{
      e.preventDefault()
      axios.put("http://localhost:8000/api/players/" + id, player)
        .then(res => history.push("/list"))
        .catch(err =>{
            const errRes = err.response.data.errors;
            const errArr = [];
            for(const key of Object.keys(errRes)){
                errArr.push(errRes[key].message)
            }
            setErrors(errArr)
        })
  }


    return (
        <div>
        <h3>Edit Player</h3> 
             <form onSubmit={submitHandler} style={{border:"1px black solid", padding:"25px"}}>
            {errors.map((err, index) => <p style={{color:"red"}}key={index}>{err}</p>)}

                <p>
                    Player Name: <input type="text" name="name" id="" onChange={changeHandler} value={player.name}/><br/><br/>
                    Preferred Position: <input type="text" name="position" id="" onChange={changeHandler} value={player.position}/>
                </p>

                <input className="btn btn-warning" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Update
