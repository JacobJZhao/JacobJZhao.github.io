function setup() {
  createCanvas(750, 500);
  background(0);
  }

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } 
  else {
    fill(color(random(0,255), random(0,255), random(0,255)));
  }

  ellipse(mouseX, mouseY, 80, 80);
}