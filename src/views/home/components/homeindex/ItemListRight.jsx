import React, { Component } from "react";

import { ItemListContainer } from "./ItemList.style";

import { GetTom } from "../../../../api/getdata";

// 这是明日预告组件渲染部分
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
        {this.state.datalist.map((item, index) => {
            return (
              <div className="container" key={index}>
                <div className="item-img">
                  <img
                    src={item.image_url_set.dx_image.url[320]}
                    alt=""
                  />
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
                  <div className="item-comment">
            <span>{item.product_desc}</span>
                  </div>
                </div>
              </div>
            );
        })}
      </ItemListContainer>
    );
  }

  async componentDidMount() {
    let rs = await GetTom();
    // console.log(rs.data.item_list)
    this.setState({
      datalist: rs.data.item_list
    });
    // console.log(this.state.datalist);
  }
}
