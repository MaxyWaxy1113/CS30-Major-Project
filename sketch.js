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
let typingTest = randomText(3, 5);

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(wordArray);
  startScreen();
}

function draw() {
  if (state === "type") {
    background("black");

    text(typingTest, width/2, height/2);
  }

 
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


