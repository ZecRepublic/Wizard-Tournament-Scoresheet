import React, { Component } from 'react'

export default class ScoreHeading extends Component {
  constructor(props) {
    super(props)

    this.updatePlayerName = this.updatePlayerName.bind(this)
  }

  updatePlayerName(event) {
    let modifiedPlayer = this.props.player
    modifiedPlayer.name = event.target.value
    this.props.updatePlayer(this.props.index, modifiedPlayer)
  }
  
  render() {
    return (
      <th>
        <label htmlFor={"headerCell_" + this.props.index.toString()}>
          <h2>{this.props.player.name}</h2>
          <input id={"headerCell_" + this.props.index.toString()} name={"headerCell_" + this.props.index.toString()} type="text" onChange={this.updatePlayerName} defaultValue={this.props.player.name}></input>
        </label>
      </th>
    )
  }
}
