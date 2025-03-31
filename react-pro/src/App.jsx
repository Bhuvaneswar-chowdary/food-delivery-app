import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Placeorder from './pages/Placeorder'
import Footer from './components/Footer'
import Login from './components/Login'
const App = () => {
  const [showlogin , setshowlogin] = useState(false)
  return (
 

    <>
    {showlogin? <Login setshowlogin={setshowlogin}/> : <> </>}

   
      <div style={{ marginTop: "100px" }}>
        
        <BrowserRouter>
        < Navbar setshowlogin={(setshowlogin)}/>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Placeorder />} />
          </Routes>
        </BrowserRouter>
      </div>
    <Footer />
    </>
  )
}

export default App
