import React from "react"


//functional components
const HookForm = props =>{
    const{inp, setinp} = props;

    const onChange = (e) =>{
        setinp({
            ...inp,
            [e.target.name]:e.target.value
        })
        
    }

    return(
        <div>
        
        <form>
        <div style={{paddingBottom:"10px"}}>
            <label htmlFor="firstname">First Name</label> 
            <input type="text" onChange={onChange} name="firstname"/>
        </div>
        <div style={{paddingBottom:"10px"}}>
            <label htmlFor="lastname">Last Name</label> 
            <input type="text" onChange={onChange} name="lastname"/>
        </div>
        <div style={{paddingBottom:"10px"}}>
            <label htmlFor="email">Email</label> 
            <input type="text" onChange={onChange} name="email"/>
        </div>
        <div style={{paddingBottom:"10px"}}>
            <label htmlFor="password">Password</label> 
            <input type="password" onChange={onChange} name="password"/>
        </div>
        <div style={{paddingBottom:"10px"}}>
            <label htmlFor="cpassword">Confirm Password</label> 
            <input type="password" onChange={onChange} name="cpassword"/>
        </div>
        </form>

        </div>
    )
}


export default HookForm;