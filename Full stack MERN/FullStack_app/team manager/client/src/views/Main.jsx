
import React, {useState} from "react"
import axios from "axios"

const Main = () => {
    const [registerState, setRegisterState] = useState({
        name: "",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [errorState, setErrorState] = useState({})


    const registerChangeHandler = e => {
        setRegisterState({
            ...registerState,
            [e.target.name]:e.target.value
        })
    }

    const registerSubmit = (e) =>{
        e.preventDefault()
      
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={registerSubmit}>
                    <p>
                        Name:
                        <input name="name" type="text" onChange={registerChangeHandler} />
                        {(errorState.name)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null}
                    </p>
                    <p>
                        Email:
                        <input name="email" type="text" onChange={registerChangeHandler} />
                        {(errorState.email)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null}
                        {(errorState.duplicate)? <small className="ml-1 text-danger font-weight-bold">EMAIL EXISTS</small>:null}
                    </p>
                    <p>
                        Password:
                        <input name="password" type="text" onChange={registerChangeHandler} />
                        {(errorState.password)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null}
                    </p>
                    <p>
                        Confirm Password:
                        <input name="confirmPassword" type="text" onChange={registerChangeHandler} />
                        {(errorState.confirmPassword)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null}
                    </p>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            
        </div>
    )
}

export default Main
