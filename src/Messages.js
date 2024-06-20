import React, { useContext } from 'react'
import { TaskContext } from './Context'

const Messages = () => {
    const tasks = useContext(TaskContext); 
  return (
    <div style={{backgroundColor:"#f5f5f6",width:"20vw",height:"30vw",border:"2px solid black",borderRadius:"7px",marginLeft:"30vw",display:"flex",flexDirection:"column"}}>
        <ul>
            {tasks.map((task,index) => (
                <li key={index}>{task}</li>
            )
        )}
        </ul>
    </div>
  )
}
export default Messages