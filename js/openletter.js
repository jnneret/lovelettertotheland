let img;
let yPos = 200;
const targetWidth = 400;
let targetHeight;

function preload() {
  img = loadImage("img/letteropen.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  targetHeight = null;
  if (img.width) {
    targetHeight = (img.height / img.width) * targetWidth;
  }
}

function draw() {
  background("#F2E0BF");

  if (img && targetHeight) {
    yPos = map(sin(frameCount * 0.05), -1, 1, height / 2 - 50, height / 2 + 50);
    image(img, width / 2, yPos, targetWidth, targetHeight);
  }
}

function mousePressed() {
  if (!targetHeight) return; 

  const centerX = width / 2;
  const centerY = yPos;

  const halfW = targetWidth / 2;
  const halfH = targetHeight / 2;

  if (
    mouseX > centerX - halfW &&
    mouseX < centerX + halfW &&
    mouseY > centerY - halfH &&
    mouseY < centerY + halfH
  ) {
    window.location.href = "typwriter.html";
  }
}