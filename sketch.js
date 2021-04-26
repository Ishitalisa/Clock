var hr;
var min;
var sec;
function setup() {
  createCanvas(800,400);
  
  
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  drawSprites();
  translate(200,200);
  rotate(-90);
  hr= hour();
  min= minute();
  sec= second();
  secAngle= map(sec,0,60,0,360);
  minAngle= map(min,0,60,0,360);
  hrAngle= map(hr%12,0,12,0,360)
  push();
  rotate(secAngle);
  stroke(255,0,0)
strokeWeight(7)

  line(0,0,100,0)
pop();
push();
  rotate(minAngle);
  stroke(0,0,255)
strokeWeight(7)

  line(0,0,75,0)
pop();
push();
  rotate(hrAngle);
  stroke(0,255,0)
strokeWeight(7)

  line(0,0,50,0)
pop();

}