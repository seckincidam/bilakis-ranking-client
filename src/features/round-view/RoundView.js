import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as _ from 'lodash'
import QuadBracket from '../brackets/QuadBracket'

class RoundView extends Component {
    constructor(props) {
        super(props)

        this.splittedPlayersQuad = shuffleSplitQuad(this.props.players)
    }

    render() {
        return(
            <div style={{display: 'flex'}}>
                <div style={{width: '25%'}}>
                    {
                        // this.splittedPlayersQuad.map((quadPlayers, index) =>
                        //     <QuadBracket key={index} players={quadPlayers} />    
                        // )
                        this.props.players.map(player => <div></div>)
                    }
                </div>
                <div style={{width: '25%'}}>
                </div>
                <div style={{width: '25%'}}>
                </div>
                <div style={{width: '25%'}}>
                </div>
            </div>
        )
    }
}

export function shuffleSplitQuad(players) {
    let shuffledPlayers = _.shuffle(players)
    let splittedPlayers = _.chunk(shuffledPlayers, 4)
    return splittedPlayers
}

function _mapStateToProps(state) {
    return {
        players: state.players
    }
}

export default connect(_mapStateToProps)(RoundView)