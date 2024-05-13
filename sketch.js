// MonkeyType
// Max
// May 7, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let state = "start";
let word = "Bennet";
let wordArray = word.split("");


function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(wordArray);
  startScreen();
}

function draw() {


 
}

function startScreen() {
  if (state === "start") {
    background(0, 0, 128);
    fill("white");
    textSize(35);
    textAlign(CENTER, CENTER);
    text("Welcome to MaxyType!", width / 2, height / 2);
    text("Similar to Monkeytype, type as fast as you can and follow the displayed prompt.", width/2, height/3);
    text("Click the mouse to start!", width/2, height/1.5);
  }
}

function keyPressed() {
  if (key === wordArray[0].toLocaleLowerCase()) {
    console.log("Right Key Pressed");
    wordArray.splice(0, 1);
  }
  else {
    console.log("Wrong Key Pressed");
  }
}


function mousePressed() {
  background("black");
  text("Bennet", width / 2, height / 2);
  console.log("andrew");
}


