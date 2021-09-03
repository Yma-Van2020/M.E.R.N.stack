import React from 'react'

const TaskList = ({taskToDo, deleteTask}) => {

    
    const checkboxHandle = () => {
            return {textDecoration: 'line-through'}
    }
    const linestyle = () =>{
        return checkboxHandle()
    }

    return (
        <div className="d-flex flex-column">
            { taskToDo.map((task, i) => 
            <div className="d-flex m-2">
            <div style ={linestyle()} key={i}>{task.task}</div>
            <input onClick={checkboxHandle()} type="checkbox" name="completed" className="m-2" id="" /> 
            <input onClick={() => deleteTask(task)} className="btn btn-dark" style={{width:"70px", height:"35px", textAlign:"start"}} type="button" value="Delete" />
            </div> )}
        </div>
    )}


export default TaskList
