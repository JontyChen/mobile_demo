import React, { Component } from 'react'

import {SelectedActivitiesContainer} from './SelectedActivities.style'

//精选活动
export default class SelectedActivities extends Component {
    render() {
        return (
            <SelectedActivitiesContainer>
                <div className="wrapper">
                <div className="title">
                   <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt=""/>
                    <span>今日特惠</span> 
                   </div>
                   <div className="container">
                        <div className="img">
                            <img src="http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1577439162.jpeg?imageView2/2/w/320/q/90" alt=""/>
                        </div>
                        <div className="img right">
                            <img src="http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1577327854.jpeg?imageView2/2/w/320/q/90" alt=""/>
                        </div>
                   </div>
                </div>
            </SelectedActivitiesContainer>
        )
    }
}
