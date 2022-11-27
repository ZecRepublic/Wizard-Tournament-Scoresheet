import './App.css';
import React from 'react';
import Settings from './components/Settings'
import ScoreSheet from './components/scoring/ScoreSheet';
import Player from './Player';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    let maxCardsStart = 10
    let numRounds = maxCardsStart * 2 - 1;

    this.state = {
      allowNegativeScores: false,
      maxCards: maxCardsStart,
      numRounds: numRounds,
      upAndDown: true,
      players: []
    }

    this.state.players = [...this.state.players, new Player(0, this.state), new Player(1, this.state)]

    this.addPlayer = this.addPlayer.bind(this)
    this.removePlayer = this.removePlayer.bind(this)
    this.toggleNegativeScores = this.toggleNegativeScores.bind(this);
    this.updatePlayerCount = this.updatePlayerCount.bind(this)
    this.updatePlayerCount = this.updatePlayerCount.bind(this)
    this.updateMaxCards = this.updateMaxCards.bind(this)
    this.changeUpAndDown = this.changeUpAndDown.bind(this)
    this.updatePlayer = this.updatePlayer.bind(this)

  }

  toggleNegativeScores() {
    console.log('allow negatives changed')
    this.setState(state => ({
      allowNegativeScores: !state.allowNegativeScores
    }))
  }

  addPlayer() {
    this.setState(state => ({ players: [...state.players, new Player(this.state.players.length, this.state)] }))
  }

  removePlayer() {
    let array = this.state.players.slice(0, -1)
    this.setState({players: array})
  }

  updatePlayerCount(event) {
    if (event.target.value > this.state.players.length) {
      this.addPlayer()
    } else {
      this.removePlayer()
    }
  }

  updateMaxCards(event) {
    this.setState({ maxCards: event.target.value })
  }

  changeUpAndDown(event) {
    this.setState({ upAndDown: !this.state.upAndDown })
    if (!this.state.upAndDown) {
      this.setState({ numRounds: this.state.maxCards * 2 - 1 })
    } else {
      this.setState({ numRounds: this.state.maxCards })
    }
  }

  updatePlayer(playerIndex, modifiedPlayer) {
    let playerList = [...this.state.players]
    playerList[playerIndex] = modifiedPlayer
    this.setState({ playerList: playerList })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Wizard Tournament Scoresheet</h1>
          <p>(In-Progress)</p>
        </header>
        <Settings 
          toggleNegativeScores={this.toggleNegativeScores} 
          updatePlayerCount={this.updatePlayerCount} 
          defaultPlayerCount={this.state.players.length} 
          maxCards={this.state.maxCards}
          updateMaxCards={this.updateMaxCards}
          upAndDown={this.state.upAndDown}
          changeUpAndDown={this.changeUpAndDown}
        />
        <ScoreSheet 
          players={this.state.players} 
          maxCards={this.state.maxCards}
          numRounds={this.state.numRounds}
          updatePlayer={this.updatePlayer}
        />
      </div>
    )
  }
}
