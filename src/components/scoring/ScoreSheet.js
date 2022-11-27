import React, { Component } from 'react'
import ScoreHeading from './ScoreHeading';
import ScoreRow from './ScoreRow';

export default class ScoreSheet extends Component {

  render() {
    this.rows = []
    for (let i = 0; i < this.props.numRounds; i++) {
      this.rows.push(i)
    }
    return (
      <table id="ScoreSheet">
        <tbody>
          <tr>
            <td></td>
            {this.props.players.map((player, index) => 
              <ScoreHeading key={index} index={index} player={player} updatePlayer={this.props.updatePlayer}/>
            )}
          </tr>
          {this.rows.map((row) => 
            <ScoreRow key={row} rowNum={row} players={this.props.players} updatePlayer={this.props.updatePlayer} allowNegativeScores={this.props.allowNegativeScores}/>
          )}
        </tbody>
      </table>
    )
  }
}
