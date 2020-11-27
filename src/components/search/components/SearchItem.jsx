import React, { Component } from 'react'


import {SearchItemContainer} from  './SearchItem.style'

import {withRouter} from 'react-router-dom'


 class SearchItem extends Component {
    render() {
        return (
            <SearchItemContainer>
               searchitem 
            </SearchItemContainer>
        )
    }
}

export default withRouter(SearchItem)