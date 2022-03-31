//global constant

const nextClueWaitTime = 1000; //how long to wait before playing sequence

//Global Variables
var clueHoldTime = 1000; // how long to hold each clue light/sound
var cluePauseTime = 250; //how long to pause in between clues
var pattern = new Array(7);
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //betwwen 0.0 and 1.0
var guessCounter = 0;
var missed = 0;
var timeAllowed = 20;
var timeRemain = 0;
var timer;
var reset = true;


function setPattern(pattern){
  for(let i = 0; i< pattern.length; i++){
    pattern[i] = randomInt(1, 6);
  }
}

function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function startGame() {
  //initialize game variable
  progress = 0;
  gamePlaying = true;
  reset = true;
  clueHoldTime = 1000; 
  cluePauseTime = 250;
  
  setPattern(pattern);

  //swap the start and stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //no need to update progress
  gamePlaying = false;
  clearTimer();
  //switch start and stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

//Initilization
//Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

//Sound Synthesis Function
const freqMap = {
  1: 261.6,
  2: 293.7,
  3: 329.6,
  4: 349.2,
  5: 392,
  6: 440
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
  
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playingSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  
  guessCounter = 0;
  
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    //for each clue that is revealed so far
    console.log("Play Single Clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playingSingleClue, delay, pattern[i]); //set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    
    clueHoldTime -= 100;//decrease hold time after every iteration
  }
  
    timeRemain = timeAllowed;
    if(reset || !gamePlaying){
      timer = setInterval(countDown, 1000);
    }
    reset = false;
  
}
function countDown(){
  document.getElementById("timer").innerHTML = "Time remaining: " + timeRemain +" s";
  timeRemain--;
  if(timeRemain == 0 || !gamePlaying){
    stopGame();
    alert("Time's up!");
  }
}


function loseGame() {
  stopGame();
  alert("Game Over. Try again!");
}

function winGame() {
  stopGame();
  alert("You are the champion!");
}

function guess(btn) {
  console.log("User guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  //game logic
    if(pattern[guessCounter] == btn){
    //Guess was correct
      timeRemain = timeAllowed;//reset timer
    if(guessCounter == progress){
      if(guessCounter == pattern.length - 1){
        //game over, win
        missed = 0;//reset attempt
        winGame();
      }
      else{
        //pattern correct, play next clue
        progress++;
        playClueSequence();
      }
    }
    else{
      //turn is not over yet, check the next response
      guessCounter++;
    }
  }
    else{
    //Guess is incorrect
    if(missed < 3){
      //allow 3 fail attempt, repeat the pattern
      playClueSequence();
      missed++;
    }
    else{
      missed = 0;//reset
      loseGame();
    }
    }
}
function clearTimer(){
  clearInterval(timer);
  timeRemain = timeAllowed;
  document.getElementById("timer").innerHTML = "";
}
