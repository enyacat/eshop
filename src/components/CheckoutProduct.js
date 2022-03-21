import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../store/StateProvider";

export default function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const deleteItem = () => {
    dispatch({ type: "DELETE_ITEM", id });
  };
  return (
    <div className='checkout-product'>
      <img src={image} alt='' className='checkout-product-image' />
      <div className='checkout-product-info'>
        <p className='checkout-product-title'>{title}</p>
        <p className='checkout-product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkout-product-rating'>
          {Array(rating).fill(<p>⭐️</p>)}
        </div>
        <button onClick={deleteItem}>Delete</button>
      </div>
    </div>
  );
}
