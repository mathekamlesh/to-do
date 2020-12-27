import React from 'react';
import './Task.css';
import CloseIcon from '@material-ui/icons/Close';
const Task = ({description,taskId,handleRemove}) => {
    return (  
    <div className="task">
        <p>{description}</p>
        <CloseIcon className="task__close" key={taskId} onClick={()=>{handleRemove(taskId)}}/>
    </div>);
}
 
export default Task;