function preload() {
  soundFormats('mp3');
  C = loadSound("./sounds/C.mp3");
 }
 
function setup() {
  createCanvas(200, 200);
  background(0);
  C.play();
  C.setVolume(1);
}

function draw(){
  //C.play();
}