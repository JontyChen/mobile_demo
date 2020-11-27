import React, { Component } from 'react'

import {SearchcontainerContainer} from './Searchcontainer.style'
export default class Searchcontainer extends Component {
    render() {
        return (
            <SearchcontainerContainer>
              <div className="searchList">
                    <div className='span'>
                        <span>香水</span>
                    </div>
                    <div className='img'>
                    </div>
              </div>
            </SearchcontainerContainer>
        )
    }
}
