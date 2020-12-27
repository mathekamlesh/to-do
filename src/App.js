import './App.css';
import Task from './Task';
import Control from './Control';
import AddTask from './AddTask';
import { useEffect, useState } from 'react';

function App() {
  const [taskList,setTaskList] = useState([{"id":1,"desciption":"Learn React"},{"id":2,"desciption":"Learn NodeJS"}]);
  const [showAddNewTask,setShowAddNewTask] = useState(false);
  
  const addNewTask = (taskDescription) => {
    setTaskList([...taskList,{id:taskList.length+1,desciption:taskDescription}]);
    setShowAddNewTask(false);
  }

  const showAddTask = ()=>{
    setShowAddNewTask(!showAddNewTask);
  }

  const handleRemove = (taskId)=>{
    setTaskList(taskList.filter((task,index)=>{
      return taskId !== task.id
    }));
  }

  const handleCloseAddTask = () => {
    setShowAddNewTask(false);
  }
  return (
    <div className="app">
      <div className="app__tasks">
        {taskList.map((task) => <Task description={task.desciption} key={task.id} taskId={task.id} handleRemove={handleRemove} />)}
      </div>
      <Control handleShowAddTask={showAddTask}/>
      {showAddNewTask && <AddTask handleNewAddTask={addNewTask} handleCloseAddTask={handleCloseAddTask}/>} 
    </div>
  );
}

export default App;
