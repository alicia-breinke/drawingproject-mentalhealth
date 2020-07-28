let img;
let r;
let g;
let b;
let y;
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
  if (key === 'y'){
    stroke(255, 255, 0);
  }
  if (key === 'i'){
  increase += 5;
  }
  if (key === 'd'){
    decrease += 5;
  }
  if (key === 'c'){
    saveCanvas(c, 'myCanvas', 'jpg');
  }
}
