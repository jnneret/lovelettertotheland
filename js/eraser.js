  // ChatGPT Help
let topImage;
let eraserSize = 70;
let maskGraphics;

function preload() {
  topImage = loadImage("img/background.jpg"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  maskGraphics = createGraphics(windowWidth, windowHeight);
  maskGraphics.background(255); 
}

function draw() {
  background(230);

  textFont('Georgia');
  textAlign(CENTER, CENTER);
  textSize(48);
  fill(0);
  text("AFFIRMATIVE ACTION", width / 2, height / 2 - 30);
  text("AND REACTION", width / 2, height / 2 + 30);

  let maskedImage = topImage.get();
  maskedImage.mask(maskGraphics);

  image(maskedImage, 0, 0, width, height);

  fill(0);
  textSize(40);
  textAlign(CENTER);
  text("I SAID I LOVED YOU AND I WANTED", width / 2, 150);
}

function mouseDragged() {
  // "Erase" by drawing black on the mask
  maskGraphics.erase();
  maskGraphics.ellipse(mouseX, mouseY, eraserSize);
  maskGraphics.noErase();
}