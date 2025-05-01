//chat gpt help
let images = {};
let currentKey = null;
let showCanvas = false;

function preload() {
  images.y = loadImage("img/letter.png");
  images.u = loadImage("img/letter2.png");
  images.v = loadImage("img/letter3.png");
  images.e = loadImage("img/letter4.png"); 
  images.g = loadImage("img/letter5.png"); 
  images.t = loadImage("img/letter6.png"); 
  images.m = loadImage("img/letter7.png"); 
  images.a = loadImage("img/letter7.png");
  images.i = loadImage("img/letterback.png");  
  images.l = loadImage("img/letterback2.png");  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noLoop();

}

function draw() {
  if (!showCanvas) return;

  background(getComputedStyle(document.body).backgroundColor);

  if (currentKey && images[currentKey]) {
    image(images[currentKey], width / 2, height / 2);
  }
}

function keyPressed() {
  if ("yuvegtmail".includes(key)) {
    currentKey = key;
    showCanvas = true;

    const intro = document.getElementById("introContainer");
    if (intro) intro.style.display = "none";

    redraw();
  }

 
}

function mousePressed() {
  if (currentKey === 'l') {
    const d = dist(mouseX, mouseY, width / 2, height / 2);
    if (d < images.l.width / 2) {
      window.location.href = "openletter.html";
    }
  }
  
  }