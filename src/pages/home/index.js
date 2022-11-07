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
const Home = props => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    useEffect(() => {
        // i18n.changeLanguage('zh')
        dispatch(fetchPost({ dddd: 1111 }))
    }, [])
    const handleChangeLang = () => {
        i18n.changeLanguage('en')
    }
    const handleOptions = (e) => {
        console.log(e)
    }
    return (
        <div className='home'>
            <div className='left'>
                <div className='box-content'>
                    <div className='flex-box'>
                        <div className='title'>Popular NFT</div>
                        <Pagination onChange={handleOptions} simple defaultCurrent={2} total={50} />
                    </div>
                    <div className='box-nft'>
                        {
                            new Array(4).fill().map((obj, i) => {
                                return (
                                    <div className='box-nft-content' key={i}>
                                        <img className='nft-img' src={images.nft1} />
                                        <div className='nft-name'>Primate #2657</div>
                                        <RateComponent />

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* HOT NFT */}
                <div className='box-content'>
                    <div className='flex-box'>
                        <div className='title'>Hot NFT</div>
                        <div className='more'>More</div>
                    </div>
                    <div className='box-nft'>
                        {
                            new Array(4).fill().map((obj, i) => {
                                return (
                                    <div className='box-nft-content' key={i}>
                                        <img className='nft-img' src={images.nft1} />
                                        <div className='nft-name'>Primate #2657</div>
                                        <RateComponent />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Most popular reviews */}
                <div className='popular'>
                    <div className='title'>Most popular reviews</div>
                    {
                        new Array(10).fill().map((obj,i)=>{
                            return (
                                <div key={i} className='popular-box'>
                                <img src={images.nft1} />
                                <div className='popular-content'>
                                    <div className='popular-intro'>A false "family reconciliation" that allows women to be moved, emasculated, introspected and relieved by themselves</div>
                                    <div className='popular-article'>
                                        <span className='articel'>Open sea{i}</span>
                                        <span className='comment'>comment 《Primate》</span>
                                        <RateComponent />
                                    </div>
                                    <div className='desc'>We say: Judge a man not by what he says, but by what he does. So let's see what the father does. 1. She went home for the first day of the high school holiday, the stepmother told her father that she was bothering her son, so the father sent his daughter to the summer camp the next day.</div>
                                </div>
                            </div>
                            )
                        })
                    }
                   
                </div>
            </div>
            <div className='right'>
                <div className='title'>Ranking list</div>
                <div className='rank-list'>
                    {
                        new Array(10).fill().map((obj, i) => {
                            return (
                                <div key={i} className='rank-list-li'>
                                    <div>
                                        <img src={images.nft1} />
                                        <span className='name'>GenuineUndead{i}</span>
                                    </div>
                                    <RateComponent />
                                </div>
                            )
                        })}

                </div>
            </div>

        </div>
    )
}
export default Home;
