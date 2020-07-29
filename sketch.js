let img;
var increase = 5;
var r = 100;
var g = 100;
var b = 0;
let i;
let c;
function preload() {
img = loadImage('assets/drawing-background.jpg');
}
function setup(){
  c = createCanvas(975, 506);
  background(100, 100, 100);
  image(img, 50, 50);
  stroke('rgb(100, 100, 0)');
}
function draw () {
  strokeWeight(increase);
    if (mouseIsPressed) {
  line(mouseX, mouseY, pmouseX, pmouseY);
  stroke(r, g, b, 100);
  }
}

function keyPressed() {
  if (key === 'r') {
    r = 100;
    g = 0;
    b = 0;
  }
  if (key === 'g') {
    r = 0;
    g = 100;
    b = 0;
  }
  if (key === 'b') {
    r = 0;
    g = 0;
    b = 0;
  }
  if (key === 'i') {
    increase += 5;
  }
  if (key === 'c'){
    saveCanvas(c, 'myCanvas', 'jpg');
  }
}
