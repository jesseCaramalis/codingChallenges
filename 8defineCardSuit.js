// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// Answer

function defineSuit(card) {
    let suit = card.charAt(card.length-1)
    switch (suit){
        case '♣':
          return 'clubs';
        case '♦':
          return 'diamonds';
        case '♥':
          return 'hearts';
        case '♠':
          return 'spades';
    }
  }

  //refactor object instead of switch statement

  function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
  }