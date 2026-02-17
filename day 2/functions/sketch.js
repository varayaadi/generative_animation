function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
drawHouse(100,100);
drawHouse(200,200)

}
function drawHouse(x,y) {
rect(x,y,50,50);//x=150,y=150
triangle(x-5,y-5,x+55,y-5,x+25,y-30);
}

function mouseDragged(){
 drawHouse(mouseX,mouseY);
}
