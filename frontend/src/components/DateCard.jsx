import React from 'react'

export default function DateCard(props) {
    const {value,idx,handleDateChange} = props

  return (
    <div key={idx} onClick={()=>{handleDateChange(value)}}  className='w-full pl-4 p-2 flex items-center cursor-pointer' > 
        <h1 className='text-lg font-Mont text-center w-[100%]'> {value}</h1> 
    </div>
  )
}
