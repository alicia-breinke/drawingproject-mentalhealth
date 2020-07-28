let img;
var increase = 5;
var r = 244;
var g = 64;
var b = 0;
var d = rgb(255, 255, 0);
let c;
function preload() {
img = loadImage('assets/drawing-background.jpg');
}
function setup(){
  c = createCanvas(975, 506);
  background(100, 100, 100);
  image(img, 50, 50);
  stroke('rgb(255, 255, 0)');
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
    r = 244;
    g = 64;
    b = 75;
    print(r);
  }
  if (key === 'g') {
    r = 0;
    g = 114;
    b = 0;
  }
  if (key === 'b') {
    r = 0;
    g = 0;
    b = 244;
  }
  if (key === 'd'){
    r = 255;
    g = 255;
    b = 0;
  }
  if (key === 'i'){
  increase += 5;
  }
  if (key === 'c'){
    saveCanvas(c, 'myCanvas', 'jpg');
  }
}
