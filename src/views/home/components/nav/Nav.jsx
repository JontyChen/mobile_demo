import React, { Component } from "react";

import { NavContainer } from "./Nav.style";
export default class Nav extends Component {
  render() {
    return (
      <NavContainer>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li key={item.id}  onClick={this.props.handleClick.bind(this, item.id)}>
                <span className={this.props.id === item.id ? "active" : ""}>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </NavContainer>
    );
  }
}
