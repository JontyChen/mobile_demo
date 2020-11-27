import React, { Component } from 'react'

import {BannerContainer} from './Banner.style'
export default class Banner extends Component {
    render() {
        return (
            <BannerContainer>
                <div className='container'>
                        <ul>
                            <li>
                                <div className="img">
                                    <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/interantion_shipping.png?imageView2/2/w/51/q/70" alt=""/>
                                </div>
                                <div className="span">
                                    <span>海外直供</span>
                                </div>
                            </li>
                            <li>
                                <div className="img">
                                    <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/interantion_shipping.png?imageView2/2/w/51/q/70" alt=""/>
                                </div>
                                <div className="span">
                                    <span>原装正品</span>
                                </div>
                            </li>
                            <li>
                                <div className="img">
                                    <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/global_delivery.png?imageView2/2/w/51/q/70" alt=""/>
                                </div>
                                <div className="span">
                                    <span>急速到货</span>
                                </div>
                            </li>
                            <li>
                                <div className="img">
                                    <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/return_guarantee_7.png?imageView2/2/w/51/q/70" alt=""/>
                                </div>
                                <div className="span">
                                    <span>轻松退货</span>
                                </div>
                            </li>
                        </ul>
                </div>
            </BannerContainer>
        )
    }
}
