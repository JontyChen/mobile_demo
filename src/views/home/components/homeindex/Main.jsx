import React, { Component } from "react";

import ItemList from "./ItemList";
import ItemListRight from "./ItemListRight";
//通过新的组件进行数据传输控制组件的渲染
export default class main extends Component {
  render() {
    return (
      <div>
       {
           this.props.id==='left'?<ItemList></ItemList>:<ItemListRight></ItemListRight>
       }
      </div>
    );
  }
  componentWillMount(){
      // console.log(this.props.id)
  }
}
