let gSize = 50;

let gridImages = [];

function preload() {
  gridImages[0] = loadImage("./assets/IMG_7923.PNG");
  gridImages[1] = loadImage("./assets/MG_7924.PNG");
  gridImages[2] = loadImage("./assets/IMG_7926.PNG");
  gridImages[3] = loadImage("./assets/IMG_7927.PNG");
  gridImages[4] = loadImage("./assets/IMG_7923 copy.PNG");
  gridImages[5] = loadImage("./assets/MG_7924 copy.PNG");
  gridImages[6] = loadImage("./assets/IMG_7926 copy.PNG");
  gridImages[7] = loadImage("./assets/IMG_7927 copy.PNG");

}

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(2);                   
}

function draw() {
  background(220);


  for (let x = 0; x < width; x += gSize) {
    for (let y = 0; y < height; y += gSize) {
      let choice = floor(random(0, 4));

      image(gridImages[choice], x, y, gSize,gSize);
    
  }
} 
}
