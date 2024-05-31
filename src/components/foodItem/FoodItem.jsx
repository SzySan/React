import React from 'react'
import './FoodItem.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'



 const FoodItem = ({id,restaurantChain,title,price,image}) => {

    
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt=""></img>
        {!cartItems[id]
              ?<svg className='add' onClick={()=>addToCart(id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
              :<div className='food-item-count'>
                  <svg onClick={()=>removeFromCart(id)}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Green" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                  </svg>
                  <p>{cartItems[id]}</p>
                  <svg onClick={()=>addToCart(id)}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Red" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                  </svg>
              </div>
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-restaurant'>
          <p>{restaurantChain}</p>
        </div>
        <p className='food-item-desc'>{title}</p>
        <p className='food-item-price'>{price}Zł</p>
      </div>
    </div>
  )
}
export default FoodItem
