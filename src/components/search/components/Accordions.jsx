import React, { Component } from "react";

import { AccordionsContainer } from "./Accordions.style";
import { GetSearchButton } from "../../../api/getdata";

import {withRouter} from 'react-router-dom'
 class Accordions extends Component {
  constructor() {
    super();
    this.state = {
      current: 1,
      datalist: [],
      itemList: []
    };
  }

  list = id => {
    console.log(id);
    this.state.datalist.map((item, index) => {
      if (id === item.category_id) {
        this.setState({
          itemList: item.sub_categories
        });
        // return;
      }
      // console.log(this.state.itemList);
    });
  };
  handleClick(id) {
    // let list =[];
    if (id === this.state.current) {
      return this.setState({
        current: null
      });
    }
    // console.log(id)
    this.setState(pre => {
      return {
        current: id
      };
    });
    // console.log(this.state.current);
    this.list(id);
    // console.log(this.state.itemList);
  }

  //给子元素li添加一个方法，阻止点击事件的冒泡
  handleClickItem(id,e) {
    e.stopPropagation();
    // console.log(this,id)
    //根据传进来的id参数，通过路由进行传参
    //文件
    // console.log(this.state.itemList)
    this.state.itemList.map((item,index)=>{
      if(item.category_id===id){
        console.log(item.sub_categories)
        this.props.history.push(`/searchitem/id:${id}`)
      }
    })
  }

  render() {
    return (
      <AccordionsContainer>
        <ul>
          {this.state.datalist.map((item, index) => {
            return (
              <li
                key={index}
                onClick={this.handleClick.bind(this, item.category_id)}
                className={
                  this.state.current === item.category_id ? "active" : ""
                }
              >
                <span className="span">{item.name}</span>
                <i></i>
                {/* 标题下面的ul部分 */}
                <ul
                  style={{
                    display:
                      this.state.current === item.category_id ? "" : "none"
                  }}
                >
                  {// console.log(item.category_id)
                  this.state.itemList.map((item, index) => {
                    return (
                      <li key={index} onClick={this.handleClickItem.bind(this,item.category_id)}>
                        <span>{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </AccordionsContainer>
    );
  }

  async componentDidMount() {
    let rs = await GetSearchButton();
    // console.log(rs);
    this.setState({
      datalist: rs.data.data,
      itemList: rs.data.data[0].sub_categories
    });
    // console.log(rs.data.data, this.state.itemList);
  }
}

export default withRouter(Accordions)