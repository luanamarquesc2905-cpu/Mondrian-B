function setup() {
  createCanvas(800, 784);
  background(240,240,240);
}

function draw() {
  frameRate(10);
strokeWeight(0);
fill(random(50,255) ,random(0,50),random(0,25));
rect(0,0, 360,315);
strokeWeight(0);
fill(240,240,240);
rect(360,0,440,315);
strokeWeight(0);
fill(240,240,240);
rect(0,315,800, 200);
strokeWeight(0);
fill(random(100,240) ,random(80,200),random(4,10));
rect(0,515,80, 269);
strokeWeight(0);
fill(240,240,240);
rect(80,515,280, 269);
strokeWeight(0);
fill(random(0,50) ,random(10,30),random(110,255));
rect(360,515,240, 240);


stroke (0,0,0);
strokeWeight(10);
line(360,0,360,784);
line(80,515,80,784);
line(600,515,600,784);
line(360,755,600,755);
stroke(0,0,0);
strokeWeight(15);
line(0,315,800,315);
line(0,515,800,515);

 

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
