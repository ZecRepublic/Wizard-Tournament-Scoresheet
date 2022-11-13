import React, { Component } from 'react'

export default class ScoreCell extends Component {
  constructor(props) {
    super(props)

    this.updateDesiredTricks = this.updateDesiredTricks.bind(this)
    this.updateTakenTricks = this.updateTakenTricks.bind(this)
  }

  updateDesiredTricks(event) {
    let modifiedPlayer = this.props.player
    let prevScore
    if (this.props.rowNum !== 0) {
      prevScore = modifiedPlayer.history[this.props.rowNum - 1].score
    } else {
      prevScore = 0;
    }
    modifiedPlayer.history[this.props.rowNum].setDesired(event, prevScore)
    modifiedPlayer.updateHistory(this.props.rowNum)
    this.props.updatePlayer(this.props.cellNum, modifiedPlayer)
  }

  updateTakenTricks(event) {
    let modifiedPlayer = this.props.player
    let prevScore
    if (this.props.rowNum !== 0) {
      prevScore = modifiedPlayer.history[this.props.rowNum - 1].score
    } else {
      prevScore = 0;
    }
    modifiedPlayer.history[this.props.rowNum].setTaken(event, prevScore)
    modifiedPlayer.updateHistory(this.props.rowNum)
    this.props.updatePlayer(this.props.cellNum, modifiedPlayer)
  }

  render() {
    return (
      <td className="Score">
        <div className="Score-grid">
          <input className="desiredTricks" type="number" onChange={this.updateDesiredTricks}>
          </input>
          <input className="takenTricks" type="number" onChange={this.updateTakenTricks}>
          </input>
          <span>{this.props.player.history[this.props.rowNum].score.toString()}</span>
        </div>
      </td>
    )
  }
}
