import React, { Component } from "react";
import { TabBar } from "antd-mobile";

//导入组件
import Home from '../home/Home'
import Assemble from '../assemble/Assemble'
import Shopping from '../shopping/Shopping'
import Profile from '../profile/Profile'

const tablist = [
  {
    id: 'home',
    name: "首页",
    icon: "http://p12.jmstatic.com/mcms/89ea87200c623f4c7809f21f2ab4bce8.png",
    iconAcitve:
      "http://p12.jmstatic.com/mcms/5e9e00537e4a635e36e84db81f2cc17a.png ",
      comp:<Home></Home>
  },
  {
    id: 'assemble',
    name: "拼团",
    icon: "http://p12.jmstatic.com/mcms/b51a66ca3ddb31ec0edbd67ea68f7589.png",
    iconAcitve:
      "http://p12.jmstatic.com/mcms/562fb7b2ae7bf1cacdc8ed91493e53af.png ",
      comp:<Assemble></Assemble>
  },
  {
    id: 'shopping',
    name: "购物车",
    icon: "http://p12.jmstatic.com/mcms/77b9454e8dd41a060510a445010ac934.png",
    iconAcitve:
      "http://p12.jmstatic.com/mcms/5e9e00537e4a635e36e84db81f2cc17a.png",
      comp:<Shopping></Shopping>
  },
  {
    id: 'profile',
    name: "我的",
    icon: "http://p12.jmstatic.com/mcms/829aa091062366a9f7b93cfffaa0e681.png",
    iconAcitve:
      "http://p12.jmstatic.com/mcms/482fb198341f583f92f1151eff6b99f0.png ",
      comp:<Profile></Profile>
  }
];

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home",
      hidden: false,
      datalist: tablist
    };
  }
  render() {
    return (
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {this.state.datalist.map((item, index) => {
            return (
              <TabBar.Item
                title={item.name}
                key={item.id}
                icon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        `url(${item.icon}) center center /  21px 21px no-repeat`
                    }}
                  />
                }
                selectedIcon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        `url(${item.iconAcitve}) center center /  21px 21px no-repeat`
                    }}
                  />
                }
                selected={this.state.selectedTab === item.id}
                // badge={1}
                onPress={() => {
                  this.setState({
                    selectedTab: item.id
                  });
                }}
                data-seed="logId"
              >
                {item.comp}
              </TabBar.Item>
            );
          })}
        </TabBar>
      </div>
    );
  }
}
