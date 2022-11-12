import React, { Component } from 'react'
import Score from './Score';

export default class ScoreRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.rowNum + 1}</td>
        {this.props.players.map((player, index) => 
          <Score key={index} player={player} allowNegativeScores={this.props.allowNegativeScores}/>
        )}
      </tr>
    )
  }
}
