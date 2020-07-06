import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as _ from 'lodash'

import Bracket from '../brackets/Bracket'

import {addCompetitor} from '../competitors/actions'
import {setView, setCurrentRoundIndex, setCurrentGroup} from '../main-view/actions'
import {addGroups} from '../round-view/actions'

import './css/creation.css'

class Creation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            competitor: {
                name: ''
            },
            full: false
        }

        this._handleChange = this._handleChange.bind(this)
        this._handleAdd = this._handleAdd.bind(this)
        this._handleStart = this._handleStart.bind(this)
    }

    render() {
        return (
            <div className="blks-creation">
                <p>{this.props.competitors.length}/8</p>
                {this.props.competitors.map((competitor, index) =>
                    <div key={index} className="">
                        <Bracket name={competitor.name} image="https://picsum.photos/200/200"/>
                    </div>
                )}
                {!this.state.full ?
                    <form>
                        <div className="blks-form-control-inline">
                            <input type="text" placeholder="İsim" onChange={this._handleChange} value={this.state.competitor.name} ref={(input) => { this.nameInput = input; }}/>
                            <button className="blks-button-primary blks-button-inline" onClick={this._handleAdd}>Ekle</button>
                        </div>
                    </form> :
                    <form style={{display: 'flex', justifyContent: 'center'}}>
                        <button className="blks-button-primary" onClick={this._handleStart}>Başlat</button>
                    </form>
                }
            </div>
        )
    }

    _handleChange(e) {
        this.setState({competitor: {name: e.target.value}})
    }

    _handleAdd(e) {
        e.preventDefault()
        let competitor = this.state.competitor
        competitor.id = generateRandomID()
        if(competitor.name) {
            this.props.dispatch(addCompetitor(competitor))
        }
        this.setState({competitor: {name: ''}})
        if(this.props.competitors.length > 3) {
            this.setState({full: true})
        }
        this.nameInput.focus()
    }

    _handleStart(e) {
        e.preventDefault()
        const {dispatch, competitors} = this.props
        let cloneCompetitors = _.cloneDeep(competitors)
        let readyCompetitors = initilizeCompetitors(cloneCompetitors)
        let splitCompetitors = shuffleSplitQuad(readyCompetitors)
        let groups = []
        splitCompetitors.forEach((split,index) => {
            let group = {
                competitors: split,
                totalVotes: 0
            }
            group.competitors.forEach(competitor => {
                competitor.group = index
            })
            groups.push(group)
        })
        dispatch(setView('roundView'))
        dispatch(addGroups(groups))
        dispatch(setCurrentRoundIndex(0))
        dispatch(setCurrentGroup(0))
    }
}

function initilizeCompetitors(competitors) {
    let newCompetitors = []
    competitors.forEach(competitor => {
        competitor.vote = 0
        newCompetitors.push(competitor)
    })
    return newCompetitors
}

function shuffleSplitQuad(competitors) {
    let shuffledCompetitors = _.shuffle(competitors)
    let splittedCompetitors = _.chunk(shuffledCompetitors, 4)
    return splittedCompetitors
}

function generateRandomID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & (0x3 | 0x8));
        return v.toString(16);
    });
}

function _mapStateToProps(state) {
    return {
        competitors: state.competitors
    }
}

export default connect(_mapStateToProps)(Creation)