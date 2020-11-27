import React, { Component } from 'react'

import Preference from './Preference'
import Hotshell from './Hotshell'
import  TwoPhoto from './TwoPhoto'
import SelectedActivities from './SelectedActivities'
import NewItem from './NewItem' 

export default class Muyiong extends Component {
    render() {
        // 定义成组件渲染
        //分为五个组件
        return (
            <div>
              <Preference></Preference>
              <Hotshell></Hotshell>
              <TwoPhoto></TwoPhoto>
              <SelectedActivities></SelectedActivities>
              <NewItem></NewItem>
            </div>
        )
    }
}
