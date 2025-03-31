import React from 'react'
import './Header.css'

const Header = () => {
  const handleScroll = () => {
    const element = document.getElementById('explore-menu');
    element.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
  };
  return (
   <div className="header">
    <div className="header-contents">
        <h2>Order your food here</h2>
        <p>Explore a diverse selection of delicious dishes from our extensive menu, carefully curated to satisfy every craving</p>
        <button onClick={handleScroll}> View Menu</button>

    </div>
   </div>
  )
}

export default Header
