let gSize = 50;
let colours=[" #9bcf6d", "#6d7ecf","#994032"];
function setup() {
  createCanvas(400, 400);
   background(220);
  frameRate (10);
}

function draw() {

for (let x=0; x<width; x+=gSize ){
  for (let y=0; y<height; y+=gSize){
    let choice=floor(random(0,3))
    noStroke();
fill (colours[choice]);
    rect(x,y,gSize);
  }
}

  let choice= floor(random(0,3));
 
  
 
}
