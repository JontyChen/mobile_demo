import React, { Component } from "react";

import { ItemContainer } from "./Item.style";

export default class Item extends Component {
  render() {
    return (
      <ItemContainer>
        {/* 这是信息列表的展示 */}
        {this.props.list.map((item, index) => {
          return (
            <div className="wrapper" key={index}>
              {/* 列表上面的图片展示 */}
              <div className="img">
                <img src={item.image} alt="" />
                <span>{item.buyer_number_text}</span>
              </div>
              {/* 列表中部的信息介绍展示 */}
              <div className="msg">
                <span>{item.group_name_tag}</span>
                <p>{item.short_name}</p>
              </div>
              {/* 这是底部价格和去开团模块 */}
              <div className="price">
                <span className="left">
                  <span>{item.jumei_price}</span>
                  <p>{item.single_price}</p>
                </span>
                <div className="right">
                  <span>去开团</span>
                </div>
              </div>
            </div>
          );
        })}
      </ItemContainer>
    );
  }
}
