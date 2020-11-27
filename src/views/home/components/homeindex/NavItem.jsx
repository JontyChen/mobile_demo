import React, { Component } from "react";

import { NavItemContainer } from "./NavItem.style";
export default class NavItem extends Component {
  render() {
    return (
      <NavItemContainer>
        <ul>
          <li
            className={this.props.id === "left" ? "active" : ""}
            onClick={this.props.handleClick.bind(this,"left")}
          >
            今日十点上新
          </li>
          <li
            className={this.props.id === "right" ? "active" : ""}
            onClick={this.props.handleClick.bind(this,"right")}
          >
            明日十点预告
          </li>
        </ul>
      </NavItemContainer>
    );
  }
}
