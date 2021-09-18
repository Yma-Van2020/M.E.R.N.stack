import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


const AddForm = () => {
const history = useHistory()
const [errors, setErrors] = useState([]); 

  const [formState, setFormState] = useState({
      name:"",
      position:""
  })  
  
  const changeHandler = e => {
      const {name, value} = e.target
      setFormState({
          ...formState,
          [name]:value
      })
  }

  const submitHandler = e =>{
      e.preventDefault()
      axios.post("http://localhost:8000/api/players", formState)
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
    <div style={{backgroundColor:"whitesmoke", padding:"30px"}}>
        <div style={{backgroundColor:"white", border:"1px black solid", padding:"30px"}}>
            <p className="d-flex justify-content-start"><Link to="/list">List</Link>&nbsp;|&nbsp; <Link to="/addplayer">Add Player</Link> </p>
            
            <form onSubmit={submitHandler} style={{border:"1px black solid", padding:"25px"}}>
            {errors.map((err, index) => <p style={{color:"red"}}key={index}>{err}</p>)}

                <p>
                    Player Name: <input type="text" name="name" id="" onChange={changeHandler} value={formState.name}/><br/><br/>
                    Preferred Position: <input type="text" name="position" id="" onChange={changeHandler} value={formState.position}/>
                </p>

                <input className="btn btn-warning" type="submit" value="Submit" />
            </form>
        </div>
    </div>
    )
}

export default AddForm
