import axios from 'axios';
import React, { useContext, useState } from 'react';
import './Placeorder.css';
import { Storecontext } from '../context/storeContext';

const Placeorder = () => {
  const { contextvalue, cartitems, total, token, url } = useContext(Storecontext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];

    contextvalue.forEach((item) => {
      if (cartitems[item.id] > 0) {
        let itemInfo = { 
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: cartitems[item.id]
        };
        orderItems.push(itemInfo);
      }
    });

    console.log("Final Order Items:", orderItems);

    let orderData = {
      user: data.email, // Using email as user identifier
      address: data,
      items: orderItems,
      amount: total + 20, // Including delivery cost
      status: "Pending"
    };

    try {
      let response = await axios.post(url + "/api/orders/place", orderData, { headers: { token } });

      if (response.data.success) {
        alert("Order placed successfully!");

        // Reset form after successful order placement
        setData({
          firstName: "",
          lastName: "",
          email: "",
          street: "",
          city: "",
          state: "",
          zipcode: "",
          country: "",
          phone: "",
        });

      } else {
        alert("Error in placing order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <form onSubmit={placeOrder} className="placeorder">
      <div className="placeorder-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" className="input-field" placeholder="First Name" />
          <input required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" className="input-field" placeholder="Last Name" />
        </div>

        <div className="multi-fields">
          <input required name="email" onChange={onChangeHandler} value={data.email} type="email" className="input-field" placeholder="Email address" />
          <input required name="street" onChange={onChangeHandler} value={data.street} type="text" className="input-field" placeholder="Street" />
        </div>

        <div className="multi-fields">
          <input required name="city" onChange={onChangeHandler} value={data.city} type="text" className="input-field" placeholder="City" />
          <input required name="state" onChange={onChangeHandler} value={data.state} type="text" className="input-field" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input required name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" className="input-field" placeholder="Zip code" />
          <input required name="country" onChange={onChangeHandler} value={data.country} type="text" className="input-field" placeholder="Country" />
          <input required name="phone" onChange={onChangeHandler} value={data.phone} type="text" className="input-field" placeholder="Phone" />
        </div>
      </div>

      <div className="placeorder-right">
        <div className="cart-total1">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details1">
              <p>Subtotal</p>
              <p>₹{total}</p>
            </div>
            <hr />
            <div className="cart-total-details1">
              <p>Delivery cost:</p>
              <p>₹20</p>
            </div>
            <hr />
            <div className="cart-total-details1">
              <b>Total</b>
              <b>₹{Number(total) + 20}</b>
            </div>
          </div>
        </div>

        <button type="submit" className="placeorder-btn">Place Order</button>
      </div>
    </form>
  );
};

export default Placeorder;
