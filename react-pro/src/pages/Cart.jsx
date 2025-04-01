import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { Storecontext } from '../context/context'

const Cart = () => {
  const { cartitems, contextvalue, removefromcart,total, setTotal } = useContext(Storecontext);
  const navigate= useNavigate();
  useEffect(() => {
    const newTotal = contextvalue.reduce((acc, item) => {
      if (cartitems[item._id] > 0) {
        return acc + item.price * cartitems[item.id];
      }
      {console.log(item);
      }
      return acc;
    }, 0);
    setTotal(newTotal); // Update total in the context
  }, [cartitems, contextvalue, setTotal]);
  

  
  useEffect(() => {
    const newTotal = contextvalue.reduce((acc, item) => {
      if (cartitems[item._id] > 0) {
        return acc + item.price * cartitems[item._id];
      }
      return acc;
    }, 0);
    setTotal(newTotal);
  }, [cartitems, contextvalue, setTotal]); // Recalculate total when cart changes

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {contextvalue.map((item, index) => {
          if (cartitems[item._id] > 0) {
            return (
              <div key={index} className="cart-items2">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartitems[item._id]}</p>
                <p>{item.price * cartitems[item._id]}</p>
                <p onClick={() => removefromcart(item._id)}>x</p>
              </div>
            );
          }
          return null; 
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{total}</p>
            </div> 
            <hr />
            <div className="cart-total-details">
              <p>Delivery cost:</p>
              <p>{20}</p>
            </div> 
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{total + 20}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
          <p>Promocode?? Enter here:</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
