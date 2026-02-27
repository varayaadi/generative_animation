let gSize = 3;
let xPos = 0;
let yPos = 0;
function setup() {

  createCanvas(400, 400);
   background(220);
  frameRate(90000);

}

function draw() {
  let choice = random(0, 10);
  if (choice <= 0.25) {
    line(xPos, yPos, xPos + gSize, yPos + gSize);
  let choice2 = random(0, 1);
  if (choice2 <= 0.25) {
     line(xPos, yPos, xPos + gSize, yPos + gSize);  
  }
   else if (choice >= 0.25 && choice <= 0.5) {
    rect(xPos, yPos, gSize);
  }   
  }
  else if (choice >= 0.25 && choice <= 0.5) {
    rect(xPos, yPos, gSize);
  }
  else if (choice >= 0.5 && choice <= 1) {
    ellipse(xPos + gSize / 2, yPos + gSize / 2, gSize);
  }
  else if (choice <= 1 && choice >= 10) {
    noFill();
    noStroke();
    rect(xPos, yPos, gSize);
  }


  xPos = xPos + gSize;

  if (xPos > width) {
    xPos = 0;
    yPos = yPos + gSize;
  }
  

}
