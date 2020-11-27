import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'
import {GetSearchButton} from '../../../api/getdata'

import {HearderbarContainer} from './Hearderbar.style'
 class Hearderbar extends Component {


        constructor(){
            super();
            this.state={
                datalist:[],
                itemlist:[]
            }
        }

    handleClick(){
        console.log(this.props)
        this.props.history.goBack();
    }

    handleInput(e){
        this.setState({
            itemlist:[]
        })
        console.log(e.target.value)
        let regs = e.target.value
        let reg=new RegExp(regs)
        console.log(reg)
        this.state.datalist.map((item,index)=>{
            console.log(item)
            if(reg.test(item.name)){
                let itemlist = this.state.itemlist.concat([item.name])
                this.setState({
                    itemlist
                })
                console.log('itemlist',this.state.itemlist)
            }
        })
       
    }
    render() {
        return (
            <HearderbarContainer>
                <div className='wrapper'>
                    <div className='wrapper-left-img' onClick={this.handleClick.bind(this)}>
                        <img src="//f0.jmstatic.com/btstatic/h5/common/left_arrow.png" alt=""/>
                    </div>
                    <div className='container'>
                        <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt=""/>
                        <input type="text" placeholder="搜索商品名称、品牌、功效" onChange={this.handleInput.bind(this)}/>
                    </div>
                    <div className='wrapper-right-span'>
                        <span>搜索</span>
                    </div>
                </div>
            </HearderbarContainer>
        )
    }

//拿去数据
      async componentDidMount(){
        let rs = await GetSearchButton();
        console.log('serachbutton',rs);
        this.setState({
            datalist:rs.data.data
        })
        console.log(this.state.datalist)
    }
}
export default withRouter(Hearderbar)