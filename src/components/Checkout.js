import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

export default function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img
          src='https://images-fe.ssl-images-amazon.com/images/G/35/au-ce/ASUS_Amazon_Network_ILM_1300x90._CB626344940_.jpg'
          alt=''
          className='checkout-ad'
        />
        <div>
          <h2 className='checkout-title'>Shopping Cart</h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  );
}
