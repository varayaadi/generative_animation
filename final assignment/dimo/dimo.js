class Dimo {
  constructor(xPos,yPos,ySpeed,size,cels) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.yJumpedPos = yPos-120;
    this.size = size;
    this.isJumping = false;
    this.startTime =0;
    this.cels =cels;
    this.celCount=0;
    
  }
  draw() {
    if(frameCount%5 ==0) {
        this.celCount++;
    }
    //console.log(this.isJumping)
    let tempY;
    if(this.isJumping) {
        tempY = this.yJumpedPos;
    } else {
        tempY = this.yPos;
    }
    image(this.cels[this.celCount%8], this.xPos, tempY,200,200);
    
    if((frameCount-this.startTime) > 20) {
        this.stopJump();
    }
  }
  moveUp(){
    if(this.yPos > 0) {
      this.yPos -= this.ySpeed;
    }
  }
  startJump(frameCount){
    if(this.isJumping==false) {
        this.startTime = frameCount;
        this.isJumping = true;
    }
    
  }
  stopJump() {
    this.isJumping = false;
  }
 checkCollision(obstacle) {
  if (
    obstacle.hasCrossed == false &&
    obstacle.xPos < this.xPos + this.size/2 &&
    // obstacle.xPos + obstacle.size > this.xPos &&
    this.isJumping == false
     
  ) {
    
    console.log("gameover");
    console.log("collision");
    gameOver = true;
  }

}

collectPoints(point) {
    // console.log(point.hasCrossed, point.xPos, this.isJumping)
    if (
    abs(point.xPos -this.xPos)<100 &&
    // obstacle.xPos + obstacle.size > this.xPos &&
    this.isJumping == true
  ) {
    console.log("got points");
    gamePoints +=100;
  }
}

    
}