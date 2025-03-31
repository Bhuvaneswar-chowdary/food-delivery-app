import React, { useContext } from 'react'
import './Fooddisplay.css'
import { Storecontext } from '../context/Storecontext'
import Fooditem from './Fooditem'


const Fooddisplay = ({ category }) => {
  const { contextvalue } = useContext(Storecontext)
  
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you </h2>
      <div className="food-display-list">
      {contextvalue.map((item, index) => {
        if(category==="All" || category===item.category){
         
         
          
        return <Fooditem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
      }
      })}
      </div>
      
    </div>
  )
}

export default Fooddisplay
