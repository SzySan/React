/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react'
import './FoodView.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../foodItem/FoodItem'




 const FoodView = ({category}) => {


    const {menuItems} = useContext(StoreContext);
  
    

  return (
    <div className='food-view' id='food-view'>
      <h2>Najlepsze Potrawy Na Wyciągnięcie Ręki</h2>
      <div className='food-view-list'>
        {menuItems.map((menuItem,index)=>{
            if (category==="All" || category===menuItem.category){
              return <FoodItem key={index} id={menuItem.id} restaurantChain={menuItem.restaurantChain} title={menuItem.title} price={menuItem.price} image={menuItem.image}/>
            }
          
        })}
      </div>
    </div>
    
  )
}
export default FoodView

           