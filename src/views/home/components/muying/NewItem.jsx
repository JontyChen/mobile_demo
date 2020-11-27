import React, { Component } from "react";

import { GetMuYing } from "../../../../api/getdata";

//早十点上新
import { NewItemContainer } from "./NewItem.style";
export default class NewItem extends Component {
  constructor() {
    super();
    this.state = {
      datalist: []
    };
  }
  render() {
    return (
      <NewItemContainer>
        <div className="wrapper">
          <div className="title">
            <img
              src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png"
              alt=""
            />
            <span>疯狂专场 早10点上新</span>
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
      </NewItemContainer>
    );
  }

  async componentDidMount() {
    let rs = await GetMuYing();
    // console.log(rs)
    this.setState({
      datalist: rs.data.item_list
    });
    // console.log(this.state.datalist);
  }
}
