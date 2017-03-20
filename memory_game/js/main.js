var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardId = cards [0, 1, 2, 3];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  }
  else {
      console.log("Sorry, try again.");
  };
};

var flipCard = function (cardId) {
	console.log("User flipped" + cards[cardId]);
		if (cards[0] === cards[2]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		};
		cardsInPlay.push(cards[cardId]);
	checkForMatch();
	};	

flipCard(0);
flipCard(2);

