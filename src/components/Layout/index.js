import React from 'react';
import {Routes, Route, Link, Outlet} from 'react-router-dom';
import './header.less' 
import {images} from '@/constant'


const Layout = props => {
    return (
        <div>
            <header>
                <div className='header-box'>
                    <img className={'header-logo'} src={images.logo} />
                    <div className='wallet'>Connect Wallet</div>
                </div>
            </header>
            <nav></nav>     
            <div className="content">
                <Outlet/>
            </div>

        </div>
    )
}
export default Layout;
