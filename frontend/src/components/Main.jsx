import React, { useEffect } from 'react'
import QuoteGenerator from './QuoteGenerator'
import MultipurposeComp from './MultipurposeComp'
import TaskManager from './TaskManager'

export default function Main(props) {
  const {name,token} = props

  useEffect(() => {
    const getBackground = async () => {
      try{
        const API_URL = `https://api.unsplash.com/photos/random?topics=nature&client_id=${process.env.REACT_APP_UNSPLASH_SECRET}`
        const {data:actualData}  = await axios.get(API_URL)
        console.log(data)
      }catch(err){
        console.error(err)
      }
    }

    
    const body = document.body;
    body.style.backgroundImage = "url('/tempBg.jpg')";
  },[])


  return (
    <div className=' m-auto main-body grid grid-cols-1 grid-rows-3 justify-center sm:flex sm:justify-evenly gap-10 sm:gap-15 my-[40px] p-10 sm:p-15 md:p-20'>
        <div className='grid grid-cols-1 gap-5 w-full sm:w-3/4 '>
            <QuoteGenerator token={token}/>
            <MultipurposeComp/>
        </div>
        
        <TaskManager token={token}/>

    </div>
  )
}
