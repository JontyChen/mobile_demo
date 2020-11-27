import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

export default class Swipper extends Component {

    constructor(){
        super();
        this.state = {
            data: ['http://mp6.jmstatic.com/mobile/card_material/item_562_2048_838-ipad2048_1577699754.jpeg?imageView2/2/w/640/q/90',
             'http://mp6.jmstatic.com/mobile/card_material/item_562_2048_838-ipad2048_1577699869.jpeg?imageView2/2/w/640/q/90'],
            imgHeight: 174,
          }
    }

    render() {
        return (
            <WingBlank style={{marginLeft:0,marginRight:0,marginTop:2,}}>
            <Carousel
              autoplay={false}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {this.state.data.map((item,index) => (
                <a
                  key={index}
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={item}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}

            </Carousel>
          </WingBlank>
        )
    }
}
