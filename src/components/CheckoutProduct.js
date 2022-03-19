import React from 'react';
import './CheckoutProduct.css';

export default function CheckoutProduct({id, image, title, price, rating}) {
  return (
    <div className='checkout-product'>
      <img
        src={image}
        alt=''
        className='checkout-product-image'
      />
      <div className='checkout-product-info'>
        <p className='checkout-product-title'>
          {title}
        </p>
        <p className='checkout-product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkout-product-rating'>
          {Array(rating).fill(<p>⭐️</p>)}
        </div>
        <button>Delete</button>
      </div>
    </div>
  );
}
