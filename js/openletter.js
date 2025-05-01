let topImg, middleImg, bottomImg;
let yPos = 200;

function preload() {
  topImg = loadImage('img/openlettertop.png');
  middleImg = loadImage('img/openlettermiddle.png');
  bottomImg = loadImage('img/openletterbottom.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);  
  }
  
  function draw() {
    background('#E8E6DC');
  
    let x = width / 2;
  
    image(topImg, width / 2, height / 2 - 100); 
    image(middleImg, width / 2, yPos);
    image(bottomImg, width / 2, height / 2 + 100);
    // ChatGPT help
    yPos = map(sin(frameCount * 0.05), -1, 1, height / 2 - 50, height / 2 + 50);  

}


function mousePressed() {
    let middleImgWidth = middleImg.width;
    let middleImgHeight = middleImg.height;
    let middleImgX = width / 2;
    let middleImgY = yPos;
  
    if (
      mouseX > middleImgX - middleImgWidth / 2 &&
      mouseX < middleImgX + middleImgWidth / 2 &&
      mouseY > middleImgY - middleImgHeight / 2 &&
      mouseY < middleImgY + middleImgHeight / 2
    ) {
      window.location.href = "typwriter.html";  
    }
  }
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER); 
}

