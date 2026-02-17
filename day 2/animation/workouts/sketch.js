let x;
let y;
function setup() {
  createCanvas(400, 400);
  x=0;
  y=400;

}

function draw() {
   background(220);

  //L to R
  noStroke();
  fill(10);
  ellipse(x,300,100/3);
   x=x+3;

   //R to L
  ellipse(y,mouseX/50,mouseY);
  y=y-1;

}