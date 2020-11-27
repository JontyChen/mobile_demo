import React, { Component } from 'react'

import {HotShellContainer} from './HotShell.style'
export default class HotShell extends Component {
    render() {
        return (
            <HotShellContainer>
                <div className="title">
                   <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt=""/>
                    <span>今日特惠</span> 
                </div>
                <div className='img_1'>
                    <img src="http://mp6.jmstatic.com/mobile/card_material/item_0_2048_1024-ipad2048_5e09cccaa7dbb.jpg?t=1577700554&imageView2/2/w/640/q/90" alt=""/>
                </div>
                <div className='img_2'>
                    <img src="http://mp6.jmstatic.com/mobile/card_material/item_0_1024_1024-ipad2048_5e09cd1e1fea1.jpg?t=1577700638&imageView2/2/w/640/q/90" alt=""/>
                    <img src="http://mp6.jmstatic.com/mobile/card_material/item_0_1024_1024-ipad2048_5e09cd474d4ec.jpg?t=1577700679&imageView2/2/w/640/q/90" alt=""/>
                </div>
            </HotShellContainer>
        )
    }
}
