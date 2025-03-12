import React, { useEffect, useState } from 'react'


export default function QuoteGenerator(props) {
  const {token} = props
  const [quote,setQuote] = useState([])
  useEffect(()=>{
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    async function fetchQuote(){
      const URL = 'http://localhost:5000/api/v1/others/quote'
      const today = (new Date()).toDateString()
      const localKey = `QUOTE-${today}`
      if (localStorage.getItem(localKey)) {
        const res = JSON.parse(localStorage.getItem(localKey))
        setQuote(res)
        console.log('Fetched quote from cache today')
        return
      }
      localStorage.clear()
      
      try{
        let res = await axios.get(URL,config)
        res = res.data
        localStorage.setItem(localKey, JSON.stringify(res))
        setQuote(res)
      }catch(err){
        console.log(err.message)
      }
    }
    fetchQuote()
  },[])


  return (
    <div className='z-10 text-white rounded-lg backdrop-grayscale-[80%] w-full backdrop-blur-md sm:max-h-[150px] '>
        <h1 className='rounded-t-lg bg-blue-300 text-xl w-full align-middle pl-[10px] p-0.5 font-Mont'>Quote of the Day</h1>
      <div className='overflow-y-auto sm:h-[112px]'>
        <h1 className='text-lg  pt-2 p-5'>"{quote.quote}" <br></br> -{quote.author}</h1>
      </div>
    </div>
  )
}
