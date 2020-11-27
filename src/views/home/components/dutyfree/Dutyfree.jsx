import React, { Component } from 'react'

import Banner from './Banner'
import ItemList from './ItemList'


export default class Dutyfree extends Component {
    render() {
        return (
            <div>
               <Banner></Banner>
               <ItemList></ItemList>
            </div>
        )
    }
}
