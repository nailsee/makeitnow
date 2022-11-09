import React, { useEffect } from 'react';
import i18n from "@/locale";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { updateChainId } from "@/state/application/actions";
import { fetchPost } from '@/state/application/reducer'
import Web3 from 'web3'
import { images } from '@/constant'
import { Pagination, Rate } from 'antd'
import RateComponent from './components/rank'
import './index.less'
const Index = props => {

    return (
        <div className='box-nft-content' key={i}>
            <img className='nft-img' src={images.nft1} />
            <div className='nft-name'>Primate #2657</div>
            <RateComponent />

        </div>
    )
}
export default Index;
