import React, { useState } from "react"


//functional components
const HookForm = props =>{
    const{inp, setinp} = props;
    const [fnError, setError] = useState("")
    const [lnError, lsetError] = useState("")
    const [eError, esetError] = useState("")
    const [pError, psetError] = useState("")
    const [cpError, cpsetError] = useState("")

    const handlefname = e =>{
        setinp({
            ...inp,
            [e.target.name]:e.target.value
        })

        if(e.target.value.length < 2){
            setError("field must be at least 2 characters");
        } else {
            setError("")
        }
    }

    const handlelname = e =>{
        setinp({
            ...inp,
            [e.target.name]:e.target.value
        })

        if(e.target.value.length < 2){
            lsetError("field must be at least 2 characters");
        } else {
            lsetError("")
        }
    }

    const handleemail = e =>{
        setinp({
            ...inp,
            [e.target.name]:e.target.value
        })

        if(e.target.value.length < 5){
            esetError(" field must be at least 5 characters.");
        } else {
            esetError("")
        }
    }
    const handlepw = e =>{
        setinp({
            ...inp,
            [e.target.name]:e.target.value
        })

        if(e.target.value.length < 8){
            psetError("field must be at least 8 characters");
        } else {
            psetError("")
        }
    }
  
    const handlecp = e =>{
        setinp({
            ...inp,
            [e.target.name]:e.target.value
        })

        if(e.target.value.length < 8 || e.target.value !== inp.password){
            cpsetError("field must be at least 8 characters and match the previous one");
        } else {
            cpsetError("")
        }
    }
    return(
        <div>
        
        <form>
        <div style={{paddingBottom:"10px"}}>
            <label htmlFor="firstname">First Name</label> 
            <input type="text" onChange={handlefname} name="firstname"/>
            {
              fnError?
              <p style={{color:'red'}}>{ fnError }</p>: ""
            }
        </div>
        <div style={{paddingBottom:"10px"}}>
            <label htmlFor="lastname">Last Name</label> 
            <input type="text" onChange={handlelname} name="lastname"/>
            {
              lnError?
              <p style={{color:'red'}}>{ lnError }</p>: ""
            }
        </div>
        <div style={{paddingBottom:"10px"}}>
            <label htmlFor="email">Email</label> 
            <input type="text" onChange={handleemail} name="email"/>
            {
              eError?
              <p style={{color:'red'}}>{ eError }</p>: ""
            }
        </div>
        <div style={{paddingBottom:"10px"}}>
            <label htmlFor="password">Password</label> 
            <input type="password" onChange={handlepw} name="password"/>
            {
              pError?
              <p style={{color:'red'}}>{ pError }</p>: ""
            }
        </div>
        <div style={{paddingBottom:"10px"}}>
            <label htmlFor="cpassword">Confirm Password</label> 
            <input type="password" onChange={handlecp} name="cpassword"/>
            {
              cpError?
              <p style={{color:'red'}}>{ cpError }</p>: ""
            }
        </div>
        </form>

        </div>
    )
}


export default HookForm;