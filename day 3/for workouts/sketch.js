let gSize = 10;
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
  frameRate(1);
}

function draw() {
  for (let x = 0; x < innerWidth; x += gSize) {
    for (let y = 0; y < innerHeight; y += gSize) {
      let r = random(255);
      let g = random(255);
      let b = random(255);
      fill(r, g, b);
      noStroke();

      if (r <= 50 || g <= 50 || b <= 50) {
        rect(x, y, gSize * 0.5, gSize * 0.5);
      }
      else { rect(x, y, gSize, gSize); }
    }



  }
}
