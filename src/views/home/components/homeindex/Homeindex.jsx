import React, { Component } from "react";

import NavItem from "./NavItem";


import Main from './Main' 

// import { GetToday, GetTom } from "../../../../api/getdata";
// import {HomeindexContainer} from './Homeindex.style'
export default class Homeindex extends Component {
  constructor() {
    super();
    this.state = {
      id: "left",
      datalist: []
    };
  }
  handleClick = id => {
    if (this.state.id === id) {
      return;
    }
    this.setState(
      preState => {
        return {
          id: preState.id === "left" ? "right" : "left"
        };
      },
      () => {}
    );
  };
  render() {
    return (
      <div>
        <NavItem handleClick={this.handleClick} id={this.state.id}></NavItem>
        <Main id={this.state.id}> </Main>
      </div>
    );
  }

 

}
