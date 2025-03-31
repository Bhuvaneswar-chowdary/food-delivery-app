import React, { useContext } from 'react';
import './Placeorder.css';
import { Storecontext } from '../context/Storecontext';

const Placeorder = () => {
  const { total } = useContext(Storecontext); // Destructure total from context

  return (
    <form action="" className="placeorder">
      <div className="placeorder-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" className="input-field" placeholder="First Name" />
          <input type="text" className="input-field" placeholder="Last Name" />
        </div>

        <div className="multi-fields">
          <input type="email" className="input-field" placeholder="Email address" />
          <input type="text" className="input-field" placeholder="Street" />
        </div>

        <div className="multi-fields">
          <input type="text" className="input-field" placeholder="City" />
          <input type="text" className="input-field" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" className="input-field" placeholder="Zip code" />
          <input type="text" className="input-field" placeholder="Country" />
          <input type="text" className="input-field" placeholder="Phone" />
        </div>

        
      </div>

      <div className="placeorder-right">
        <div className="cart-total1">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details1">
              <p>Subtotal</p>
              <p>{total}</p>
            </div>
            <hr />
            <div className="cart-total-details1">
              <p>Delivery cost:</p>
              <p>{20}</p>
            </div>
            <hr />
            <div className="cart-total-details1">
              <b>Total</b>
              <b>{Number(total) + 20}</b>
            </div>
          </div>
        </div>

        {/* Button now placed directly under the cart total */}
        <button type="submit" className="placeorder-btn">Proceed to Payment</button>
      </div>
    </form>
  );
};

export default Placeorder;
