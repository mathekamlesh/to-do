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
  const [showAccount,setShowAccount] = useState(false);
  const [username,setUsername] = useState(null);

  useEffect(()=>{
    setShowLoader(true);
    if(username){
      TaskModel.getTaskList(username).then((res)=>{
        setShowLoader(false)
        setTaskList(res.data);
      }).catch((err)=>{
        console.log(err)
      });
    }else{
      handleAccountClick();
      setShowLoader(false)
    }
    
  },[username]);
  
  const addNewTask = (task) => {
    setShowLoader(true);
    task.userId = username;
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

  const handleAccountClick = () => {
    setShowAccount(true);
  }

  const closeAccount = () => {
    setShowAccount(false);
  }
  const handleCloseAddTask = () => {
    setShowAddNewTask(false);
  }
  const handleSignup = (username,password) => {
    setUsername(username);
    closeAccount();
  }
  return (
    <div className="app">
      <Nav username={username} handleAccountClick={handleAccountClick}  />
      {showAccount && <Account closeAccount={closeAccount} handleSignup={handleSignup} />}
      <div className="app__tasks">        
        {taskList.map((task) => <Task description={task.description} key={task._id} taskId={task._id} handleRemove={handleRemove} />)}
      </div>
      <Control handleShowAddTask={showAddTask}/>
      {showLoader && <div className="app__loader"><CircularProgress /></div>}
      {showAddNewTask && <AddTask handleNewAddTask={addNewTask} handleCloseAddTask={handleCloseAddTask}/>}
      
    </div>
  );
}

export default App;
