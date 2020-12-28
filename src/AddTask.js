import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './AddTask.css';
const AddTask = ({handleNewAddTask,handleCloseAddTask}) => {

    const [taskDescription,setTaskDescription] = useState('');
    
    const addTask = () => {

    }
    return ( 
        <div className="addTask">
            <div className="addTask__control">
                <div className="addTask__text">
                    <textarea className="addTask__textInput" onChange={(e)=>{setTaskDescription(e.target.value);}}/>
                </div>
                <div className="addTask__button" >
                    <Button variant="contained" onClick={()=>{handleNewAddTask({userId:1,description:taskDescription})}} color="primary" size="large" >Add Task</Button>
                </div>                
            </div>
            <div className="addTask_overlay" onClick={handleCloseAddTask}>

            </div>
        </div>        
     );
}
 
export default AddTask;