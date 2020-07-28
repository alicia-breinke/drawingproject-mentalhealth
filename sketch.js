let img;
var r = 244;
var g = 64;
var b = 0;
let d;
let a;
let s;
let c;
var increase = 5;
var decrease = 5;
function preload() {
img = loadImage('assets/drawing-background.jpg');
}
function setup(){
  c = createCanvas(975, 506);
  background(100, 100, 100);
  image(img, 50, 50);
  stroke ('rgb(255, 255, 0)');
}

function draw () {
    strokeWeight(increase);
   if (mouseIsPressed) {
  line(mouseX, mouseY, pmouseX, pmouseY);
  stroke(r, g, b, 50);
   }
}

function keyPressed() {
  if (key === 'r') {
    r = 244;
    g = 0;
    b = 0;
    print(r);
  }
  if (key === 'g') {
    r = 0;
    g = 64;
    b = 0;
  }
  if (key === 'b') {
    r = 0;
    g = 0;
    b = 0;
  }
  if (key === 'd'){
    r = 255;
    g = 255;
    b = 0;
  }
  if (key === 'a'){
  increase += 5;
  }
  if (key === 's'){
    decrease += 5;
  }
  if (key === 'c'){
    saveCanvas(c, 'myCanvas', 'jpg');
  }
}
