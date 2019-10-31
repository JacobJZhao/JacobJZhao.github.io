function preload() {
  soundFormats('mp3');
  C = loadSound("./sounds/C.mp3");
 }
 
function setup() {
  createCanvas(200, 200);
  background(0);
}

function draw(){
  if(keyIsDown(89)){
    C.play();
  }
  else{
    C.stop();
  }
}