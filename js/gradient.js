let textTopLeft = "GENOCIDE";
let textBottomRight = "TO STOP";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(min(windowWidth, windowHeight) * 0.20); 
  textAlign(LEFT, TOP);
}

function draw() {
  let color1 = color("#F0DDB3");  
  let color2 = color("#A69C6D");  
  let color3 = color("#9B8608"); 

  let t = map(mouseX, 0, width, 0, 1);
  let bgColor = lerpColor(color1, color2, t);
  bgColor = lerpColor(bgColor, color3, t);

  background(bgColor);

  let alphaTopLeft = map(mouseX, 0, width, 0, 255);
  let alphaBottomRight = map(mouseY, 0, height, 0, 255);

  fill(color("#F0DDB3"), alphaTopLeft); 
  textAlign(LEFT, TOP);
  text(textTopLeft, 25, 25);  

  fill(color("#9B8608"), alphaBottomRight); 
  textAlign(RIGHT, BOTTOM);
  text(textBottomRight, width - 25, height - 25); 
}