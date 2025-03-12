import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard';
import DateCard from './DateCard';

export default function TaskManager(props) {
    const {token} = props
    const [page,setPage] = useState("tasks")
    const [error,setError] = useState(false)
    const [data,setData] = useState([])
    // {date: tasks, date2: tasks, date3: tasks}
    const [date,setDate] = useState(null)
    const [input,setInput] = useState("")
    const [tasks,setTasks] = useState([])
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    
    useEffect(()=>{
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        date = `${day}/${month}/${year}`
        setDate(date);
        const getTasks = async () => {
            try{
                const API_URL = 'http://localhost:5000/api/v1/tasks'
                const {data:actualData}  = await axios.get(API_URL,config)
                console.log("fetched tasks ")
                let todaysDate = new Date();
                let day = todaysDate.getDate();
                let month = todaysDate.getMonth() + 1;
                let year = todaysDate.getFullYear();
                todaysDate = `${day}/${month}/${year}`
                let found = false;
                for(let key of Object.keys(actualData)){
                    if(key == todaysDate){  
                        found = true;
                        break;
                    }
                }
                if(!found){
                    actualData[todaysDate] = [];
                }
                setData(actualData)
                if(actualData[date]){
                    setTasks(actualData[date])
                }else{
                    setTasks([])
                }
            }catch(err){
                console.error(err)
            }
        }
        
        getTasks();
        
    },[])
    
    
    function handleDateChange(newDate){
        setDate(newDate)
        setPage("tasks")
        setTasks(data[newDate])
        const getTasks = async () => {
            try{
                const API_URL = 'http://localhost:5000/api/v1/tasks'
                const {data:actualData}  = await axios.get(API_URL,config)
                console.log("fetched tasks ")
                let todaysDate = new Date();
                let day = todaysDate.getDate();
                let month = todaysDate.getMonth() + 1;
                let year = todaysDate.getFullYear();
                todaysDate = `${day}/${month}/${year}`
                let found = false;
                for(let key of Object.keys(actualData)){
                    if(key == todaysDate){  
                        found = true;
                        break;
                    }
                }
                if(!found){
                    actualData[todaysDate] = [];
                }
                setData(actualData)
                if(actualData[newDate]){
                    setTasks(actualData[newDate])
                }else{
                    setTasks([])
                }
            }catch(err){
                console.error(err)
            }
        }
        
        getTasks();
    }
    function handleComplete(task){
        
        if(task.completed){
            return
        }
        const completeTask = async () => {
            try{
                const API_URL = `http://localhost:5000/api/v1/tasks/${task._id}`
                await axios.patch(API_URL,{completed:true},config)
                let newTaskList = [...tasks]
                for(let i of newTaskList){
                    if(i._id == task._id){
                        i.completed = true
                    }
                }
                setTasks(newTaskList)
            }catch(err){
                console.error(err)
            }
        }
        completeTask();
    }
    
    function handleSubmit(e){
        if(e.target.value == ""){return}
        let newId;
        if(tasks.length <= 0){
            newId = 1;
        }else{
        newId = tasks[tasks.length-1].id + 1
        }
        let todaysDate = new Date();
        let day = todaysDate.getDate();
        let month = todaysDate.getMonth() + 1;
        let year = todaysDate.getFullYear();
        todaysDate = `${day}/${month}/${year}`
        if(date != todaysDate){
            setError(true);
            setTimeout(()=>{
                setError(false)
            },500)
            return;
        }

        const createTask = async () => {
            try{
                const API_URL = 'http://localhost:5000/api/v1/tasks'
                const {data:actualData}  = await axios.post(API_URL,{name:input,completed:false},config)
                setTasks([...tasks,actualData.task])
            }catch(err){
                console.error(err)
            }
        }        
        createTask();
        setInput("")
    
    }
    
    function handleDelete(task){
        
        let newTasks = tasks.filter((value,idx)=>{
            return value != task
        })
        const deleteTask = async () => {
            try{
                const API_URL = `http://localhost:5000/api/v1/tasks/${task._id}`
                await axios.delete(API_URL,config)
                setTasks(newTasks)
            }catch(err){
                console.error(err)
            }
        }        
        deleteTask();
    }

    function handleKeyDown(e){
        if(e.key == 'Enter'){
            handleSubmit(e);
        }
    }

  return (
    <div className=' divide-blue-400 rounded-lg flex flex-col backdrop-grayscale-[80%] h-full backdrop-blur-md w-full text-white'>
        <div className='flex justify-between rounded-t-lg bg-blue-300 w-full align-middle '>
            <h1 className=' text-xl font-Mont  pl-[10px] p-0.5'>Task Manager - <span className='font-semibold text-sm'>{date}</span></h1>
            
            
            <i onClick={(e)=>{if(page == "tasks"){setPage("date")}else{setPage("tasks")}}} className="hover:text-red-600 duration-[300ms] cursor-pointer align-middle text-xl p-0.5 mr-[10px] fa-solid fa-jar"></i>
            

        </div>

        <div className='divide-y overflow-auto max-h-[450px]'>
            {page == "tasks"? tasks.map((value,idx)=>{
                return <TodoCard key={idx} idx={idx} handleDelete={handleDelete} handleComplete={handleComplete} value={value}/>
            }) :
            Object.keys(data).reverse().map((value,idx)=>{
                return <DateCard key={idx} idx={idx} handleDateChange={handleDateChange} value={value}/>
            })
            }
        </div>


        <div className='border-t-4 mb-[3px] mt-auto h-[40px] rounded-b-lg flex justify-between align-center pl-3 pr-3 p-1'>
            <input type='text' placeholder='Enter New Task' className={'placeholder-white underline underline-offset-2 bg-transparent w-[95%] pl-2 animate-once animate-ease-in ' + (error ? "animate-shake": "")} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>{handleKeyDown(e)}} value={input}></input>
            <button onClick={(e)=>{handleSubmit(e);}}><i className="text-2xl fa-solid fa-arrow-right"></i></button>
        </div>
    
    </div>
  )
}

