import React, { Component } from "react";

import { NavContainer } from "./Nav.style";
export default class Nav extends Component {
  render() {
    return (
      <NavContainer>
        <ul className="nav">
          {this.props.list.map((item, index) => {
            return (
              <li key={index} onClick={this.props.handleClick.bind(this,item.id,item.data)}>
                <span className={item.id===this.props.id?"active":''}>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </NavContainer>
    );
  }
}
