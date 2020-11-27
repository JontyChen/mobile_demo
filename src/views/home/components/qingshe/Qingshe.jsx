import React, { Component } from 'react'

import Swipper from './Swipper'
import Preference from './Preference'
import HotShell from './HotShell'
import SelectedActivities from './SelectedActivities'

export default class Qingshe extends Component {
    render() {
        return (
            <div>
                <Swipper></Swipper>
                <Preference></Preference>
                <HotShell></HotShell>
                <SelectedActivities></SelectedActivities>
            </div>
        )
    }
}
