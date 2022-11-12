import React, { Component } from 'react'

export default class Score extends Component {
  constructor(props) {
    super(props);

    this.prevScore = parseInt(props.player.score);
    this.state = {
      desiredTricks: '',
      takenTricks: '',
      score: 0
    }

    this.setDesired = this.setDesired.bind(this);
    this.setTaken = this.setTaken.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
  }

  setDesired(event) {
    this.setState({desiredTricks: event.target.value}, this.calculateScore)
  }

  setTaken(event) {
    this.setState({takenTricks: event.target.value}, this.calculateScore)
  }

  calculateScore() {

    const SCOREMULTIPLIER = 10;
    const SUCCESSINCREASE = 2 * SCOREMULTIPLIER;

    if (this.state.desiredTricks === this.state.takenTricks) {

      // +20 for making your bid; +10 for every trick taken
      let increase = (SUCCESSINCREASE + (this.state.takenTricks * SCOREMULTIPLIER))
      this.setState({score: this.prevScore + increase})
    } else {

      // -10 for every lost or additional trick
      let decrease = Math.abs(((this.state.desiredTricks - this.state.takenTricks) * SCOREMULTIPLIER))
      let newScore = this.prevScore - decrease

      // Check for allowing negative
      if (newScore > 0 || this.props.allowNegativeScores) {
        this.setState({score: this.prevScore - decrease})
      } else {
        this.setState({score: 0})
      }
    }
  }

  render() {
    return (
      <td className="Score">
        <div className="Score-grid">
          <input className="desiredTricks" type="number" onChange={this.setDesired}>
          </input>
          <input className="takenTricks" type="number" onChange={this.setTaken}>
          </input>
          <span>{this.state.score.toString()}</span>
        </div>
      </td>
    )
  }
}
