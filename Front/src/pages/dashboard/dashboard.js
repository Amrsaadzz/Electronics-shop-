import React, { useState } from 'react';
import '../../styles/dashboard.css';
import PopWindow from '../../pages/home/pop_window.js';
import { Link } from "react-router-dom";

const DashboardCard = () => { // Accept projectName as prop
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const totalItems = cartItems.length;

  return (
    <div className="shopping-cart">
      <h2 className='h2'>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>price : </p>
      <p>Number Of Items : </p>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item}
            <button>Remove</button>
          </li>
        ))}
      </ul>
    </div>
);
};

export default DashboardCard;
