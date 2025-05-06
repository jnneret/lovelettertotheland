let string = `I SAID I LOVED YOU AND I WANTED`;
let currentCharacter = 0;
let typingSpeed = 0.1;
let paperImg;
let pageMargin = 25;

function preload() {
s; 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Georgia');
  textSize(155);
}

function draw() {

  imageMode(CORNER);
  image(paperImg, 0, 0, width, height);

  let currentString = string.substring(0, floor(currentCharacter));

  fill(0);
  textAlign(LEFT, TOP);
  text(currentString, pageMargin + 40, pageMargin + 40, width - pageMargin * 2 - 40, height - pageMargin * 2 - 40);

  currentCharacter += typingSpeed;
}