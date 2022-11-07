import React, {useEffect} from 'react';
import {images} from '@/constant'
import './index.less'
const Banner = props => {
  
    return (
        <div className='banner-box'>
          <div className='banner'>
            <div className='banner-title'>
                <span>Markitnow</span>
                <span>A New Review System for Web3.0 Life</span>
            </div>
            <div className='mouse'>
                <span />
            </div>
            <div className='contact-us'>
                <img src={images.twitter} />
                <img src={images.tg} />

            </div>
            </div>  

        </div>
    )
}
export default Banner;
