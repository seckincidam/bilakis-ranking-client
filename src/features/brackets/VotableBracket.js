import React, {Component} from 'react'
import TweenMax from 'gsap'

import {addVote} from '../voting-view/actions'

class VotableBracket extends Component {
    constructor(props) {
        super(props)

        this.bracket = null

        this._handleClick = this._handleClick.bind(this)
        this._animateVote = this._animateVote.bind(this)
    }

    componentDidUpdate(prevState) {
        if(prevState.vote !== this.props.vote) {
            this._animateVote()
        }
    }

    render() {
        return(
            <div className={`blks-votablebracket-container prcnt_${this.props.order}`} >

                <div
                    className="blks-votablebracket" 
                    onClick={this._handleClick}
                    id={this.props.id}
                    ref={ref => {this.bracket = ref}}
                >
                    <div className="blks-votablebracket-percent" style={{height: this.props.vote/this.props.totalVotes*100+'%', userSelect: 'none'}}></div>
                    <img className="blks-votablebracket-avatar" src={this.props.image} alt="avatar"/>
                    <span>{this.props.name}</span>
                    <span>{this.props.vote}</span>
                </div>
            </div>
        )
    }

    _handleClick(e) {
        this.props.dispatch(addVote(e.target.id))
    }

    _animateVote(){
        TweenMax.fromTo(this.bracket, 0.5, {
            scale: 3,
            rotation: 60
          }, {
            scale: 1,
            rotation: 0,
            ease: "elastic.out(1, 1)"
          });
    }
}

export default VotableBracket