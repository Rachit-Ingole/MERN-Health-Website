import React from 'react'

export default function TodoCard(props) {
    const {value,handleComplete,handleDelete,idx} = props

  return (
    <div key={idx} className={'w-full pl-4 p-2 flex items-center ' + (value.completed ? 'line-through ' : ' ') }> 
        <h1 className='text-lg font-light font-Poppins'>{idx+1}. {value.name}</h1> 
        <input className='ml-auto h-50px w-50px' type='checkbox' id={value.id} checked={value.completed} onChange={()=>{handleComplete(value)}}></input>
        <button onClick={()=>{handleDelete(value)}} id={value.id} className=' text-red-500 align-middle'><i id={value.id} className="text-md fa-solid fa-trash ml-3 mr-1"></i> </button>
    </div>
  )
}
