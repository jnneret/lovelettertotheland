let yPos;
let ySpeed = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#E8E6DC'); 
  textSize(48);
  textFont('Georgia');
  fill(0);
  noStroke();

  yPos = height / 2; 
}

function draw() {
  yPos += ySpeed;
  if (yPos > height || yPos < 0) {
    ySpeed *= -1;
  }


  text('I WANTED', mouseX, yPos);
}