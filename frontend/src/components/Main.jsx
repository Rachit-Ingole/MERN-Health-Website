import React from 'react'
import QuoteGenerator from './QuoteGenerator'
import MultipurposeComp from './MultipurposeComp'
import TaskManager from './TaskManager'

export default function Main() {
  return (
    <div className='main-body absolute grid grid-cols-1 grid-rows-3 justify-center sm:flex sm:justify-evenly gap-10 sm:gap-15 w-full bg-blue-400 opacity-[95%] top-[100px] p-10 sm:p-15 md:p-20 m-auto'>
        <div className='grid grid-cols-1 grid-rows-3 gap-5 w-full sm:w-fit'>
            <QuoteGenerator/>
            <MultipurposeComp/>
        </div>
        
        <TaskManager/>

    </div>
  )
}
