//game variables
let rahul;
let bricks = [];
let dodgeLine;
let isGameOver = false
let points = 0;
let brickSpeed = 5;


function setup() {

  rectMode(CENTER);
  // imageMode(CENTER);

  createCanvas(innerWidth, innerHeight);
  dodgeLine = width/4;
  rahul = new Bird(dodgeLine, height/2, 10, 70);
  
  //create an initial set of bricks
  for(let i =width/2;i<2*width;i+=random(200,300)) {
    let newBrick = new Brick(i,random(0,height),100,brickSpeed);
    bricks.push(newBrick)
  }
  
}

function draw() {
  background(220);

  //Bird movement
  rahul.draw();
  if(keyIsDown(40)){ // down arrow is pressed
    rahul.moveDown();
  } else if(keyIsDown(38)) { // up arrow is pressed
    rahul.moveUp();
  }
  if(isGameOver == false) {
    //Obstacles movement
    for(let i =0;i<bricks.length;i+=1) {
      bricks[i].draw();
      bricks[i].move(brickSpeed);
    }

    //check for collision
    for(let i =0;i<bricks.length;i+=1) {
      if(rahul.checkCollision(bricks[i],dodgeLine) == true) {
        isGameOver = true;
      }
    }
  }

  //check for points 
  /* everytime a brick crosses the dodge line
  - give a point
  - make a new brick
  - remove a brick from the beginning //optional  
  */
 //Give points
  for(let i =0;i<bricks.length;i+=1) {
    points += bricks[i].givePoint(dodgeLine);
  }

  //make a new brick
  let lastBrickXPos = bricks[bricks.length-1].xPos;
  let newBrick = new Brick(lastBrickXPos + random(200,300), random(0,height),100,5);
  bricks.push(newBrick);
  
  textSize(50);
  text("Points : " + points, 20,70);

  brickSpeed +=0.1;
  
  
  
}
