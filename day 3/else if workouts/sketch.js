function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(220);
  if (mouseX > width / 2) {
    fill(235, 64, 52);
    ellipse(mouseX,mouseY,100);
  }
  else{
    fill(50, 134, 237);
    rect(mouseX-80,mouseY-80,100,100);
  }
}
