import React from 'react';
import { Pagination, Rate } from 'antd'
import './rank.less'

const RateComponent = props => {
    return (
        <div className='rankBox'>
            <Rate className='rate' disabled defaultValue={3.5} />
            <span className='rate-num'>3.5</span>
        </div>
    )
}
export default RateComponent