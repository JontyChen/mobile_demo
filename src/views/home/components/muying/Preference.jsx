import React, { Component } from 'react'

import {PreferenceContainer} from './Preference.styled'
// 今日特惠
export default class Preference extends Component {
    render() {
        return (
            <PreferenceContainer>
               <div className="wrapper">
                   <div className="title">
                   <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt=""/>
                    <span>今日特惠</span> 
                   </div>
                   <div className="container">
                        <div className="img">
                            <img src="http://mp6.jmstatic.com/mobile/card_material/item_7710_2048_1024-ipad2048_1576562992.jpeg?imageView2/2/w/640/q/90" alt=""/>
                        </div>
                        <div className="img">
                            <img src="http://mp6.jmstatic.com/mobile/card_material/item_7710_2048_1024-ipad2048_1576479617.jpeg?imageView2/2/w/640/q/90" alt=""/>
                        </div>
                   </div>
               </div>
            </PreferenceContainer>
        )
    }
}
