import React, { useContext } from 'react';
import rating from '../assets/rating.png';
import { Storecontext } from '../context/context';

const images = import.meta.glob('../assets/*', { eager: true });

const Fooditem = ({ id, name, price, description, image }) => {
  const imageName = `${image.replace(/^\d+/, '')}`;
  const updatedImage = images[`../assets/${imageName}`]?.default || '';

  const { cartitems, addtocart, removefromcart } = useContext(Storecontext);

  return (
    <div className="food-item">
      <div className="food-item-img container">
        <img src={updatedImage} alt={name} className="food-item-img" />
      </div>
      {cartitems[id] ? (
        <div className="food-item-counter">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16" onClick={() => addtocart(id)}>
            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
          </svg>

          <p>{cartitems[id]}</p>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16" onClick={() => removefromcart(id)}>
            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
          </svg>
        </div>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16" onClick={() => addtocart(id)}>
          <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
        </svg>
      )}

      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={rating} alt="Rating" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">{price}</p>
      </div>
    </div>
  );
};

export default Fooditem;


// import {  useEffect, useState } from "react";
// import axios from "axios";

// import { Storecontext } from "../context/context";

// const Storecontextprovider = ({ children }) => {
//   const [food_list, setfood_list] = useState([]);
//   const [cartitems, setcartitems] = useState({});
//   const url = "http://localhost:3000";

//   const addtocart = (itemid) => {
//     setcartitems((prev) => ({
//       ...prev,
//       [itemid]: (prev[itemid] || 0) + 1,
//     }));
//   };

//   const removefromcart = (itemid) => {
//     setcartitems((prev) => {
//       if (!prev[itemid]) return prev;
//       const newCart = { ...prev };
//       newCart[itemid] -= 1;
//       if (newCart[itemid] === 0) {
//         delete newCart[itemid];
//       }
//       return newCart;
//     });
//   };

//   const fetchfoodlist = async () => {
//     try {
//       const response = await axios.get(`${url}/api/food/list`);
//       setfood_list(response.data.data);
//     } catch (error) {
//       console.error("Error fetching food list:", error);
//     }
//   };

//   useEffect(() => {
//     fetchfoodlist();
//   }, []);

//   return (
//     <Storecontext.Provider value={{ food_list, cartitems, addtocart, removefromcart, url }}>
//       {children}
//     </Storecontext.Provider>
//   );
// };

// export default Storecontextprovider;
