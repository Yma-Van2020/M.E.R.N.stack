import React from 'react'
import { useState } from "react"

const Registration = (props) => {

    const [formState, setFormState] = useState({
        'fullname': "",
        'email': "",
        'password':"",
        "cpassword": ""
    })

    const [validateState, setValidateState] = useState({
        'fullname': "true",
        'fullNameAlpha':"true",
        'email': "true",
        'password':"true",
        "cpassword": "true"
    })


    const changeHandler = (e) =>{
        const {name, value} = e.target
        setFormState({
            ...formState,
            [name]:value
        })
    }

    const handleSubmit = (e) =>{
        let fullname = true;
        let fullNameAlpha = true;
        let email = true;
        let password = true;
        let cpassword = true;

        e.preventDefault();
        if(formState.fullname.length < 3)
        fullname = false;

        if(!(/^[a-zA-Z]+$/).test(formState.fullname))
        fullNameAlpha = false;

        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(formState.email))
        email = false;

        if(formState.password.length < 5)
        password = false;

        if(formState.password !== formState.cpassword)
        cpassword = false;

        setValidateState({
            fullname,
            email,
            password,
            cpassword,
            fullNameAlpha
        })
    }

    return (
        <div style={{padding:"100px"}}>
            <form onSubmit={handleSubmit}>
                <p>
                    Full Name:
                    <input onChange={changeHandler} type="text" name="fullname" id="" />
                    {(!validateState.fullname)? <p style={{color:"red"}}>Full name must be at least 3 chars</p>:null}
                    {(!validateState.fullNameAlpha)? <p style={{color:"red"}}>Must contain letters only</p>:null}
                </p>
                <p>
                    Email:
                    <input onChange={changeHandler} type="text" name="email" id="" />
                    {(!validateState.email)? <p style={{color:"red"}}>Email must be valid</p>:null}
                </p>
                <p>
                    Password:
                    <input onChange={changeHandler} type="text" name="password" id="" />
                    {(!validateState.password)?<p style={{color:"red"}}>Password must be at least 5 chars</p>: null}
                </p>
                <p>
                    Confirm Password:
                    <input onChange={changeHandler} type="text" name="cpassword" id="" />
                    {(!validateState.cpassword)? <p style={{color:"red"}}>Both passwords must match</p>: null}
                </p>

                <input className="btn btn-outline-dark" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Registration
