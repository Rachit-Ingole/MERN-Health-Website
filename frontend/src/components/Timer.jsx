import React, { useEffect, useState } from 'react'

export default function Timer(props) {
  const {handleChange,handleTimer,seconds,minutes,active,paused,setPaused,handlePause,handleStop} = props


  return (
    <div className='text-black w-full flex flex-col justify-center'>
    <div className='circle absolute p-2 h-full w-full flex justify-center items-center '>
      <div className='outer translate-y-[-15px] w-[250px] h-[250px] rounded-[50%] flex justify-center items-center '>
        <div className='inner w-[225px] h-[225px] border-2 border-white bg-white rounded-[50%] stroke-2 '>

        </div>
      </div>
    </div>
    <div className='flex mt-auto justify-center text-5xl timer text-black z-20'>
      <div className='flex flex-col '>
        <input placeholder='0' className='placeholder-black text-center bg-transparent  w-[100px]' type='number' name='minutes'  readOnly={active} value={minutes} onChange={(e)=>handleChange(e)}></input>
        <h1 className='text-base text-center'>mins</h1>
      </div>
      <div className='flex flex-col'>
        <input placeholder='0' className='placeholder-black text-center w-[100px] bg-transparent' type='number' name='seconds' readOnly={active} value={seconds} onChange={(e)=>{handleChange(e)}}></input>
        <h1 className='text-base text-center '>secs</h1>
      </div>
    </div>


    {active ? (paused ? 
    <div className='w-full mt-auto z-30'>
    <button className='w-1/2 mt-auto rounded-bl-lg bg-blue-300 text-lg p-1 text-white cursor-pointer ' onClick={(e)=>{handlePause(e)}}>Continue</button>
    <button className='w-1/2 mt-auto rouneded-br-lg bg-red-400 text-lg p-1 text-white cursor-pointer ' onClick={(e)=>{handleStop(e)}}>Stop</button>
    </div>
    :<button className='w-full mt-auto rounded-b-lg bg-red-400 text-lg p-1 text-white cursor-pointer z-30' onClick={(e)=>{handlePause(e)}}>Pause</button>)
    : 
    <button className='w-full mt-auto rounded-b-lg bg-blue-300 text-lg p-1 text-white cursor-pointer z-30' onClick={(e)=>{handleTimer(e)}}>Start</button>}
    </div>
  )
}
