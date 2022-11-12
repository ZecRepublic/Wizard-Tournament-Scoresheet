import './App.css';
import React from 'react';
import Settings from './components/Settings'
import ScoreSheet from './components/scoring/ScoreSheet';
import Player from './Player';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allowNegativeScores: false,
      players: [new Player(0), new Player(1)],
      maxCards: 10,
      upAndDown: true
    }

    this.addPlayer = this.addPlayer.bind(this)
    this.removePlayer = this.removePlayer.bind(this)
    this.toggleNegativeScores = this.toggleNegativeScores.bind(this);
    this.updatePlayerName = this.updatePlayerName.bind(this);
    this.updatePlayerCount = this.updatePlayerCount.bind(this)
    this.updatePlayerCount = this.updatePlayerCount.bind(this)
    this.updateMaxCards = this.updateMaxCards.bind(this)
    this.changeUpAndDown = this.changeUpAndDown.bind(this)

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

  updatePlayerName(player, name) {
    let playersList = [...this.state.players]
    let index = playersList.indexOf(player)
    let modifiedPlayer = {
      ...playersList[index],
      name: name
    }
    playersList[index] = modifiedPlayer
    this.setState({ players: playersList })
  }

  // Used on this.players
  updatePlayerScore(player) {
    let playersList = Object.assign({}, this.state.players);
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
          updatePlayerName={this.updatePlayerName}
          maxCards={this.state.maxCards}
          upAndDown={this.state.upAndDown}
        />
      </div>
    )
  }
}
