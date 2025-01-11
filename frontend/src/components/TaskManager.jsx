import React, { useState } from 'react'

export default function TaskManager() {
    const [tasks,setTasks] = useState([{id:1,task:"meditate for 10mins",completed:true},{id:2,task:"do 10 pushups:", completed:false}])
    const [input,setInput] = useState("")

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
        setTasks([...tasks,{id:newId,task:input,completed:false}])
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
  return (
    <div className='rounded-lg flex flex-col bg-red-300 w-full text-white'>
        <div className='flex justify-between rounded-t-lg bg-blue-300 w-full align-middle '>
            <h1 className=' text-xl  pl-[10px] p-0.5'>Task Manager</h1>
            
            <i className="cursor-pointer align-middle text-xl p-0.5 mr-[10px] fa-solid fa-jar"></i>
            

        </div>

        <div className='divide-y scroll-auto max-h-[500px]'>
            {tasks.map((value,idx)=>{

                return <div key={idx} className={'w-full pl-4 p-2 flex items-center' + (value.completed ? 'line-through' : '') }> 
                    <h1 >{idx+1}. {value.task}</h1> 
                    <input className='ml-auto ' type='checkbox' id={value.id} checked={value.completed} onChange={(e)=>{handleComplete(e)}}></input>
                    <button onClick={(e)=>{handleDelete(e)}} id={value.id} className='align-middle'><i id={value.id} className="text-md fa-solid fa-trash ml-3 mr-1"></i> </button>
                </div>
            })}
        </div>


        <div className='mt-auto h-[40px] bg-blue-200 rounded-b-lg flex justify-between align-center pl-3 pr-3 p-1'>
            <input type='text' placeholder='Enter New Task' className='underline underline-offset-2 bg-transparent w-[95%] pl-2' onChange={(e)=>setInput(e.target.value)} value={input}></input>
            <button onClick={(e)=>{handleSubmit(e)}}><i className="text-2xl fa-solid fa-arrow-right"></i></button>
        </div>
    

    </div>
  )
}
