import React from 'react'
import {useState} from "react"

const Header = ({addTask}) => {
    const [task, setTask] = useState("")

    const changehandler = (e) =>{
        setTask(e.target.value)
    }

    const handletask = (e) =>{
        e.preventDefault()
        addTask(task)
        setTask("")
    }

    return (

        <form onSubmit={handletask}>
           <h1>My Todo List</h1> 
           <input onChange={changehandler} type="text" name="tasktoadd" id="" value={task}/>
           <input className="btn btn-warning m-2" type="submit" value="Add" />
        </form>
    )
}

export default Header
