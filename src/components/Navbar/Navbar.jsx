import React, { useState } from 'react'
import foodie from '/React Zaliczenie/foodApp/foodie/src/assets/images/Foodie.png'
import searchIcon from '/React Zaliczenie/foodApp/foodie/src/assets/images/search.svg'
import basketIcon from '/React Zaliczenie/foodApp/foodie/src/assets/images/basket.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("menu");
    
  return (
    <div className='navbar'>
        <img src={foodie} alt="Logo" className='logo'></img>
        <ul className="navbar-menu">
            <Link to='/'><li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Strona Główna</li></Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        </ul>
        <div className='navbar-right'>
            <img src={searchIcon} alt=""></img>
            <div className='navbar-search-icon'>
                <Link to='/cart'><img src={basketIcon} alt=""></img></Link>
                <div className='dot'></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Zarejestruj się</button>
        </div>
    </div>
  )
};
export default Navbar
