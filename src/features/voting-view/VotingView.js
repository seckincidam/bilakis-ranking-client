import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import Timer from 'react-compound-timer'

import VotableBracket from '../brackets/VotableBracket'
import './css/voting.css'

import {setWinner} from '../round-view/actions'
import {setView, setCurrentRoundIndex, setCurrentGroup} from '../main-view/actions'

class VotingView extends Component {
    constructor(props) {
        super(props)

        this._timerStopped = this._timerStopped.bind(this)
    }

    render() {
        return (
            <div className="blks-voting-container">
                <Timer 
                initialTime={5000} 
                direction="backward"
                lastUnit="s"
                checkpoints={[
                    {
                        time: 0,
                        callback: this._timerStopped,
                    }
                ]}
                >
                    {() => (
                        <React.Fragment>
                            <div className="blks-voting-timer">
                                <Timer.Seconds/>
                                 s
                            </div>
                        </React.Fragment>
                    )}
                </Timer>
                <div className="blks-voting">
                {
                    this.props.competitors.map((competitor, index) => 
                        <VotableBracket 
                            key={index}
                            id={competitor.id}
                            order={index}
                            name={competitor.name}
                            vote={competitor.vote}
                            totalVotes={this.props.totalVotes}
                            dispatch={this.props.dispatch}
                            image="https://picsum.photos/200/200"
                        />
                    )
                }
                </div>
            </div>
        )
    }

    _timerStopped() {
        const {competitors, dispatch, round, group, currentRound} = this.props
        let orderedCompetitors = _.orderBy(competitors, 'vote', 'desc')
        let winner = orderedCompetitors[0]
        let groupsCount = currentRound.length
        let targetGroup = 0
        let targetRound = 0
        if(group < groupsCount -1) {
            targetGroup = group + 1
            targetRound = round
        } else {
            targetGroup = 0
            targetRound = round + 1
        }
        dispatch(setCurrentRoundIndex(targetRound))
        dispatch(setCurrentGroup(targetGroup))
        dispatch(setWinner(winner.id, round, group))
        dispatch(setView('roundView'))
    }
}

function _mapStateToProps(state) {
    return {
        competitors: state.votingView.competitors,
        totalVotes: state.votingView.totalVotes,
        round: state.mainView.round,
        group: state.mainView.currentGroupIndex,
        currentRound: state.roundView.rounds[state.mainView.round]
    }
}

export default connect(_mapStateToProps)(VotingView)