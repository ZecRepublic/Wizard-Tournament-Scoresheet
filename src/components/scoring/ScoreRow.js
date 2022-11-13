import React, { Component } from 'react'
import ScoreCell from './ScoreCell';

export default class ScoreRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.rowNum + 1}</td>
        {this.props.players.map((player, index) => 
          <ScoreCell key={index} rowNum={this.props.rowNum} cellNum={index} player={player} allowNegativeScores={this.props.allowNegativeScores} updatePlayer={this.props.updatePlayer}/>
        )}
      </tr>
    )
  }
}
