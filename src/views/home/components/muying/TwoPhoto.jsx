import React, { Component } from 'react'

import {TwoPhotoContainer} from './TwoPhoto.style'
//两个图片的组件
export default class TwoPhoto extends Component {
    render() {
        return (
            <TwoPhotoContainer>
                <div className='wrapper'>
                    <div className='item'>
                        <img src="http://mp6.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1577418924.jpeg?imageView2/2/w/320/q/90" alt=""/>
                    </div>
                    <div className='item'>
                        <img src="http://mp6.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1577153097.jpeg?imageView2/2/w/320/q/90" alt=""/>
                    </div>
                </div>
            </TwoPhotoContainer>
        )
    }
}
