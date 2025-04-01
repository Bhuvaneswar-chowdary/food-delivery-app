import React, { useContext } from 'react'
import './Fooddisplay.css'
import { Storecontext } from '../context/context'
import Fooditem from './Fooditem'


const Fooddisplay = ({ category }) => {
  const { contextvalue } = useContext(Storecontext)

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you </h2>
      <div className="food-display-list">
        {
          contextvalue && contextvalue.filter(items => items.category || category === 'All').map((item, index) => <Fooditem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />)
        }
      </div>

    </div>
  )
}

export default Fooddisplay
