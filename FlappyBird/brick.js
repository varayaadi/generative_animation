class Brick {
  constructor(xPos, yPos, size, xSpeed) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.size = size;
    this.xSpeed = xSpeed;
    this.hasCrossed = false;
  }
  draw() {
    if(this.hasCrossed == false) {
      fill("red");
    } else {
      fill("blue");
    }
    rect(this.xPos, this.yPos, this.size, this.size);
  }
  move(brickSpeed) {
    this.xPos -= brickSpeed;
  }
  givePoint(dodgeLine) {
    if(this.xPos < dodgeLine && this.hasCrossed == false) {
      this.hasCrossed = true;
      return 1;
    } else {
      return 0;
    }
  }
  
}