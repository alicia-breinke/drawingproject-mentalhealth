let img;
var increase = 5;
var r = 255;
var g = 64;
var b = 0;
let d;
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
    stroke(255, 0 , 0);
    }
  if (key === 'g') {
    stroke(0, 64, 0);
  }
  if (key === 'b') {
    stroke(0, 180, 255);
  }
  if (key === 'd'){
    stroke(255, 255, 0);
  }
  if (key === 'i'){
  increase += 5;
  }
  if (key === 'c'){
    saveCanvas(c, 'myCanvas', 'jpg');
  }
}
