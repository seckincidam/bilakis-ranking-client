import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/brackets.css'



class Bracket extends Component {
    constructor(props) {
        super(props)

        this.name = props.name
        this.class = "blks-bracket"
        this.image = props.image
        this.winnerClass = ""
    }


    render() {
        this.winnerClass = this.props.winner ? "blks-winner" : ""
        return(
            <div 
            className={this.class + " " + this.winnerClass}
            rank={this.props.rank}>
                <div className="blks-avatar">
                    <img src={this.image} alt="" />
                </div>
                <div className="blks-name">
                    <span style={{userSelect: 'none'}}>{this.name}</span>
                </div>
                <div className="blks-percent">
                    <span style={{userSelect: 'none'}}>
                    {this.props.totalVotes > 0 &&
                        Math.round(this.props.vote/this.props.totalVotes*100)
                    }</span>
                </div>
                <div className="blks-processBar" style={{width: Math.round(this.props.vote/this.props.totalVotes*100)+'%'}}></div>
            </div>
        )
    }

    
}

function _mapStateToProps(state) {
    return {
        rounds: state.roundView.rounds
    }
}

export default connect(_mapStateToProps)(Bracket)