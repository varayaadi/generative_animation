class Obstacle {
  constructor(xPos, yPos, size, xSpeed,cel1,cel2) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.size = size;
    this.xSpeed = xSpeed;
    this.hasCrossed = false;
    this.isPoints = false;

    let choice = random(0, 1);
    if (choice < 0.5) {
      this.cels = cel1;
    }
    else   {
      this.cels = cel2;

    }
    this.celCount=0;

  }
  draw() {
    if(frameCount%5 ==0) {
        this.celCount++;
    }
    image(this.cels[this.celCount%8], this.xPos, this.yPos,200,200);
  }
  move(speed) {
    this.xPos -= speed;
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