 var hr,min,sec
 var hrAngle,minAngle,secAngle;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);
  //Calculating the time using pre-defined functions
  hr=hour();
  min=minute();
  sec=second();
  //to create the iterative rotation
secAngle=map(sec,0,60,0,360);
minAngle=map(min,0,60,0,360);
hrAngle=map (hr,0,60,0,360);

arc(0,0,300,300,0,secAngle);

arc(0,0,280,280,0,minAngle);
stroke(255,0,0)
arc(0,0,260,260,0,hrAngle);
//drawing second,minute and hour hands
push();
rotate(secAngle);
stroke("red");
strokeWeight(4);
line(0,0,100,0);
pop();
//making the hour hand
push(); 
rotate(hrAngle);
stroke("yellow");
strokeWeight(4);
line(0,0,50,0);
pop();
//making the minute hand
push(); 
rotate(minAngle);
stroke("purple");
strokeWeight(4);
line(0,0,60,0);
pop();

//drawing arcs


}