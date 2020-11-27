import React, { Component } from "react";

import SearchInput from './components/SearchInput'
import Accordion from './components/Accordions'

import { SearchButtonContainer } from "./SearchButton.style";
export default class SearchButton extends Component {
  handleClick(e) {
    e.stopPropagation();
  }
  render() {
    return (
      <SearchButtonContainer>
      
       {this.props.isShow ? (
          <div className="search" onClick={this.props.handleClick.bind(this)}>
            <div
              className="searchContainer"
              onClick={this.handleClick.bind(this)}
            >
                <SearchInput></SearchInput>
                <Accordion></Accordion>
            </div>
          </div>
        ) : (
          ""
        )}
      </SearchButtonContainer>
    );
  }
}
