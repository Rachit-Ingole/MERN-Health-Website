import React from 'react'


export default function Background() {
    const data = '/tempBg.jpg'
    return (
    <div className='imgContainer'>
        <img src={data} alt={data?.title || "bg image"}className='bgImage'/>
    </div>
  )
}
