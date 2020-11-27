import React, { Component } from "react";

import { ItemListContainer } from "./ItemList.style";

import { GetMingPin } from "../../../../api/getdata";
export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      datalist: []
    };
  }
  render() {
    return (
      <ItemListContainer>
        <div className="wrapper">
          {this.state.datalist.map((item, index) => {
            return (
              <div className="container" key={index}>
                <div className="big_img">
                  {/* 图片位置 */}
                  <img src={item.image_url_set.main[320]} alt="" />
                </div>
                <div className="mes">
                  {/* 信息位置 */}
                  <div className="mes_left">
                    <span>{item.title}</span>
                    <p>仅剩03天22时13分</p>
                  </div>
                  <div className="mes_right">
                    <img src={item.image_url_set.brand[320]} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ItemListContainer>
    );
  }
  async componentDidMount() {
    let rs = await GetMingPin();
    this.setState({
      datalist: rs.data.item_list
    });
    // console.log('mingpin',rs.data.item_list)
  }
}
