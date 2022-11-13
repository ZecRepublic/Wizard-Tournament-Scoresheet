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
      players: [new Player(0, numRounds), new Player(1, numRounds)],
    }

    this.addPlayer = this.addPlayer.bind(this)
    this.removePlayer = this.removePlayer.bind(this)
    this.toggleNegativeScores = this.toggleNegativeScores.bind(this);
    this.updatePlayerCount = this.updatePlayerCount.bind(this)
    this.updatePlayerCount = this.updatePlayerCount.bind(this)
    this.updateMaxCards = this.updateMaxCards.bind(this)
    this.changeUpAndDown = this.changeUpAndDown.bind(this)
    this.updatePlayer = this.updatePlayer.bind(this)

    //this.updatePlayerHistory(0, 4, 20)

  }

  toggleNegativeScores() {
    console.log('allow negatives changed')
    this.setState(state => ({
      allowNegativeScores: !state.allowNegativeScores
    }))
  }

  addPlayer() {
    this.setState(state => ({ players: [...state.players, new Player(this.state.players.length)] }))
  }

  removePlayer() {
    let array = this.state.players
    let popped = array.pop()
    this.setState({players: array})
  }

  updatePlayerCount(event) {
    if (event.target.value > this.state.players.length) {
      this.addPlayer()
    } else {
      this.removePlayer()
    }
    // this.setState({numberOfPlayers: event.target.value})
  }

  // Used on this.players
  updatePlayerScore(player) {
    let playersList = [...this.state.players]
    let modifiedPlayer;
    //newSelected.name = 'Barfoo';
    //this.setState({ selected: newSelected });
  }

  updateMaxCards(event) {
    this.setState({ maxCards: event.target.value })
  }

  changeUpAndDown(event) {
    this.setState({ upAndDown: !this.state.upAndDown })
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
          allowNegativeScores={this.state.allowNegativeScores} 
          players={this.state.players} 
          maxCards={this.state.maxCards}
          upAndDown={this.state.upAndDown}
          numRounds={this.state.numRounds}
          updatePlayerHistory={this.updatePlayerHistory}
          updatePlayer={this.updatePlayer}
        />
      </div>
    )
  }
}
