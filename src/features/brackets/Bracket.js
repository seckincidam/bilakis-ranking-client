import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addVote} from '../players/actions'
import './css/brackets.css'

class Bracket extends Component {
    constructor(props) {
        super(props)

        this.name = props.name
        if(props.rank === 0) {
            this.class = "blks-bracket first"
        } else if(props.rank === 1) {
            this.class = "blks-bracket second"
        } else {
            this.class = "blks-bracket"
        }
        this.image = props.image
        this._handleClick = this._handleClick.bind(this)
    }

    render() {
        return(
            <div className={this.class} onClick={this._handleClick} rank={this.props.rank}>
                <div className="blks-avatar">
                    <img src={this.image} alt="" />
                </div>
                <div className="blks-name">
                    {this.name}
                </div>
                <div className="blks-percent">
                    {this.props.vote}
                </div>
            </div>
        )
    }

    _handleClick(e) {
        this.props.dispatch(addVote(this.props.id))
    }
}

function _mapStateToProps(state) {
    return {
        players: state.players
    }
}

export default connect(_mapStateToProps)(Bracket)