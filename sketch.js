// MonkeyType
// Max
// May 7, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let state = "start"; // start state
let theWords = ["red", "hello", "jacket", "desk", "orange", "fruit", "car", "somewhere", "rainbow", "school", "sandwhich","interest", "people"]; // selection of random words
let lastTypedChar = []; // various empty arrays
let theParagraph = [];
let timerArray = [];
let newTypeArray = [];
let typingTest = randomText(1, 5);
let typingCharsArr = typingTest.split(""); // splits "theWords" into individual charachters
let keyboard; 
let capsLockTimes = 0; 
let charCounter = 0;
let wrongCharCounter = 0;
let myButton = new Clickable(); // various buttons
let myButton2 = new Clickable();
let myButton3 = new Clickable();
let myButtonColour1 =  new Clickable();
let myButtonColour2 =  new Clickable();
let myButtonColour3 =  new Clickable();
let typeState;
let startTime = 0;
let endTime1 = 15000; // total time for 15 sec, 30 sec, and 45 sec tests
let endTime2 = 30000;
let endTime3 = 45000;
function preload() {
  keyboard = loadImage("keyboard.jpg"); // loads start screen image
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
    textFont("lexend deca", 40); 
    text(typingCharsArr.join(""), width - width, height/2, [width - 10]); // ensures text does not go off screen
    lastTyped();
    nextKey();
    gameText();
    myButtonDisplay();
   
    

  }   
  colorChange(); // allows for color toggle (red or green)
  
}



 
function startScreen() {  // introductory start screen
  if (state === "start") {
    background(55);
    fill("white");
    textSize(35);
    textAlign(CENTER, TOP);
    textFont ("verdana", 50);
    text("Welcome to MaxyType!", width / 2, 60);
    text("Press 1 to begin", width/2, 800);
    textSize(40);
    text("Once a test length has been selected, the timer starts. Happy typing!", width/2, 200);
    rect(width/4 - 50, 150, 900, 10);
  }
} 
 
    
    
function keyPressed() { // checks to see if right key was pressed

  if (keyCode === 49) {
    state = "type";
      
  }
  if (key === typingCharsArr[0]) {
    typingCharsArr.splice(0, 1);  // if the correct charachter is typed, it will be cut off the end of the array, and the next charachter fills up index [0]
    charCounter++;
    console.log(charCounter);
  }
  if (!key === typingCharsArr[0]) {
    typingCharsArr.splice(0, 1);  
    wrongCharCounter++;

  if (keyCode === 20) { // sets caps lock counter
    capsLockTimes++
  }
  
}
}

function randomText(paragraphs, sentencesPerParagraph) { // main function
  for (let i = 0; i < paragraphs; i++) {
    let sentences = []; // creates empty array that will store each sentence
    for (let i = 0; i < sentencesPerParagraph; i++) {
      let numWords = Math.floor(Math.random() * 10) + 5; // randomizes words
      let sentenceWords = []; // empty array that randomized words will be pushed into
      for (let i = 0; i < numWords; i++) {
        let ranIndex = Math.floor(Math.random() * theWords.length);
        sentenceWords.push(theWords[ranIndex]); // pushes random words into array
      }
      let sentence = sentenceWords.join(" ") + "."; 
      sentences.push(sentence.charAt(0).toUpperCase() + sentence.slice(1)); // first charachter after a period is capatalized
    }
    theParagraph.push(sentences.join (" "));
  }
  return theParagraph.join ("\n\n"); // splits paragraph into lines rather than 1 big line of text
}

function lastTyped() { // detects capslock
  if (keyCode === 20)  {
    fill("red");
    text ("Caps Lock Is On!", width/2 - 30, 10);
    fill("white");
    if (capsLockTimes % 2 !== 0) {
      fill("red");
      text ("Caps Lock Is On!", width/2 - 30, 10);
      fill("white");
    }
    text ("Last key pressed:", 145, 10);
  }

  if (keyCode !== 20) {
    fill("white");
    text (key, 310, 10);
    text ("Last key pressed:", 145, 10);
  }
  if (state === "green") { // fills screen based on chosen colour
    fill(144, 238, 144);  
  }
  if (state === "red") {
    fill(255, 124, 128);
  }
}
function nextKey() {  
  fill("white");
  if (typingCharsArr[0] === " ") { // detects the next correct charachter input
    text ("next key:", 80, 60);
    text ("Spacebar", 250, 60);
  }
  fill ("white");
  text (typingCharsArr[0], 180, 60);
  text ("next key:", 80, 60);
  if (state === "green") {
    if (typingCharsArr[0] === " ") {
      text ("next key:", 80, 60);
      text ("Spacebar", 250, 60);
    }
    text (typingCharsArr[0], 180, 60);
    text ("next key:", 80, 60);
    fill(144, 238, 144);
  }
  if (state === "red") {
    if (typingCharsArr[0] === " ") {
      text ("next key:", 80, 60);
      text ("Spacebar", 250, 60);
    }
    text (typingCharsArr[0], 180, 60);
    text ("next key:", 80, 60);
    fill(255, 124, 128);
  }
}
function gameText() { // title of game
  fill("yellow");
  textSize(100);
  textFont("Times New Roman");
  text ("MaxyType", width/2 - 30, 200);
  fill("white");
}
function gameTextGreen() { // title of game in green
  textSize(100);
  textFont("Times New Roman");
  fill(144, 238, 144);
  text ("MaxyType", width/2 - 30, 200);
  fill(144, 238, 144);
}
function gameTextRed() { // title of game in red
  textSize(100);
  textFont("Times New Roman");
  fill(255, 124, 128);
  text ("MaxyType", width/2 - 30, 200);
  fill(255, 124, 128);
}



  function myButtonDisplay() { // displays all clickables
  myButton.locate(100, 200);
  myButton.text = "15 sec";
  myButton.draw();
  myButton.onPress = function() {
    startTimer(); // starts 15 second timer upon click
  };




  myButton2.locate(200, 200);
  myButton2.text = "30 sec";
  myButton2.draw();
  myButton2.onPress = function() {
    startTimer2(); // starts 30 second timer upon click
  };


  myButton3.locate(300, 200);
  myButton3.text = "45 sec";
  myButton3.draw();
  myButton3.onPress = function() {
    startTimer3(); // starts 45 second timer upon click
  };


  myButtonColour1.locate(width/1.377, 200);
  myButtonColour1.text = "green";

  myButtonColour1.draw();
  myButtonColour1.onPress = function() {

    state = "green";
    console.log(state);
  };

  myButtonColour2.locate(width/1.51, 200);
  myButtonColour2.text = "red";

  myButtonColour2.draw();
  myButtonColour2.onPress = function() {

    state = "red";
    console.log(state);
  };
 
}
function startTimer() {
  setTimeout(() => {
    state = "15";
    console.log(state);
    background(0);
    fill("white");
    text("WPM", width/2, height/2);
    text (charCounter, width/2 + 200, height/2); // close estimate of wpm. Takes total amount of correct charachters typed, multiplies by 4 to obtain 60 seconds, and divides by 4 (average charachters per word)
    wpmAccuracyText()
  }, 15000);
}

function startTimer2() {
  setTimeout(() => {
    state = "30";
    console.log(state);
    background(0);
    background(0);  
    fill("white");
    text("WPM", width/2, height/2);
    text (charCounter * 0.5, width/2 + 200, height/2); // close estimate of wpm. Takes total amount of correct charachters typed, multiplies by 2 to obtain 60 seconds, and divides by 4 (average charachters per word)
    wpmAccuracyText()
    wpmAccuracyText();
  }, 30000);
}

function startTimer3() {
  setTimeout(() => {
    state = "45";
    console.log(state);
    background(0);
    fill("white");
    text("WPM", width/2, height/2);
    text (charCounter * (1/3), width/2 + 200, height/2); // // close estimate of wpm. Takes total amount of correct charachters typed, multiplies by 4/3 to obtain 60 seconds, and divides by 4 (average charachters per word)
    wpmAccuracyText()
    wpmAccuracyText();
  }, 45000);
}

function colorChange() { // changes screen, clickable, and text colour
  if (state === "green") {
    background("green");
    text(typingCharsArr.join(""), width - width, height/2, [width - 10]);
    gameTextGreen();
    myButtonDisplay();
    textSize(40);
    nextKey();
    lastTyped();
    myButtonColour1.color = "#90ee90";
    myButtonColour2.color = "#90ee90";
    myButton.color = "#90ee90";
    myButton2.color = "#90ee90";
    myButton3.color = "#90ee90";
  
    
  
  }
  if (state === "red") {
    background("red");
    text(typingCharsArr.join(""), width - width, height/2, [width - 10]);
    gameTextRed();
    myButtonDisplay();
    textSize(40);
    nextKey();  
    lastTyped();
    myButtonColour1.color = "#FF7276";
    myButtonColour2.color = "#FF7276";
    myButton.color = "#FF7276";
    myButton2.color = "#FF7276";
    myButton3.color = "#FF7276";
  }
}

