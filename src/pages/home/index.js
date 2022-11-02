import React, {useEffect} from 'react';
import i18n from "@/locale";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {updateChainId}  from "@/state/application/actions";
import {fetchPost} from  '@/state/application/reducer'
import Web3 from 'web3'
import {images} from '@/constant'

import './index.less'
const Home = props => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    useEffect(()=>{
        // i18n.changeLanguage('zh')
         dispatch(fetchPost({dddd:1111}))
    },[])
    const handleChangeLang = () => {
        i18n.changeLanguage('en')
    }
    return (
        <div className='home'>
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
export default Home;
