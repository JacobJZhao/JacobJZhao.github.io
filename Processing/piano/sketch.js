function preload() {
  soundFormats('mp3', 'wav');
  C4 = loadSound("./sounds/C4.mp3");
  D4 = loadSound("./sounds/D4.wav");
  E4 = loadSound("./sounds/E4.wav");
  F4 = loadSound("./sounds/F4.wav");
  G4 = loadSound("./sounds/G4.wav");
 }
 
function setup() {
  createCanvas(200, 200);
  background(0);
  C4.setVolume(1);
  D4.setVolume(1);
}

function draw(){
  if(keyIsPressed){
    if(key === 'u'){
      D4.play();
    }
    if(key === 'y'){
      C4.play();
    }
    if(key == 'i'){
      E4.play();
    }
    if(key === 'o'){
      F4.play();
    }
    if(key === 'p'){
      G4.play();
    }
  }
}