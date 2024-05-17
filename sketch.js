// MonkeyType
// Max
// May 7, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let state = "start";
let word = "Bennet";
let wordArray = word.split("");
let theWords = ["red", "hello", "jacket", "desk", "orange", "fruit", "car", "somewhere", "rainbow", "school", "sandwhich","interest", "people"];
let theParagraph = [];
let typingTest = randomText(1, 5);
let keyboard; 

function preload() {
  keyboard = loadImage("keyboard.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(wordArray);
  startScreen();
}

function draw() {
  if (state === "type") {
    background("black");
    textFont("lexend deca", 40); // doesn't currently work
    text(typingTest, width - width, height/2, [width - 10]);
  }
  image(keyboard, width/2 - 500, height/2 - 100, 1000, 400);
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
  if (key === wordArray[0].toLocaleLowerCase()) {
    console.log("Right Key Pressed");
    wordArray.splice(0, 1);
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


console.log(typingTest);






