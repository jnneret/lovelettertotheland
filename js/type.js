let string = `I SAID I LOVED YOU AND I WANTED`;
let currentCharacter = 0;
let typingSpeed = 0.1;
let pageMargin = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(165);
  background('#F2E0BF'); 
}

function draw() {
  
  let currentString = string.substring(0, floor(currentCharacter));

  fill(0);
  textAlign(LEFT, TOP);
  text(
    currentString,
    pageMargin + 40,
    pageMargin + 40,
    width - pageMargin * 2 - 40,
    height - pageMargin * 2 - 40
  );

  currentCharacter += typingSpeed;
}