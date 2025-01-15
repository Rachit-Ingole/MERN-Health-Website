import React, { useState,useEffect } from 'react'
import Timer from './Timer'
import Recommendation from './Recommendation'
import addNotification from 'react-push-notification';
import vite from '/vite.svg';

export default function MultipurposeComp() {
    const [page,setPage] = useState("timer")
    const [seconds,setSeconds] = useState(0)
    const [minutes,setMinutes] = useState(5)
    const [active,setActive] = useState(false)
    const [totalTime,setTotalTime] = useState(5*60)
    const [paused,setPaused] = useState(false)

    function handlePause(e){
        setPaused(!paused)
    }
    
    function handleStop(e){
        setActive(false)
        setPaused(false)
        setSeconds(0)
        setMinutes(5)
        setTotalTime(5*60)
    }

    function notify(e){
        addNotification({
            title:'Your Timer has Ended',
            message:'time for a break, bish',
            duration:10000,
            icon:vite,
            native:true

        })
    }

    function handleChange(e){
      if((e.target.name == "minutes") && (e.target.value <= 180 && e.target.value >= 0)){ 
        setMinutes(e.target.value)
        
      }else if(e.target.value <= 59 && e.target.value >= 0){
        setSeconds(e.target.value)
      }
    }
  
    function handleTimer(e){
      if(active){
        return
      }
      setTotalTime(minutes * 60 + seconds)
      setActive(true)
    }
  
    useEffect(()=>{
      let interval
      if(active && page == "timer"){
        let outer = document.querySelector('.outer')
        let percent = ((totalTime - (minutes * 60 + seconds))/totalTime) * 360
        outer.style.backgroundImage = `conic-gradient(#93c5fd ${percent}deg,transparent 0deg, transparent 350deg)`
      }
      if(active & !paused){
        interval = setInterval(()=>{
          if(seconds > 0){
            setSeconds((seconds)=>seconds-1)
          }else if(minutes > 0){
            setMinutes((minutes) => minutes-1)
            setSeconds(59)
          }else{
            setActive(false)
            notify()
            clearInterval(interval)
            
          }
        },1000)
      }
  
  
      return ()=> clearInterval(interval);
    },[active,seconds,minutes,paused])

    return (
    <div className='row-span-2 text-white rounded-lg backdrop-grayscale-[80%]  backdrop-blur-md w-full col-h-[500px] sm:h-auto'>
        <div className='flex h-[30px] '>
            <h1 onClick={()=>{setPage("timer")}} className={'rounded-tl-lg cursor-pointer text-xl w-1/2 h-full align-middle text-center ' + (page == 'timer' ? 'bg-blue-300': 'bg-red-400')}>Timer</h1>
            <h2 onClick={()=>{setPage("suggest")}} className={'rounded-tr-lg cursor-pointer text-xl w-1/2 h-full align-middle text-center ' + (page == 'suggest' ? 'bg-blue-300': 'bg-red-400')}>Suggest</h2>
        </div>
        <div className='h-full w-full flex justify-center'>
            {page == 'timer' ? <Timer handleStop={handleStop} handlePause={handlePause} paused={paused} setPaused={setPaused} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes} active={active} setActive={setActive} setTotalTime={setTotalTime} handleChange={handleChange} handleTimer={handleTimer} totalTime={totalTime} /> : <Recommendation/>}   
        </div> 
    </div>
  )
}
