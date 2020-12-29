import './App.css';
import Task from './Task';
import Control from './Control';
import AddTask from './AddTask';
import Nav from './Nav';
import { useEffect, useState } from 'react';
import TaskModel from './TaskModel.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import Account from './Account';

function App() {
  const [taskList,setTaskList] = useState([]);
  const [showLoader,setShowLoader] = useState(true);
  const [showAddNewTask,setShowAddNewTask] = useState(false);  
  const [showAccount,setShowAccount] = useState(true);

  useEffect(()=>{
    console.log("useEffect called");
    TaskModel.getTaskList().then((res)=>{
      setShowLoader(false)
      setTaskList(res.data);
    }).catch((err)=>{
      console.log(err)
    });
  },[]);
  
  const addNewTask = (task) => {
    setShowLoader(true);
    TaskModel.addTask(task).then((res)=>{
      setTaskList([...taskList,...res.data.data]);
      setShowLoader(false);
    }).catch((err)=>{
      console.log(err)
    });
    setShowAddNewTask(false);
  }

  const showAddTask = ()=>{
    setShowAddNewTask(!showAddNewTask);
  }

  const handleRemove = (taskId)=>{
    setShowLoader(true);
    TaskModel.deleteTask(taskId).then((res)=>{
      setTaskList(taskList.filter((task,index)=>{
        return taskId !== task._id
      }));
      setShowLoader(false);
    }).catch((err)=>{
      console.log(err)
    });
  }

  const handleCloseAddTask = () => {
    setShowAddNewTask(false);
  }
  return (
    <div className="app">
      <Nav/>
      {showAccount && <Account />}
      <div className="app__tasks">
        {showLoader && <div className="app__loader"><CircularProgress /></div>}
        {taskList.map((task) => <Task description={task.description} key={task._id} taskId={task._id} handleRemove={handleRemove} />)}
      </div>
      <Control handleShowAddTask={showAddTask}/>
      {showAddNewTask && <AddTask handleNewAddTask={addNewTask} handleCloseAddTask={handleCloseAddTask}/>}
      
    </div>
  );
}

export default App;
