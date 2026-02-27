class Bird {
  constructor(xPos,yPos,ySpeed,size) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.ySpeed = ySpeed;
    this.size = size;
  }
  draw() {
    fill("yellow");
    rect(this.xPos, this.yPos, this.size, this.size, 20);
  }
  moveUp(){
    if(this.yPos > 0) {
      this.yPos -= this.ySpeed;
    }
  }
  moveDown(){
    if(this.yPos < height-this.size) {
      this.yPos += this.ySpeed;
    }
  }
  checkCollision(brick, dodgeLine) {
    if(brick.xPos-brick.size/2 < this.xPos+this.size/2 && brick.xPos > dodgeLine) {
      if((this.yPos-this.size/2 < brick.yPos+brick.size/2 && this.yPos-this.size/2 > brick.yPos-brick.size/2) ||
        (this.yPos+this.size/2 < brick.yPos+brick.size/2 && this.yPos+this.size/2 > brick.yPos-brick.size/2)
    ) {
        return true;
      }  
    }
      
  }
}