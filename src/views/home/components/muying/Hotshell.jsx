import React, { Component } from 'react'

import {HotshellContainer} from './Hotshell.style'
//全球热销
export default class Hotshell extends Component {
    render() {
        return (
            <HotshellContainer>
                <div className='wrapper'>
                    <div className="title">
                    <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt=""/>
                    <span>全球热销品牌</span> 
                    </div>
                    <div className="container">
                        <ul className='item-list'>
                            <li className="item">
                                <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1502086238.jpeg?imageView2/2/w/160/q/90" alt=""/>
                            </li>
                            <li className="item">
                                <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1560910791.jpeg?imageView2/2/w/160/q/90" alt=""/>
                            </li>
                            <li className="item">
                                <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543566.jpeg?imageView2/2/w/160/q/90" alt=""/>
                            </li>
                            <li className="item">
                                <img src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1551235310.jpeg?imageView2/2/w/160/q/90" alt=""/>
                            </li> 
                        </ul>
                        <ul className='item-list'>
                        <li className="item">
                                <img src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548056454.jpeg?imageView2/2/w/160/q/90" alt=""/>
                            </li>
                            <li className="item">
                                <img src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1563960647.jpeg?imageView2/2/w/160/q/90" alt=""/>
                            </li>
                            <li className="item">
                                <img src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548055217.png?imageView2/2/w/160/q/90" alt=""/>
                            </li>
                            <li className="item">
                                <img src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548055580.jpeg?imageView2/2/w/160/q/90" alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
            </HotshellContainer>
        )
    }
}
