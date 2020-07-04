import React, { Component } from 'react'
import './css/brackets.css'
import Bracket from './Bracket'

class QuadBracket extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="blks-quadBracket">
                {
                    this.props.players.map((player, index) => 
                        <Bracket key={index} id={player.id} name={player.name} rank={index} image="https://picsum.photos/200/200" vote={player.vote}/>
                    )
                }
            </div>
        )
    }
}

export default QuadBracket