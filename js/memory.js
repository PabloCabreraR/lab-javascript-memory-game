class MemoryGame {
  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }
  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      let newValuei = this.cards[i]
      let newValueJ = this.cards[j]
      this.cards[i] =  newValueJ
      this.cards[j] = newValuei 
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2){
      this.pairsGuessed++
      return true
    }else{
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed === (this.cards.length/2)){
      return true
    }else{
      return false
    }
  }
}