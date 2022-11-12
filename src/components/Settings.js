import React, { Component } from 'react'
import BoolToggle from './inputs/BoolToggle'
import NumberCounter from './inputs/NumberCounter'

export default class Settings extends Component {
  
  render() {
    return (
      <div id="Settings">
        <h2>Settings</h2>
        <form>
          <BoolToggle htmlId="allowNegativeScores" label="Allow negative scores" callback={this.props.toggleNegativeScores}/>
          <NumberCounter htmlId="updatePlayerCount" label="# of players" callback={this.props.updatePlayerCount} defaultValue={this.props.defaultPlayerCount}/>
          <NumberCounter htmlId="updateMaxCards" label="Max # of cards" callback={this.props.updateMaxCards} defaultValue={this.props.maxCards}/>
          <BoolToggle htmlId="upAndDown" label="Up and down" defaultValue={this.props.upAndDown} callback={this.props.changeUpAndDown}/>
        </form>
      </div>
    )
  }
}
