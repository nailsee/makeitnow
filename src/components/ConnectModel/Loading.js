import React, { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import './index.less'
import { images } from '@/constant'
import Banner from '../Banner'
import { Modal, Spin } from 'antd'
import { LoadingOutlined,ArrowLeftOutlined  } from '@ant-design/icons';

const Component = props => {

  const {isLoading, setIsLoading, goBack} = props;
    console.log(isLoading,'isLoadingisLoadingisLoading')
    return (
            <Modal width={409} className='connectWalletMadal' closable={isLoading} onCancel={() => {
                setIsLoading(false)
            }} open={isLoading} footer={null}>
                <ArrowLeftOutlined onClick={()=>goBack()} style={{
                    fontSize: 20,
                    color: '#000',
                    cursor: 'pointer',
                }} />
                <div className='loading-box'>
                    <Spin indicator={ <LoadingOutlined style={{ fontSize: 60,marginBottom: 50 }} spin />} />
                    <span className='waiting'>Waiting for connection</span>
                    <span className='waiting'>Confirm this connection in your wallet</span>

                </div>
            </Modal>
    )
}
export default Component;
