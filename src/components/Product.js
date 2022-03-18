import React from 'react';
import './Product.css';

export default function Product({ id, title, image, price, rating }) {
  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <div className='product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className='product-rating'>{Array(rating).fill(<p>⭐️</p>)}</div>
      </div>
      <img
        src={image}
        alt='Focusrite Scarlett Solo Studio 3rd Gen USB Audio Interface Bundle for the Guitarist, Vocalist or Producer with Condenser...'
      />
      <button>Add to cart</button>
    </div>
  );
}
