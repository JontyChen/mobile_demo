import React, { Component } from "react";
import { SearchContainer } from "./Search.style";

import {withRouter} from 'react-router-dom'

import SearchButton from "./SearchButton";

import MyContext from '../../context/MyContext'

 class Search extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false
    };
  }

  isShowContext=()=>{
    this.setState({
      isShow:false
    })
  }

  handleClick(e) {
    // console.log(e.currentTarget)
    this.setState({
      isShow: !this.state.isShow
    });
    // console.log(this.state.isShow, e);
  }

  handleClickInput(e){
    // console.log(this,e)
    this.props.history.push('/searchhtml')
  }
  render() {
    return (
      <div>
        <MyContext.Provider value={{isShow:this.isShowContext}}>
        <SearchContainer>
          <div className="container">
            <div className="input-container">
              {/* 左边的搜索框 */}
              <div className="input" onClick={this.handleClickInput.bind(this)}>
                <div>
                  <img
                    src="http://f0.jmstatic.com/btstatic/h5/common/search_btn.png"
                    alt=""
                  />
                  <span>搜索商品 分类 功效</span>
                </div>
              </div>
              {/* 右边的搜索图标 */}
              <div className="img" onClick={this.handleClick.bind(this)}>
                <img
                  src="http://f0.jmstatic.com/btstatic/h5/index/search_list2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SearchContainer>
        <SearchButton
          isShow={this.state.isShow}
          handleClick={this.handleClick.bind(this)}
        ></SearchButton>
        </MyContext.Provider>
      </div>
    );
  }
}

export default withRouter(Search)