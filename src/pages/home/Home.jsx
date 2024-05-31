import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import { ExploreMenu } from '../../components/exploreMenu/ExploreMenu'
import FoodView from '../../components/foodView/FoodView'
import Footer from '../../components/footer/Footer'






export const Home = () => {

    const [category,setCategory] = useState("All");




  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodView category={category}/>
        

    </div>
  )
}
export default Home