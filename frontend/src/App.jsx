import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [loggedIn , setLoggedIn] = useState(true)


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
