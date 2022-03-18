import React from 'react';
import './Product.css';

export default function Product() {
  return (
    <div className='product'>
      <div className='product-info'>
        <p>Focusrite Scarlett Solo Studio 3rd Gen USB Audio Interface Bundle</p>
        <div className='product-price'>
          <small>$</small>
          <strong>20</strong>
        </div>
        <div className='product-rating'>⭐️</div>
      </div>
      <img
        src='https://m.media-amazon.com/images/I/6175I+PNYRL._AC_SX450_.jpg'
        alt='Focusrite Scarlett Solo Studio 3rd Gen USB Audio Interface Bundle for the Guitarist, Vocalist or Producer with Condenser...'
      />
      <button>Add to cart</button>
    </div>
  );
}
