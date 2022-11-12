import React, { Component } from 'react'

export default class ScoreHeading extends Component {
  
  render() {
    return (
      <th>
        <button onClick={() => this.props.updatePlayerName(this.props.player, 'Harry')}>{this.props.player.name}</button>
      </th>
    )
  }
}
