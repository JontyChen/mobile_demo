import React, { Component } from "react";

import Nav from "./components/Nav";
import Item from "./components/Item";

import { GetPinTuan } from "../../api/getdata";

const navlist = [
  {
    id: 1,
    name: "推荐",
    data: "Recommend"
  },
  {
    id: 2,
    name: "美妆",
    data: "Beauty"
  },
  {
    id: 3,
    name: "母婴健康",
    data: "Muying"
  },
  {
    id: 4,
    name: "食品保健",
    data: "Foodhealth"
  },
  {
    id: 5,
    name: "数码家电",
    data: "Digital"
  },
  {
    id: 6,
    name: "家居",
    data: "Furnishing"
  },
  {
    id: 7,
    name: "女装",
    data: "Womendress"
  },
  {
    id: 8,
    name: "内衣",
    data: "Underwear"
  },
  {
    id: 9,
    name: "下期预告",
    data: "Notice"
  }
];

export default class Assemble extends Component {
  constructor() {
    super();
    this.state = {
      data: "Recommend",
      id: 1,
      navlist: navlist,
      list: [],
      datalist: []
    };
  }

  //导航栏切换
  handleClickNav = (id, data) => {
    console.log(this, id, data);
    this.setState(
      {
        id: id,
        data: data
      },
      () => {
        this.setState({
          list: this.state.datalist[this.state.data]
        });
      }
    );
  };
  render() {
    return (
      <div>
        <Nav
          list={this.state.navlist}
          handleClick={this.handleClickNav}
          id={this.state.id}
        ></Nav>
        <Item list={this.state.list}></Item>
      </div>
    );
  }

  async componentDidMount() {
    let rs = await GetPinTuan();
    console.log(rs.data);
    console.log(rs.data[this.state.data]);
    this.setState({
      datalist: rs.data,
      list: rs.data[this.state.data]
    });
  }
}
