import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

 
const Navbar = ({setShowLogin}) => {

        const[menu,setMenu] = useState("menu");

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className="logo" />
            <ul className="navbar-manu">
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
                <a href='#exploremenu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>manu</a>
                <a href='#app-download' onClick={()=>setMenu("mobile")} className={menu==="mobile"?"active":""}>mobile</a>
                <a href='#footer' onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""} >conatct us </a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                    </div>
                    <button onClick={()=>setShowLogin(true)}>sign in</button>
                </div>
            </div>
        
    )
}

export default Navbar
