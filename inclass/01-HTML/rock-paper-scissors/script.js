
//prompt to ask if we want to play a gamne
var playerscore = 0

function compare(player, randomItems) {
  if (randomItems === player){
    return ("Tie")
  }
  if (player == "rock" && randomItems == "scissor") {
    playerscore ++
    return ("Win")
  } else if 
  (player == "scissor" && randomItems == "paper"){
    playerscore ++
    return ("Win")
  } else if 
  (player == "paper" && randomItems == "rock"){
    playerscore ++
    return ("Win") 
  }  
  return ("Lost")
}




  //arr for rock paper scissors (players)
function playgame(){
  var player = prompt ("Enter rock, paper, or scissor")
  console.log (player)

  //arr for rock paper scissors (com + random)

  var com = ["rock", "paper", "scissor"]

  var min = 0
  var max = 2

  var randomCom = "";

  var randomItems = Math.floor(Math.random() * (max - min + 1) + min)
  randomCom += com [randomItems]

  if (randomItems == 0){
    randomItems = "rock";
  } else if (randomItems == 1){
    randomItems = "paper";
  }
    else if (randomItems == 2){
    randomItems = "scissor";
    }

  console.log (randomItems)

  console.log (compare(player, randomItems))
  alert (`Your current score is: ${playerscore}`)

  //if/else statment for all the outcome
}


var playing = true;

while (playing) {
  playgame();

  playing = confirm ("Would you like to continue playing?")
}








//same + same = tie
//rock + scissors = win
//paper + scissors = lost
//rock + paper = lost
//scissors + paper = win
//scissors + rocks = lost
//paper + rock = lost

//keep tracks of the wins/losts/ties

//play again prompt

