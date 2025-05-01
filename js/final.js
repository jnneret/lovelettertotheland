let phrases = [
    "JUSTICE UNDER MY NOSE",
    "BOUNDARIES TO DISAPPEAR",
    "NOBODY ROLL BACK THE TREES!",
    "NOBODY TAKE AWAY DAYBREAK!",
    "NOBODY FREEZE ALL THE PEOPLE ON THEIR KNEES!"
  ];
  
  let currentPhraseIndex = -1;
  let showArrow = false;
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textFont('Georgia');
  }
  
  function draw() {
    background(240);
  
    if (showArrow) {
      textSize(64);
      fill(0);
      text(">", width / 2, height / 2);
      return; 
    }
  
    textSize(48);
    fill(0);
    text("I WANTED", width / 2, height / 2);
  
    textSize(32);
    for (let i = 0; i <= currentPhraseIndex; i++) {
      text(phrases[i], width / 2, height / 2 + 60 + i * 40);
    }
  }
  
  function mouseClicked() {
    if (showArrow) {
      window.location.href = "index.html";
      return;
    }
  
    if (currentPhraseIndex < phrases.length - 1) {
      currentPhraseIndex++;
    } else {
   
      showArrow = true;
      currentPhraseIndex = -1;
    }
  }