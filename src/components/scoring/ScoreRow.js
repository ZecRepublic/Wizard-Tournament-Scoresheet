import React, { Component } from 'react'
import ScoreCell from './ScoreCell';

export default class ScoreRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.players[0].history[this.props.rowNum].cardCount }</td>
        {this.props.players.map((player, index) => 
          <ScoreCell key={index} rowNum={this.props.rowNum} cellNum={index} player={player} updatePlayer={this.props.updatePlayer}/>
        )}
      </tr>
    )
  }
}
