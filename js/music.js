let imageFile;
let textString = "MUSIC OUT THE WINDOWS";
let xPos = 0;
let imageWidth = 0;  

function preload() {
  imageFile = loadImage("img/polaroid.png"); 
}

function setup() {
  background ('#E8E6DC')
  createCanvas(windowWidth, windowHeight);
  textSize(40);
  textAlign(CENTER, CENTER);

  imageWidth = imageFile.width;
  imageHeight = imageFile.height;
}

function draw() {
  background(255);

  fill(0);
  textSize(24);
  text("I SAID I LOVED YOU AND I WANTED", width / 2, 50); 

  let imageX = 0;
  let imageY = height / 2 - imageHeight / 2; 
  image(imageFile, imageX, imageY); 


  let minX = imageWidth + 50; 
  let maxX = width - 50; 

  
  if (mouseX > minX && mouseX < maxX) {
    let wordX = map(mouseX, minX, maxX, minX, maxX); 

    textSize(40); 
    fill(0); 
    noStroke();
    text(textString, wordX, height / 2); 
  }
}