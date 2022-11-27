class Score {
  constructor(cardCount) {

    this.desiredTricks = undefined
    this.takenTricks = undefined
    this.score = 0
    this.cardCount = cardCount;

    this.setDesired = this.setDesired.bind(this);
    this.setTaken = this.setTaken.bind(this);
    this.calculateScore = this.calculateScore.bind(this);

  }

  setDesired(event, prevScore) {
    this.desiredTricks = event.target.value
    if (this.takenTricks !== undefined) {
      this.calculateScore(prevScore)
    }
  }

  setTaken(event, prevScore) {
    this.takenTricks = event.target.value
    this.calculateScore(prevScore)
  }

  calculateScore(prevScore = 0, allowNegativeScores = false) {
    //console.log(prevScore)

    const SCOREMULTIPLIER = 10;
    const SUCCESSINCREASE = 2 * SCOREMULTIPLIER;

    if ((this.desiredTricks !== undefined) && (this.takenTricks !== undefined)) {
      
      if (this.desiredTricks === this.takenTricks) {
        console.log('increase')
        // +20 for making your bid; +10 for every trick taken
        let increase = (SUCCESSINCREASE + (this.takenTricks * SCOREMULTIPLIER))
        this.score = prevScore + increase
      } else {
  
        // -10 for every lost or additional trick
        let decrease = Math.abs(((this.desiredTricks - this.takenTricks) * SCOREMULTIPLIER))
        let newScore = prevScore - decrease
  
        // Check for allowing negative
        if (newScore > 0 || allowNegativeScores) {
          this.score = prevScore - decrease
        } else {
          this.score = 0
        }
      }
    } else {
      this.score = prevScore
    }
  } 
}


export default class Player {
  constructor(id, settings) {

    this.id = id
    this.name = "Player"
    this.score = 0
    this.dealer = false
    this.history = []

    for (let i = 0; i < settings.maxCards; i++) {
      this.history.push(new Score(i + 1))
    }
    console.log(this.history)
    if (settings.upAndDown) {
      for (let i = settings.maxCards; i > 0; i--) {
        this.history.push(new Score(i-1))
      }
    }
    console.log(this.history)


    this.updateHistoryScore = this.updateHistoryScore.bind(this)

  }

  updateHistoryScore(startIndex) {
    let newScore = this.history[startIndex].score
    console.log(newScore)
    for (let i = startIndex + 1; i < this.history.length; i++) {
      this.history[i].calculateScore(newScore)
    }
  }

  toggleUpAndDown() {
    
  }
}
