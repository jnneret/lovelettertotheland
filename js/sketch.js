let images = {};
let currentKey = null;
let showCanvas = false;

function preload() {
  images.p = loadImage("img/letter1.png", () => {}, () => console.error("p failed to load"));
  images.o = loadImage("img/letter2.png", () => {}, () => console.error("o failed to load"));
  images.w = loadImage("img/letter3.png", () => {}, () => console.error("w failed to load"));
  images.e = loadImage("img/letter4.png", () => {}, () => console.error("e failed to load"));
  images.r = loadImage("img/letter5.png", () => {}, () => console.error("r failed to load"));
  images.f = loadImage("img/letter6.png", () => {}, () => console.error("f failed to load"));
  images.u = loadImage("img/letter7.png", () => {}, () => console.error("u failed to load"));
  images.l = loadImage("img/letter8.png", () => {}, () => console.error("l failed to load"));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noLoop();
}

function draw() {
  if (!showCanvas || !currentKey || !images[currentKey]) {
    console.log("Image not ready or key not found:", currentKey);
    return;
  }

  let img = images[currentKey];
  if (!img.width || !img.height) {
    console.log("Image not fully loaded:", currentKey);
    return;
  }

  background(getComputedStyle(document.body).backgroundColor);

  const targetWidth = 400; 
  const targetHeight = (img.height / img.width) * targetWidth;

  image(img, width / 2, height / 2, targetWidth, targetHeight);
}

function keyPressed() {
  let k = key.toLowerCase();

  if ("powerful".includes(k)) {
    currentKey = k;
    showCanvas = true;

    const intro = document.getElementById("introContainer");
    if (intro) intro.style.display = "none";

    redraw();
  }
}

function mousePressed() {
  if (currentKey === 'l' && images.l) {
    const targetWidth = 200;
    const targetHeight = (images.l.height / images.l.width) * targetWidth;

    const d = dist(mouseX, mouseY, width / 2, height / 2);
    const radius = Math.max(targetWidth, targetHeight) / 2;

    if (d < radius) {
      window.location.href = "openletter.html";
    }
  }
}