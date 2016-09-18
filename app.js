

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
  // this.cardFlipped = 0;
  this.showAlert = function(){
    alert("onclick Event detected!");
  };

  var deckOfCards = [];
  var shuffledCards = [];
  
  for(var i = 0; i < this.cardNames.length; i++){
    deckOfCards.push(new Card(this.cardNames[i]));
  }


  for(var j = 0; j <= deckOfCards.length; j++){
    var randomNumber = Math.floor(Math.random() * deckOfCards.length);
    shuffledCards.push(deckOfCards[randomNumber]);
    var nameOfCard = deckOfCards[randomNumber].number;
    // var idNameOfCard = "#" + deckOfCards[randomNumber].number;
    // var targetCart = document.getElementById(nameOfCard);
    // targetCart.onclick = showAlert;
    var htmlOutput = '<div class="card" id="card ' + nameOfCard + '" onclick="#">' + nameOfCard + '</div>';
    $("#game-board").append(htmlOutput);
  }
  console.log(shuffledCards);
  return shuffledCards;
}

window.onload = GameBoard();

var cardPairPicked = [];

$(".card").on('click', function(e) {
  this.style.backgroundColor = "lightgray";
var cardValue = this.innerHTML;

console.log(cardValue);
cardPairPicked.push(cardValue);


  setTimeout(flipBackCard, 2000);

});


function checkArray (arr){
  if(arr.length == 2){
    isMatch(arr);
  }
}


function isMatch (cardPairPicked){
  if(cardPairPicked[0] === cardPairPicked[1]){
  alert("You found a match!");
  $(".alert").alert('close');
  
  } else {
  alert("Sorry, try again.");
  // $(".alertTwo").alert();
  
  }
}

function flipBackCard(){
  $(".card").css("backgroundColor", "black");
}


// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }





//Shuffle/////////////
 var removeCards = function() {
 //  var gameBoard = document.getElementById('card');
 // gameBoard.parentNode.removeChild(gameBoard);
 $(".card").remove();
};

function reset(){
  removeCards();
  GameBoard();
}

$("#shuffleBtn").on("click", reset);

//Shuffle ends//////////


// flip2Back(){
//             // Flip the 2 tiles back over
//             var tile_1 = document.getElementById(memory_tile_ids[0]);
//             var tile_2 = document.getElementById(memory_tile_ids[1]);
//             tile_1.style.background = 'url(tile_bg.jpg) no-repeat';
//                   tile_1.innerHTML = "";
//             tile_2.style.background = 'url(tile_bg.jpg) no-repeat';
//                   tile_2.innerHTML = "";
//             // Clear both arrays
//             memory_values = [];
//                   memory_tile_ids = [];
//         }
//         setTimeout(flip2Back, 700);
//       }
//     }
//   }
// }




// var cardPairPicked = [];
  // var cardValue = document.getElementById("two");
  // cardPairPicked.push(cardValue);
  //   if(cardValue.html === "" & cardPairPicked.length < 2){
  //   cardValue.style.background = "lightgray";
  //     console.log(cardValue);
  //   }




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
// 




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



}); //end .deady////////////////






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