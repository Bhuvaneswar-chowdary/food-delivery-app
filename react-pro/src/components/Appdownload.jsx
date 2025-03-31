import React from 'react'
import './appdownload.css'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'

const Appdownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
        <p>For better Experience Download<br />Zomato app</p>
        <div className="app-down-platforms">
            <img src={playstore} alt="" />
            <img src={appstore} alt="" />
        </div>
      
    </div>
  )
}

export default Appdownload
