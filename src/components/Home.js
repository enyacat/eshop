import React from 'react';
import './Home.css';
import Product from './Product';

export default function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img
          src={require('../images/Homebanner.jpg')}
          alt=''
          className='home-image'
        />

        <div className='home-row'>
          <Product />
          <Product />
        </div>

        <div className='home-row'>
          <Product />
          <Product />
          <Product />
        </div>

        <div className='home-row'>
          <Product />
        </div>
      </div>
    </div>
  );
}
