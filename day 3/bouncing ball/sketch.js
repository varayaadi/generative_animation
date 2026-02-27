let ySpeed = 10;
let yPos = 35;
let xSpeed = 10;
let xPos = 35;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(220);
  noStroke();
  fill(50, 134, 237);
  ellipse(xPos, yPos, 25);
  yPos = yPos + ySpeed; //yPos += ySpeed;
  xPos = xPos + xSpeed; 

  //when it reaches the bottom, switch direction
  if (yPos > height - 30 || yPos < 30) {
    ySpeed = -ySpeed;
  }
  if (xPos > width - 30 || xPos < 30) {
    xSpeed = -xSpeed;
  }

}
