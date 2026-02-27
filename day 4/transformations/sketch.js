let deg = 20;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0,30);
  push();
  translate(width / 2, height / 2);
rotate (frameCount);
  for (let a = 0; a < 360; a += deg) {


    noStroke();
    fill(50, 134, 237);
    ellipse(120, 0, 20 * sin(frameCount));
    rotate(deg);
  }
  rotate (-frameCount*2);
  for (let a = 0; a < 360; a += deg) {


    noStroke();
    fill(237, 50, 122);
    triangle(80, 7, 110, 0, 80, -7);
    fill(237, 50, 122);
    rect(150, 0, 20 * cos(frameCount))
    rotate(deg);
  }
  pop();

}
