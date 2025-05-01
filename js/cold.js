function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont('Georgia');
    textSize(36);
    textAlign(CENTER, CENTER);
  }
  
  function draw() {
    background('#E8E6DC');
  
    fill(0);
    text("I SAID I LOVED YOU AND I WANTED", width / 2, height / 2);
  
    let d = dist(mouseX, mouseY, width / 2, height / 2);
  
    if (d < 150) {
      textSize(30);
      textAlign(LEFT, TOP);
      text("NOBODY THIRST", 30, 30);
  
      textAlign(RIGHT, BOTTOM);
      text("AND NOBODY COLD", width - 30, height - 30);
    }
  }