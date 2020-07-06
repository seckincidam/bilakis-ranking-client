import React, { Component } from 'react'
import './css/brackets.css'
import {TimelineLite} from 'gsap'
import Bracket from './Bracket'

class QuadBracket extends Component {
    constructor(props) {
        super(props)

        this.myTween = new TimelineLite({paused: true});
        this.brackets = [];
    }

    componentDidMount(){
        this.myTween
        .staggerTo(this.brackets, 0.5, {scale: 1, opacity: 1}, 0.1)
        .play();
        
    }

    render() {
        return (
            <div className="blks-quadBracket">
                {
                    this.props.competitors.map((competitor, index) => 
                    
                            <div 
                            key={index} 
                            ref={ref => (this.brackets[index] = ref)} 
                            className="blks-bracket-container"
                            >
                                <Bracket 
                                    key={index} 
                                    id={competitor.id} 
                                    name={competitor.name} 
                                    rank={index} 
                                    image="https://picsum.photos/200/200" 
                                    vote={competitor.vote} 
                                    group={competitor.group}
                                    round={this.props.round}
                                    totalVotes={this.props.totalVotes}
                                    winner={competitor.winner}
                                />
                            </div>
                    )
                }
            </div>
        )
    }
}

export default QuadBracket