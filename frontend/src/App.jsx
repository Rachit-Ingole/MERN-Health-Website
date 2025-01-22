import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Auth from './components/Auth'

function App() {
  const [token,setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzhlODdmY2QxMDBlZDE4YTE1MzZjMzEiLCJuYW1lIjoiUmFjaGl0IiwiaWF0IjoxNzM3Mzk0MTcyLCJleHAiOjE3Mzk5ODYxNzJ9.NkaVJLspFFxc4dgTobi55uGUNcotarnGGZF3X6ptNkQ')
  const [data,setData] = useState({name:"rachit",balance:100})


  return (
    token ?
    <>
      <Navbar setToken={setToken} data={data}/>
      <Main token={token} data={data}/>
    </>
    :
    <Auth setToken={setToken} setData={setData}/> 
  )
}

export default App
