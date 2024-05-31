/* eslint-disable array-callback-return */
import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../context/StoreContext'


export const Cart = () => {

    const {cartItems,menuItems,removeFromCart} = useContext(StoreContext)

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p></p>
          <p>Nazwa</p>
          <p>Cena</p>
          <p>Ilość</p>
          <p>Całość</p>
          <p>Usuń</p>
        </div>
        <br />
        <hr />
        {menuItems.map((menuItem,index)=>{
            if(cartItems[menuItem.id]>0)
              {
                return (
                  <div>
                    <div className='cart-items-title cart-items-item'>
                        <img src={menuItem.image} alt=""/>
                        <p>{menuItem.title}</p>
                        <p>{menuItem.price}</p>
                        <p>{cartItems[menuItem.id]}</p>
                        <p>{menuItem.price*cartItems[menuItem.id]}</p>
                        <p onClick={()=>removeFromCart(menuItem.id)}className='krzyzyk'>X</p>
                    </div>
                    <hr />
                  </div>
                )
              }
        })}
      </div>
    </div>
  )
}
