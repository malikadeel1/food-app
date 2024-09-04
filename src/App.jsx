import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
const App = () => {

  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
  {/* const [showLogin,setShowLogin] = useState(false); */}
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          < Route path='/' element={<Home />} />
          < Route path='/' element={<PlaceOrder />} />
          < Route path='/' element={<Cart />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
