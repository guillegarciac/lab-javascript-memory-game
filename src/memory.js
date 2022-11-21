class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.cards = this.shuffleCards() //added here to call shuffled cards when constructing
  }
  
  shuffleCards() {
    if(!this.cards) return undefined;
    else return this.cards.sort(() => Math.random() - 0.5);
  }  

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    else {return false};
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
