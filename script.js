//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;

function startGame(){
  //initialize game variable
  progress = 0;
  gamePlaying = true;
  
  //swap the start and stop buttons 
document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden");

}

function stopGame(){
  //no need to update progress
  gamePlaying = false;
  
  //switch start and stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  
}
 

