import React, { Component } from 'react'
import {connect} from 'react-redux'
import If from '../operator/if'

class TabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const selected = this.props.tab.selected === this.props.id
        const visible = this.props.tab.visible[this.props.id]
        return (
            <If test={visible}>
                <div id={this.props.id} className={`tab-pane${selected ? 'active':''}`}>
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab})
export default connect(mapStateToProps)(TabComponent)