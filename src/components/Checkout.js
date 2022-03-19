import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import {useStateValue} from '../store/StateProvider'

export default function Checkout() {
  const [{cart},dispatch] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img
          src={'https://images-fe.ssl-images-amazon.com/images/G/35/au-ce/ASUS_Amazon_Network_ILM_1300x90._CB626344940_.jpg'}
          alt=''
          className='checkout-ad'
        />
        <div>
          <h2 className='checkout-title'>Shopping Cart</h2>
          {cart.map(item=>{
            return <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
          })}
        </div>
      </div>
      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  );
}
