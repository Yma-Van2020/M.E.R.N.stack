import React from 'react'
import { useState } from 'react'


const AuthorForm = ({onSubmitForm, initName, errs}) => {
   const [name, setName] = useState(initName);
    const submitHandler = (e) => {
        e.preventDefault()
        onSubmitForm({name})
    }

    return (
        <div className="d-flex flex-column justify-content-around align-items-center">
            <form onSubmit={submitHandler}>
            {(errs)? errs.map((err, index) => <p style={{color:"red"}} key={index}> {err} </p>):null}
            <div className="d-flex flex-column justify-content-around align-items-center" style={{border:"1px solid black", width:"350px", height:"250px"}}>
                <label>Name:</label>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" id="" />
                <input className="btn btn-secondary" type="button" value="Cancel" />
                <input className="btn btn-warning" type="submit" value="Submit" /> 
            </div>
            </form>
        </div>
    )
}

export default AuthorForm
