let images = {};
let currentKey = null;
let showCanvas = false;

function preload() {
  const letters = "powerful";
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    images[letter] = loadImage(`img/letter${i + 1}.png`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noLoop();
}

function draw() {
  if (!showCanvas || !currentKey || !images[currentKey]) return;

  background(getComputedStyle(document.body).backgroundColor);

  const img = images[currentKey];
  const targetWidth = 400;
  const targetHeight = (img.height / img.width) * targetWidth;
  image(img, width / 2, height / 2, targetWidth, targetHeight);
}

function keyPressed() {
  const k = key.toLowerCase();
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
