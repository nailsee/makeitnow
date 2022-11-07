import React, { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import './index.less'
import { images } from '@/constant'
import Banner from '../Banner'
import { Modal } from 'antd'
import IsLoadingModal from './Loading'
const walletList = [{
    walletName: 'Argent',
    walletImg: images.argent
},
{
    walletName: 'Rainbow',
    walletImg: images.rainbow
},
{
    walletName: 'MetaMask',
    walletImg: images.metamask
},
{
    walletName: 'Coinbase Wallet',
    walletImg: images.coinbase
},

]
const Component = props => {

  const {isModelOpen, setIsModelOpen,isLoading, setIsLoading} = props;
const handleConnect = (wallet) => {
    console.log(wallet,' wallet')
    setIsModelOpen(false);setIsLoading(true);
    // switch(wallet) {
    //     case 'MetaMask': setIsModelOpen(false);setIsLoading(true); break;
    // }
}
    return (
            <Modal width={269} maskStyle={
                {borderRadius: 10}
            } title="Basic Modal" className='connectWalletMadal' closable={false} onCancel={() => {
                setIsModelOpen(false)
            }} open={isModelOpen} footer={null}>
                <div className='title'>Connect a Wallet</div>
                {
                    walletList.map(obj=>{
                        return (
                            <div onClick={()=>handleConnect(obj.walletName)} key={obj.walletName} className='wallet'>
                                <img src={obj.walletImg} />
                                <span>{obj.walletName}</span>
                            </div>
                        )
                    })
                }
            </Modal>
    )
}
export default Component;
