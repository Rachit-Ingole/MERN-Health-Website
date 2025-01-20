import React, { useEffect, useState } from 'react'

export default function TaskManager(props) {
    const {token} = props
    const [tasks,setTasks] = useState([])
    const [input,setInput] = useState("")

    useEffect(()=>{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const getTasks = async () => {
            try{
              const API_URL = 'http://localhost:3000/api/v1/tasks'
              const {data:actualData}  = await axios.get(API_URL,config)
              let allTasks = actualData.tasks
              console.log("fetched tasks " + allTasks)
              setTasks(allTasks)
            }catch(err){
              console.error(err)
            }
          }
      
        getTasks();
    },[])


    function handleComplete(e){
        
        if(!e.target.checked){
            return
        }
        let newTaskList = [...tasks]
        for(let i of newTaskList){
            if(i.id == e.target.id){
                i.completed = true
            }
        }
        setTasks(newTaskList)
    }
    
    function handleSubmit(e){
        if(e.target.value == ""){return}
        let newId
        if(tasks.length <= 0){
            newId = 1;
        }else{
        newId = tasks[tasks.length-1].id + 1
        }
        
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const createTask = async () => {
            try{
                const API_URL = 'http://localhost:3000/api/v1/tasks'
                const {data:actualData}  = await axios.post(API_URL,{name:input,completed:false},config)
                setTasks([...tasks,actualData.task])
            }catch(err){
                console.error(err)
            }
        }        
        createTask();
        setInput("")
    
    }

    function handleDelete(e){
        let newTasks = tasks.filter((value,idx)=>{
            if(e.target.id == value.id){
                return false
            }else{
                return true
            }
        })
        console.log(newTasks)
        setTasks(newTasks)
    }

    function handleKeyDown(e){
        if(e.key == 'Enter'){
            handleSubmit(e);
        }
    }

  return (
    <div className=' divide-blue-400 rounded-lg flex flex-col backdrop-grayscale-[80%] h-full backdrop-blur-md w-full text-white'>
        <div className='flex justify-between rounded-t-lg bg-blue-300 w-full align-middle '>
            <h1 className=' text-xl  pl-[10px] p-0.5'>Task Manager</h1>
            
            <i className="cursor-pointer align-middle text-xl p-0.5 mr-[10px] fa-solid fa-jar"></i>
            

        </div>

        <div className='divide-y overflow-auto max-h-[450px]'>
            {tasks.map((value,idx)=>{

                return <div key={idx} className={'w-full pl-4 p-2 flex items-center ' + (value.completed ? 'line-through ' : ' ') }> 
                    <h1 className='text-xl'>{idx+1}. {value.name}</h1> 
                    <input className='ml-auto h-50px w-50px' type='checkbox' id={value.id} checked={value.completed} onChange={(e)=>{handleComplete(e)}}></input>
                    <button onClick={(e)=>{handleDelete(e)}} id={value.id} className=' text-red-500 align-middle'><i id={value.id} className="text-md fa-solid fa-trash ml-3 mr-1"></i> </button>
                </div>
            })}
        </div>


        <div className='border-t-4 mb-[3px] mt-auto h-[40px] rounded-b-lg flex justify-between align-center pl-3 pr-3 p-1'>
            <input type='text' placeholder='Enter New Task' className='placeholder-white underline underline-offset-2 bg-transparent w-[95%] pl-2' onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>{handleKeyDown(e)}} value={input}></input>
            <button onClick={(e)=>{handleSubmit(e)}}><i className="text-2xl fa-solid fa-arrow-right"></i></button>
        </div>
    

    </div>
  )
}
