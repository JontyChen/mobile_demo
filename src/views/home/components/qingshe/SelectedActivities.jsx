import React, { Component } from 'react'

import { SelectedActivitiesContainer } from './SelectedActivities.style'

import {GetQingShe} from '../../../../api/getdata'
export default class SelectedActivities extends Component {

    constructor(){
        super();
        this.state={
            datalist:[]
        }
    }

    render() {
        return (
            <SelectedActivitiesContainer>
                <div className="wrapper">
          <div className="title">
            <img
              src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png"
              alt=""
            />
            <span>精选活动</span>
          </div>
          {this.state.datalist.map((item, index) => {
            return (
              <div className="container" key={index}>
                <div className="big_img">
                  {/* 图片位置 */}
                  <img
                    src={item.image_url_set.main[320]}
                    alt=""
                  />
                </div>
                <div className="mes">
                  {/* 信息位置 */}
                  <div className="mes_left">
            <span>{item.title}</span>
                    <p>仅剩03天22时13分</p>
                  </div>
                  <div className="mes_right">
                    <img
                      src={item.image_url_set.brand[320]}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
            </SelectedActivitiesContainer>
        )
    }
    async componentDidMount(){
        let rs = await GetQingShe();
        // console.log(rs)
        this.setState({
            datalist:rs.data.item_list
        })
    }
}
