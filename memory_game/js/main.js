var cards = [
	{
		rank : "queen",
		suit : "hearts",
		cardImage : "images/queen-of-hearts.png"
	},
	{
		rank : "queen",
		suit : "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank : "king",
		suit : "hearts",
		cardImage : "images/king-of-hearts.png"
	},
	{
		rank : "king",
		suit : "diamonds",
		cardImage : "images/king-of-diamonds.png"
	}
];

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
	console.log("User flipped" + cards[cardId].rank);
		if (cards[0] === cards[2]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		};
			
	checkForMatch();
	};	

flipCard(0);
console.log("images/queen-of-diamonds.png");
console.log("hearts");
flipCard(2);
console.log("images/king-of-hearts.png");
console.log("hearts")

