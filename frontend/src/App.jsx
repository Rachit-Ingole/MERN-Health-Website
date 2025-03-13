import { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Auth from './components/Auth'
import { UserInfoContext } from './scripts/context' 

export default function App() {
  const [userInfo,setUserInfo] = useState({name:'rachit',balance:0})
  const [token,setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzhkMzIyODM1N2FkMTdjNTFjNzVhYWIiLCJuYW1lIjoicmFjaGl0IiwiaWF0IjoxNzQxODc3NDk4LCJleHAiOjE3NDQ0Njk0OTh9.FF542GXKOJGw1b9BrO2TUHFHwFfbk-nPMW_Yp_o8cIQ')


  return (
    token ?
    <>
      <Navbar setToken={setToken} data={userInfo}/>
      <UserInfoContext.Provider value={{userInfo,setUserInfo}}>
        <Main token={token} data={userInfo}/>
      </UserInfoContext.Provider>
    </>
    :
    <Auth setToken={setToken} setData={setUserInfo}/> 
  )
}
