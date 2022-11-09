import {Routes, Route, Link, Outlet} from 'react-router-dom';
import Home from '@/pages/home';
import Layout from '@/components/Layout'
import Crypto from '@/pages/crypto';
import Exchange from '@/pages/exchange';
import NFT from '@/pages/nft';
import Detail from '@/pages/detail';

const App = props => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<Home />} />
                <Route  path={'/crypto'} element={<Crypto />} />
                <Route  path={'/exchange'} element={<Exchange />} />
                <Route  path={'/nft'} element={<NFT />} >

                </Route>
                <Route    path="/nft/detail/:id" element={<Detail />} />


            </Route>
            <Route path='*' element={
                <main style={{padding: '1rem'}}>
                    <p>There's nothing here!</p>
                </main>
            } />
        </Routes>
    )
}

export default App;
