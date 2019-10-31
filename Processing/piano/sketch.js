function preload() {
  soundFormats('mp3', 'wav');
  C4 = loadSound("./sounds/C4.mp3");
  D4 = loadSound("./sounds/D4.wav");
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
    else if(key === 'y'){
      C4.play();
    }
  }
}