import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import {Route,Routes} from 'react-router-dom'
import { Home } from './pages/home/Home';
import { Cart } from './pages/cart/Cart';
import { PlaceOrder } from './pages/order/PlaceOrder';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';


export const App = () => {

  const [showLogin,setShowLogin] = useState(false)


  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>} 
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element={<PlaceOrder/>}></Route>
      </Routes>
      <Footer/>
    </div>
    </>
  )
};
export default App;