import React, { Component } from 'react'
import ScoreHeading from './ScoreHeading';
import ScoreRow from './ScoreRow';

export default class ScoreSheet extends Component {
  constructor(props) {
    super(props)

    this.rows = []
    this.rowsReverse = []
  }

  render() {
    this.rows = []
    this.rowsReverse = []
    for (let i = 0; i < this.props.maxCards; i++) {
      this.rows.push(i)
    }
    this.rowsReverse = this.rows.slice(0, -1)
    this.rowsReverse.reverse()
    return (
      <table id="ScoreSheet">
        <tbody>
          <tr>
            <td></td>
            {this.props.players.map((player, index) => 
              <ScoreHeading key={index} player={player} updatePlayerName={this.props.updatePlayerName}/>
            )}
          </tr>
          {}
          {this.rows.map((row) => 
            <ScoreRow key={row} rowNum={row} players={this.props.players} allowNegativeScores={this.props.allowNegativeScores} />
          )}
          {this.props.upAndDown ? this.rowsReverse.map((row) => {
            return <ScoreRow key={row} rowNum={row} players={this.props.players} allowNegativeScores={this.props.allowNegativeScores} />
          }) : ""}
        </tbody>
      </table>
    )
  }
}
