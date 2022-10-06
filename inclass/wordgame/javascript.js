var startBtn = document.querySelector (".start-button");
var resetScoreBtn = document.querySelector (".rest-button")

var wordText = document.querySelector (".word-blank")
var timerText = document.querySelector (".timer-count")

var spanWin = document.querySelector (".win")
var spanLose = document.querySelector (".lose")

// var storage = localStorage.getitem ("scores")

var timerInterval
var timeLeft = 10

// function init ()

function tickTimer() {
  if (timeLeft > 0 ){
    timeLeft--
    timerText.textContent = timeLeft
    return true
  }
  return false
}

function resetTimer () {
  timeLeft = 10;
  timeLeft.textContent = timeLeft
  wordText.textContent = ""
}




function gameOver () {
  console.log (gameOver)
  wordText.textContent = "GAME OVER!"
  clearInterval (timerInterval)
}


startBtn.addEventListener ("click", function(){
  timerInterval = setInterval(function (){
    if ( tickTimer()){
    } else{
      gameOver()
    }
  } ,1000)
})


// init ()