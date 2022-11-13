import React, { Component } from 'react'
import ScoreHeading from './ScoreHeading';
import ScoreRow from './ScoreRow';

export default class ScoreSheet extends Component {

  render() {
    this.rows = []
    for (let i = 0; i < this.props.numRounds; i++) {
      this.rows.push(i)
    }
    console.log(this.props.players)
    return (
      <table id="ScoreSheet">
        <tbody>
          <tr>
            <td></td>
            {this.props.players.map((player, index) => 
              <ScoreHeading key={index} player={player} updatePlayerName={this.props.updatePlayerName}/>
            )}
          </tr>
          {this.rows.map((row) => 
            <ScoreRow key={row} rowNum={row} players={this.props.players} allowNegativeScores={this.props.allowNegativeScores} updatePlayer={this.props.updatePlayer} />
          )}
        </tbody>
      </table>
    )
  }
}
