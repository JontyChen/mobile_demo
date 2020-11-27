import React, { Component } from "react";

import { SearchInputContainer } from "./SearchInput.style";
import { withRouter } from "react-router-dom";
import MyContext from "../../../context/MyContext";
class SearchInput extends Component {
  handelClick(obj, e) {
    // console.log(obj,e);
    e.stopPropagation();
    obj.isShow();
  }
  handelClickInput() {
    // console.log(this.props);
    this.props.history.push("/searchhtml");
  }
  render() {
    return (
      <SearchInputContainer>
        <MyContext.Consumer>
          {obj => {
            console.log(obj.isShow);
            return (
              <div className="wrapper">
                <div
                  className="input"
                  onClick={this.handelClickInput.bind(this)}
                >
                  <div className="img">
                    <img
                      src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png"
                      alt=""
                    />
                  </div>
                  <div className="span">
                    <span>搜索商品名称 分类 功效</span>
                  </div>
                </div>
                <div
                  className="back"
                  onClick={this.handelClick.bind(this, obj)}
                >
                  <span>返回</span>
                </div>
              </div>
            );
          }}
        </MyContext.Consumer>
      </SearchInputContainer>
    );
  }
}

export default withRouter(SearchInput);
