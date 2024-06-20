import { useState } from 'react';
import './App.css';
import Messages from './Messages';
import { TaskContext } from './Context';

function App() {

const [tasks,setTasks] = useState([])
const [task,setTask]=useState("");
const [message,setMessage] = useState("");

function handleTaskAddition(){
  if(!task){
    setMessage("Enter any task");
  }else{
  tasks.push(task);
  setTask("")
  setMessage("")
  console.log(tasks)
}
}

  return (
    <TaskContext.Provider value={tasks}>
      <h1>To-do list</h1>
      <input id='input' value={task} type='text' placeholder='Input your tasks' onChange={(e) => setTask(e.target.value)}></input>
      <button onClick={handleTaskAddition}>Add task</button>
      <Messages tasks={tasks}/>
      {message}
    </TaskContext.Provider>
  );
}

export default App;
