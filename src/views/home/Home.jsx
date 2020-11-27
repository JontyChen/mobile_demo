import React, { Component } from "react";

//导入搜索框组件
import Search from "../../components/search/Search";

//导入首页用到的组件
import Homeindex from "./components/homeindex/Homeindex";
import Dutyfree from "./components/dutyfree/Dutyfree";
import Muyiong from "./components/muying/Muyiong";
import Qingshe from "./components/qingshe/Qingshe";
import Mingpin from "./components/mingpin/Mingpin";

import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import Hearderbar from "../../components/hearderbar/Hearderbar";
//导入样式
import { HomeContainer } from "./Home.style";

const navlist = [
  {
    id: "shouye",
    name: "首页",
    comp: <Homeindex></Homeindex>
  },
  {
    id: "jisu",
    name: "极速免税店",
    comp: <Dutyfree></Dutyfree>
  },
  {
    id: "muying",
    name: "母婴",
    comp: <Muyiong></Muyiong>
  },
  {
    id: "qingshe",
    name: "轻奢",
    comp: <Qingshe></Qingshe>
  },
  {
    id: "mingpin",
    name: "名品特卖",
    comp: <Mingpin></Mingpin>
  }
];

export default class home extends Component {
  constructor() {
    super();
    this.state = {
      id: "shouye",
      // id:'jishu',
      ids: "shouye", //记录上个点击的页面
      current: false,
      datalist: navlist
    };
  }

  handleClick(id) {
    this.setState(
      () => {
        return {
          ids: this.state.id,
          id: id
        };
      },
      () => {}
    );
  }

  //点击返回事件
  handleClickBack = () => {
    this.setState({
      id: this.state.ids,
      ids: this.state.id
    });
  };
  //点击返回首页面
  handleClickHome=()=>{
    this.setState({
      id:'shouye'
    })
  }
  render() {
    return (
      <HomeContainer>
        {this.state.id === "shouye" ? (
          ""
        ) : (
          <Hearderbar
            list={this.state.datalist}
            id={this.state.id}
            handleClick={this.handleClickBack}
            handleClickHome={this.handleClickHome}
          ></Hearderbar>
        )}
        <Search></Search>
        <div className="container">
          <Nav
            list={this.state.datalist}
            id={this.state.id}
            handleClick={this.handleClick.bind(this)}
          ></Nav>
          <Main list={this.state.datalist} id={this.state.id}></Main>
        </div>
      </HomeContainer>
    );
  }
  componentDidMount() {}
}
