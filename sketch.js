// MonkeyType
// Max
// May 7, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let state = "start";
let theWords = ["red", "hello", "jacket", "desk", "orange", "fruit", "car", "somewhere", "rainbow", "school", "sandwhich","interest", "people"];
let lastTypedChar = [];

let theParagraph = [];
let typingTest = randomText(1, 5);
let typingCharsArr = typingTest.split("");
let keyboard; 

function preload() {
  keyboard = loadImage("keyboard.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(typingCharsArr);
  startScreen();
  image(keyboard, width/2 - 500, height/2 - 100, 1000, 400);
}

function draw() {
  if (state === "type") {
    background(55);
    textFont("lexend deca", 40); // doesn't currently work
    text(typingCharsArr.join(""), width - width, height/2, [width - 10]);
    lastTyped();
    nextKey();
  }
}
    

function startScreen() {  
  if (state === "start") {
    background(55);
    fill("white");
    textSize(35);
    textAlign(CENTER, TOP);
    textFont ("verdana", 50);
    text("Welcome to MaxyType!", width / 2, 60);
    rect(width/4 - 50, 150, 900, 10);
  }
} 
 
    
    

function keyPressed() {
  if (key === typingCharsArr[0]) {
    console.log("Right Key Pressed");
    typingCharsArr.splice(0, 1);
  }
  else {
    console.log("Wrong Key Pressed");
  }
}


function mousePressed() {
  state = "type";
}
 


function randomText(paragraphs, sentencesPerParagraph) {
  for (let i = 0; i < paragraphs; i++) {
    let sentences = [];

    for (let i = 0; i < sentencesPerParagraph; i++) {
      let numWords = Math.floor(Math.random() * 10) + 5;
      let sentenceWords = [];

      for (let i = 0; i < numWords; i++) {
        let ranIndex = Math.floor(Math.random() * theWords.length);
        sentenceWords.push(theWords[ranIndex]);
      }

      let sentence = sentenceWords.join(" ") + ".";
      sentences.push(sentence.charAt(0).toUpperCase() + sentence.slice(1));
    }

    theParagraph.push(sentences.join (" "));
  }

  return theParagraph.join ("\n\n");
}

function lastTyped() {
  fill("white");
  text (key, 310, 10);
  text ("Last key pressed:", 150, 10);
}

function nextKey() {
  fill("white");
  if (typingCharsArr[0] === " ") {
    text ("next key:", 80, 60);
    text ("Spacebar", 250, 60);
  }
  fill ("white");
  text (typingCharsArr[0], 200, 60);
  text ("next key:", 80, 60);
}
    


