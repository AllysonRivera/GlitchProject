//Global Variables
const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
const clueHoldTimeF = 500;
const cluePauseTimeF = 222;
const nextClueWaitTimeF = 500;


var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var levelup = false;
var speedup = false;
var slowdown= false;
var volume = 0.5;
var guessCounter = 0;


function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  if(levelup == true && speedup == false){
    for(let i = 0;i <= 7; i++){
      pattern[i] = Math.floor(Math.random() * Math.floor(7));
    }
    playClueSequence();
  }
  else if(levelup == true && speedup == true){
    for(let i = 0;i <= 7; i++){
      pattern[i] = Math.floor(Math.random() * Math.floor(7));
    }
    playClueSequenceFaster();
  }
  else if(levelup == false && speedup == true){
    for(let i = 0;i <= 7; i++){
      pattern[i] = Math.floor(Math.random() * Math.floor(5));
    }
    playClueSequenceFaster();
  }
  else{
    for(let i = 0; i <= 7; i++){
      pattern[i] = Math.floor(Math.random() * Math.floor(5));
    }
  }
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  levelup = false;
  speedup = false;
  slowdown = false;
  Back();
  Slow();
  stopTone();
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function Level(){
  //initialize game variables 
  levelup = true;
  progress = 0;
  // swap the Start and Stop buttons
  document.getElementById("levelBtn").classList.add("hidden");
  document.getElementById("backBtn").classList.remove("hidden");
  
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  document.getElementById("button5").classList.remove("hidden");
  document.getElementById("button6").classList.remove("hidden");  
}

function Back(){
  gamePlaying = false;
  levelup = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  document.getElementById("levelBtn").classList.remove("hidden");
  document.getElementById("backBtn").classList.add("hidden");
  
  document.getElementById("button5").classList.add("hidden");
  document.getElementById("button6").classList.add("hidden");
  
}



function Speed(){
  gamePlaying = true;
  speedup = true;
  progress = 0;

  
  document.getElementById("speedBtn").classList.add("hidden");
  document.getElementById("slowBtn").classList.remove("hidden");
  
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  if(levelup != true){
    document.getElementById("button5").classList.add("hidden");
    document.getElementById("button6").classList.add("hidden");
  }
  
  //playClueSequenceFaster();
}

function Slow(){
  gamePlaying = true;
  slowdown = true;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  document.getElementById("speedBtn").classList.remove("hidden");
  document.getElementById("slowBtn").classList.add("hidden");
  if(levelup != true){
    document.getElementById("button5").classList.add("hidden");
    document.getElementById("button6").classList.add("hidden");
  }
}

const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 200.3,
  6: 290.5
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playSingleClueFaster(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTimeF);
    setTimeout(clearButton,clueHoldTimeF,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function playClueSequenceFaster(){
  guessCounter = 0;
  let delayF = nextClueWaitTimeF; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delayF + "ms")
    setTimeout(playSingleClueFaster,delayF,pattern[i]) // set a timeout to play that clue
    delayF += clueHoldTimeF 
    delayF += cluePauseTimeF;
  }
}

function loseGame(){
  stopGame();
  Back();
  Slow();
  alert("Game Over. Try again.");
}
function winGame(){
  stopGame();
  Back();
  Slow();
  alert("Congrats! You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }
      else{
        progress++;
        if(levelup == true && speedup == false){
          playClueSequence();
        }
        else if(levelup == true && speedup == true){
          playClueSequenceFaster();
        }
        else if(levelup == false && speedup == true){
          playClueSequenceFaster();
        }
        else{
          playClueSequence();
        }
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    loseGame();
  }
}



