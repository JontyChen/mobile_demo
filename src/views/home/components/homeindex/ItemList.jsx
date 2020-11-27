import React, { Component } from "react";

import { ItemListContainer } from "./ItemList.style";

import { GetToday } from "../../../../api/getdata";
import {withRouter} from 'react-router-dom'

//这是今日上新的组件渲染部分
 class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      datalist: []
    };
  }
handleClick=()=>{
  // console.log(this)
  this.props.history.push('/detail')
}
  render() {
    return (
      <ItemListContainer>
        {this.state.datalist.map((item, index) => {
          if (item.type === "jumei_pop") {
            return (
              <div className="container" key={index} onClick={this.handleClick}>
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
                  <div className="item-comment">
                    <span>{item.product_desc}</span>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className="img_url">
                <img src={item.image_url_set.main[320]} alt="" />
              </div>
            );
          }
        })}
      </ItemListContainer>
    );
  }

  async componentDidMount() {
    let rs = await GetToday();
    // console.log(rs);
    this.setState({
      datalist: rs.data.item_list
    });
    // console.log(this.state.datalist);
  }
}

export default withRouter(ItemList)