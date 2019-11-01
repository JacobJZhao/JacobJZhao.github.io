function preload() {
  soundFormats('mp3', 'wav');
  C4 = loadSound("./sounds/C4.wav");
  D4 = loadSound("./sounds/D4.wav");
  E4 = loadSound("./sounds/E4.wav");
  F4 = loadSound("./sounds/F4.wav");
  G4 = loadSound("./sounds/G4.wav");
  A4 = loadSound("./sounds/A4.wav");
  B4 = loadSound("./sounds/B4.wav");
  C5 = loadSound("./sounds/C5.wav");
 }
 
function setup() {
  createCanvas(200, 200);
  textSize(50);
  C4.setVolume(1);
  D4.setVolume(1);
}

function draw(){
  background(0);
  fill(255);
  if(keyIsPressed){
    if(key === 'u'){
      D4.play();
      text('D4', 100, 100);
    }
    if(key === 'y'){
      C4.play();
      text('C4', 100, 100);
    }
    if(key == 'i'){
      E4.play();
      text('E4', 100, 100);
    }
    if(key === 'o'){
      F4.play();
      text('F4', 100, 100);
    }
    if(key === 'p'){
      G4.play();
      text('G4', 100, 100);
    }
    if(key === '['){
      A4.play();
      text('A4', 100, 100);
    }
    if(key === ']'){
      B4.play();
      text('B4', 100, 100);
    }
    if(key === "\\"){
      C5.play();
      text('C5', 100, 100);
    }
  }
}