import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './header.less'
import { images } from '@/constant'
import Banner from '../Banner'
import { Modal } from 'antd'
import ConnectWalletModal from '../ConnectModel'
import IsLoadingModal from '../ConnectModel/Loading'

const routerList = [{
    path: '/',
    name: 'Cryptocurrencies'
},
{
    path: '/exchange',
    name: 'Exchange'
},
{
    path: '/derivatives',
    name: 'Derivatives'
},
{
    path: '/categories',
    name: 'Categories'
},
{
    path: '/nft',
    name: 'NFT'
},
{
    path: '/dapp',
    name: 'Dapp'
},
]
const Layout = props => {
    let location = useLocation()
    let navigate = useNavigate()
    const [active, setActive] = useState('/')
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const handleJumpTo = (hash) => {
        setActive(hash)
        navigate(hash)
    }
    const handleConnectWallet = () => {
        setIsModelOpen(true)
    }
    useEffect(()=>{
        console.log(props,location);
        setActive(location.pathname)
    },[location])
    return (
        <div className='project-box'>
            <header>
                <div className='header-box'>
                    <img onClick={()=>navigate('/')} className={'header-logo'} src={images.logo} />
                    <div onClick={handleConnectWallet} className='wallet'>Connect Wallet</div>
                </div>
            </header>
            {active === '/' && <Banner /> || null}
            <nav className='nav'>
                <ul>
                    {routerList.map(obj => {
                        return <li onClick={() => handleJumpTo(obj.path)} className={obj.path === active && 'active' || ''} key={obj.path}>{obj.name}</li>
                    })}
                </ul>
            </nav>

            <div className="content">
                <Outlet />
            </div>
            <ConnectWalletModal
                isModelOpen={isModelOpen}
                setIsModelOpen={(isOpen = false) => setIsModelOpen(isOpen)}
                setIsLoading={(isOpen = false) => setIsLoading(isOpen)}
            />
            <IsLoadingModal
                goBack={() => {
                    setIsLoading(false)
                    setIsModelOpen(true)
                }}
                isLoading={isLoading}
                setIsLoading={() => setIsLoading(false)}
            />


        </div>
    )
}
export default Layout;
