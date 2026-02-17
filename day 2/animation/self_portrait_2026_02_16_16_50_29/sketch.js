function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(96, 196, 160);
  noStroke();
  fill(163,122,69);//skin
  rect(150,100,100,100,25,25,0,0);
  triangle(225,200,225,275,250,200);
  triangle(150,200,175,200,175,275);
  rect(175,200,50,75);
  fill(150, 113, 65);//skin3
   rect(135,150,15,50,10,0,0,10);
  rect(250,150,15,50,0,10,10,0);
  ellipse(175,160,50,40);
  ellipse(225,160,50,40); 
  ellipse(200,240,70,70);
  fill(120, 89, 56);//skin4
  arc(150,175,20,20,90,270);
   arc(250,175,20,20,270,90);
   fill(181, 137, 81);//skin2
   arc(200,275,30,20,180,0);
    fill(41, 41, 41);//black
  triangle(137,110,150,110,150,170);
  triangle(190,112,200,69,270,105);
  triangle(190,112,270,105,250,130);
  triangle(250,100,270,105,250,170);
  rect(160,138-mouseY/90,30,10,5,5,0,0);//eyebrow L animation
  rect(210,138-mouseY/90,30,10,5,5,0,0);//eyebrow R animation
  rect(185,240,30,20);
  ellipse(175,160,8,8);//eye L
   ellipse(175,160,mouseX/20);//eye L animation
  ellipse(225,160,8,8); //eye R
   ellipse(225,160,mouseX/20);//eye R animation 
  ellipse(190,90,45,45);
  ellipse(155,110,35,35);
   triangle(175,237,198,225,198,237);
  triangle(202,225,202,237,225,237);
   fill(181, 137, 81);//skin2
  triangle(210,210,190,210,200,150);
  ellipse(200,210,20,20);
    fill(230, 230, 230);//white
  arc(200,240,30,mouseY/20,0,180);//teeth U
  arc(200,260,30,30,180,0);//teeth L
  ellipse(205,210,3,3);
   ellipse(173,159,3,3);//eye ref L 
  ellipse(173,159,mouseX/40);//eye ref L animation
  ellipse(223,159,3,3);//eye ref R
  ellipse(223,159,mouseX/40);//eye ref R animation 

  
  
  noFill();
  stroke(41, 41, 41);
  strokeWeight(3);
  arc(195,85,60,80,140,220)

}