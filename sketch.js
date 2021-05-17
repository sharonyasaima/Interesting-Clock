
var hr,sec,min;
var scAngle,hrAngle,minAngle;

function setup() {
  createCanvas(800,400);

  

  angleMode(DEGREES);
}

function draw() {
  background(0);  

  translate(200,200);
  rotate(-90);
  hr = hour();
  sec = second();
  min = minute();

  scAngle = map(sec,0,60,0,360);
  minAngle= map(min,0,60,0,360);
  hrAngle= map(hr%12,0,12,0,360);
//second
push()
 rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()
//minutes
push()
rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop()
//hour
push()
rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  stroke(255,0,0);
  strokeWeight(10);
  noFill();
 arc(0,0,300,300,0,scAngle);

 stroke(0,255,0);
 strokeWeight(10);
 noFill();
arc(0,0,280,280,0,minAngle);

stroke(0,0,255);
  strokeWeight(10);
  noFill();
 arc(0,0,250,250,0,hrAngle);

  

  drawSprites();
}


