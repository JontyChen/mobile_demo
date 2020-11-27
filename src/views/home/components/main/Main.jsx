import React, { Component } from 'react'

import {MainCotainer} from './Main.style'
export default class Main extends Component {
    render() {
        return (
            <MainCotainer>
                {
                    this.props.list.map((item,index)=>{
                    
                        if(this.props.id===item.id){
                            // console.log(item)    
                        return <div key={item.id}>{item.comp}</div>
                        }
                    })
                }
            </MainCotainer>
        )
    }
}
