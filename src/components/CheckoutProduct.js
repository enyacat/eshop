import React from 'react';
import './CheckoutProduct.css';

export default function CheckoutProduct() {
  return (
    <div className='checkout-product'>
      <img
        src='https://m.media-amazon.com/images/I/6175I+PNYRL._AC_SX450_.jpg'
        alt=''
        className='checkout-product-image'
      />
      <div className='checkout-product-info'>
        <p className='checkout-product-title'>
          Focusrite Scarlett Solo Studio 3rd Gen USB Audio Interface Bundle
        </p>
        <p className='checkout-product-price'>
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className='checkout-product-rating'>
          <p>⭐️</p>
        </div>
        <button>Delete</button>
      </div>
    </div>
  );
}
