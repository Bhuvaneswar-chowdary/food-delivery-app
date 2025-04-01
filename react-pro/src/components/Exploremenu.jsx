import React from 'react';
import './Exploremenu.css';
import salad from '../assets/salad.jpg';
import cake from '../assets/cake.jpg';
import noodles from '../assets/noodles.jpg';
import pizza from '../assets/pizza.jpg';
import sandwitch from '../assets/sandwitch.jpg';
import roll from '../assets/roll.jpg';
import pureveg from '../assets/pure-veg.jpg';
import dessert from '../assets/dessert.jpg';
import biryani from '../assets/biryani.jpg';
import start_nonveg from '../assets/start-nonveg.jpg';

const menuItems = [
  { name: 'Salad', image: salad },
  { name: 'cake', image: cake },
  { name: 'Noodles', image: noodles },
  { name: 'Pizza', image: pizza },
  { name: 'Sandwich', image: sandwitch },
  { name: 'Rolls', image: roll },
  { name: 'Pure-Veg', image: pureveg },
  { name: 'Dessert', image: dessert },
  { name: 'Biryani', image: biryani },
  { name: 'Starters', image: start_nonveg },
];


const Exploremenu = ({category,setcategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-description">
        Choose from a diverse menu of flavors, experiences, and possibilities, carefully curated to satisfy every taste, inspire new adventures, and bring joy to every moment.
      </p>

      <div className="explore-menu-list">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index} onClick={()=>setcategory(prev=>prev===item.name?"All":item.name)}>
           
            
            <img src={item.image} alt={item.name} className={category===item.name?"active":"menu-image"} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exploremenu;
