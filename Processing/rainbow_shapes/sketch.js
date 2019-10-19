function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(152, 251, 152);
  
  ellipse(175, 125, 75, 150);
  ellipse(175, 375, 75, 150);
  
  triangle(325, 175, 375, 75, 425, 175);
  triangle(325, 425, 375, 325, 425, 425);
  
  square(525, 75, 100);
  square(525, 325, 100);
  
  if(mouseX < 200){
    if(mouseY > 250){
      fill(255, 0, 0)
    }
    if(mouseY < 250){
      fill(255, 127, 0)
    }
  }
  
  if(200 < mouseX && mouseX < 400){
    if(mouseY > 250){
      fill(255, 255, 0)
    }
    if(mouseY < 250){
      fill(0, 255, 0)
    }
  }
  
  if(400 < mouseX && mouseX < 600){
    if(mouseY > 250){
      fill(0, 0, 255)
    }
    if(mouseY < 250){
      fill(123, 104, 237)
    }
  }
  
  if(mouseX > 600){
    if(mouseY > 250){
      fill(148, 0, 211)
    }
    if(mouseY < 250){
      fill(255)
    }
  }
  
}