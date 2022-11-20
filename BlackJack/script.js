class Player {
    constructor(type) {
        this.type = type; // determines the players amongst the dealer
        this.score = 0; // player's current hand score
        this.stack = 0; // player's current amount of chips
        this.wager = 0; // player's current wager
        this.cards = []; // player's current card holdings
    }
}

const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const types = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];

const constructDeck = () =>  {
    let deck = [];

    suits.forEach(function(suit) {
        types.forEach(function(type) {
            // create card object
            let card = {};

            card.name = type+" of "+suit;
            card.img_name = type+suit+".jpg";

            switch(type) {
                case "Ace":
                    card.value = [11,1];
                    break;
                case "King": 
                case "Queen":
                case "Jack":
                case "Ten":
                    card.value = 10;
                    break;
                case "Nine":
                    card.value = 9;
                    break;
                case "Eight":
                    card.value = 8;
                    break;
                case "Seven":
                    card.value = 7;
                    break;
                case "Six":
                    card.value = 6;
                    break;
                case "Five":
                    card.value = 5;
                    break;
                case "Four":
                    card.value = 4;
                    break;
                case "Three":
                    card.value = 3;
                    break;
                case "Two":
                    card.value = 2;
                    break;
                default:
                    break;
            }
            deck.push(card);
        });
    });

    return deck;
}

const playHand = (players) => {
    // construct a deck of cards to play with
    var deck = constructDeck();
    const dealtCardMax = 2;  // the number of cards a player is dealt at the beginning of the hand

    // request wager from player

    // deal cards to player and dealer
    for(i=0;i<dealtCardMax;i++) {
        players.forEach(function(player) {
            // generate random number based on number of remaining cards in the deck
            let randomNum = Math.floor(Math.random() * deck.length);

            // retrieve random card from the deck
            let dealtCard = deck[randomNum];
            player.cards.push(dealtCard);

            // remove the random card from the deck
            deck.splice(randomNum, 1);
        });
    }

    // calculate scores
    players.forEach(function(player) {
        let cards = player.cards;
        cards.forEach(card =>{
            player.score += card.value;
        });
    });

    console.log("Players from playHand");
    console.log(players);
}

onload = init;

function init() {
    // find a dealer and a player to play BlackJack
    var dealer = new Player("dealer");
    var player = new Player("player");

    // give the player some chips to play with
    player.stack = 1000;

    // add players to the players array
    var players = [player, dealer];

    // begin game

    // make wager

    // deal cards'
    playHand(players);
}