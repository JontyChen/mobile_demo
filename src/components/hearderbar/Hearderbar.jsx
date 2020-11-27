import React, { Component } from "react";


import {withRouter} from 'react-router-dom'

import {HearderbarContainer} from './Hearderbar.style'
 class Hearderbar extends Component {
  render() {
    return (
        <HearderbarContainer>
            <div className='container'>
                <div className="left" onClick={this.props.handleClick}>
                    <img src="http://a5.jmstatic.com/f8f6fcf77a736300/left_arrow.png" alt=""/>
                </div>
                <div className='item'>
                    <span>
                        {
                            this.props.list.map((item,index)=>{
                                // console.log(item)
                                if(this.props.id===item.id){
                                return <span key={index}>{item.name}</span>
                                }
                            })
                        }
                    </span>
                </div>
                <div className='right' onClick={this.props.handleClickHome}>
                    <img src="http://a5.jmstatic.com/cf4cd6f2fe742a74/home.png" alt=""/>
                </div>
            </div>
        </HearderbarContainer>
    );
  }
}

export default withRouter(Hearderbar)