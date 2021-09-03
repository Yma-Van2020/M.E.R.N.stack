import Header from './components/Header';
import './App.css';
import {useState} from "react"
import TaskList from './components/TaskList';

function App() {
  const [taskToDo, settaskToDo] = useState([])
  
  const addTask = (task) =>{
    const taskArr = [...taskToDo, task]
    settaskToDo(taskArr)
  }

  const deleteTask = (taskInp) => {
    settaskToDo(taskToDo.filter((task) => task.task !== taskInp.task))
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <Header addTask={addTask}/>
      <TaskList taskToDo = {taskToDo} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
