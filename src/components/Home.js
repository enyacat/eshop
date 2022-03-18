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
          <Product
            id='12341'
            title='Focusrite Scarlett Solo Studio 3rd Gen USB Audio Interface Bundle'
            price={308}
            rating={4}
            image='https://m.media-amazon.com/images/I/6175I+PNYRL._AC_SX450_.jpg'
          />
          <Product
            id='12342'
            title='Dettol Liquid Hand Wash Aloe Vera Pump, 1.5 Liter, Count of 6 Pack'
            price={17.4}
            rating={5}
            image='https://m.media-amazon.com/images/I/517Ju6OIU0L._AC_SL1000_.jpg'
          />
        </div>

        <div className='home-row'>
          <Product
            id='12343'
            title='Elden Ring - PlayStation 5'
            price={89.0}
            rating={5}
            image='https://m.media-amazon.com/images/I/81MFOB5SiiL._AC_SL1500_.jpg'
          />
          <Product
            id='12344'
            title='Aptamil Profutura 2 Premium Baby Follow-On Formula from 6-12 Months, 900 g'
            price={40}
            rating={5}
            image='https://m.media-amazon.com/images/I/91ld7wuyCNL._AC_SL1500_.jpg'
          />
          <Product
            id='12345'
            title='NESTLÉ MILO Cereal, Whole Grain, Energy & Fibre, 700g'
            price={6.98}
            rating={4}
            image='https://m.media-amazon.com/images/I/91UOAC5z5FL._AC_SY679_.jpg'
          />
        </div>

        <div className='home-row'>
          <Product
            id='12346'
            title='LG 34GL750 - 34 inch Ultragear Curved Gaming Monitor with 21:9 WFHD (2560 x 1080) Display IPS Display, 144Hz, 1ms MPRT, sRGB 99%, HDR 10, NVIDIA G-Sync Compatible, AMD Freesync'
            price={657}
            rating={4}
            image='https://m.media-amazon.com/images/I/71TNmnADM6L._AC_SL1500_.jpg'
          />
        </div>
      </div>
    </div>
  );
}
