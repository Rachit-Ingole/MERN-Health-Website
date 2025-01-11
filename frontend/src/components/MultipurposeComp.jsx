import React, { useState } from 'react'
import Timer from './Timer'
import Recommendation from './Recommendation'

export default function MultipurposeComp() {
    const [page,setPage] = useState("timer")


    return (
    <div className='row-span-2 text-white rounded-lg backdrop-grayscale-[80%] w-full backdrop-blur-md w-full'>
        <div className='flex h-[30px]'>
            <h1 onClick={()=>{setPage("timer")}} className={'rounded-tl-lg cursor-pointer text-xl w-1/2 h-full align-middle text-center ' + (page == 'timer' ? 'bg-blue-300': 'bg-red-400')}>Timer</h1>
            <h2 onClick={()=>{setPage("suggest")}} className={'rounded-tr-lg cursor-pointer text-xl w-1/2 h-full align-middle text-center ' + (page == 'suggest' ? 'bg-blue-300': 'bg-red-400')}>Suggest</h2>
        </div>
        <div className='pl-5 pr-5 pb-5 '>
            {page == 'timer' ? <Timer/> : <Recommendation/>}   
        </div> 
    </div>
  )
}
