import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Auth from './components/Auth'

function App() {
  const [loggedIn , setLoggedIn] = useState(false)


  return (
    loggedIn ?
    <>
      
      <Navbar/>
      <Main/>
    </>
    :
    <Auth/> 
  )
}

export default App
