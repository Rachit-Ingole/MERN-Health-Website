import React from 'react'

export default function Navbar() {
  return (
    <div className='z-50 text-white h-[60px] backdrop-blur-sm text-bold flex justify-between fixed w-full backdrop-grayscale-[100%]'> 
        <div className='ml-[10px] flex flex-col justify-center'> {/*LEFT NAVBAR */}
            <h1 className='text-xl font-semibold'>Dashboard</h1>
            <h1 className='text-blue-300'>Welcome,  <span className='text-white font-semibold'>John Doe</span></h1>
        </div>

        
        <div className='flex justify-between items-center min-w-[40%] sm:min-w-[30%] md:min-w-[20%]  mr-[10px]'> {/*RIGHT NAVBAR */}
        <i className="text-xl fa-solid fa-cart-shopping"></i>
        <div className='text-xl'>
            $xxxxx
        </div>
        <i className=" text-xl fa-solid fa-right-from-bracket"></i>
        </div>
        


    </div>
  )
}
