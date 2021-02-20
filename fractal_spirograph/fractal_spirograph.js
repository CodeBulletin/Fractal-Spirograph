var points;
var r;
var colit;
var sun;

var n = 4;
var k = 5;
var decV = 1/2;
var type = -1;
var quality = 200;
var speed = 1000;
var colorM = true;

var jim = false; 

let slider1, slider2, slider3, sider4, slider5, slider6;
let radio1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  if(jim){
    creatui();
    jim = false;
  }
  //n = n1;
  //k = k;
  //decV = decV1;
  //type = type1;
  //quality = quality1;
  //speed = speed1;
  //colorM = colorM1;
  if (type == -1) {
    r = height/2 - height/3*decV;
  } else {
    r = height/4  - height/6*decV;
  }
  colorMode(HSB, 360, 100, 100);
  sun = new orbit(height/2, height/2, r, 0, 10);
  let next = sun;
  for (var i = 0; i < n-1; i++) {
    next = next.addChild();
  }
  colit = false;
  points = [];
  loop();
}

function draw() {
  background(0);
  for (var i = 0; i<speed; i++) {
    if (abs(sun.child.angle) >= TWO_PI - PI/2) {
      noLoop();
      colit = true;
    }
    sun.child.update();
  }
  if(!colit){
    sun.display();
  }
  noFill();
  if (colit && colorM) {
    for (var k = 0; k < points.length-1; k++) {
      col = map(k, 0, points.length, 0, 360);
      stroke(col, 100, 100);
      line(points[k].x, points[k].y, points[k+1].x, points[k+1].y);
    }
  } else {
    beginShape();
    for (var j = 0; j < points.length-1; j++) {
      vertex(points[j].x, points[j].y);
    }
    endShape();
  }
}
function keyPressed(){
  if(key == 'r'){
    points = [];
    loop();
    setup();
  }
}
function creatui(){
  slider1 = createSlider();
}
