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
  if(keyIsDown(89)){
    C4.play();
  }
  else{
    C4.stop();
  }
  
  if(keyIsDown(85)){
    D4.play();
  }
  else{
    D4.stop();
  }
}