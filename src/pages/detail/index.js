import React, { useState } from 'react';
import './index.less'
import Header from './components/header'
import { Rate, Tabs, Input } from 'antd';
import { images } from '@/constant'
import { CaretUpOutlined, CaretDownOutlined, HeartFilled } from '@ant-design/icons'
import WriteComment from './components/write'
const { TextArea } = Input;

const Index = props => {
    const [openModal, setOpenModal] = useState(false)
    const handleWrite = () => {
        setOpenModal(true)
    }
    const onChange = (e) => {
        // console.log(e)
    }
    return (
        <div className='detail-box'>
            <Header />
            {/* write comment */}
            <div className='write-comment'>
                <div className='write' onClick={handleWrite}>Write comment</div>
                <div className='write-rate'>
                    <span>Evaluate:</span>
                    <Rate className='rate-eval' defaultValue={2.5} disabled />
                </div>
            </div>
            <div className='primate'>
                <div className='title'>Primate #2657 details</div>
                <div className='primate-desc'>Otherdeed is the key to claiming land in Otherside. Each have a unique blend of environment and sediment — some with resources, some home to powerful artifacts. And on a very few, a Koda roams.</div>
            </div>
            <div className='author'>
                <div className='title'>Author</div>
                <div className='author-box'>
                    <div className='author-left'>
                        <img src={images.nft1} />
                        <div className='author-content'>
                            <div>Otherdeed for Otherside</div>
                            <div><span>Items</span> 100.0K  <span>·  Created Apr 2022  ·  Creator fee 5%</span></div>
                        </div>
                    </div>
                    <div className='author-right'>
                        follow
                    </div>

                </div>
            </div>
            {/* Related Nft */}
            <div className='related'>
                <div className='title'>Related NFT</div>
                <div className='related-nft'>
                    <img src={images.nft1} />
                    <img src={images.nft1} />
                    <img src={images.nft1} />
                    <img src={images.nft1} />

                </div>
            </div>
            {/* comment */}
            <div className='tabs-box'>
                <Tabs className='tabs' defaultActiveKey="1">
                    <Tabs.TabPane tab="Comment" key="1">
                        <div className='add-comment'>
                            <TextArea className='textarea' placeholder="Add a comment..." allowClear onChange={onChange} />
                            <div className='btn'>Release</div>
                        </div>
                        {
                            new Array(8).fill().map((obj, i) => (
                                <div className='comment-list' key={i}>
                                    <div className='list-header'>
                                        <img src={images.nft1} />
                                        <div className='list-one'>Syahrul Falah{i}</div>
                                        <div className='list-twe'>Evaluate:</div>
                                        <Rate className='rate-list' disabled defaultValue={4.5} />
                                        <div className='list-time'>17:23:09   02/18 2022</div>
                                    </div>
                                    <div className='title'>Wancana - Blog Platform Website Design</div>
                                    <div className='list-desc'>Take a look at a new design about Wancana, a Blog Platform Website Design. In this exploration, I tried to explore more about the layout positioning and typography</div>

                                    <div className='comment-all'>
                                        <div className='comment-der'>
                                            <CaretUpOutlined className='caret' /><span>43</span>
                                        </div>
                                        <div className='comment-der'>
                                            <CaretDownOutlined className='caret' />
                                        </div>
                                    </div>

                                </div>
                            ))
                        }

                    </Tabs.TabPane>
                    <Tabs.TabPane className='short' tab="Short commentary" key="2">
                        <div className='add-comment'>
                            <TextArea className='textarea' placeholder="Add a comment..." allowClear onChange={onChange} />
                            <div className='btn'>Release</div>
                        </div>
                        <div className='good-comments'>
                            <div className='good-title'>Good comments</div>
                        </div>
                        {
                            new Array(8).fill().map((obj,i)=>(
                                <div className='comment-list' key={i}>
                                <div className='list-header-box'>
                                    <div className='list-header'>
                                        <div className='list-one'>Syahrul Falah</div>
                                        <div className='list-twe'>Evaluate:</div>
                                        <Rate className='rate-list' disabled defaultValue={4.5} />
                                        <div className='list-time'>17:23:09   02/18 2022</div>
                                    </div>
                                    <div className='like-box'><HeartFilled className='like-icon' />123</div>
    
                                </div>
                                <div className='list-desc'>Take a look at a new design about Wancana, a Blog Platform Website Design. In this exploration, I tried to explore more about the layout positioning and typography</div>
    
                            </div>
                            ))
                        }
                       
                    </Tabs.TabPane>

                </Tabs>
            </div>
            <WriteComment openModal={openModal} setOpenModal={()=>setOpenModal(false)}  />
        </div>
    )
}
export default Index;