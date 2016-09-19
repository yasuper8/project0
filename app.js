
console.log("linked!");
$(document).ready(function(){

window.onload = GameBoard();

/**
* Card Constructor
*/
function Card(number){
  this.number = number;
  this.active = false;
}

/**
* Game Constructor
*/

function GameBoard(){
  this.cardNamesFull = ["one", "one", "two", "two", "three", "three", "four", "four", "five", "five", "six", "six", "seven", "seven", "eight", "eight", "nine", "nine", "ten", "ten", "J", "J", "Q", "Q", "K", "K"];
  this.cardNames = [1, "1", 2, "2", 3, "3", 4, "4", 5, "5", 6, "6"];
  this.colorNames = ["red", "red", "yellow", "yellow", "blue", "blue", "green", "green"];

  // this.cardFlipped = 0;
  var shuffledCards = [];
  var deckOfCards = [];
  
    for(var i = 0; i < this.cardNames.length; i++){
    deckOfCards.push(new Card(this.cardNames[i]));
    }
    shuffledCards = shuffleArray(cardNames);

    for(var j = 0; j < shuffledCards.length; j++){
      var htmlOutput = '<div class="card" id="' + shuffledCards[j] + '">' + shuffledCards[j] + '</div>';
      $("#game-board").append(htmlOutput);
    }
    console.log(shuffledCards);
    return shuffledCards;
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


/**
* Shuffle
*/

 var removeCards = function(){
 $(".card").remove();
};

function reset(){
  removeCards();
  GameBoard();
}

$("#shuffleBtn").on("click", reset);

/**
* Card Click Trigger
*/

var cardPairPicked = [];

$(".card").on('click', function(e) {
  this.style.backgroundColor = "lightgray";
  
  var cardValue = this.innerHTML;

  if(cardPairPicked.length < 2){
    cardPairPicked.push(cardValue);
  }
    console.log(cardPairPicked.length);
  if(cardPairPicked.length == 2){
    isMatch(cardPairPicked);
  }  
});

function checkTwoInArray(arr, value){
  if(arr.length == 2){
    isMatch();
  } else {
    arr.push(value);
  }
}

/**
* Check two cards if they are match
*/

function reloadPage() { 
   location.reload();
}

var completionCounter = [];

function isMatch (){
  if(cardPairPicked[0] == cardPairPicked[1]){
  // alert("You found a match!");
  console.log(cardPairPicked);
  
  completionCounter.push(cardPairPicked);
  console.log(completionCounter);
  console.log(completionCounter.length);
    // for (var i = 0; i <= cardPairPicked.length; i++) {
    //   var el = document.getElementById(cardPairPicked[i]);
    //   completionCounter.push(el);
    //   console.log(completionCounter.length);
    // }
    if(completionCounter.length == 6){
      alert("Great job!!!\nGame Completed!");
      completionCounter = [];
      if (window.confirm("Play again?")) { 
        setTimeout(reloadPage, 800);
      }
    }
 // var cardOne = document.getElementById(cardPairPicked[0]);
 // var cardTwo = document.getElementById(cardPairPicked[1]);
  // cardOne.className = "matchedCard";
  // console.log(cardOne);
  // cardTwo.className = "matchedCard";
  // console.log(cardTwo);
  // console.log(cardPairPicked);
  cardPairPicked = [];
  } else {
    // alert("Sorry, try again.");
    setTimeout(flipBackCard, 300);
    cardPairPicked = [];
    completionCounter = [];
    console.log(cardPairPicked);
    }
}

/**
* Flip back cards
*/

function flipBackCard(){
  $(".card").css("backgroundColor", "black");
//   $(".card").prop("disbaled", false);
}


}); //end .deady////////////////





