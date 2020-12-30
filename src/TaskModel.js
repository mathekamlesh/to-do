import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:"https://mathekamlesh-to-do-backend.herokuapp.com/"
  })

const getTaskList = (username)=>{
    return new Promise((resolve,reject)=>{
        axiosInstance.get(`task/${username}`).then((res)=>{
            resolve(res);
        }).catch((err)=>{
            reject(err)
        });
    });    
}

const deleteTask = (taskId)=>{
    return new Promise((resolve,reject)=>{
        axiosInstance.delete(`task/${taskId}`).then((res)=>{
            resolve(res);
        }).catch((err)=>{
            reject(err)
        });
    });    
}

const addTask = (task)=>{
    return new Promise((resolve,reject)=>{
        axiosInstance.post('task',task).then((res)=>{
            resolve(res);
        }).catch((err)=>{
            reject(err)
        });
    });    
}



export default {getTaskList,addTask,deleteTask};