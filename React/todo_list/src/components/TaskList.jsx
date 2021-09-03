import React from 'react'

const TaskList = ({taskToDo, deleteTask, settaskToDo}) => {
  
    const handleComplete = (index) =>{
        const updateTaskTodos = taskToDo.map((task, i) => {
            const updateTaskTodo = {...task}
            if (i === index){
            //    { ...task,
            //        completed: !task.completed }
                
            //    return [..., updateTaskTodo]
            updateTaskTodo.completed = !updateTaskTodo.completed
            // task.completed = !task.completed 
            }
            // return task
            return updateTaskTodo;
        })
     
        settaskToDo(updateTaskTodos)
    }


    return (
        <div className="d-flex flex-column">
            { taskToDo.map((task, i) => 
            <div className="d-flex m-2">
            {(task.completed)? <div style ={{textDecoration: "line-through"}} key={i}>{task.task}</div> : <div key={i}>{task.task}</div>}
           
            <input onChange={() => {
                handleComplete(i);
            }} type="checkbox" name="completed" className="m-2" id="" /> 

            <input onClick={() => deleteTask(task)} className="btn btn-dark" style={{width:"70px", height:"35px", textAlign:"start"}} type="button" value="Delete" />
            </div> )}
        </div>
    )}


export default TaskList
