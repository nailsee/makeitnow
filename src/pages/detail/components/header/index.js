import React from 'react';
import './index.less'
import { images } from '@/constant'
import { Rate } from 'antd';
const Index = props => {
    return (
        <div className='header-box'>
            <div className='header'>
                {/* left */}
                <div className='left'>
                    <div className='title'>Primate #2657</div>
                    <div className='header-content'>
                        <img src={images.nft1} />
                        <div>
                            <div className='header-desc'>Contract Address: <span>0x34d8...e258</span></div>
                            <div className='header-desc'>Token ID: <span>70202</span></div>
                            <div className='header-desc'>Token Standard:: <span>ERC-721</span></div>
                            <div className='header-desc'>Blockchain: <span>Ethereum</span></div>
                            <div className='header-desc'>Creator Earnings: <span>5%</span></div>
                            <div className='header-desc'>Plot: <span>70202</span></div>
                            <div className='header-desc'>Environment Tier: <span>70,202 of 99,999</span></div>
                            <div className='header-desc'>Sediment Tier: <span>1 of 5</span></div>

                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='right'>
                    <div className='title'>Markitnow Score</div>
                    <div className='rate-box'>
                        <span className='right-rate-num'>3.5</span>
                        <div >
                            <Rate className='rate' disabled defaultValue={3.5} />
                            <div className='rate-people'>128384 People</div>
                        </div>
                    </div>
                    <div className='rate-chart'>
                        <div className='rate-chart-desc'>That's better than 38% of NFTs</div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default Index;