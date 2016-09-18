

//Concentration
console.log("linked!");
$(document).ready(function(){


// function MakePlayer(name){
//     this.name = name;
//     this.scoreTracker = 0;
//   }

function Card(number){
  this.number = number;
  this.active = false;
}

function GameBoard(){
  this.cardNames = ["one", "one", "two", "two", "three", "three", "four", "four", "five", "five", "six", "six", "seven", "seven", "eight", "eight", "nine", "nine", "ten", "ten", "J", "J", "Q", "Q", "K", "K"];
  this.cardFlipped = 0;

  var deckOfCards = [];
  var shuffledCards = [];
  
  for(var i = 0; i < this.cardNames.length; i++){
    deckOfCards.push(new Card(this.cardNames[i]));
  }
  for(var j = 0; j <= deckOfCards.length; j++){
    var randomNumber = Math.floor(Math.random() * deckOfCards.length);
    shuffledCards.push(deckOfCards[randomNumber]);
    $("#game-board").append('<div class="card" id="card ' + deckOfCards[randomNumber].number + '" onclick="#"></div>');
  }
  console.log(shuffledCards);
  return shuffledCards;
}

 $("#makeCardsBtn").on("click", GameBoard);



// function flipCard(){
 //  var cardPairPicked = [];
 //  var cardValue = document.getAttribute("card-data");
 //  cardPairPicked.push(cardValue);
 //  if(cardValue.html === "" & cardPairPicked.length < 2){
 //    cardValue.style.background = "#FFF";
 //    cardValue.html = cardValue;
 //    console.log(cardValue);
 //  }
 // }
// 
// function doTwice(func){
//   for(var i = 1; i <= 2; i++){
//     func();
//   }
// }
// var removeCards = function() {
//   var gameBoard = document.getElementById('game-board');
//  gameBoard.parentNode.removeChild(gameBoard);
// };




// var htmlOutput = '<div  id=" card ' +  deckOfCards[randomNumber].number + '"><div class="front">?</div><div class="back">' + this.number + '</div></div>';

// <div id="card"> 
//   <div class="front"> 
//     Front content
//   </div> 
//   <div class="back">
//     Back content
//   </div> 
// </div>
// Then, call jQuery flip() on it:

// $("#card").flip();


 // function isTwoCards(arr){
 //  var cardPairPicked = [];
 //  cardPairPicked.push(this.getAttribute("card-data"));
 //  console.log(this.getAttribute("card-data"));
 //  for(var i = 0; i <= arr.length; i++){
 //    if (this.getAttribute("card-data") === arr[i]) {
 //    this.innerHTML = '<div class="card" card-data=' + arr[i] +  '><h1 id="cardTitle">' + arr[i] + '</h1></div>';
 //      // $(".flipped").attr("disabled", "disabled");
 //      // document.getElementByClassName('.flipped').disabled = true;
 //      // $("#originalC").hide();
 //      } 
 //      // if(cardsInPlay.length === 2){
 //      // isMatch(cardsInPlay);
 //      // cardsInPlay = [];
 //    }
 //  }
  



}); //end .deady






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