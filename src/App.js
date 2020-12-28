import './App.css';
import Task from './Task';
import Control from './Control';
import AddTask from './AddTask';
import { useEffect, useState } from 'react';
import TaskModel from './TaskModel.js';

function App() {
  const [taskList,setTaskList] = useState([]);
  const [showAddNewTask,setShowAddNewTask] = useState(false);  
  
  useEffect(()=>{
    console.log("useEffect called");
    TaskModel.getTaskList().then((res)=>{
      console.log(res.data);
      setTaskList(res.data);
    }).catch((err)=>{
      console.log(err)
    });
  },[]);
  
  const addNewTask = (task) => {    
    TaskModel.addTask(task).then((res)=>{
      console.log(res.data);
      setTaskList([...taskList,...res.data.data]);
    }).catch((err)=>{
      console.log(err)
    });
    setShowAddNewTask(false);
  }

  const showAddTask = ()=>{
    setShowAddNewTask(!showAddNewTask);
  }

  const handleRemove = (taskId)=>{
    TaskModel.deleteTask(taskId).then((res)=>{
      console.log(res.data);
      setTaskList(taskList.filter((task,index)=>{
        return taskId !== task._id
      }));
    }).catch((err)=>{
      console.log(err)
    });
  }

  const handleCloseAddTask = () => {
    setShowAddNewTask(false);
  }
  return (
    <div className="app">
      <div className="app__tasks">
        {taskList.map((task) => <Task description={task.description} key={task._id} taskId={task._id} handleRemove={handleRemove} />)}
      </div>
      <Control handleShowAddTask={showAddTask}/>
      {showAddNewTask && <AddTask handleNewAddTask={addNewTask} handleCloseAddTask={handleCloseAddTask}/>} 
    </div>
  );
}

export default App;
