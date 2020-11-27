import React, { Component } from "react";

import { GetToday } from "../../../../api/getdata";

import { ItemListContainer } from "./ItemList.style";

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
        {/* 一个div作为包裹 */}
        <div className="wrapper">
          {/* 这个div作为上面的小标题==》今日团购，每天十点上新 */}
          <div className="title">
            <img
              src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png"
              alt=""
            />
            <span>今日团购，每天十点上新</span>
          </div>
          {/* 这个作为列表内容展示 */}
          {this.state.datalist.map((item, index) => {
            if (item.type === "jumei_pop") {
              return (
                <div className="container" key={index}>
                  <div className="item-img">
                    <img src={item.image_url_set.dx_image.url[320]} alt="" />
                  </div>
                  <div className="item-message">
                    <div className="item-message-title">
                      <span>{item.name}</span>
                    </div>
                    <div className="item-price">
                      <span className="newPrice">
                        <p>￥</p>
                        {item.jumei_price}
                      </span>
                      <span className="oldPrice">
                        <p>￥</p>
                        {item.market_price}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </ItemListContainer>
    );
  }

  //获取数据
  async componentDidMount() {
    let rs = await GetToday();
    // console.log(rs);
    this.setState({
      datalist: rs.data.item_list
    });
    // console.log(this.state.datalist);
  }
}
