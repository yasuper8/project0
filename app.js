

//Concentration


//Can pick amount of pairs of cards in the game
//Can choose difficulty of the game
// //the amount of time revealing the placed cards
//


//constructors

  //Game boards
      //make board
      //reset board
      //check cards
      //findWinner
      //add player

function Card(number){
  this.number = number;
  this.active = false;
}

function GameBoard(){
  this.cardNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  var cards = [];

  for(var i = 0; i < this.cardNames.length; i++){
    cards.push(new Card(this.cardNames[i]));
  }
  return cards;
}

// GameBoard.prototype.makeCards = function(typeOfCards){
//   for(var i = 0; i < typeOfCards.length; i++){
//     var card = new Card(typeOfCards[i]);
//   }
  
// };


// GameBoard.prototype.makeBorad = function(){
//   var newBoard = $.create("div");
//   $.append(newBoard);
// };

// var makeBorad = function(){
//   var newBoard = $.create("div");
//   // $.append(newBoard);
// };

  //cards
    //make cards
    //shuffle cards
    //reveal cards

    //numOfPairs picked by a user
    //make two arrs


// function Card(numbers){
//   this.cardNumber = numbers;
//   this.cardRevealed = false;
//   // this.makeCards = function(){};
//   // this.shuffleCards = function(){};
//   // this.revealCards = function(){};
// }

  //player
    //score tracker
    //
  function MakePlayer(name){
    this.name = name;
    this.scoreTracker = 0;
  }



// function createNumOfArray(numOfPairs){
//   var numbersArray1 = [];
//   var numbersArray2 = [];
//   for(var i = 0; i < numOfPairs; i++){
//    new  Card.cardNumber = numbersArray1.push(i);
//     // numbersArray2.push(i);
//   }
//   console.log(numbersArray2);
//   // console.log(numbersArray1);
// }



//score trackers
//Pick num of x
//Create x pairs of cards
//flip two cards
//compaire the two cards
//  IF the two matches, add 1 points to the player
//
//What GameBoard could have?
  // .. ie a room have tables and chairs
  // this.resetBoard = function(){};
  // this.checkCards = function(){};
  // this.findWinner = function(){};
  // this.addPlayer = function(){};








//