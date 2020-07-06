import React, { Component } from 'react'
import {connect} from 'react-redux'
import QuadBracket from '../brackets/QuadBracket'

import {setView} from '../main-view/actions'
import {startVoting} from '../voting-view/actions'

class RoundView extends Component {

    componentDidMount() {
        const {dispatch, rounds, round, currentGroupIndex} = this.props
        let group = rounds[round][currentGroupIndex]
        setTimeout(() => {
            dispatch(startVoting(group))
            dispatch(setView('voting'))
        }, 2000);
    }

    render() {
        return(
            <React.Fragment>
                <div style={{display: 'flex'}}>
                    <div style={{width: '25%'}}>
                        {
                            this.props.rounds[0].map((group, index) =>
                                <QuadBracket
                                    key={index}
                                    competitors={group.competitors}
                                    totalVotes={group.totalVotes}
                                    round={0}
                                />    
                            )
                        }
                    </div>
                    <div style={{width: '25%'}}>
                    </div>
                    <div style={{width: '25%'}}>
                    </div>
                    <div style={{width: '25%'}}>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function _mapStateToProps(state) {
    return {
        competitors: state.competitors,
        rounds: state.roundView.rounds,
        round: state.mainView.round,
        currentGroupIndex: state.mainView.currentGroupIndex
    }
}

export default connect(_mapStateToProps)(RoundView)