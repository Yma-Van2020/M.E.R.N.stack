import React from "react"
import {useState} from "react"

const Form = props =>{

    const [state, setState] = useState("")
    const {setColor} = props

    const handleSubmit = (e) =>{
        e.preventDefault()
        setColor(state)
    }

    const handleColor = (e) =>{
        setState(e.target.value)
    }

    return(
        <>
        <form onSubmit= {handleSubmit} className="m-5">
            <label htmlFor="color" className="m-2">Color</label>
            <input type="text" name="color" onChange={handleColor} id="color" value={state}/>
            <input className="btn btn-warning m-2" type="submit" value="Add" />
        </form>
        </>
    )
}

export default Form