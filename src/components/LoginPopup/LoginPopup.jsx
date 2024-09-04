import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {
    const[currState,setState] = useState("Login");
  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="login"?<></>:<input type="text" placeholder='your name' required />}
            
            <input type="email" placeholder='your email' required />
            <input type="password" placeholder='enter password' required />
        </div>
        <button>{currState==="signup"?"Create account":"login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox"required />
            <p>By continuing,I agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="login"
        ?<p>create a new account? <span onClick={()=>setState("signup")} >Click Here</span></p>
            :<p>Aready a account? <span onClick={()=>setState("login")} >Click Here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LoginPopup
