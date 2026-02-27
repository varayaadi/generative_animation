//game variables
let dimo;
let obstacles = [];
let points = [];
let isRunnigAway = false
let vote = 0;
let speed = 2;
let bPos;
let dodgeLine;
let gamePoints = 0;
let gameSpeed = 30;
let startScreen;
let hasGameStarted = false;

let gameOver = false;
let gameStart = true;
//let bg;
let bg2;
let votes;
let overImage;
let restart;

// Spritesheet variables
let sX = 8;
let sY = 1;
let spriteSheet, oss1, oss2, pss1, pss2;


//cel variables
let celW, celH;
let cels = [];
let cels_oss1 = [];
let cels_oss2 = [];
let cels_pss1 = [];
let cels_pss2 = [];

let x = 0;

let xPos = 0;
let yPos;
let size;

let allChar = [];

function preload() {
  spriteSheet = loadImage("./assets/dimo_sprite.png");
  oss1 = loadImage("./assets/obstacle1_sprite.png");
  oss2 = loadImage("./assets/obstacle2_sprite.png");
  pss1 = loadImage("./assets/point1_sprite.png");
  pss2 = loadImage("./assets/point2_sprite.png");
  startScreen = loadImage("./assets/start.png");

  //bg = loadImage("./assets/bg2.png");
  bg2 = loadImage("./assets/bg1.png");
  votes = loadImage("./assets/votes.png");
  overImage = loadImage("./assets/gameover.png");
  restart = loadImage("./assets/restart.png");
}
function setup() {

  rectMode(CENTER);
  imageMode(CENTER);
  yPos = height / 2;

  size = 200;

  createCanvas(innerWidth, innerHeight);
  dodgeLine = width / 3;





  //calculating the cel width and height
  celW = spriteSheet.width / sX;
  celH = spriteSheet.height / sY;
  //breaking the spritesheet into cels and storing it in an array
  for (let i = 0; i < sY; i += 1) {
    for (let j = 0; j < sX; j += 1) {
      cels[i * sX + j] = spriteSheet.get(j * celW, i * celH, celW, celH);
      cels_oss1[i * sX + j] = oss2.get(j * celW, i * celH, celW, celH);
      cels_oss2[i * sX + j] = oss1.get(j * celW, i * celH, celW, celH);
      cels_pss1[i * sX + j] = pss1.get(j * celW, i * celH, celW, celH);
      cels_pss2[i * sX + j] = pss2.get(j * celW, i * celH, celW, celH);

    }
  }
  dimo = new Dimo(dodgeLine, height / 2, 10, 70, cels);

  xPos = width;
  for (let i = 0; i < 200; i++) {
    yPos = height / 2;
    let choice = random(0, 1);
    if (choice < 0.5) {
      xPos = xPos + random(300, 600);
      allChar.push(new Obstacle(xPos, yPos, size, 20, cels_oss1, cels_oss2));
    }
    else {
      xPos = xPos + random(300, 600);
      allChar.push(new Points(xPos, yPos, size, 20, cels_pss1, cels_pss2));

    }
  }

}

function draw() {

  if (hasGameStarted == false && gameOver == false) {
    bPos = (width / 2) - gameSpeed * frameCount / 4;
    image(bg2, bPos % (3 * width), height / 2, innerWidth * 3, innerHeight);
    image(bg2, (bPos) % (3 * width) + 3 * width, height / 2, innerWidth * 3, innerHeight);

    dimo.draw(frameCount);
    image(startScreen, width / 2, height / 2, innerWidth, innerHeight)

  }
  else if (hasGameStarted == true && gameOver == false) {

    // image(bg,width/2, height/2,innerWidth*2,innerHeight);
    bPos = (width / 2) - gameSpeed * frameCount / 4;
    image(bg2, bPos % (3 * width), height / 2, innerWidth * 3, innerHeight);
    image(bg2, (bPos) % (3 * width) + 3 * width, height / 2, innerWidth * 3, innerHeight);

    dimo.draw(frameCount);

    for (let i = 0; i < allChar.length; i++) {
      allChar[i].draw();
      allChar[i].move(gameSpeed / 4);
      dimo.checkCollision(allChar[i]);

    }
  }

  //check for points 
  /* everytime a brick crosses the dodge line
  - give a point
  - make a new brick
  - remove a brick from the beginning //optional  
  */
  //Give points
  for (let i = 0; i < allChar.length; i += 1) {
    gamePoints += allChar[i].givePoint(dodgeLine);
  }
  // textSize(50);
  //text("Points : " + points, 20,70);
 


  if (gameOver == true) {

    bPos = (width / 2) - gameSpeed * frameCount / 4;
    image(bg2, bPos % (3 * width), height / 2, innerWidth * 3, innerHeight);
    image(bg2, (bPos) % (3 * width) + 3 * width, height / 2, innerWidth * 3, innerHeight);

    dimo.draw(frameCount);

    image(overImage, width / 2, height / 2, innerWidth, innerHeight);
    image(restart, width / 2, height / 2, innerWidth, innerHeight);
  }

   image(votes,width/2,height/2,innerWidth,innerHeight);

}

function keyPressed() {
  if (keyCode == 32) {
    dimo.startJump(frameCount);
  }
  if (keyCode == UP_ARROW) {
    console.log("ip")
    for (let i = 0; i < allChar.length; i += 1) {
      if (allChar[i].isPoints == true) {
        dimo.collectPoints(allChar[i])
      }

    }
  }
}

function mousePressed() {
  if (hasGameStarted == false) {
    hasGameStarted = true;
  }
  if (gameOver == true) {
    window.location.reload();
  }

}



