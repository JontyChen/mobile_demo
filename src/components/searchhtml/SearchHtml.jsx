import React, { Component } from 'react'

import Hearderbar from './components/Hearderbar'
import SearchContainer from './components/Searchcontainer'

import {SearchHtmlContainer} from './SearchHtml.style'
export default class SearchHtml extends Component {
    render() {
        return (
            <SearchHtmlContainer>
                <Hearderbar></Hearderbar>
                <SearchContainer></SearchContainer>
            </SearchHtmlContainer>
        )
    }
}
